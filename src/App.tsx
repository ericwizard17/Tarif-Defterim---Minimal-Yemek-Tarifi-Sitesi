import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddRecipePage from './pages/AddRecipePage';
import EditRecipePage from './pages/EditRecipePage';
import RecipeDetailPage from './pages/RecipeDetailPage';
import VideosPage from './pages/VideosPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Link } from 'react-router-dom';

function AppContent() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/ekle" element={<AddRecipePage />} />
                    <Route path="/duzenle/:id" element={<EditRecipePage />} />
                    <Route path="/tarif/:id" element={<RecipeDetailPage />} />
                    <Route path="/videolar" element={<VideosPage />} />
                    <Route path="/gizlilik-politikasi" element={<PrivacyPolicyPage />} />
                    <Route path="/hakkimizda" element={<AboutPage />} />
                    <Route path="/iletisim" element={<ContactPage />} />
                </Routes>
            </main>
            <footer className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-8 mt-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 mb-6">
                        <div>
                            <h3 className="text-lg font-bold mb-3">🍳 Lezzet Dünyası</h3>
                            <p className="text-sm opacity-90">
                                Ev yapımı tariflerle mutfağınızda lezzet şöleni
                            </p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-3">Hızlı Linkler</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/" className="hover:underline opacity-90">Ana Sayfa</Link></li>
                                <li><Link to="/videolar" className="hover:underline opacity-90">Video Tarifler</Link></li>
                                <li><Link to="/ekle" className="hover:underline opacity-90">Tarif Ekle</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold mb-3">Yasal</h3>
                            <ul className="space-y-2 text-sm">
                                <li><Link to="/hakkimizda" className="hover:underline opacity-90">Hakkımızda</Link></li>
                                <li><Link to="/gizlilik-politikasi" className="hover:underline opacity-90">Gizlilik Politikası</Link></li>
                                <li><Link to="/iletisim" className="hover:underline opacity-90">İletişim</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center pt-6 border-t border-white/20">
                        <p className="text-sm opacity-90">
                            © 2024 Lezzet Dünyası - Tüm hakları saklıdır
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <AppContent />
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;
