import { useNavigate } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';
import SEO from '../components/SEO';
import { Recipe } from '../types/recipe';
import { saveRecipe } from '../utils/localStorage';

export default function AddRecipePage() {
    const navigate = useNavigate();

    const handleAddRecipe = (recipe: Recipe) => {
        try {
            saveRecipe(recipe);
            navigate('/');
        } catch (error) {
            alert('Tarif eklenemedi.');
            console.error(error);
        }
    };

    return (
        <>
            <SEO
                title="Yeni Tarif Ekle"
                description="Kendi yemek tariflerinizi ekleyin ve paylaşın. Kolay tarif ekleme formu ile hemen başlayın."
                keywords="tarif ekle, yemek tarifi paylaş, kendi tarifim"
            />

            <div className="max-w-2xl mx-auto px-4 py-8">
                <div className="mb-6">
                    <button
                        onClick={() => navigate('/')}
                        className="text-sm text-gray-600 hover:text-gray-900 mb-4"
                    >
                        ← Geri
                    </button>
                    <h1 className="text-2xl font-semibold text-gray-900">Yeni Tarif Ekle</h1>
                </div>
                <div className="bg-white border border-gray-300 rounded p-6">
                    <RecipeForm onSubmit={handleAddRecipe} />
                </div>
            </div>
        </>
    );
}
