import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function PrivacyPolicyPage() {
    return (
        <>
            <SEO
                title="Gizlilik Politikası - Lezzet Dünyası"
                description="Lezzet Dünyası gizlilik politikası ve kişisel veri koruma bilgileri"
            />

            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link to="/" className="text-orange-600 hover:text-orange-700 mb-6 inline-block">
                    ← Ana Sayfaya Dön
                </Link>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
                    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        Gizlilik Politikası
                    </h1>

                    <p className="text-gray-600 mb-8">Son Güncelleme: 12 Aralık 2024</p>

                    <div className="space-y-6 text-gray-700">
                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">1. Genel Bilgiler</h2>
                            <p>
                                Lezzet Dünyası olarak, kullanıcılarımızın gizliliğine önem veriyoruz. Bu gizlilik politikası,
                                web sitemizi ziyaret ettiğinizde toplanan bilgilerin nasıl kullanıldığını açıklar.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">2. Toplanan Bilgiler</h2>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Kullanıcı adı (tarif eklerken)</li>
                                <li>Tarif içerikleri (başlık, açıklama, malzemeler, adımlar)</li>
                                <li>Yüklenen görseller ve videolar</li>
                                <li>Tarayıcı bilgileri ve IP adresi (Google Analytics)</li>
                                <li>Çerezler (cookies)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">3. Bilgilerin Kullanımı</h2>
                            <p className="mb-2">Toplanan bilgiler şu amaçlarla kullanılır:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Tarif paylaşım platformunu sağlamak</li>
                                <li>Kullanıcı deneyimini iyileştirmek</li>
                                <li>Site trafiğini analiz etmek</li>
                                <li>Reklamları kişiselleştirmek (Google AdSense)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">4. Çerezler (Cookies)</h2>
                            <p>
                                Sitemiz, kullanıcı deneyimini iyileştirmek için çerezler kullanır. Çerezler,
                                tarayıcınızda saklanan küçük metin dosyalarıdır. Tarayıcı ayarlarınızdan çerezleri
                                devre dışı bırakabilirsiniz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">5. Google Analytics</h2>
                            <p>
                                Sitemiz, ziyaretçi trafiğini analiz etmek için Google Analytics kullanır.
                                Google Analytics, anonim kullanım verileri toplar ve raporlar oluşturur.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">6. Google AdSense</h2>
                            <p>
                                Sitemizde Google AdSense reklamları gösterilmektedir. Google, çerezler kullanarak
                                ilgi alanlarınıza uygun reklamlar gösterebilir. Kişiselleştirilmiş reklamları
                                <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline ml-1">
                                    Google Reklam Ayarları
                                </a> sayfasından devre dışı bırakabilirsiniz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">7. Veri Güvenliği</h2>
                            <p>
                                Verilerinizin güvenliği bizim için önemlidir. Firebase ve Google Cloud Platform
                                altyapısını kullanarak verilerinizi güvenli bir şekilde saklıyoruz. Ancak,
                                internet üzerinden veri iletiminin %100 güvenli olmadığını unutmayın.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">8. Üçüncü Taraf Bağlantılar</h2>
                            <p>
                                Sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu sitelerin
                                gizlilik politikalarından sorumlu değiliz. Başka bir siteyi ziyaret etmeden önce
                                gizlilik politikasını okumanızı öneririz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">9. Çocukların Gizliliği</h2>
                            <p>
                                Sitemiz 13 yaşın altındaki çocuklara yönelik değildir. Bilerek 13 yaşın altındaki
                                çocuklardan kişisel bilgi toplamıyoruz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">10. Değişiklikler</h2>
                            <p>
                                Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Değişiklikler bu sayfada
                                yayınlanacaktır. Düzenli olarak kontrol etmenizi öneririz.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-gray-800 mb-3">11. İletişim</h2>
                            <p>
                                Gizlilik politikamız hakkında sorularınız varsa, lütfen bizimle iletişime geçin:
                            </p>
                            <ul className="list-none space-y-2 ml-4 mt-3">
                                <li>📧 Email: info@lezzetdunyasi.com</li>
                                <li>🌐 Web: <Link to="/" className="text-orange-600 hover:underline">lezzetdunyasi.com</Link></li>
                            </ul>
                        </section>
                    </div>

                    <div className="mt-8 pt-6 border-t border-gray-200">
                        <Link
                            to="/"
                            className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
                        >
                            Ana Sayfaya Dön
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
