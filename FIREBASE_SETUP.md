# Firebase Setup Guide

## 1. Firebase Console'da Proje Oluşturma

1. **Firebase Console'a gidin**: https://console.firebase.google.com/
2. **"Add project"** tıklayın
3. **Proje adı**: `tarif-defterim` (veya istediğiniz ad)
4. **Google Analytics**: Enable (önerilir)
5. **Create project** tıklayın

## 2. Web App Ekleme

1. Proje dashboard'unda **Web** ikonuna (</>)tıklayın
2. **App nickname**: `Tarif Defterim Web`
3. **Firebase Hosting**: ✅ İşaretleyin
4. **Register app** tıklayın
5. **Firebase config** bilgilerini kopyalayın

## 3. Environment Variables Ayarlama

1. `.env.example` dosyasını `.env` olarak kopyalayın:
```bash
copy .env.example .env
```

2. Firebase config bilgilerinizi `.env` dosyasına yapıştırın:
```env
VITE_FIREBASE_API_KEY=AIzaSy...
VITE_FIREBASE_AUTH_DOMAIN=tarif-defterim.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=tarif-defterim
VITE_FIREBASE_STORAGE_BUCKET=tarif-defterim.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

## 4. Firestore Database Kurulumu

1. Firebase Console'da **Firestore Database** sekmesine gidin
2. **Create database** tıklayın
3. **Start in production mode** seçin (güvenlik kurallarını sonra ayarlayacağız)
4. **Location**: `europe-west` (Avrupa için en yakın)
5. **Enable** tıklayın

### Firestore Security Rules

Firestore Database → Rules sekmesinde şu kuralları ekleyin:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Recipes collection
    match /recipes/{recipeId} {
      // Herkes okuyabilir
      allow read: if true;
      
      // Sadece giriş yapmış kullanıcılar yazabilir
      allow create: if request.auth != null;
      
      // Sadece kendi tarifini güncelleyebilir/silebilir
      allow update, delete: if request.auth != null && 
                               request.auth.uid == resource.data.userId;
    }
  }
}
```

## 5. Storage (Görsel Yükleme) Kurulumu

1. Firebase Console'da **Storage** sekmesine gidin
2. **Get started** tıklayın
3. **Start in production mode** seçin
4. **Location**: `europe-west`
5. **Done** tıklayın

### Storage Security Rules

Storage → Rules sekmesinde:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /recipe-images/{imageId} {
      // Herkes okuyabilir
      allow read: if true;
      
      // Sadece giriş yapmış kullanıcılar yükleyebilir
      // Max 5MB, sadece resim dosyaları
      allow write: if request.auth != null &&
                      request.resource.size < 5 * 1024 * 1024 &&
                      request.resource.contentType.matches('image/.*');
    }
  }
}
```

## 6. Authentication Kurulumu

1. Firebase Console'da **Authentication** sekmesine gidin
2. **Get started** tıklayın
3. **Sign-in method** sekmesinde şunları aktif edin:
   - ✅ **Email/Password**
   - ✅ **Google** (opsiyonel ama önerilir)

### Google Sign-In için:
1. Google'ı enable edin
2. **Project support email** seçin
3. **Save** tıklayın

## 7. Firebase Config'i Projeye Ekleme

`src/config/firebase.ts` dosyasını güncelleyin:

```typescript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## 8. Test Etme

```bash
npm run dev
```

Tarayıcı konsolunda hata olup olmadığını kontrol edin.

## 9. Firestore'da İlk Veri

Firebase Console → Firestore → **Start collection**:
- Collection ID: `recipes`
- İlk document'i manuel ekleyebilirsiniz (test için)

## ✅ Tamamlandı!

Artık Firebase backend hazır:
- ✅ Firestore Database (veri saklama)
- ✅ Storage (görsel yükleme)
- ✅ Authentication (kullanıcı girişi)

## 🔐 Güvenlik Notları

1. `.env` dosyasını **asla** Git'e eklemeyin
2. `.gitignore` dosyasında `.env` olduğundan emin olun
3. Production'da environment variables'ı hosting platformunda ayarlayın

## 📊 Firebase Ücretsiz Limitleri

- **Firestore**: 1GB depolama, 50K okuma/gün
- **Storage**: 5GB depolama, 1GB indirme/gün
- **Authentication**: Sınırsız kullanıcı
- **Hosting**: 10GB depolama, 360MB/gün

Bu limitler başlangıç için fazlasıyla yeterli!
