import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { Recipe } from '../types/recipe';
import { getRecipes } from '../utils/localStorage';

export default function VideosPage() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const loadedRecipes = getRecipes();
        // Sadece video içeren tarifleri filtrele
        const videosOnly = loadedRecipes.filter(recipe => recipe.videoUrl);
        setRecipes(videosOnly);
    }, []);

    const handleNext = () => {
        if (currentIndex < recipes.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
        if (e.key === 'ArrowUp') handlePrevious();
        if (e.key === 'ArrowDown') handleNext();
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [currentIndex, recipes.length]);

    if (recipes.length === 0) {
        return (
            <>
                <SEO
                    title="Video Tarifler - Lezzet Dünyası"
                    description="Video ile anlatılan yemek tarifleri"
                />
                <div className="min-h-screen bg-black flex items-center justify-center">
                    <div className="text-center text-white">
                        <div className="text-6xl mb-4">🎥</div>
                        <h2 className="text-2xl font-bold mb-4">Henüz video tarif yok</h2>
                        <p className="text-gray-400 mb-6">İlk video tarifini ekleyerek başla!</p>
                        <button
                            onClick={() => navigate('/ekle')}
                            className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all"
                        >
                            ➕ Video Tarif Ekle
                        </button>
                    </div>
                </div>
            </>
        );
    }

    const currentRecipe = recipes[currentIndex];

    return (
        <>
            <SEO
                title={`${currentRecipe.title} - Video Tarifler`}
                description={currentRecipe.description.substring(0, 160)}
                image={currentRecipe.imageUrl}
            />

            <div className="fixed inset-0 bg-black">
                {/* Reels-style Video Container */}
                <div className="h-screen w-full max-w-md mx-auto relative">
                    {/* Video */}
                    <video
                        key={currentRecipe.id}
                        src={currentRecipe.videoUrl}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        playsInline
                        controls
                    />

                    {/* Overlay Content */}
                    <div className="absolute inset-0 pointer-events-none">
                        {/* Top Bar */}
                        <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/60 to-transparent pointer-events-auto">
                            <div className="flex items-center justify-between">
                                <button
                                    onClick={() => navigate('/')}
                                    className="text-white p-2 hover:bg-white/20 rounded-full transition-all"
                                >
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                                <div className="text-white text-sm">
                                    {currentIndex + 1} / {recipes.length}
                                </div>
                            </div>
                        </div>

                        {/* Bottom Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="flex items-end gap-4">
                                {/* Recipe Info */}
                                <div className="flex-1 text-white">
                                    <div className="flex items-center gap-2 mb-2">
                                        <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-sm font-bold">
                                            {currentRecipe.userName.charAt(0).toUpperCase()}
                                        </div>
                                        <span className="font-semibold">{currentRecipe.userName}</span>
                                    </div>
                                    <h2 className="text-xl font-bold mb-2">{currentRecipe.title}</h2>
                                    <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                                        {currentRecipe.description}
                                    </p>
                                    <button
                                        onClick={() => navigate(`/tarif/${currentRecipe.id}`)}
                                        className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-white/30 transition-all pointer-events-auto"
                                    >
                                        Tarifi Gör →
                                    </button>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col gap-4 pointer-events-auto">
                                    <button className="flex flex-col items-center text-white">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <span className="text-xs mt-1">{currentRecipe.likes || 0}</span>
                                    </button>

                                    <button className="flex flex-col items-center text-white">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs mt-1">Yorum</span>
                                    </button>

                                    <button className="flex flex-col items-center text-white">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all">
                                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                            </svg>
                                        </div>
                                        <span className="text-xs mt-1">Paylaş</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        {currentIndex > 0 && (
                            <button
                                onClick={handlePrevious}
                                className="absolute top-1/2 left-4 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all pointer-events-auto"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                </svg>
                            </button>
                        )}

                        {currentIndex < recipes.length - 1 && (
                            <button
                                onClick={handleNext}
                                className="absolute bottom-32 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all pointer-events-auto"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        )}
                    </div>
                </div>

                {/* Keyboard Hint */}
                <div className="fixed bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs">
                    ⬆️ ⬇️ Klavye ile gezin
                </div>
            </div>
        </>
    );
}
