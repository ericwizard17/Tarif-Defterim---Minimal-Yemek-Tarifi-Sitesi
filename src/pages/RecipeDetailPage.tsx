import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Recipe } from '../types/recipe';
import { getRecipeById } from '../utils/localStorage';

export default function RecipeDetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        if (id) {
            const foundRecipe = getRecipeById(id);
            if (foundRecipe) {
                setRecipe(foundRecipe);
            } else {
                navigate('/');
            }
        }
    }, [id, navigate]);

    if (!recipe) {
        return (
            <div className="max-w-3xl mx-auto px-4 py-16 text-center">
                <p className="text-gray-600">Yükleniyor...</p>
            </div>
        );
    }

    return (
        <>
            <SEO
                title={recipe.title}
                description={recipe.description.substring(0, 160)}
                keywords={`${recipe.title}, ${recipe.ingredients.slice(0, 3).join(', ')}, yemek tarifi`}
                type="article"
                image={recipe.imageUrl}
            />

            <div className="max-w-3xl mx-auto px-4 py-8">
                <button
                    onClick={() => navigate('/')}
                    className="text-sm text-gray-600 hover:text-gray-900 mb-6"
                >
                    ← Geri
                </button>

                <article className="bg-white border border-gray-300 rounded overflow-hidden">
                    {/* Image */}
                    {recipe.imageUrl && (
                        <img
                            src={recipe.imageUrl}
                            alt={recipe.title}
                            className="w-full h-64 md:h-96 object-cover"
                        />
                    )}

                    {/* Video */}
                    {recipe.videoUrl && (
                        <div className="w-full bg-black">
                            <video
                                src={recipe.videoUrl}
                                controls
                                className="w-full max-h-96"
                                poster={recipe.imageUrl}
                            >
                                Tarayıcınız video oynatmayı desteklemiyor.
                            </video>
                        </div>
                    )}

                    <div className="p-6">
                        <header className="mb-6 pb-6 border-b border-gray-200">
                            <h1 className="text-2xl font-semibold text-gray-900 mb-2">{recipe.title}</h1>
                            <p className="text-sm text-gray-600">Tarif: {recipe.userName}</p>
                        </header>

                        <section className="mb-6">
                            <h2 className="text-sm font-medium text-gray-700 mb-2">Açıklama</h2>
                            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">{recipe.description}</p>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-sm font-medium text-gray-700 mb-3">Malzemeler</h2>
                            <ul className="space-y-2">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index} className="text-sm text-gray-700 flex items-start">
                                        <span className="mr-2">•</span>
                                        <span>{ingredient}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="mb-6">
                            <h2 className="text-sm font-medium text-gray-700 mb-3">Hazırlanışı</h2>
                            <ol className="space-y-3">
                                {recipe.steps.map((step, index) => (
                                    <li key={index} className="text-sm text-gray-700 flex gap-3">
                                        <span className="font-medium">{index + 1}.</span>
                                        <span>{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </section>

                        <footer className="pt-4 border-t border-gray-200">
                            <time className="text-xs text-gray-500" dateTime={recipe.createdAt}>
                                {new Date(recipe.createdAt).toLocaleDateString('tr-TR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </time>
                        </footer>
                    </div>
                </article>
            </div>
        </>
    );
}
