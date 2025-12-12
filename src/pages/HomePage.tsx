import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import SEO from '../components/SEO';
import { Recipe } from '../types/recipe';
import { getRecipes, deleteRecipe, importRecipes, downloadRecipesAsFile } from '../utils/localStorage';

export default function HomePage() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [showImport, setShowImport] = useState(false);
    const [importData, setImportData] = useState('');

    useEffect(() => {
        const loadedRecipes = getRecipes();
        setRecipes(loadedRecipes);
    }, []);

    const handleDeleteRecipe = (id: string) => {
        if (confirm('Bu tarifi silmek istediğinizden emin misiniz?')) {
            try {
                deleteRecipe(id);
                setRecipes(prev => prev.filter(recipe => recipe.id !== id));
            } catch (error) {
                alert('Tarif silinemedi.');
                console.error(error);
            }
        }
    };

    const handleImport = () => {
        try {
            importRecipes(importData, 'merge');
            const updatedRecipes = getRecipes();
            setRecipes(updatedRecipes);
            setImportData('');
            setShowImport(false);
            alert('Tarifler başarıyla içe aktarıldı!');
        } catch (error) {
            alert('Hata: Geçersiz JSON formatı');
        }
    };

    const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target?.result as string;
                setImportData(content);
            };
            reader.readAsText(file);
        }
    };

    return (
        <>
            <SEO
                title="Yemek Tarifleri - Ana Sayfa"
                description={`${recipes.length} adet lezzetli yemek tarifi. Kolay ve pratik tarifler, tatlı tarifleri ve daha fazlası.`}
                keywords="yemek tarifleri, kolay tarifler, pratik yemekler, tatlı tarifleri, ana yemek"
            />

            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-semibold text-gray-900">Tarifler</h1>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setShowImport(!showImport)}
                            className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50"
                        >
                            İçe Aktar
                        </button>
                        {recipes.length > 0 && (
                            <button
                                onClick={downloadRecipesAsFile}
                                className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50"
                            >
                                Dışa Aktar
                            </button>
                        )}
                        <Link
                            to="/ekle"
                            className="bg-gray-900 text-white px-4 py-2 rounded text-sm hover:bg-gray-700"
                        >
                            Yeni Tarif
                        </Link>
                    </div>
                </div>

                {showImport && (
                    <div className="mb-6 bg-white border border-gray-300 rounded p-4">
                        <h2 className="text-sm font-medium text-gray-900 mb-3">Tarifler İçe Aktar</h2>
                        <div className="space-y-3">
                            <div>
                                <label className="block text-sm text-gray-700 mb-2">
                                    JSON Dosyası Yükle:
                                </label>
                                <input
                                    type="file"
                                    accept=".json"
                                    onChange={handleFileImport}
                                    className="text-sm text-gray-600"
                                />
                            </div>
                            <div>
                                <label className="block text-sm text-gray-700 mb-2">
                                    veya JSON Verisi Yapıştır:
                                </label>
                                <textarea
                                    value={importData}
                                    onChange={(e) => setImportData(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-gray-500 resize-none font-mono"
                                    rows={6}
                                    placeholder='[{"id":"...","title":"...","description":"..."}]'
                                />
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={handleImport}
                                    disabled={!importData.trim()}
                                    className="bg-gray-900 text-white px-4 py-2 rounded text-sm hover:bg-gray-700 disabled:bg-gray-300"
                                >
                                    İçe Aktar
                                </button>
                                <button
                                    onClick={() => {
                                        setShowImport(false);
                                        setImportData('');
                                    }}
                                    className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50"
                                >
                                    İptal
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {recipes.length === 0 ? (
                    <div className="text-center py-16 border border-gray-300 rounded">
                        <p className="text-gray-600 mb-4">Henüz tarif eklenmemiş</p>
                        <Link
                            to="/ekle"
                            className="inline-block bg-gray-900 text-white px-4 py-2 rounded text-sm hover:bg-gray-700"
                        >
                            İlk Tarifi Ekle
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {recipes.map(recipe => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                                onDelete={handleDeleteRecipe}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
