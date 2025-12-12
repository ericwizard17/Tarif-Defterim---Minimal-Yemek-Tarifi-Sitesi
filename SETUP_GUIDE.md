# 🔧 Firebase ve Analytics Kurulum Rehberi

## 1️⃣ Firebase Config (.env dosyası)

### Adım 1: Firebase Console'da Proje Oluştur

1. **Firebase Console'a git**: https://console.firebase.google.com/
2. **"Add project"** tıkla
3. **Proje adı**: `lezzet-dunyasi` (veya istediğin ad)
4. **Google Analytics**: Enable (önerilir)
5. **Create project** tıkla

### Adım 2: Web App Ekle

1. Proje dashboard'unda **Web** ikonuna (</>)tıkla
2. **App nickname**: `Lezzet Dünyası Web`
3. **Register app** tıkla
4. **Firebase config** bilgilerini KOPYALA

### Adım 3: .env Dosyası Oluştur

Proje root klasöründe `.env` dosyası oluştur:

```bash
# Windows
copy .env.example .env

# Mac/Linux
cp .env.example .env
```

### Adım 4: Firebase Config'i Yapıştır

`.env` dosyasını aç ve Firebase config bilgilerini yapıştır:

```env
VITE_FIREBASE_API_KEY=AIzaSyC...
VITE_FIREBASE_AUTH_DOMAIN=lezzet-dunyasi.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=lezzet-dunyasi
VITE_FIREBASE_STORAGE_BUCKET=lezzet-dunyasi.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

### Adım 5: Firestore Database Aktif Et

1. Firebase Console → **Firestore Database**
2. **Create database** tıkla
3. **Start in production mode** seç
4. **Location**: `europe-west` (Avrupa için)
5. **Enable** tıkla

### Adım 6: Storage Aktif Et

1. Firebase Console → **Storage**
2. **Get started** tıkla
3. **Start in production mode** seç
4. **Done** tıkla

## 2️⃣ Google Analytics Kurulumu

### Seçenek 1: Firebase ile Otomatik (Önerilen)

Firebase projesi oluştururken Google Analytics'i enable ettiyseniz, otomatik olarak kuruldu!

**Measurement ID'yi bul:**
1. Firebase Console → **Project Settings**
2. **Integrations** sekmesi
3. **Google Analytics** bölümünde **Measurement ID** var (G-XXXXXXXXXX)

### Seçenek 2: Manuel Google Analytics

1. **Google Analytics'e git**: https://analytics.google.com/
2. **Create Account** tıkla
3. **Account name**: Lezzet Dünyası
4. **Property name**: Lezzet Dünyası Web
5. **Reporting time zone**: Turkey
6. **Create** tıkla
7. **Measurement ID** kopyala (G-XXXXXXXXXX)

### Analytics ID'yi Ekle

`.env` dosyasına ekle:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

`index.html` dosyasında güncelle:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 3️⃣ Örnek Tarifler Yükleme

### Otomatik Yükleme (Geliştirme)

`index.html` dosyasındaki yorumu kaldır:

```html
<script type="module">
  import { importSampleRecipes } from './src/data/sampleRecipes.ts';
  if (!localStorage.getItem('recipes')) {
    importSampleRecipes();
  }
</script>
```

Sayfayı yenile, 20 örnek tarif otomatik yüklenecek!

### Manuel Yükleme (Tarayıcı Konsolu)

1. **F12** tuşuna bas
2. **Console** sekmesine git
3. Şu kodu yapıştır:

```javascript
import('./src/data/sampleRecipes.ts').then(module => {
  module.importSampleRecipes();
  location.reload();
});
```

### Firestore'a Yükleme

Örnek tarifleri Firestore'a yüklemek için:

```javascript
import { sampleRecipes } from './src/data/sampleRecipes';
import { addRecipeToFirestore } from './src/utils/firestore';

// Tüm örnek tarifleri Firestore'a yükle
sampleRecipes.forEach(async (recipe) => {
  await addRecipeToFirestore(recipe);
});
```

## ✅ Kontrol Listesi

- [ ] Firebase projesi oluşturuldu
- [ ] `.env` dosyası oluşturuldu
- [ ] Firebase config eklendi
- [ ] Firestore Database aktif
- [ ] Storage aktif
- [ ] Google Analytics ID eklendi
- [ ] `index.html` Analytics kodu güncellendi
- [ ] 20 örnek tarif yüklendi
- [ ] Test edildi (`npm run dev`)

## 🧪 Test

```bash
# Development server başlat
npm run dev

# Tarayıcıda aç
http://localhost:5173

# Kontroller:
# ✅ Tarifler görünüyor mu?
# ✅ Yeni tarif eklenebiliyor mu?
# ✅ Görsel yüklenebiliyor mu?
# ✅ Video yüklenebiliyor mu?
# ✅ Console'da hata yok mu?
```

## 🚀 Production Build

```bash
# Build
npm run build

# Preview
npm run preview

# Deploy
vercel --prod
```

## 📊 Analytics Kontrolü

1. Google Analytics Dashboard'a git
2. **Realtime** sekmesine bak
3. Sitenizi ziyaret edin
4. Realtime'da görünüyor mu?

## ⚠️ Önemli Notlar

1. **`.env` dosyasını asla Git'e ekleme!**
2. **Production'da Vercel'de environment variables ayarla**
3. **Firebase Security Rules'ı güncelle** (FIREBASE_SETUP.md)
4. **Analytics'in çalışması 24-48 saat sürebilir**

## 🆘 Sorun Giderme

### Firebase bağlanamıyor:
- `.env` dosyası doğru mu?
- Firebase config doğru kopyalandı mı?
- Firestore ve Storage aktif mi?

### Analytics çalışmıyor:
- Measurement ID doğru mu?
- AdBlocker kapalı mı?
- 24-48 saat bekledin mi?

### Örnek tarifler yüklenmiyor:
- Console'da hata var mı?
- localStorage temiz mi?
- Import kodu doğru çalışıyor mu?

Başarılar! 🎉
