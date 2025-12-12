import { Link } from 'react-router-dom';
import { Recipe } from '../types/recipe';
import { toggleFavorite, isFavorite } from '../utils/localStorage';
import { useState, useEffect } from 'react';

interface RecipeCardProps {
    recipe: Recipe;
    onDelete?: (id: string) => void;
    onUpdate?: () => void;
}

export default function RecipeCard({ recipe, onDelete, onUpdate }: RecipeCardProps) {
    const [favorite, setFavorite] = useState(false);

    useEffect(() => {
        setFavorite(isFavorite(recipe.id));
    }, [recipe.id]);

    const handleFavoriteToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        const newFavoriteStatus = toggleFavorite(recipe.id);
        setFavorite(newFavoriteStatus);
        if (onUpdate) onUpdate();
    };

    return (
        <div className="bg-white border border-gray-300 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            {/* Image or Video Thumbnail */}
            {recipe.imageUrl && (
                <div className="relative h-56 overflow-hidden">
                    <img
                        src={recipe.imageUrl}
                        alt={recipe.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                        <button
                            onClick={handleFavoriteToggle}
                            className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg transition-all hover:scale-110"
                            aria-label={favorite ? "Favorilerden çıkar" : "Favorilere ekle"}
                        >
                            <svg className={`w-5 h-5 ${favorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} fill={favorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                        {onDelete && (
                            <button
                                onClick={() => onDelete(recipe.id)}
                                className="bg-white/90 backdrop-blur-sm text-red-500 hover:bg-red-500 hover:text-white p-2 rounded-full shadow-lg transition-all"
                                aria-label="Sil"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        )}
                    </div>
                    {recipe.category && (
                        <div className="absolute top-3 left-3">
                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                {recipe.category}
                            </span>
                        </div>
                    )}
                </div>
            )}

            {!recipe.imageUrl && recipe.videoUrl && (
                <div className="relative h-56 bg-gradient-to-br from-orange-100 to-red-100">
                    <video
                        src={recipe.videoUrl}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <div className="bg-white/90 backdrop-blur-sm p-4 rounded-full shadow-xl">
                            <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                        </div>
                    </div>
                    <div className="absolute top-3 right-3 flex gap-2">
                        <button
                            onClick={handleFavoriteToggle}
                            className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg transition-all hover:scale-110"
                        >
                            <svg className={`w-5 h-5 ${favorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} fill={favorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                    {recipe.category && (
                        <div className="absolute top-3 left-3">
                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                {recipe.category}
                            </span>
                        </div>
                    )}
                </div>
            )}

            {!recipe.imageUrl && !recipe.videoUrl && (
                <div className="h-56 bg-gradient-to-br from-orange-200 via-red-200 to-pink-200 flex items-center justify-center relative">
                    <svg className="w-20 h-20 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <div className="absolute top-3 right-3">
                        <button
                            onClick={handleFavoriteToggle}
                            className="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg transition-all hover:scale-110"
                        >
                            <svg className={`w-5 h-5 ${favorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} fill={favorite ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </button>
                    </div>
                    {recipe.category && (
                        <div className="absolute top-3 left-3">
                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                                {recipe.category}
                            </span>
                        </div>
                    )}
                </div>
            )}

            <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1">{recipe.title}</h3>
                        <p className="text-sm text-orange-600 font-medium flex items-center gap-1">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                            </svg>
                            {recipe.userName}
                        </p>
                    </div>
                </div>

                <p className="text-gray-600 mb-4 line-clamp-2 text-sm leading-relaxed">{recipe.description}</p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(recipe.createdAt).toLocaleDateString('tr-TR')}
                    </span>
                    <div className="flex gap-2">
                        <Link
                            to={`/duzenle/${recipe.id}`}
                            className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-semibold hover:bg-gray-200 transition-all flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                            Düzenle
                        </Link>
                        <Link
                            to={`/tarif/${recipe.id}`}
                            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:shadow-lg transition-all hover:scale-105 flex items-center gap-1"
                        >
                            Detay
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
