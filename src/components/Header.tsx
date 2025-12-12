import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
        <header className="bg-white shadow-md sticky top-0 z-50 border-b-4 border-orange-400">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold gradient-text">
                                Lezzet Dünyası
                            </h1>
                            <p className="text-xs text-gray-500">Ev Yapımı Tarifler</p>
                        </div>
                    </Link>

                    <nav className="flex items-center gap-2">
                        <Link
                            to="/"
                            className={`px-4 py-2 rounded-full font-medium transition-all ${location.pathname === '/'
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-orange-50'
                                }`}
                        >
                            🏠 Ana Sayfa
                        </Link>
                        <Link
                            to="/ekle"
                            className={`px-4 py-2 rounded-full font-medium transition-all ${location.pathname === '/ekle'
                                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                                    : 'text-gray-700 hover:bg-orange-50'
                                }`}
                        >
                            ➕ Tarif Ekle
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
