import { useState } from 'react';
import { Recipe, RecipeFormData, RECIPE_CATEGORIES } from '../types/recipe';
import MediaUpload from './MediaUpload';

interface RecipeFormProps {
    onSubmit: (recipe: Recipe) => void;
    initialData?: Recipe;
    isEdit?: boolean;
}

export default function RecipeForm({ onSubmit, initialData, isEdit = false }: RecipeFormProps) {
    const [formData, setFormData] = useState<RecipeFormData>({
        title: initialData?.title || '',
        description: initialData?.description || '',
        ingredients: initialData?.ingredients.join(', ') || '',
        steps: initialData?.steps.join('\n') || '',
        userName: initialData?.userName || ''
    });

    const [comment, setComment] = useState('');
    const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || '');
    const [videoUrl, setVideoUrl] = useState(initialData?.videoUrl || '');
    const [category, setCategory] = useState(initialData?.category || 'Ana Yemek');
    const [errors, setErrors] = useState<Partial<RecipeFormData>>({});

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof RecipeFormData]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validate = (): boolean => {
        const newErrors: Partial<RecipeFormData> = {};

        if (!formData.title.trim()) newErrors.title = 'Gerekli';
        if (!formData.description.trim()) newErrors.description = 'Gerekli';
        if (!formData.ingredients.trim()) newErrors.ingredients = 'Gerekli';
        if (!formData.steps.trim()) newErrors.steps = 'Gerekli';
        if (!formData.userName.trim()) newErrors.userName = 'Gerekli';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        // Açıklama + Kullanıcı yorumu birleştirme
        const combinedDescription = comment.trim()
            ? `${formData.description.trim()}\n\n${formData.userName.trim()} diyor ki: "${comment.trim()}"`
            : formData.description.trim();

        const recipe: Recipe = {
            id: initialData?.id || Date.now().toString(),
            title: formData.title.trim(),
            description: combinedDescription,
            ingredients: formData.ingredients
                .split(',')
                .map(i => i.trim())
                .filter(i => i.length > 0),
            steps: formData.steps
                .split('\n')
                .map(s => s.trim())
                .filter(s => s.length > 0),
            userName: formData.userName.trim(),
            createdAt: initialData?.createdAt || new Date().toISOString(),
            imageUrl: imageUrl || undefined,
            videoUrl: videoUrl || undefined,
            category: category,
            likes: initialData?.likes || 0,
            views: initialData?.views || 0
        };

        onSubmit(recipe);

        if (!isEdit) {
            // Reset form only for new recipes
            setFormData({ title: '', description: '', ingredients: '', steps: '', userName: '' });
            setComment('');
            setImageUrl('');
            setVideoUrl('');
            setCategory('Ana Yemek');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="userName" className="block text-sm font-medium text-gray-700 mb-1">
                    Adınız
                </label>
                <input
                    type="text"
                    id="userName"
                    name="userName"
                    value={formData.userName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500"
                    placeholder="Adınız"
                />
                {errors.userName && <p className="mt-1 text-xs text-red-600">{errors.userName}</p>}
            </div>

            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                    Tarif Başlığı
                </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500"
                    placeholder="Örn: Çikolatalı Kek"
                />
                {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title}</p>}
            </div>

            <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                    Kategori
                </label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500"
                >
                    {RECIPE_CATEGORIES.filter(cat => cat !== 'Tümü').map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                    Açıklama
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500 resize-none"
                    placeholder="Kısa açıklama"
                    rows={3}
                />
                {errors.description && <p className="mt-1 text-xs text-red-600">{errors.description}</p>}
            </div>

            {!isEdit && (
                <div>
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                        Kendi Yorumum <span className="text-gray-500 font-normal">(opsiyonel)</span>
                    </label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500 resize-none"
                        placeholder="Bu tarif hakkındaki kişisel yorumunuz..."
                        rows={2}
                    />
                    <p className="mt-1 text-xs text-gray-500">Yorumunuz adınızla birlikte açıklamaya eklenecek</p>
                </div>
            )}

            {/* Media Upload Component */}
            <MediaUpload
                onImageUpload={setImageUrl}
                onVideoUpload={setVideoUrl}
                currentImageUrl={imageUrl}
                currentVideoUrl={videoUrl}
            />

            <div>
                <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700 mb-1">
                    Malzemeler <span className="text-gray-500 font-normal">(virgülle ayırın)</span>
                </label>
                <textarea
                    id="ingredients"
                    name="ingredients"
                    value={formData.ingredients}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500 resize-none"
                    placeholder="2 su bardağı un, 1 su bardağı şeker, ..."
                    rows={4}
                />
                {errors.ingredients && <p className="mt-1 text-xs text-red-600">{errors.ingredients}</p>}
            </div>

            <div>
                <label htmlFor="steps" className="block text-sm font-medium text-gray-700 mb-1">
                    Hazırlanışı <span className="text-gray-500 font-normal">(her satıra bir adım)</span>
                </label>
                <textarea
                    id="steps"
                    name="steps"
                    value={formData.steps}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500 resize-none"
                    placeholder="Fırını ısıtın&#10;Malzemeleri karıştırın&#10;..."
                    rows={6}
                />
                {errors.steps && <p className="mt-1 text-xs text-red-600">{errors.steps}</p>}
            </div>

            <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 rounded text-sm hover:bg-gray-700"
            >
                {isEdit ? 'Tarifi Güncelle' : 'Tarif Ekle'}
            </button>
        </form>
    );
}
