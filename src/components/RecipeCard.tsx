import { Link } from 'react-router-dom';
import { Recipe } from '../types/recipe';

interface RecipeCardProps {
    recipe: Recipe;
    onDelete?: (id: string) => void;
}

export default function RecipeCard({ recipe, onDelete }: RecipeCardProps) {
    return (
        <div className="bg-white border border-gray-300 rounded overflow-hidden hover:shadow-sm transition-shadow">
            {/* Image or Video Thumbnail */}
            {recipe.imageUrl && (
                <img
                    src={recipe.imageUrl}
                    alt={recipe.title}
                    className="w-full h-48 object-cover"
                />
            )}

            {!recipe.imageUrl && recipe.videoUrl && (
                <div className="relative w-full h-48 bg-gray-100">
                    <video
                        src={recipe.videoUrl}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                    </div>
                </div>
            )}

            <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                        <h3 className="text-lg font-medium text-gray-900 mb-1">{recipe.title}</h3>
                        <p className="text-sm text-gray-600">{recipe.userName}</p>
                    </div>
                    {onDelete && (
                        <button
                            onClick={() => onDelete(recipe.id)}
                            className="text-gray-400 hover:text-red-600 text-sm"
                            aria-label="Sil"
                        >
                            Sil
                        </button>
                    )}
                </div>

                <p className="text-sm text-gray-700 mb-3 line-clamp-2">{recipe.description}</p>

                <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                    <span className="text-xs text-gray-500">
                        {new Date(recipe.createdAt).toLocaleDateString('tr-TR')}
                    </span>
                    <Link
                        to={`/tarif/${recipe.id}`}
                        className="text-sm text-gray-900 hover:underline"
                    >
                        Detay →
                    </Link>
                </div>
            </div>
        </div>
    );
}
