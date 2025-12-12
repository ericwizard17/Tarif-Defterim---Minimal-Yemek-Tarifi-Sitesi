import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecipeForm from '../components/RecipeForm';
import SEO from '../components/SEO';
import { Recipe } from '../types/recipe';
import { getRecipeById, updateRecipe } from '../utils/localStorage';

export default function EditRecipePage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        if (id) {
            const foundRecipe = getRecipeById(id);
            if (foundRecipe) {
                setRecipe(foundRecipe);
            } else {
                alert('❌ Tarif bulunamadı!');
                navigate('/');
            }
        }
    }, [id, navigate]);

    const handleUpdateRecipe = (updatedRecipe: Recipe) => {
        if (!id) return;

        try {
            updateRecipe(id, updatedRecipe);
            alert('✅ Tarif başarıyla güncellendi!');
            navigate('/');
        } catch (error) {
            alert('❌ Tarif güncellenirken bir hata oluştu.');
            console.error(error);
        }
    };

    if (!recipe) {
        return (
            <div className="max-w-2xl mx-auto px-4 py-16 text-center">
                <p className="text-gray-600">Yükleniyor...</p>
            </div>
        );
    }

    return (
        <>
            <SEO
                title={`${recipe.title} - Düzenle`}
                description="Tarif düzenleme sayfası"
            />

            <div className="max-w-2xl mx-auto px-4 py-8">
                <div className="mb-6">
                    <button
                        onClick={() => navigate('/')}
                        className="text-sm text-gray-600 hover:text-gray-900 mb-4"
                    >
                        ← Geri
                    </button>
                    <h1 className="text-2xl font-semibold text-gray-900">Tarif Düzenle</h1>
                    <p className="text-gray-600 mt-1">"{recipe.title}" tarifini düzenliyorsunuz</p>
                </div>
                <div className="bg-white border border-gray-300 rounded p-6">
                    <RecipeForm
                        onSubmit={handleUpdateRecipe}
                        initialData={recipe}
                        isEdit={true}
                    />
                </div>
            </div>
        </>
    );
}
