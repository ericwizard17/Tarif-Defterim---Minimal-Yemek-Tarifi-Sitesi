# Vercel Deployment Guide

## 🚀 Hızlı Deployment (5 Dakika)

### Yöntem 1: Vercel CLI (Önerilen)

```bash
# 1. Vercel CLI'yi global olarak yükleyin
npm i -g vercel

# 2. Vercel'e login olun
vercel login

# 3. Projeyi deploy edin
vercel

# İlk deployment için soruları yanıtlayın:
# - Set up and deploy? Yes
# - Which scope? (hesabınızı seçin)
# - Link to existing project? No
# - Project name? tarif-defterim (veya istediğiniz)
# - Directory? ./ (Enter)
# - Override settings? No

# 4. Production'a deploy
vercel --prod
```

### Yöntem 2: GitHub + Vercel (Otomatik Deploy)

1. **GitHub'a Push Edin**:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/tarif-defterim.git
git push -u origin main
```

2. **Vercel'e Bağlayın**:
   - https://vercel.com/new adresine gidin
   - **Import Git Repository** tıklayın
   - GitHub repo'nuzu seçin
   - **Deploy** tıklayın

## ⚙️ Environment Variables Ayarlama

Vercel Dashboard'da:

1. **Project Settings** → **Environment Variables**
2. Şu değişkenleri ekleyin:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://tarif-defterim.vercel.app
```

3. **Save** tıklayın
4. **Redeploy** yapın

## 🌐 Custom Domain Ekleme

1. Vercel Dashboard → **Domains**
2. **Add Domain** tıklayın
3. Domain adınızı girin (örn: `tarifdefterim.com`)
4. DNS ayarlarını yapın:

### Namecheap/GoDaddy için:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

5. **Verify** tıklayın (5-10 dakika sürebilir)

## 📊 Build Settings

Vercel otomatik olarak algılar ama manuel ayarlamak isterseniz:

```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Development Command: npm run dev
```

## 🔧 vercel.json (Opsiyonel)

Proje root'unda `vercel.json` oluşturun:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 🎯 Deployment Checklist

- [x] Firebase config environment variables eklendi
- [x] Google Analytics ID eklendi
- [x] Build başarılı (`npm run build` test edin)
- [x] `.env` dosyası `.gitignore`'da
- [x] Meta tags ve SEO ayarlandı
- [x] robots.txt ve sitemap.xml eklendi

## 🚨 Sorun Giderme

### Build Hatası:
```bash
# Local'de test edin
npm run build
npm run preview
```

### Environment Variables Çalışmıyor:
- Vercel'de tekrar kontrol edin
- Redeploy yapın
- `VITE_` prefix'i olduğundan emin olun

### 404 Hatası:
- `vercel.json` rewrites ayarını kontrol edin
- React Router için SPA routing gerekli

## 📈 Deployment Sonrası

1. **Analytics Kontrol**: Google Analytics çalışıyor mu?
2. **SEO Test**: Google Search Console'a ekleyin
3. **Performance**: Lighthouse score kontrol edin
4. **Mobile Test**: Mobil cihazlarda test edin

## 🎉 Tamamlandı!

Siteniz artık yayında: `https://tarif-defterim.vercel.app`

### Sonraki Adımlar:
- Google Search Console'a ekleyin
- Google AdSense başvurusu yapın
- Sosyal medyada paylaşın
- İlk 100 tarifi ekleyin
