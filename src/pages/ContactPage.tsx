import { useState } from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Burada form verilerini işleyebilirsiniz (email gönderme vb.)
        console.log('Form data:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <>
            <SEO
                title="İletişim - Lezzet Dünyası"
                description="Lezzet Dünyası ile iletişime geçin. Sorularınız, önerileriniz için bize ulaşın."
            />

            <div className="max-w-4xl mx-auto px-4 py-12">
                <Link to="/" className="text-orange-600 hover:text-orange-700 mb-6 inline-block">
                    ← Ana Sayfaya Dön
                </Link>

                <div className="bg-white rounded-2xl shadow-lg p-8 border border-orange-100">
                    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                        İletişim
                    </h1>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Bize Ulaşın</h2>
                            <p className="text-gray-600 mb-6">
                                Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçebilirsiniz.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">📧</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Email</h3>
                                        <p className="text-gray-600">info@lezzetdunyasi.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">🌐</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Website</h3>
                                        <p className="text-gray-600">lezzetdunyasi.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-xl">📱</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-800">Sosyal Medya</h3>
                                        <p className="text-gray-600">@lezzetdunyasi</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Mesaj Gönderin</h2>

                            {submitted ? (
                                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                                    <div className="text-4xl mb-3">✅</div>
                                    <h3 className="text-xl font-bold text-green-800 mb-2">Mesajınız Gönderildi!</h3>
                                    <p className="text-green-600">En kısa sürede size dönüş yapacağız.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                            Adınız
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            Konu
                                        </label>
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                            Mesajınız
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400 resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                                    >
                                        Gönder
                                    </button>
                                </form>
                            )}
                        </div>
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
