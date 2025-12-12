import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import SEO from '../components/SEO';
import { Recipe, RECIPE_CATEGORIES } from '../types/recipe';
import {
    getRecipes,
    deleteRecipe,
    importRecipes,
    downloadRecipesAsFile,
    searchRecipes,
    filterByCategory
} from '../utils/localStorage';

export default function HomePage() {
    const [allRecipes, setAllRecipes] = useState<Recipe[]>([]);
    const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>([]);
    const [showImport, setShowImport] = useState(false);
    const [importData, setImportData] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tümü');

    useEffect(() => {
        loadRecipes();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [searchQuery, selectedCategory, allRecipes]);

    const loadRecipes = () => {
        const loadedRecipes = getRecipes();
        setAllRecipes(loadedRecipes);
    };

    const applyFilters = () => {
        let recipes = allRecipes;

        // Category filter
        if (selectedCategory !== 'Tümü') {
            recipes = filterByCategory(selectedCategory);
        }

        // Search filter
        if (searchQuery.trim()) {
            recipes = searchRecipes(searchQuery);
        }

        setFilteredRecipes(recipes);
    };

    const handleDeleteRecipe = (id: string) => {
        if (confirm('Bu tarifi silmek istediğinizden emin misiniz?')) {
            try {
                deleteRecipe(id);
                loadRecipes();
            } catch (error) {
                alert('Tarif silinemedi.');
                console.error(error);
            }
        }
    };

    const handleImport = () => {
        try {
            importRecipes(importData, 'merge');
            loadRecipes();
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
                title="Lezzet Dünyası - Ev Yapımı Tarifler"
                description={`${allRecipes.length}+ lezzetli ev yapımı tarif. Kolay ve pratik tarifler, tatlı tarifleri ve daha fazlası.`}
                keywords="yemek tarifleri, kolay tarifler, pratik yemekler, tatlı tarifleri, ana yemek, ev yapımı"
            />

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-4">🍳 Lezzet Dünyası'na Hoş Geldiniz!</h1>
                    <p className="text-xl opacity-90 mb-8">Ev yapımı tariflerle mutfağınızda lezzet şöleni yaşayın</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link to="/ekle" className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                            ➕ Tarif Ekle
                        </Link>
                        <button
                            onClick={() => setShowImport(!showImport)}
                            className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-all"
                        >
                            📥 İçe Aktar
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Search and Filter */}
                <div className="mb-8 space-y-4">
                    {/* Search Bar */}
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Tarif ara... (başlık, malzeme, kullanıcı)"
                            className="w-full px-6 py-4 pl-14 border-2 border-gray-200 rounded-full focus:outline-none focus:border-orange-400 text-lg"
                        />
                        <svg className="w-6 h-6 text-gray-400 absolute left-5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery('')}
                                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        )}
                    </div>

                    {/* Category Filter */}
                    <div className="flex gap-2 overflow-x-auto pb-2">
                        {RECIPE_CATEGORIES.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${selectedCategory === category
                                        ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg'
                                        : 'bg-white border-2 border-gray-200 text-gray-700 hover:border-orange-300'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Import Section */}
                {showImport && (
                    <div className="mb-8 bg-white rounded-2xl shadow-xl p-6 border-2 border-orange-200">
                        <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                            <span className="text-2xl">📥</span> Tarifler İçe Aktar
                        </h2>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    JSON Dosyası Yükle:
                                </label>
                                <input
                                    type="file"
                                    accept=".json"
                                    onChange={handleFileImport}
                                    className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    veya JSON Verisi Yapıştır:
                                </label>
                                <textarea
                                    value={importData}
                                    onChange={(e) => setImportData(e.target.value)}
                                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-400 resize-none font-mono text-sm"
                                    rows={6}
                                    placeholder='[{"id":"...","title":"...","description":"..."}]'
                                />
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={handleImport}
                                    disabled={!importData.trim()}
                                    className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    İçe Aktar
                                </button>
                                <button
                                    onClick={() => {
                                        setShowImport(false);
                                        setImportData('');
                                    }}
                                    className="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-gray-300"
                                >
                                    İptal
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Stats and Export */}
                {allRecipes.length > 0 && (
                    <div className="flex justify-between items-center mb-8">
                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full shadow-lg">
                            <span className="font-bold text-lg">
                                📚 {filteredRecipes.length} / {allRecipes.length} Tarif
                            </span>
                        </div>
                        <button
                            onClick={downloadRecipesAsFile}
                            className="bg-white border-2 border-orange-200 text-orange-600 px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Dışa Aktar
                        </button>
                    </div>
                )}

                {/* Empty State */}
                {filteredRecipes.length === 0 && allRecipes.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-xl border-2 border-dashed border-orange-200">
                        <div className="text-6xl mb-4">🍽️</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Henüz tarif eklenmemiş</h3>
                        <p className="text-gray-600 mb-6">İlk lezzetli tarifinizi ekleyerek başlayın!</p>
                        <Link
                            to="/ekle"
                            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition-all"
                        >
                            ➕ İlk Tarifi Ekle
                        </Link>
                    </div>
                ) : filteredRecipes.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-2xl shadow-xl border-2 border-dashed border-orange-200">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Sonuç bulunamadı</h3>
                        <p className="text-gray-600 mb-6">Arama kriterlerinizi değiştirip tekrar deneyin</p>
                        <button
                            onClick={() => {
                                setSearchQuery('');
                                setSelectedCategory('Tümü');
                            }}
                            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                            Filtreleri Temizle
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredRecipes.map(recipe => (
                            <RecipeCard
                                key={recipe.id}
                                recipe={recipe}
                                onDelete={handleDeleteRecipe}
                                onUpdate={loadRecipes}
                            />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
