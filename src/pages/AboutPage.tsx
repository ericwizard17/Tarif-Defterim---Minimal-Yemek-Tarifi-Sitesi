import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function AboutPage() {
    return (
        <>
            <SEO
                title="Hakkımızda - Lezzet Dünyası"
                description="Lezzet Dünyası hakkında bilgi edinin. Ev yapımı tariflerle mutfağınızda lezzet şöleni."
            />

            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link to="/" className="text-orange-600 hover:text-orange-700 mb-6 inline-block">
                    ← Ana Sayfaya Dön
                </Link>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
                    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        Hakkımızda
                    </h1>

                    <div className="space-y-6 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">🍳 Lezzet Dünyası Nedir?</h2>
                            <p className="leading-relaxed">
                                Lezzet Dünyası, ev yapımı yemek tariflerini paylaşabileceğiniz, keşfedebileceğiniz
                                ve ilham alabileceğiniz bir platformdur. Amacımız, mutfak severleri bir araya getirmek
                                ve lezzetli tariflerin paylaşılmasını kolaylaştırmaktır.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">🎯 Misyonumuz</h2>
                            <p className="leading-relaxed">
                                Her evde yapılabilecek, sade ve lezzetli tarifleri herkesin erişimine sunmak.
                                Mutfakta geçirilen zamanı daha keyifli ve verimli hale getirmek. Yemek yapma
                                kültürünü yaygınlaştırmak ve gelecek nesillere aktarmak.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">✨ Özelliklerimiz</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">📝</span>
                                    <div>
                                        <strong className="text-gray-800">Kolay Tarif Ekleme:</strong>
                                        <p className="text-gray-600">Kendi tariflerinizi kolayca ekleyin ve paylaşın</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">📸</span>
                                    <div>
                                        <strong className="text-gray-800">Görsel ve Video Desteği:</strong>
                                        <p className="text-gray-600">Tariflerinize fotoğraf ve video ekleyin</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">🎥</span>
                                    <div>
                                        <strong className="text-gray-800">Reels Tarzı Video Feed:</strong>
                                        <p className="text-gray-600">Video tarifleri Instagram Reels gibi izleyin</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">🔍</span>
                                    <div>
                                        <strong className="text-gray-800">Kolay Arama:</strong>
                                        <p className="text-gray-600">Aradığınız tarifi hızlıca bulun</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-2xl">📱</span>
                                    <div>
                                        <strong className="text-gray-800">Mobil Uyumlu:</strong>
                                        <p className="text-gray-600">Her cihazdan rahatlıkla kullanın</p>
                                    </div>
                                </li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">👥 Topluluk</h2>
                            <p className="leading-relaxed">
                                Lezzet Dünyası, yemek yapmayı seven herkesin buluşma noktasıdır. Tariflerinizi
                                paylaşarak, diğer kullanıcıların mutfaklarında lezzet şöleni yaratmalarına
                                yardımcı olabilirsiniz. Birlikte daha lezzetli bir dünya yaratıyoruz!
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">📞 İletişim</h2>
                            <p className="leading-relaxed mb-4">
                                Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz:
                            </p>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2">
                                    <span>📧</span>
                                    <span>Email: info@lezzetdunyasi.com</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span>🌐</span>
                                    <span>Web: lezzetdunyasi.com</span>
                                </li>
                            </ul>
                        </section>

                        <section className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl">
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">🚀 Gelecek Planlarımız</h2>
                            <ul className="space-y-2 text-gray-700">
                                <li>✅ Kullanıcı profilleri ve takip sistemi</li>
                                <li>✅ Tarif derecelendirme ve yorumlar</li>
                                <li>✅ Kategorilere göre filtreleme</li>
                                <li>✅ Favori tarifler listesi</li>
                                <li>✅ Alışveriş listesi oluşturma</li>
                                <li>✅ Mobil uygulama</li>
                            </ul>
                        </section>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <Link
                            to="/"
                            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                            Tarifleri Keşfet
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
