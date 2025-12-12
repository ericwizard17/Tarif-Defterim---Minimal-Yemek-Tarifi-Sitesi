import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddRecipePage from './pages/AddRecipePage';
import RecipeDetailPage from './pages/RecipeDetailPage';

function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <div className="min-h-screen bg-white flex flex-col">
                    <Header />
                    <main className="flex-1">
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/ekle" element={<AddRecipePage />} />
                            <Route path="/tarif/:id" element={<RecipeDetailPage />} />
                        </Routes>
                    </main>
                    <footer className="bg-white border-t border-gray-300 mt-auto py-4">
                        <div className="max-w-5xl mx-auto px-4 text-center">
                            <p className="text-xs text-gray-500">
                                © 2024 Tarif Defterim - Tüm hakları saklıdır
                            </p>
                        </div>
                    </footer>
                </div>
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
