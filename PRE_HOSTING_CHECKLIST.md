# 🚀 Hosting Öncesi Kontrol Listesi

## ✅ Tamamlanması Gerekenler

### 1. Firebase Kurulumu
- [ ] Firebase Console'da proje oluştur
- [ ] Firestore Database aktif et
- [ ] Storage aktif et (görsel/video için)
- [ ] Authentication aktif et (opsiyonel)
- [ ] `.env` dosyasına Firebase config ekle

### 2. Temel Özellikler
- [x] Tarif ekleme
- [x] Tarif listeleme
- [x] Tarif detay sayfası
- [x] Tarif silme
- [x] Görsel yükleme
- [x] Video yükleme
- [x] Reels-style video feed
- [x] Import/Export
- [x] SEO optimizasyonu

### 3. Eksik Sayfalar
- [ ] Gizlilik Politikası (`/gizlilik-politikasi`)
- [ ] Hakkımızda (`/hakkimizda`)
- [ ] İletişim (`/iletisim`)
- [ ] Kullanım Koşulları (`/kullanim-kosullari`)

### 4. SEO ve Analytics
- [x] Meta tags
- [x] Open Graph tags
- [x] robots.txt
- [x] sitemap.xml
- [ ] Google Analytics ID ekle
- [ ] Google Search Console'a ekle

### 5. Performans
- [ ] Görselleri optimize et
- [ ] Lazy loading ekle
- [ ] Code splitting
- [ ] PWA (Progressive Web App) - opsiyonel

### 6. Güvenlik
- [x] Environment variables
- [x] .gitignore düzgün ayarlandı
- [ ] Firebase Security Rules
- [ ] CORS ayarları

### 7. Test
- [ ] Tüm sayfalar çalışıyor mu?
- [ ] Mobil uyumlu mu?
- [ ] Form validasyonları çalışıyor mu?
- [ ] Video yükleme çalışıyor mu?
- [ ] Görsel yükleme çalışıyor mu?

### 8. İçerik
- [ ] En az 20-30 örnek tarif ekle
- [ ] 5-10 video tarif ekle
- [ ] Logo ve favicon ekle
- [ ] OG image (sosyal medya paylaşım görseli)

## 📋 Hemen Yapılacaklar

### Öncelik 1 (Kritik):
1. **Firebase Kurulumu** - Backend olmadan site çalışmaz
2. **Yasal Sayfalar** - AdSense için gerekli
3. **Örnek İçerik** - En az 20 tarif

### Öncelik 2 (Önemli):
1. **Google Analytics** - Trafik takibi
2. **Performans Optimizasyonu** - Hız önemli
3. **Mobil Test** - Kullanıcıların %70'i mobil

### Öncelik 3 (İyi Olur):
1. **PWA** - Mobil app gibi
2. **Arama Özelliği** - Kullanıcı deneyimi
3. **Kategoriler** - Organizasyon

## 🎯 Hosting Platformları

### Ücretsiz Seçenekler:
1. **Vercel** (Önerilen)
   - Otomatik deploy
   - Global CDN
   - Sınırsız bandwidth
   - Custom domain

2. **Netlify**
   - Benzer özellikler
   - Form desteği
   - Serverless functions

3. **Firebase Hosting**
   - Firebase ile entegre
   - Hızlı
   - SSL otomatik

### Ücretli Seçenekler:
1. **Natro/Turhost** (50-100 TL/ay)
   - Türkiye sunucuları
   - cPanel
   - Email hosting

2. **DigitalOcean** ($5-10/ay)
   - VPS
   - Tam kontrol
   - Ölçeklenebilir

## 💡 Önerilen Sıralama

### Bugün:
1. Firebase kurulumu yap
2. Gizlilik politikası sayfası ekle
3. Hakkımızda sayfası ekle
4. İletişim sayfası ekle

### Yarın:
1. 20 örnek tarif ekle
2. 5 video tarif ekle
3. Google Analytics ekle
4. Vercel'e deploy et

### Bu Hafta:
1. Domain al (tarifdefterim.com gibi)
2. Google Search Console'a ekle
3. Sosyal medya hesapları aç
4. İlk paylaşımları yap

### Gelecek Hafta:
1. 100 tarife tamamla
2. Google AdSense başvurusu
3. SEO çalışmaları
4. Kullanıcı geri bildirimleri topla

## 🔥 Hızlı Başlangıç Komutu

```bash
# 1. Firebase kurulumu
# FIREBASE_SETUP.md dosyasını takip et

# 2. Build test
npm run build

# 3. Preview
npm run preview

# 4. Vercel deploy
npm i -g vercel
vercel --prod
```

## ⚠️ Önemli Notlar

1. **Firebase olmadan site çalışmaz** - Önce Firebase'i kur
2. **Yasal sayfalar zorunlu** - AdSense için gerekli
3. **İçerik önemli** - Boş site kimseyi çekmez
4. **SEO zaman alır** - Sabırlı ol
5. **Mobil öncelikli** - Kullanıcıların çoğu mobil

## 📞 Yardım

Herhangi bir adımda takılırsan:
- Firebase: FIREBASE_SETUP.md
- Vercel: VERCEL_DEPLOY.md
- AdSense: ADSENSE_GUIDE.md
- Tarifler: 100_RECIPES_GUIDE.md

Başarılar! 🚀
