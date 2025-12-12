import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
}

export default function SEO({
    title = 'Tarif Defterim - Yemek Tarifleri',
    description = 'En lezzetli yemek tariflerini keşfedin ve kendi tariflerinizi paylaşın. Ücretsiz tarif defteri.',
    keywords = 'yemek tarifleri, tarif defteri, kolay tarifler, pratik yemekler, tatlı tarifleri',
    image = '/og-image.jpg',
    url = 'https://tarifdefterim.com',
    type = 'website'
}: SEOProps) {
    const fullTitle = title.includes('Tarif Defterim') ? title : `${title} | Tarif Defterim`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="Turkish" />
            <meta name="author" content="Tarif Defterim" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={url} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content="tr_TR" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={url} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={image} />

            {/* Additional */}
            <link rel="canonical" href={url} />
        </Helmet>
    );
}
