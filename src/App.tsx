import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddRecipePage from './pages/AddRecipePage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import VideosPage from './pages/VideosPage';

function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <div className="min-h-screen flex flex-col">
                    <Header />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/ekle" element={<AddRecipePage />} />
                            <Route path="/tarif/:id" element={<RecipeDetailPage />} />
                            <Route path="/videolar" element={<VideosPage />} />
                        </Routes>
                    </main>
                    <footer className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8 mt-16">
                        <div className="max-w-7xl mx-auto px-4 text-center">
                            <p className="text-lg font-semibold mb-2">🍳 Lezzet Dünyası</p>
                            <p className="text-sm opacity-90">
                                © 2024 Tüm hakları saklıdır - Ev yapımı tariflerle mutfağınızda lezzet şöleni
                            </p>
                        </div>
                    </footer>
                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
