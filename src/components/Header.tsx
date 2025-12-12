import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const location = useLocation();

    return (
        <header className="bg-white border-b border-gray-300 sticky top-0 z-40">
            <div className="max-w-5xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="text-xl font-semibold text-gray-900 hover:text-gray-600">
                        Tarif Defterim
                    </Link>

                    <nav className="flex items-center gap-4">
                        <Link
                            to="/"
                            className={`px-3 py-1.5 text-sm ${location.pathname === '/'
                                    ? 'text-gray-900 border-b-2 border-gray-900'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Tarifler
                        </Link>
                        <Link
                            to="/ekle"
                            className={`px-3 py-1.5 text-sm ${location.pathname === '/ekle'
                                    ? 'text-gray-900 border-b-2 border-gray-900'
                                    : 'text-gray-600 hover:text-gray-900'
                                }`}
                        >
                            Tarif Ekle
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
