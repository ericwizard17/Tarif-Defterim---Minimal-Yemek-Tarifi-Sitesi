import { Recipe } from '../types/recipe';

/**
 * Sample recipes for initial content
 * These can be imported to localStorage or Firestore
 */
export const sampleRecipes: Omit<Recipe, 'id'>[] = [
    {
        title: "Klasik Mercimek Çorbası",
        description: "Türk mutfağının vazgeçilmez lezzeti. Sıcak ve doyurucu bir çorba.",
        ingredients: [
            "1 su bardağı kırmızı mercimek",
            "1 adet soğan",
            "1 yemek kaşığı salça",
            "1 yemek kaşığı tereyağı",
            "1 tatlı kaşığı kimyon",
            "Tuz, karabiber"
        ],
        steps: [
            "Mercimekleri yıkayın ve tencereye alın",
            "Üzerine 6 su bardağı su ekleyin",
            "Soğanı küp doğrayıp ekleyin",
            "Orta ateşte 20 dakika pişirin",
            "Blenderdan geçirin",
            "Tereyağında salçayı kavurun ve ekleyin",
            "Baharatları ekleyip 5 dakika daha kaynatın"
        ],
        userName: "Ayşe Hanım",
        createdAt: new Date('2024-12-01').toISOString(),
        likes: 45,
        views: 230
    },
    {
        title: "Çikolatalı Kek",
        description: "Yumuşacık, kabarık ve çok lezzetli bir kek tarifi. Çay saatlerinin vazgeçilmezi!",
        ingredients: [
            "3 yumurta",
            "1 su bardağı şeker",
            "1 su bardağı süt",
            "1 su bardağı sıvı yağ",
            "2 su bardağı un",
            "3 yemek kaşığı kakao",
            "1 paket kabartma tozu",
            "1 paket vanilya"
        ],
        steps: [
            "Yumurta ve şekeri çırpın",
            "Süt ve yağı ekleyin",
            "Kuru malzemeleri ekleyip karıştırın",
            "Yağlı kağıt serili kek kalıbına dökün",
            "180 derece fırında 35-40 dakika pişirin",
            "Kürdan testi yapın",
            "Soğuduktan sonra dilimleyin"
        ],
        userName: "Zeynep",
        createdAt: new Date('2024-12-02').toISOString(),
        likes: 89,
        views: 456
    },
    {
        title: "Tavuk Sote",
        description: "Pratik ve lezzetli bir ana yemek. Pilav veya makarna ile harika gider.",
        ingredients: [
            "500 gr tavuk göğsü",
            "2 adet biber",
            "2 adet domates",
            "1 adet soğan",
            "2 diş sarımsak",
            "Sıvı yağ",
            "Tuz, karabiber, pul biber"
        ],
        steps: [
            "Tavukları küp doğrayın",
            "Sebzeleri doğrayın",
            "Tavukları yağda kavurun",
            "Soğan ve sarımsağı ekleyin",
            "Biberleri ekleyip kavurun",
            "Domatesleri ekleyin",
            "Baharatları ekleyip 15 dakika pişirin"
        ],
        userName: "Mehmet Bey",
        createdAt: new Date('2024-12-03').toISOString(),
        likes: 67,
        views: 345
    },
    {
        title: "Çoban Salata",
        description: "Taze ve sağlıklı bir salata. Her yemeğin yanına yakışır.",
        ingredients: [
            "2 adet domates",
            "2 adet salatalık",
            "1 adet yeşil biber",
            "1 adet soğan",
            "Maydanoz",
            "Zeytinyağı",
            "Limon suyu",
            "Nar ekşisi",
            "Tuz"
        ],
        steps: [
            "Tüm sebzeleri küp doğrayın",
            "Maydanozu ince kıyın",
            "Geniş bir kaseye alın",
            "Zeytinyağı, limon ve nar ekşisi ekleyin",
            "Tuzlayın",
            "Karıştırıp servis edin"
        ],
        userName: "Fatma",
        createdAt: new Date('2024-12-04').toISOString(),
        likes: 34,
        views: 189
    },
    {
        title: "Sütlaç",
        description: "Geleneksel Türk tatlısı. Fırında veya ocakta yapılabilir.",
        ingredients: [
            "1 litre süt",
            "1/2 su bardağı pirinç",
            "3/4 su bardağı şeker",
            "1 yemek kaşığı pirinç unu",
            "1 paket vanilya",
            "Tarçın (üzeri için)"
        ],
        steps: [
            "Pirinci haşlayın ve süzün",
            "Sütü kaynatın",
            "Pirinci ekleyin",
            "Şeker ve vanilyayı ekleyin",
            "Pirinç unu ile kıvam verin",
            "Kaselere paylaştırın",
            "Fırında üzerini kızartın",
            "Tarçın serpin"
        ],
        userName: "Emine Teyze",
        createdAt: new Date('2024-12-05').toISOString(),
        likes: 112,
        views: 678
    },
    {
        title: "Menemen",
        description: "Kahvaltının vazgeçilmezi. Pratik ve lezzetli!",
        ingredients: [
            "4 yumurta",
            "2 adet domates",
            "2 adet sivri biber",
            "1 adet soğan",
            "Tereyağı",
            "Tuz, karabiber"
        ],
        steps: [
            "Soğanı doğrayıp kavurun",
            "Biberleri ekleyin",
            "Domatesleri ekleyin",
            "Sebzeler pişince yumurtaları kırın",
            "Karıştırarak pişirin",
            "Baharatları ekleyin",
            "Sıcak servis edin"
        ],
        userName: "Ali",
        createdAt: new Date('2024-12-06').toISOString(),
        likes: 78,
        views: 432
    },
    {
        title: "Kuru Fasulye",
        description: "Türk mutfağının en sevilen yemeklerinden. Pilav ile mükemmel uyum!",
        ingredients: [
            "500 gr kuru fasulye",
            "2 adet soğan",
            "2 yemek kaşığı salça",
            "1 adet domates",
            "Sıvı yağ",
            "Tuz, karabiber, pul biber"
        ],
        steps: [
            "Fasulyeyi bir gece önceden ıslatın",
            "Haşlayın",
            "Soğanları kavurun",
            "Salçayı ekleyin",
            "Domatesi ekleyin",
            "Haşlanmış fasulyeyi ekleyin",
            "Su ekleyip 30 dakika pişirin"
        ],
        userName: "Hasan Usta",
        createdAt: new Date('2024-12-07').toISOString(),
        likes: 95,
        views: 521
    },
    {
        title: "Pancake",
        description: "Amerikan usulü pankek. Kahvaltı veya tatlı olarak harika!",
        ingredients: [
            "2 yumurta",
            "2 su bardağı süt",
            "2.5 su bardağı un",
            "2 yemek kaşığı şeker",
            "1 paket kabartma tozu",
            "1 paket vanilya",
            "Tereyağı"
        ],
        steps: [
            "Yumurta ve şekeri çırpın",
            "Sütü ekleyin",
            "Kuru malzemeleri ekleyin",
            "Pürüzsüz kıvam alana kadar karıştırın",
            "Tavayı ısıtın",
            "Kepçe ile dökün",
            "Her iki tarafını pişirin",
            "Bal veya reçel ile servis edin"
        ],
        userName: "Deniz",
        createdAt: new Date('2024-12-08').toISOString(),
        likes: 156,
        views: 892
    },
    {
        title: "Domates Çorbası",
        description: "Hafif ve lezzetli bir çorba. Çocukların da favorisi!",
        ingredients: [
            "5-6 adet domates",
            "1 adet soğan",
            "2 yemek kaşığı un",
            "1 yemek kaşığı tereyağı",
            "1 tatlı kaşığı şeker",
            "Tuz, karabiber",
            "Krema (üzeri için)"
        ],
        steps: [
            "Domatesleri rendeleyin",
            "Soğanı kavurun",
            "Unu ekleyip kavurun",
            "Domates püresini ekleyin",
            "Su ekleyin",
            "Şeker ve baharatları ekleyin",
            "15 dakika kaynatın",
            "Krema ile servis edin"
        ],
        userName: "Ayşe",
        createdAt: new Date('2024-12-09').toISOString(),
        likes: 43,
        views: 267
    },
    {
        title: "Kurabiye",
        description: "Un kurabiyesi. Çay saatlerinin vazgeçilmezi!",
        ingredients: [
            "250 gr tereyağı",
            "1 su bardağı pudra şekeri",
            "1 yumurta",
            "1 paket vanilya",
            "3.5 su bardağı un",
            "1 paket kabartma tozu"
        ],
        steps: [
            "Tereyağı ve şekeri çırpın",
            "Yumurta ve vanilyayı ekleyin",
            "Unu yavaş yavaş ekleyin",
            "Yumuşak hamur elde edin",
            "Şekil verin",
            "Fırın tepsisine dizin",
            "180 derece fırında 15-20 dakika pişirin"
        ],
        userName: "Gül",
        createdAt: new Date('2024-12-10').toISOString(),
        likes: 201,
        views: 1234
    },
    {
        title: "Makarna",
        description: "Kremalı makarna. Hızlı ve pratik bir öğün!",
        ingredients: [
            "500 gr makarna",
            "200 ml krema",
            "100 gr rendelenmiş kaşar",
            "2 diş sarımsak",
            "Tereyağı",
            "Tuz, karabiber"
        ],
        steps: [
            "Makarnayı haşlayın",
            "Tavada tereyağını eritin",
            "Sarımsağı kavurun",
            "Kremayı ekleyin",
            "Kaşarı ekleyin",
            "Makarnayı ekleyin",
            "Karıştırıp servis edin"
        ],
        userName: "Can",
        createdAt: new Date('2024-12-11').toISOString(),
        likes: 87,
        views: 543
    },
    {
        title: "Türk Kahvesi",
        description: "Geleneksel Türk kahvesi yapımı. 40 yıl hatırı var!",
        ingredients: [
            "1 fincan su",
            "1 kahve kaşığı Türk kahvesi",
            "Şeker (isteğe göre)"
        ],
        steps: [
            "Suyu cezvede ısıtın",
            "Kahveyi ekleyin",
            "Şekeri ekleyin",
            "Karıştırın",
            "Köpürünce ateşten alın",
            "Tekrar koyun",
            "2-3 kez tekrarlayın",
            "Fincana dökün"
        ],
        userName: "Mustafa Amca",
        createdAt: new Date('2024-12-12').toISOString(),
        likes: 134,
        views: 789
    },
    {
        title: "Limonata",
        description: "Ev yapımı limonata. Serinletici ve ferahlatıcı!",
        ingredients: [
            "4 adet limon",
            "1 litre su",
            "3/4 su bardağı şeker",
            "Nane yaprakları",
            "Buz"
        ],
        steps: [
            "Limonları sıkın",
            "Şekeri suda eritin",
            "Limon suyunu ekleyin",
            "Nane yapraklarını ekleyin",
            "Buzdolabında soğutun",
            "Buz ile servis edin"
        ],
        userName: "Elif",
        createdAt: new Date('2024-12-11').toISOString(),
        likes: 56,
        views: 321
    },
    {
        title: "Patates Kızartması",
        description: "Çıtır çıtır patates kızartması. Herkesin favorisi!",
        ingredients: [
            "4 adet patates",
            "Sıvı yağ (kızartmak için)",
            "Tuz"
        ],
        steps: [
            "Patatesleri soyun",
            "Çubuk şeklinde doğrayın",
            "Suda bekletin",
            "Kurulayın",
            "Yağı ısıtın",
            "Patatesleri kızartın",
            "Tuzlayıp servis edin"
        ],
        userName: "Berk",
        createdAt: new Date('2024-12-10').toISOString(),
        likes: 98,
        views: 654
    },
    {
        title: "Cacık",
        description: "Yoğurtlu cacık. Yaz aylarının vazgeçilmezi!",
        ingredients: [
            "500 gr yoğurt",
            "2 adet salatalık",
            "2 diş sarımsak",
            "Dereotu",
            "Zeytinyağı",
            "Tuz"
        ],
        steps: [
            "Salatalıkları rendeleyin",
            "Sarımsağı ezin",
            "Yoğurdu çırpın",
            "Salatalık ve sarımsağı ekleyin",
            "Dereotunu ekleyin",
            "Tuzlayın",
            "Zeytinyağı ile servis edin"
        ],
        userName: "Sevgi",
        createdAt: new Date('2024-12-09').toISOString(),
        likes: 72,
        views: 445
    },
    {
        title: "Omlet",
        description: "Klasik omlet. Kahvaltının olmazsa olmazı!",
        ingredients: [
            "3 yumurta",
            "2 yemek kaşığı süt",
            "Kaşar peyniri",
            "Tereyağı",
            "Tuz, karabiber"
        ],
        steps: [
            "Yumurtaları çırpın",
            "Süt ve baharatları ekleyin",
            "Tavayı ısıtın",
            "Tereyağını eritin",
            "Yumurtaları dökün",
            "Kaşarı ekleyin",
            "Katlayıp servis edin"
        ],
        userName: "Cem",
        createdAt: new Date('2024-12-08').toISOString(),
        likes: 64,
        views: 398
    },
    {
        title: "Pilav",
        description: "Şehriyeli pirinç pilavı. Her yemeğin yanına!",
        ingredients: [
            "2 su bardağı pirinç",
            "3 su bardağı su",
            "1 avuç şehriye",
            "2 yemek kaşığı tereyağı",
            "Tuz"
        ],
        steps: [
            "Pirinci yıkayın",
            "Tereyağında şehriyeyi kavurun",
            "Pirinci ekleyin",
            "Suyu ekleyin",
            "Tuzlayın",
            "Kaynamaya bırakın",
            "Kısık ateşte 15 dakika pişirin",
            "Demlendirin"
        ],
        userName: "Ayhan",
        createdAt: new Date('2024-12-07').toISOString(),
        likes: 89,
        views: 567
    },
    {
        title: "Poğaça",
        description: "Yumuşacık poğaça. Çay saatlerinin yıldızı!",
        ingredients: [
            "3 su bardağı un",
            "1 su bardağı ılık süt",
            "1/2 su bardağı sıvı yağ",
            "1 paket instant maya",
            "1 yemek kaşığı şeker",
            "1 tatlı kaşığı tuz",
            "Peynir (iç için)"
        ],
        steps: [
            "Maya ve şekeri sütte eritin",
            "Yağ ve tuzu ekleyin",
            "Unu yavaş yavaş ekleyin",
            "Yumuşak hamur elde edin",
            "30 dakika mayalandırın",
            "Bezelye büyüklüğünde kesip peynir koyun",
            "Fırın tepsisine dizin",
            "180 derece fırında 25 dakika pişirin"
        ],
        userName: "Nermin",
        createdAt: new Date('2024-12-06').toISOString(),
        likes: 145,
        views: 876
    },
    {
        title: "Ayran",
        description: "Ev yapımı ayran. Serinletici ve sağlıklı!",
        ingredients: [
            "2 su bardağı yoğurt",
            "3 su bardağı su",
            "Tuz"
        ],
        steps: [
            "Yoğurdu çırpın",
            "Suyu ekleyin",
            "Tuzlayın",
            "İyice karıştırın",
            "Soğuk servis edin"
        ],
        userName: "Kemal",
        createdAt: new Date('2024-12-05').toISOString(),
        likes: 41,
        views: 289
    },
    {
        title: "Tost",
        description: "Klasik kaşarlı tost. Hızlı ve pratik!",
        ingredients: [
            "2 dilim tost ekmeği",
            "2 dilim kaşar peyniri",
            "Tereyağı"
        ],
        steps: [
            "Tost makinesini ısıtın",
            "Ekmekleri yağlayın",
            "Kaşarı araya koyun",
            "Tost makinesinde pişirin",
            "Sıcak servis edin"
        ],
        userName: "Burak",
        createdAt: new Date('2024-12-04').toISOString(),
        likes: 76,
        views: 512
    }
];

/**
 * Import sample recipes to localStorage
 */
export const importSampleRecipes = (): void => {
    const recipes = sampleRecipes.map((recipe, index) => ({
        ...recipe,
        id: `sample-${Date.now()}-${index}`
    }));

    localStorage.setItem('recipes', JSON.stringify(recipes));
    console.log(`${recipes.length} sample recipes imported!`);
};
