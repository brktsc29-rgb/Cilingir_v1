// ─── District-level rich content ────────────────────────────────────────────
const DISTRICT_CONTENT = {
  besiktas: {
    metaTitle: 'Beşiktaş Çilingir | 7/24 Acil Kapı Açma',
    metaDesc: 'Beşiktaş\'ta 7/24 acil çilingir. Etiler, Ortaköy, Levent ve tüm mahallelere 20-30 dk\'da ulaşıyoruz. Kapı açma, kilit değişimi. 0542 694 69 20',
    intro: 'Avrupa yakasının en prestijli ilçelerinden Beşiktaş\'ta kapıda kaldınız mı? Çilingirciniz ekibi Dolmabahçe\'den Etiler\'e, Ortaköy\'den Levent\'e tüm mahallelerde 7/24 hizmetinizdedir. Çelik kapı açma, silindir değişimi, bina ana kapı sistemleri ve oto çilingir dahil kapsamlı hizmetimizle ortalama 20-30 dakikada kapınızdayız. Gece geç saatlerde ya da tatil günlerinde dahi tek bir telefonla profesyonel destek alırsınız.',
    landmarks: 'Dolmabahçe Sarayı, Beşiktaş Meydanı ve Kabataş İskelesi',
    transport: 'Beşiktaş vapur iskelesi, 29E ve 43T otobüs hatları, Kabataş tramvay',
    scenario: 'Çarşı\'da alışveriş sonrası arabanıza anahtarı kilitleyip kapıda kalmak ya da Etiler\'deki sitenizde şifreli kapının pili bitmesi — bunlar en sık karşılaştığımız durumlar. Telefonla konum bildirmeniz yeterli, gerisini biz hallederiz.',
    services: ['Çelik kapı açma ve kilit değişimi', 'Bina giriş kilidi ve silindir değişimi', 'Oto çilingir ve araç kapı açma', 'Kasa açma', 'Anahtar kopyalama'],
    faq: [
      { q: 'Beşiktaş\'ta gece kapıda kalsam ne yapmalıyım?', a: '0542 694 69 20\'yi arayın. Gece yarısı dahil 7/24 hizmetimiz aktif olup Beşiktaş genelinde ortalama 20-30 dakikada yanınızdayız.' },
      { q: 'Beşiktaş\'ta kilit değişimi fiyatları nasıl?', a: 'Fiyat kilit markasına ve kapı tipine göre değişir. Kapınızı yerinde inceleyip net teklif veriyoruz; ek ücret çıkmaz.' },
      { q: 'Etiler, Ortaköy ve Levent\'e hizmet veriyor musunuz?', a: 'Evet, Beşiktaş\'ın tüm mahallelerine — Etiler, Ortaköy, Levent, Bebek, Arnavutköy dahil — hizmet veriyoruz.' },
      { q: 'Çelik kapı açılırken hasar olur mu?', a: 'Profesyonel ekibimiz mümkün her durumda hasarsız açma tekniklerini kullanır. Kapı ve kilit tipine göre en az etkili yöntemi seçiyoruz.' },
    ],
  },
  sisli: {
    metaTitle: 'Şişli Çilingir | 20-30 Dk Acil Çilingir',
    metaDesc: 'Şişli\'de 7/24 acil çilingir hizmeti. Mecidiyeköy, Nişantaşı, Bomonti ve tüm mahallelere 20-30 dk\'da çilingir. Kapı açma, kilit. 0542 694 69 20',
    intro: 'İstanbul\'un iş ve eğlence merkezi Şişli\'de kapıda kalmak ya da kilit değiştirmek istiyorsanız Çilingirciniz ekibi her an yanınızdadır. Cevahir AVM\'den İş Kulelerine, Nişantaşı\'nın butik sokaklarından Bomonti\'nin yükselen rezidanslarına kadar tüm Şişli\'ye 7/24 hizmet veriyoruz. Yoğun trafik saatlerinde bile araç filosuyla en kısa yoldan 20-30 dakikada kapınızdayız.',
    landmarks: 'Cevahir AVM, İş Kuleleri ve Mecidiyeköy metrobüs kavşağı',
    transport: 'M2 Mecidiyeköy ve Osmanbey istasyonları, Zincirlikuyu metrobüs durağı',
    scenario: 'Mecidiyeköy\'de ofis çıkışı arabaya anahtarı kilitlemek ya da Nişantaşı\'ndaki daireye girememeniz artık büyük sorun değil. Birkaç dakika içinde teknisyenimiz yolda olur.',
    services: ['Ofis kapısı açma ve kilit değişimi', 'Rezidans ve lüks konut kilitleri', 'Oto çilingir', 'Akıllı kilit kurulumu', 'Anahtar kopyalama'],
    faq: [
      { q: 'Şişli\'de 7/24 çilingir bulabilir miyim?', a: 'Evet, Çilingirciniz olarak Şişli\'nin tüm mahallelerinde 7/24 hizmet veriyoruz. 0542 694 69 20\'yi arayın, 20-30 dakikada yanınızdayız.' },
      { q: 'Mecidiyeköy\'de ofis kapısı açılır mı?', a: 'Evet, ofis ve iş yeri kapılarında uzman kadromuzla hizmet veriyoruz. Kurumsal kilitlerin yanı sıra elektronik kilit sistemlerinde de deneyimliyiz.' },
      { q: 'Nişantaşı\'nda kilit değişimi yapıyor musunuz?', a: 'Evet, Nişantaşı\'nın tüm sokak ve apartmanlarına ulaşıyoruz. Yüksek güvenlikli kilit markaları konusunda da yönlendirme yapıyoruz.' },
      { q: 'Bomonti\'deki yeni rezidans kapıları açılır mı?', a: 'Evet, Bomonti\'deki modern rezidansların çelik kapı sistemlerinde tecrübeli teknisyenlerimiz çalışmaktadır.' },
    ],
  },
  sariyer: {
    metaTitle: 'Sarıyer Çilingir | 7/24 Boğaz Hizmeti',
    metaDesc: 'Sarıyer\'de 7/24 acil çilingir. Maslak, İstinye, Zekeriyaköy ve tüm bölgelere 20-30 dk\'da ulaşıyoruz. Kapı açma, villa kilit. 0542 694 69 20',
    intro: 'İstanbul Boğazı\'nın Avrupa kıyısını takip eden Sarıyer, Maslak\'taki plaza binalarından Zekeriyaköy\'ün villa evlerine ve Kilyos\'un sahil konutlarına kadar geniş bir coğrafyayı kapsar. Çilingirciniz olarak bu geniş ilçenin tüm noktalarına 7/24 hizmet veriyoruz. Uzak mahallelere bile ortalama 30-40 dakikada ulaşabilen araç filomuzla Sarıyer\'in hiçbir köşesi erişilmez değildir.',
    landmarks: 'Emirgan Korusu, İstinye Park AVM ve Maslak plaza binaları',
    transport: 'M2 Maslak ve Hacıosman istasyonları, Sarıyer vapur iskelesi',
    scenario: 'Zekeriyaköy\'deki villa kapınıza anahtarı unutmak ya da Maslak\'taki ofis binasına gece erişememek — Sarıyer\'in uzak noktalarına da ulaşıyoruz.',
    services: ['Villa ve müstakil ev kapı açma', 'Maslak plaza ofis kilitleri', 'Tarihi yalı kapı sistemleri', 'Oto çilingir', 'Yazlık konut kilit değişimi'],
    faq: [
      { q: 'Sarıyer\'in uzak mahallelerine de hizmet veriyor musunuz?', a: 'Evet, Zekeriyaköy, Kilyos, Rumelifeneri, Kumköy gibi uzak noktalara da ulaşıyoruz. Varış süresi 30-40 dakika olabilir.' },
      { q: 'Maslak\'ta iş yeri kapısı açılır mı?', a: 'Evet, Maslak\'taki plaza ve ofis binalarında 7/24 hizmet veriyoruz. Kurumsal kapı sistemleri konusunda deneyimliyiz.' },
      { q: 'Zekeriyaköy\'de villa kapısı açıyor musunuz?', a: 'Evet, Zekeriyaköy ve Göktürk villa bölgelerinde özel kapı sistemleri için uzman ekibimizle hizmet veriyoruz.' },
      { q: 'Sarıyer\'de gece çilingir bulunur mu?', a: '7/24 hizmetimiz Sarıyer\'in tüm mahallelerini kapsar. Gece saatlerinde de 0542 694 69 20\'den ulaşabilirsiniz.' },
    ],
  },
  kagithane: {
    metaTitle: 'Kağıthane Çilingir | 7/24 Acil Hizmet',
    metaDesc: 'Kağıthane\'de 7/24 acil çilingir. Çağlayan, Seyrantepe, Gültepe ve tüm mahallelere 20-30 dk\'da. Kapı açma, kilit değişimi. 0542 694 69 20',
    intro: 'Hızla dönüşen Kağıthane, modern konut projeleri, kentsel dönüşüm alanları ve köklü mahallelerin bir arada yaşadığı dinamik bir ilçedir. Kağıthane Vadisi çevresindeki yeni yapılardan Gültepe\'nin köklü apartmanlarına, Seyrantepe\'nin rezidanslarından Çağlayan\'ın iş merkezlerine kadar 7/24 acil çilingir hizmetindeyiz. M7 metro hattı sayesinde ulaşım kolaylaştı; biz de size daha hızlı ulaşıyoruz.',
    landmarks: 'Kağıthane Vadisi, İstanbul Adliye Sarayı ve M7 Kağıthane istasyonu',
    transport: 'M7 Kağıthane ve Seyrantepe istasyonları, Çağlayan metrobüs durağı',
    scenario: 'Kentsel dönüşümle yeni teslim edilen dairenizin kapısında kalmak ya da Çağlayan\'daki iş yerinizin kilidini kaybetmek — her durumda Çilingirciniz yanınızdadır.',
    services: ['Kentsel dönüşüm yeni kapı kilitleri', 'Apartman giriş sistemleri', 'İş yeri kapı açma', 'Oto çilingir', 'Anahtar kopyalama'],
    faq: [
      { q: 'Kağıthane\'de 7/24 çilingir var mı?', a: 'Evet, Kağıthane\'nin tüm mahallelerinde 7/24 hizmet veriyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Seyrantepe\'de rezidans kapısı açılır mı?', a: 'Evet, Seyrantepe\'deki yeni rezidans ve site kapıları için deneyimliyiz. 20-30 dakikada kapınızdayız.' },
      { q: 'Kağıthane\'de kilit değişimi ne kadar sürer?', a: 'Standart silindir değişimi 15-30 dakika sürer. Çelik kapı kilidi değişimi biraz daha uzun olabilir; yerinde bilgi veririz.' },
      { q: 'Kağıthane\'nin tüm mahallelerine gidiyor musunuz?', a: 'Evet, Çağlayan, Gültepe, Sultan Selim, Nurtepe dahil tüm Kağıthane mahallelerine hizmet veriyoruz.' },
    ],
  },
  eyupsultan: {
    metaTitle: 'Eyüpsultan Çilingir | 7/24 Acil Kapı Açma',
    metaDesc: 'Eyüpsultan\'da 7/24 acil çilingir. Alibeyköy, Göktürk, Kemerburgaz ve tüm mahallelere 20-30 dk\'da. Kapı açma, villa kilit. 0542 694 69 20',
    intro: 'Eyüp Sultan Camii\'nin tarihi dokusuyla Göktürk\'ün yeşil villa bölgelerini, Alibeyköy\'ün modern sitelerini ve Kemerburgaz\'ın orman kenarı yaşamını bünyesinde barındıran Eyüpsultan\'da Çilingirciniz 7/24 hizmetinizde. Haliç kıyısındaki tarihi yapılardan TEM Otoyolu yakınındaki villalara kadar geniş bir coğrafyaya ulaşıyoruz. Eyüpsultan\'ın uzak noktalarına ortalama 25-40 dakikada varış sağlıyoruz.',
    landmarks: 'Eyüp Sultan Camii, Pierre Loti Tepesi ve Alibeyköy Göleti',
    transport: 'T5 Alibeyköy tramvay hattı, T4 Rami durağı, Haliç vapuru',
    scenario: 'Alibeyköy\'deki sitenin kapısında kalmak, Göktürk villasının kilidini değiştirmek ya da Kemerburgaz\'daki orman kenarı evinizin anahtarını kaybetmek — telefona sarılın, gerisini biz halledelim.',
    services: ['Villa ve müstakil ev kapı sistemleri', 'Tarihi bina kapı açma', 'Site giriş kilidi değişimi', 'Oto çilingir', 'Anahtar kopyalama'],
    faq: [
      { q: 'Eyüpsultan\'da 7/24 çilingir hizmeti var mı?', a: 'Evet, Eyüpsultan\'ın tüm mahallelerinde 7/24 hizmet veriyoruz. 0542 694 69 20\'den bize ulaşın.' },
      { q: 'Göktürk\'te villa kapısı açılır mı?', a: 'Evet, Göktürk ve Kemerburgaz villa bölgelerinde özel kapı ve güvenlik sistemleri konusunda deneyimliyiz.' },
      { q: 'Alibeyköy\'e kaç dakikada gelirsiniz?', a: 'Alibeyköy\'e ortalama 15-25 dakikada ulaşıyoruz. Trafik durumuna göre değişebilir; arayanları önceden bilgilendiriyoruz.' },
      { q: 'Tarihi mahalle yapılarında eski kilit sistemleri açılır mı?', a: 'Evet, Eyüp\'ün tarihi yapılarındaki eski tip kilit sistemlerinde de hizmet veriyoruz. Hasar vermeden açma konusunda tecrübeliyiz.' },
    ],
  },
};

// ─── Neighborhood-level content ──────────────────────────────────────────────
const HOOD_CONTENT = {
  // ── Beşiktaş ──────────────────────────────────────────────────────────────
  'besiktas-etiler': {
    intro: 'Lüks rezidansları, villa tipi konutları ve Akmerkez AVM çevresindeki iş yerleriyle tanınan Etiler\'de kapıda kalmak artık sorun değil. Çilingirciniz olarak villa kapı sistemlerinden apartman çelik kapılarına kadar Etiler genelinde 7/24 hizmet veriyoruz.',
    landmark: 'Akmerkez AVM ve Etiler\'in seçkin siteler bölgesi',
    transport: '59F otobüs, Etiler-Levent minibüs güzergahı',
    faq: [
      { q: 'Etiler\'de gece kapıda kalsam ne yapmalıyım?', a: '0542 694 69 20\'yi arayın. Etiler\'e ortalama 20-25 dakikada ulaşıyoruz, gece gündüz fark etmez.' },
      { q: 'Etiler\'de villa kapısı açılır mı?', a: 'Evet, Etiler\'deki müstakil ev ve villa kapıları için özel deneyimimiz mevcuttur. Güvenli çelik kapılar da açıyoruz.' },
    ],
  },
  'besiktas-levazim': {
    intro: 'Beşiktaş\'ın üst gelir segmentine hitap eden Levazım, güvenlikli site ve konut komplekslerinin yoğun olduğu bir mahalledir. Site kapı sistemleri ve güvenli konut kilitleri için Çilingirciniz yanınızdadır.',
    landmark: 'Levazım Caddesi ve çevresindeki lüks siteler',
    transport: 'Etiler otobüs hatları, taksi güzergahı',
    faq: [
      { q: 'Levazım\'da site güvenlik kapısı açılır mı?', a: 'Evet, Levazım\'daki güvenlikli site kapılarında ve konutlarda hizmet veriyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Levazım\'da kilit değişimi yapıyor musunuz?', a: 'Evet, tüm kilit tiplerinde değişim yapıyoruz. Güvenlik sınıfı yüksek kilit markaları konusunda da öneride bulunuyoruz.' },
    ],
  },
  'besiktas-bebek': {
    intro: 'Boğaz kıyısındaki Bebek Sahili ve Bebek Parkı\'yla İstanbul\'un en gözde semtlerinden biri olan Bebek\'te, sahil boyu kafelerin bulunduğu binalarda ve Boğaz manzaralı lüks dairelerde 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Bebek Sahili ve Bebek Parkı',
    transport: 'Bebek vapur iskelesi, 22 ve 22E otobüs hatları',
    faq: [
      { q: 'Bebek\'te acil kapı açma hizmeti alabilir miyim?', a: 'Evet, Bebek\'te 7/24 acil kapı açma, kilit değişimi ve oto çilingir hizmeti veriyoruz. 20-30 dakikada kapınızdayız.' },
      { q: 'Bebek sahilindeki eski binalarda kilit açılır mı?', a: 'Evet, eski tip kilit ve kapı sistemlerinde de deneyimliyiz. Hasar vermeden açma tekniklerimizle hizmet veriyoruz.' },
    ],
  },
  'besiktas-ortakoy': {
    intro: 'Ortaköy Camii ve tarihi meydanıyla ünlü Ortaköy, Boğaz Köprüsü\'nün dibinde canlı bir semt yaşamına sahiptir. Karakteristik apartmanlarda ve meydan çevresindeki iş yerlerinde 7/24 kapı açma ve kilit değişimi hizmeti veriyoruz.',
    landmark: 'Ortaköy Camii ve Boğaz Köprüsü',
    transport: 'Ortaköy vapur iskelesi, otobüs hatları',
    faq: [
      { q: 'Ortaköy\'de gece çilingir bulunur mu?', a: 'Evet, Ortaköy\'de 7/24 hizmet veriyoruz. Gece saatlerinde de 0542 694 69 20\'yi arayabilirsiniz.' },
      { q: 'Ortaköy\'deki iş yeri kapısı açılır mı?', a: 'Evet, restoran, kafe ve ticari işyerlerinde kilit açma ve değişimi yapıyoruz.' },
    ],
  },
  'besiktas-levent': {
    intro: 'Büyük ve Küçük Levent olarak ikiye ayrılan bu finans bölgesinde İş Kuleleri, Kanyon AVM ve büyük şirket genel merkezleri yer alır. Ofis ve rezidans kapı sistemleri için Çilingirciniz 7/24 hizmetinizde.',
    landmark: 'İş Kuleleri ve Kanyon AVM',
    transport: 'M2 Levent ve 4. Levent metro istasyonları',
    faq: [
      { q: 'Levent\'te ofis kapısı açılır mı?', a: 'Evet, Levent\'teki plaza ve ofis binalarında 7/24 hizmet veriyoruz. Kurumsal kapı sistemlerinde tecrübeliyiz.' },
      { q: 'Levent\'te hangi hizmetleri sunuyorsunuz?', a: 'Kapı açma, kilit değişimi, silindir değişimi, oto çilingir ve anahtar kopyalama hizmetleri sunuyoruz.' },
    ],
  },
  'besiktas-arnavutkoy': {
    intro: 'Osmanlı döneminden kalma ahşap yalıları ve Boğaz kıyısındaki tarihi dokusuyla Arnavutköy, İstanbul\'un en özgün semtlerinden biridir. Tarihi yapılardaki eski kilit sistemleri için özel yetkinliğe sahip teknisyenlerimiz hizmetinizde.',
    landmark: 'Arnavutköy sahil şeridi ve tarihi yalılar',
    transport: 'Arnavutköy vapur iskelesi',
    faq: [
      { q: 'Arnavutköy\'deki eski yalı kapısı açılır mı?', a: 'Evet, tarihi yapılardaki eski tip kilitleri hasar vermeden açma konusunda deneyimliyiz.' },
      { q: 'Arnavutköy\'de 7/24 hizmet var mı?', a: 'Evet, 0542 694 69 20\'yi arayın. Arnavutköy\'e 20-30 dakikada ulaşıyoruz.' },
    ],
  },
  'besiktas-akatlar': {
    intro: 'Akatlar Sitesi ve çevresindeki güvenlikli konut kompleksleriyle tanınan Akatlar\'da site ve apartman kapı sistemlerinde uzmanlaşmış ekibimizle 7/24 hizmet veriyoruz.',
    landmark: 'Akatlar Sitesi ve Levent\'e yakınlık',
    transport: 'Levent metrobüs bağlantıları, minibüs hatları',
    faq: [
      { q: 'Akatlar\'da site giriş kilidi değişimi yapılır mı?', a: 'Evet, Akatlar\'daki sitelerin giriş kapısı ve daire kilit değişimlerini yapıyoruz.' },
      { q: 'Akatlar\'a kaç dakikada gelirsiniz?', a: 'Ortalama 20-25 dakikada Akatlar\'a ulaşıyoruz. 0542 694 69 20\'den bilgi alın.' },
    ],
  },
  'besiktas-balmumcu': {
    intro: 'Barbaros Bulvarı\'na yakın konumuyla ulaşımı kolay Balmumcu, konut ve küçük iş yeri karışımıyla orta yoğunlukta bir mahalledir. Her türlü kapı ve kilit sistemi için 7/24 hizmet sunuyoruz.',
    landmark: 'Barbaros Bulvarı bağlantısı',
    transport: 'Beşiktaş-Zincirlikuyu otobüs hatları',
    faq: [
      { q: 'Balmumcu\'da acil çilingir var mı?', a: 'Evet, Balmumcu\'ya 20-30 dakikada ulaşıyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Balmumcu\'da kilit değişimi yapıyor musunuz?', a: 'Evet, silindir ve çelik kapı kilidi değişimi yapıyoruz.' },
    ],
  },
  'besiktas-sinanpasa': {
    intro: 'Beşiktaş Çarşı\'sına komşu Sinanpaşa\'da konut ve ticari kullanım iç içe geçmiştir. Eski İstanbul dokusuyla harmanlanan modern yapılardaki çeşitli kilit sistemleri için deneyimliyiz.',
    landmark: 'Beşiktaş Çarşı yakını',
    transport: 'Beşiktaş İskelesi\'ne yürüme mesafesi',
    faq: [
      { q: 'Sinanpaşa\'da dükkan kapısı açılır mı?', a: 'Evet, Sinanpaşa\'daki iş yerleri ve konutlar için 7/24 hizmet veriyoruz.' },
      { q: 'Sinanpaşa\'da eski bina kilitleri açılır mı?', a: 'Evet, eski tip kilit sistemlerinde hasar vermeden açma yapıyoruz.' },
    ],
  },
  'besiktas-gayrettepe': {
    intro: 'Metro ve metrobüs hattının kesiştiği Gayrettepe, ofis binaları ve konut alanlarının bir arada bulunduğu yoğun bir kavşak semttir. Yüksek trafike rağmen 20 dakikada kapınızdayız.',
    landmark: 'Gayrettepe Metro/Metrobüs kavşağı',
    transport: 'M2 Gayrettepe, Zincirlikuyu metrobüs',
    faq: [
      { q: 'Gayrettepe\'de ofis kapısı açılır mı?', a: 'Evet, Gayrettepe\'deki ofis ve iş yerleri için 7/24 hizmet veriyoruz.' },
      { q: 'Gayrettepe\'ye kaç dakikada gelirsiniz?', a: 'Gayrettepe\'ye 15-25 dakikada ulaşıyoruz. 0542 694 69 20\'yi arayın.' },
    ],
  },
  'besiktas-yildiz': {
    intro: 'Yıldız Sarayı\'nın gölgesinde, koruluk alanına bitişik ve Çırağan Sarayı\'na yakın konumuyla Yıldız, prestijli otel ve rezidansların bulunduğu sakin bir semttir.',
    landmark: 'Yıldız Sarayı ve Çırağan Sarayı',
    transport: 'Beşiktaş otobüs hatları',
    faq: [
      { q: 'Yıldız\'da lüks konut kapısı açılır mı?', a: 'Evet, yüksek güvenlikli kapı ve kilit sistemlerinde deneyimliyiz. 0542 694 69 20\'yi arayın.' },
      { q: 'Yıldız\'da kilit değişimi yapıyor musunuz?', a: 'Evet, silindir değişimi ve çelik kapı kilidi değişimi hizmeti sunuyoruz.' },
    ],
  },
  'besiktas-kurucesme': {
    intro: 'Boğaz kıyısındaki Kuruçeşme, gece kulüpleri ve sahil restoranlarıyla yazın yoğun bir hayat sunar. Konut ve eğlence mekanları için kapı açma ve kilit değişimi hizmeti veriyoruz.',
    landmark: 'Kuruçeşme Parkı ve Boğaz kıyısı',
    transport: 'Kuruçeşme otobüs durağı',
    faq: [
      { q: 'Kuruçeşme\'de acil kapı açma hizmeti var mı?', a: 'Evet, 7/24 hizmet veriyoruz. Gece saatlerinde de 20-30 dakikada yanınızdayız.' },
      { q: 'Kuruçeşme\'de iş yeri kapısı açılır mı?', a: 'Evet, restoran ve kafe dahil her türlü iş yeri kapısı için hizmet veriyoruz.' },
    ],
  },
  'besiktas-visnezade': {
    intro: 'Beşiktaş merkeze yakın, sahile yürüme mesafesindeki Vişnezade, eski ve yeni apartmanların bir arada yer aldığı sakin bir konut mahallesidir. Çeşitli kilit sistemleri için 7/24 hizmet sunuyoruz.',
    landmark: 'Beşiktaş merkezi ve sahile yakınlık',
    transport: 'Beşiktaş minibüs hatları',
    faq: [
      { q: 'Vişnezade\'de çilingir hizmeti alabilir miyim?', a: 'Evet, Vişnezade\'ye 20-30 dakikada ulaşıyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Vişnezade\'de eski apartman kapısı açılır mı?', a: 'Evet, eski tip kilit ve kapı sistemlerinde de hizmet veriyoruz.' },
    ],
  },
  'besiktas-abbasaga': {
    intro: 'Abbasağa Parkı etrafında şekillenen ve sahile yakın konumuyla gözde bir yaşam alanı olan Abbasağa\'da, park çevresi cafelerin bulunduğu binalarda ve konutlarda 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Abbasağa Parkı',
    transport: 'Beşiktaş ana güzergahları',
    faq: [
      { q: 'Abbasağa\'da acil kapı açma hizmeti var mı?', a: 'Evet, Abbasağa\'ya 20-30 dakikada ulaşıyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Abbasağa\'da kilit değişimi yapıyor musunuz?', a: 'Evet, silindir ve çelik kapı kilidi dahil tüm kilit tiplerinde hizmet veriyoruz.' },
    ],
  },
  'besiktas-dikiliktas': {
    intro: 'Beşiktaş\'ın doğusunda, Şişli sınırına yakın Dikilitaş, yeni konut projelerinin yükseldiği gelişmekte olan bir mahalledir. Modern çelik kapı ve akıllı kilit sistemleri dahil her tür kapı için 7/24 hizmet veriyoruz.',
    landmark: 'Beşiktaş-Şişli sınır bölgesi',
    transport: 'Gayrettepe bağlantı hatları',
    faq: [
      { q: 'Dikilitaş\'ta yeni bina kapısı açılır mı?', a: 'Evet, modern çelik kapı sistemleri için deneyimliyiz. 0542 694 69 20\'yi arayın.' },
      { q: 'Dikilitaş\'ta kilit değişimi fiyatı nedir?', a: 'Yerinde inceleme sonrası net fiyat veriyoruz. Gizli ücret uygulamıyoruz.' },
    ],
  },

  // ── Şişli ────────────────────────────────────────────────────────────────
  'sisli-mecidiyekoy': {
    intro: 'İstanbul\'un finans ve iş dünyasının kalbindeki Mecidiyeköy, M2 metro ve metrobüs kavşağında konumlanmış devasa bir ticaret ve konut bölgesidir. Ofis kapılarından rezidans sistemlerine kadar 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Mecidiyeköy İş Merkezi ve Torun Center',
    transport: 'M2 Mecidiyeköy, Zincirlikuyu metrobüs',
    faq: [
      { q: 'Mecidiyeköy\'de ofis kapısı açılır mı?', a: 'Evet, plaza ve ofis binalarında 7/24 hizmet veriyoruz. 15-25 dakikada kapınızdayız.' },
      { q: 'Mecidiyeköy\'de kilit değişimi yapıyor musunuz?', a: 'Evet, kurumsal ve konut kilidi değişiminde deneyimliyiz.' },
    ],
  },
  'sisli-nisantasi': {
    intro: 'Teşvikiye Caddesi\'nin lüks markaları ve butik daireleriyle ünlü Nişantaşı\'nda çelik kapı ve özel güvenlik kilitleri için 7/24 hizmet veriyoruz. Yüksek güvenlik seviyesinde kilit sistemi konusunda da yönlendirme yapıyoruz.',
    landmark: 'Teşvikiye Caddesi ve City\'s Nişantaşı AVM',
    transport: 'Şişli-Mecidiyeköy arası otobüs hatları',
    faq: [
      { q: 'Nişantaşı\'nda lüks konut kapısı açılır mı?', a: 'Evet, yüksek güvenlikli kapı sistemlerinde deneyimliyiz. 20-30 dakikada yanınızdayız.' },
      { q: 'Nişantaşı\'nda kilit değişimi yapıyor musunuz?', a: 'Evet, A sınıfı kilit markaları konusunda da öneride bulunuyoruz.' },
    ],
  },
  'sisli-osmanbey': {
    intro: 'Tekstil ve konfeksiyon sektörünün kalbi Osmanbey\'de, iş yerlerinden konut dairelerine geniş bir yelpazede 7/24 çilingir hizmeti sunuyoruz. M2 Osmanbey istasyonuna yakın konumuyla hızlı ulaşım sağlıyoruz.',
    landmark: 'Osmanbey Tekstil Çarşısı',
    transport: 'M2 Osmanbey metro istasyonu',
    faq: [
      { q: 'Osmanbey\'de dükkan kapısı açılır mı?', a: 'Evet, Osmanbey\'deki iş yeri ve dükkan kapıları için 7/24 hizmet veriyoruz.' },
      { q: 'Osmanbey\'e kaç dakikada gelirsiniz?', a: 'Ortalama 15-25 dakikada Osmanbey\'e ulaşıyoruz.' },
    ],
  },
  'sisli-bomonti': {
    intro: 'Eski Bomonti Bira Fabrikası\'nın yeniden yaşama kazandırıldığı Bomonti, lüks rezidansları ve butik oteliyle hızla dönüşen bir semttir. Yeni rezidans çelik kapıları ve tarihi bina sistemleri için 7/24 hizmet sunuyoruz.',
    landmark: 'Bomonti Bira Fabrikası dönüşüm alanı',
    transport: 'Şişli-Bomonti minibüs ve otobüs hatları',
    faq: [
      { q: 'Bomonti\'de rezidans kapısı açılır mı?', a: 'Evet, yeni rezidansların çelik kapı sistemlerinde tecrübeli ekibimizle hizmet veriyoruz.' },
      { q: 'Bomonti\'de gece çilingir bulunur mu?', a: 'Evet, 7/24 hizmetimiz aktif. 0542 694 69 20\'yi arayın.' },
    ],
  },
  'sisli-harbiye': {
    intro: 'Askeri alanlar ve konsoloslukların çevrelediği Harbiye, lüks otel ve konut yapılarıyla güvenli bir semt karakteri taşır. Yüksek güvenlikli kilit sistemleri için uzman hizmet sunuyoruz.',
    landmark: 'Harbiye Açıkhava Tiyatrosu ve Askeri Müze',
    transport: 'Şişli otobüs hatları, Taksim yakınlığı',
    faq: [
      { q: 'Harbiye\'de güvenli kapı açılır mı?', a: 'Evet, yüksek güvenlikli kapı ve kilit sistemlerinde deneyimliyiz.' },
      { q: 'Harbiye\'ye kaç dakikada gelirsiniz?', a: 'Ortalama 15-20 dakikada Harbiye\'ye ulaşıyoruz.' },
    ],
  },
  'sisli-gulbahar': {
    intro: 'Şişli\'nin sessiz konut mahallelerinden Gülbahar, çoğunlukla aile tipi apartmanlardan oluşur. Standart konut kapısı açma ve kilit değişimi için hızlı müdahale sağlıyoruz.',
    landmark: 'Gülbahar Caddesi konut dokusu',
    transport: 'Şişli bağlantı otobüs hatları',
    faq: [
      { q: 'Gülbahar\'da acil çilingir var mı?', a: 'Evet, 7/24 hizmet veriyoruz. 0542 694 69 20\'yi arayın, 20-30 dakikada geliyoruz.' },
      { q: 'Gülbahar\'da kilit değişimi yapıyor musunuz?', a: 'Evet, silindir ve kapı kilidi değişimi hizmeti sunuyoruz.' },
    ],
  },
  'sisli-ferikoy': {
    intro: 'Feriköy Pazarı ve mezarlık alanıyla sakin bir doku sergileyen Feriköy\'de küçük esnaf ve konut yapısının iç içe olduğu yapıda, eski tip kilit sistemleri için özel deneyimimizle hizmet sunuyoruz.',
    landmark: 'Feriköy Semt Pazarı ve Mezarlık',
    transport: 'Şişli-Okmeydanı otobüs hatları',
    faq: [
      { q: 'Feriköy\'de eski bina kilidi açılır mı?', a: 'Evet, eski tip kilit ve kapı sistemlerinde deneyimliyiz. Hasar vermeden açma yapıyoruz.' },
      { q: 'Feriköy\'de 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
    ],
  },
  'sisli-tesvikiye': {
    intro: 'Nişantaşı\'nın kalbinde konumlanan Teşvikiye, Teşvikiye Camii ve Abdi İpekçi Caddesi\'nin lüks atmosferiyle prestijli bir konut semtidir. Yüksek güvenlik standartlı kapı kilitleri için uzman hizmet sunuyoruz.',
    landmark: 'Teşvikiye Camii ve Abdi İpekçi Caddesi',
    transport: 'Şişli otobüs hatları',
    faq: [
      { q: 'Teşvikiye\'de lüks daire kapısı açılır mı?', a: 'Evet, yüksek güvenlikli kapı sistemlerinde deneyimliyiz.' },
      { q: 'Teşvikiye\'ye kaç dakikada gelirsiniz?', a: 'Ortalama 15-25 dakikada Teşvikiye\'ye ulaşıyoruz.' },
    ],
  },
  'sisli-kurtulus': {
    intro: 'Farklı toplulukların bir arada yaşadığı çok kültürlü Kurtuluş, kalabalık sokakları ve tarihi binaları ile Şişli\'nin en canlı mahallelerinden biridir. Eski ve yeni bina kapı sistemleri için deneyimliyiz.',
    landmark: 'Kurtuluş Parkı ve Pangaltı yakınlığı',
    transport: 'Şişli-Kurtuluş otobüs hatları',
    faq: [
      { q: 'Kurtuluş\'ta eski bina kapısı açılır mı?', a: 'Evet, eski tip binalardaki kilitleri hasar vermeden açıyoruz.' },
      { q: 'Kurtuluş\'ta 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
    ],
  },
  'sisli-pangalti': {
    intro: 'Hastaneleri ve eğitim kurumlarıyla tanınan Pangaltı, ailelerin tercih ettiği sakin bir mahalledir. Konut ve hastane çevresi kapı açma hizmetleri için 7/24 hizmet sunuyoruz.',
    landmark: 'Pangaltı hastaneleri ve okulları',
    transport: 'Şişli-Gayrettepe otobüs hatları',
    faq: [
      { q: 'Pangaltı\'da acil çilingir alabilir miyim?', a: 'Evet, Pangaltı\'ya 20-25 dakikada ulaşıyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Pangaltı\'da kilit değişimi yapıyor musunuz?', a: 'Evet, konut ve iş yeri kilit değişimi hizmetleri sunuyoruz.' },
    ],
  },
  'sisli-esentepe': {
    intro: 'Büyük şirket genel merkezlerinin yoğunlaştığı Esentepe, Yapı Kredi Plaza ve çevresindeki ofis bloklarıyla Şişli\'nin iş dünyası kalbidir. Ofis kapı sistemleri için 7/24 uzman hizmet sunuyoruz.',
    landmark: 'Yapı Kredi Plaza ve ofis binaları bölgesi',
    transport: 'M2 Gayrettepe yakını, otobüs hatları',
    faq: [
      { q: 'Esentepe\'de ofis kapısı açılır mı?', a: 'Evet, kurumsal yapılarda 7/24 hizmet veriyoruz.' },
      { q: 'Esentepe\'ye kaç dakikada gelirsiniz?', a: 'Esentepe\'ye ortalama 15-20 dakikada ulaşıyoruz.' },
    ],
  },

  // ── Sarıyer ──────────────────────────────────────────────────────────────
  'sariyer-maslak': {
    intro: 'Spine Tower ve İTÜ kampüsünün gölgesindeki Maslak, dev ofis kulelerinin ve Boğaz manzaralı rezidansların yükseldiği İstanbul\'un iş merkezidir. Plaza ofislerinden konut projelerine 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Spine Tower ve İTÜ Maslak Kampüsü',
    transport: 'M2 Maslak metro istasyonu',
    faq: [
      { q: 'Maslak\'ta plaza kapısı açılır mı?', a: 'Evet, ofis binaları ve rezidanslarda 7/24 hizmet veriyoruz. 15-20 dakikada yanınızdayız.' },
      { q: 'Maslak\'ta kilit değişimi yapıyor musunuz?', a: 'Evet, ofis ve konut kilidi değişimi hizmeti sunuyoruz.' },
    ],
  },
  'sariyer-istinye': {
    intro: 'Tarihi tersane alanından dönüşen İstinye, İstinye Park AVM ve çevresindeki lüks konut kompleksleriyle Sarıyer\'in en gözde bölgelerinden biridir. AVM ve lüks konut kapı sistemleri için 7/24 hizmet veriyoruz.',
    landmark: 'İstinye Park AVM ve İstinye Körfezi',
    transport: 'Sarıyer otobüs hatları, vapur güzergahı',
    faq: [
      { q: 'İstinye\'de lüks konut kapısı açılır mı?', a: 'Evet, yüksek güvenlikli kapı sistemlerinde tecrübeli ekibimizle hizmet veriyoruz.' },
      { q: 'İstinye\'ye kaç dakikada gelirsiniz?', a: 'İstinye\'ye ortalama 20-30 dakikada ulaşıyoruz.' },
    ],
  },
  'sariyer-tarabya': {
    intro: 'Boğaz kıyısındaki yalıları ve balıkçı restoranlarıyla bilinen Tarabya, yazın turistlerin uğrağı olan huzurlu bir semttir. Tarihi yalı yapılardaki eski kilit sistemleri için de hizmet veriyoruz.',
    landmark: 'Tarabya Koyu ve yalı bölgesi',
    transport: 'Sarıyer-Tarabya otobüs güzergahı',
    faq: [
      { q: 'Tarabya\'da tarihi yalı kapısı açılır mı?', a: 'Evet, eski tip kilit sistemlerinde hasar vermeden açma yapıyoruz.' },
      { q: 'Tarabya\'ya kaç dakikada gelirsiniz?', a: 'Ortalama 25-35 dakikada Tarabya\'ya ulaşıyoruz.' },
    ],
  },
  'sariyer-yenikoy': {
    intro: 'Boğaz\'a en güzel manzaralardan birini sunan Yeniköy, tarihi ahşap yapıları ve sakin sokakları ile ayrıcalıklı bir atmosfer taşır. Eski tip kilit sistemleri için özel uzmanlarımızla hizmet veriyoruz.',
    landmark: 'Yeniköy Sahili ve tarihi köy evleri',
    transport: 'Yeniköy vapur iskelesi',
    faq: [
      { q: 'Yeniköy\'de ahşap bina kapısı açılır mı?', a: 'Evet, tarihi yapılardaki özel kilit sistemlerinde deneyimliyiz.' },
      { q: 'Yeniköy\'de 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
    ],
  },
  'sariyer-buyukdere': {
    intro: 'Sabancı Center gibi kurumsal yapıların bulunduğu Büyükdere, Maslak\'a komşu konumuyla Sarıyer\'in ticari ayağını oluşturur. Ofis ve çevredeki konut kapıları için 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Sabancı Center ve Büyükdere Caddesi',
    transport: 'M2 Hacıosman, otobüs hatları',
    faq: [
      { q: 'Büyükdere\'de kurumsal ofis kapısı açılır mı?', a: 'Evet, büyük ofis yapılarında 7/24 hizmet veriyoruz.' },
      { q: 'Büyükdere\'ye kaç dakikada gelirsiniz?', a: 'Büyükdere\'ye ortalama 20-30 dakikada ulaşıyoruz.' },
    ],
  },
  'sariyer-ayazaga': {
    intro: 'İTÜ Ayazağa kampüsü ve gelişen konut projeleriyle öne çıkan Ayazağa\'da M2 metro hattı sayesinde hızlı ulaşım sağlıyoruz. Öğrenci konutlarından site kapılarına kadar 7/24 hizmet sunuyoruz.',
    landmark: 'İTÜ Ayazağa Kampüsü',
    transport: 'M2 Ayazağa metro istasyonu',
    faq: [
      { q: 'Ayazağa\'da öğrenci yurdu kapısı açılır mı?', a: 'Evet, her türlü konut tipinde 7/24 hizmet veriyoruz.' },
      { q: 'Ayazağa\'ya kaç dakikada gelirsiniz?', a: 'Ayazağa\'ya ortalama 20-25 dakikada ulaşıyoruz.' },
    ],
  },
  'sariyer-zekeriyakoy': {
    intro: 'Orman alanlarına komşu Zekeriyaköy, villa evleri ve bahçeli konutlarıyla İstanbul\'un şehir gürültüsünden uzaklaşmak isteyenlerin tercihi. Bu bölgedeki özel kapı ve güvenlik sistemleri için uzman hizmet sunuyoruz.',
    landmark: 'Zekeriyaköy villa bölgesi ve orman alanları',
    transport: '23E ve 340 otobüs hatları',
    faq: [
      { q: 'Zekeriyaköy\'de villa kapısı açılır mı?', a: 'Evet, müstakil ev ve villa kapılarında deneyimliyiz. 30-40 dakikada yanınızdayız.' },
      { q: 'Zekeriyaköy\'de güvenlik kilidi değişimi yapılır mı?', a: 'Evet, yüksek güvenlikli kilit sistemleri de dahil her türlü değişim yapıyoruz.' },
    ],
  },
  'sariyer-bahcekoy': {
    intro: 'Belgrad Ormanı\'na komşu Bahçeköy, piknik alanları ve doğayla iç içe bir köy dokusuna sahiptir. Şehirden uzak bu nokta için de 7/24 ulaşabileceğiniz çilingir hizmetimiz mevcuttur.',
    landmark: 'Belgrad Ormanı ve piknik alanları',
    transport: 'Sarıyer-Bahçeköy minibüs güzergahı',
    faq: [
      { q: 'Bahçeköy\'e kaç dakikada gelirsiniz?', a: 'Bahçeköy\'e ortalama 35-45 dakikada ulaşıyoruz.' },
      { q: 'Bahçeköy\'de 7/24 çilingir var mı?', a: 'Evet, uzak mesafelere de hizmet veriyoruz. 0542 694 69 20\'yi arayın.' },
    ],
  },
  'sariyer-kilyos': {
    intro: 'Karadeniz kıyısındaki Kilyos, yazlık konutları ve plaj otelleriyle mevsimlik yoğunluk yaşar. Tatil konutları ve yazlık evlerin kilit sorunları için de hizmet veriyoruz.',
    landmark: 'Kilyos Plajı ve Karadeniz kıyısı',
    transport: 'Sarıyer-Kilyos minibüs hattı',
    faq: [
      { q: 'Kilyos\'ta yazlık konut kapısı açılır mı?', a: 'Evet, sezon başında veya kapanışında kilit sorunları için Kilyos\'a da ulaşıyoruz.' },
      { q: 'Kilyos\'a kaç dakikada gelirsiniz?', a: 'Kilyos\'a ortalama 40-55 dakikada ulaşıyoruz; durumu önceden bildiririz.' },
    ],
  },
  'sariyer-derbent': {
    intro: 'Rumeli Hisarı\'nın gerisinde Boğaz manzarasıyla köy dokusunu koruyan Derbent\'te hem tarihi hem modern yapılar için kilit hizmetleri sunuyoruz.',
    landmark: 'Rumeli Hisarı\'na yakınlık',
    transport: 'Sarıyer otobüs güzergahı',
    faq: [
      { q: 'Derbent\'te 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın. Derbent\'e 30-40 dakikada ulaşıyoruz.' },
      { q: 'Derbent\'te kilit değişimi yapıyor musunuz?', a: 'Evet, köy evi ve Boğaz manzaralı konutlarda kilit değişimi yapıyoruz.' },
    ],
  },
  'sariyer-rumelifeneri': {
    intro: 'İstanbul Boğazı\'nın Karadeniz\'e açıldığı noktada konumlanan Rumelifeneri, deniz feneri ve balıkçı restoran kültürüyle özgün bir karaktere sahip bir semttir. Her türlü konut için çilingir hizmeti sunuyoruz.',
    landmark: 'Rumeli Feneri ve Boğaz çıkış noktası',
    transport: 'Sarıyer-Rumelifeneri minibüs hattı',
    faq: [
      { q: 'Rumelifeneri\'ne kaç dakikada gelirsiniz?', a: 'Rumelifeneri\'ne ortalama 45-60 dakikada ulaşıyoruz; durum önceden bildirilir.' },
      { q: 'Rumelifeneri\'nde 7/24 çilingir var mı?', a: 'Evet, uzak noktalara da hizmet veriyoruz. 0542 694 69 20\'yi arayın.' },
    ],
  },
  'sariyer-pinar': {
    intro: 'Maslak\'a yakın konumu ve gelişen konut projeleriyle Pınar mahallesi, yeni yapı kilit sistemleri için sıkça talep aldığımız bir bölgedir. 7/24 hizmet sunuyoruz.',
    landmark: 'Maslak\'a yakınlık ve yeni konut projeleri',
    transport: 'M2 Hacıosman yakını',
    faq: [
      { q: 'Pınar\'da yeni bina kapısı açılır mı?', a: 'Evet, modern çelik kapı sistemleri için tecrübeli ekibimizle hizmet veriyoruz.' },
      { q: 'Pınar\'a kaç dakikada gelirsiniz?', a: 'Ortalama 20-30 dakikada Pınar\'a ulaşıyoruz.' },
    ],
  },
  'sariyer-gumusdere': {
    intro: 'Karadeniz kıyısındaki Gümüşdere, tatil köyleri ve yazlık konutların tercih ettiği sakin bir semttir. Mevsimlik konut kullanıcıları için kilit değişimi ve kapı açma hizmetleri sunuyoruz.',
    landmark: 'Gümüşdere sahili ve tatil tesisleri',
    transport: 'Kilyos güzergahı minibüs hatları',
    faq: [
      { q: 'Gümüşdere\'de yazlık konut kapısı açılır mı?', a: 'Evet, mevsimlik konutlarda da hizmet veriyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Gümüşdere\'ye kaç dakikada gelirsiniz?', a: 'Ortalama 40-55 dakikada Gümüşdere\'ye ulaşıyoruz.' },
    ],
  },
  'sariyer-kumkoy': {
    intro: 'Karadeniz kıyısında Sarıyer\'in kuzeyine doğru uzanan Kumköy, giderek artan villa ve tatil konutlarına sahip gelişen bir bölgedir. Uzak mesafelere de hizmet veriyoruz.',
    landmark: 'Karadeniz kıyısı ve tatil bölgesi',
    transport: 'İstanbul-Kilyos güzergahı',
    faq: [
      { q: 'Kumköy\'e kaç dakikada gelirsiniz?', a: 'Kumköy\'e ortalama 45-60 dakikada ulaşıyoruz; önceden bilgi veriyoruz.' },
      { q: 'Kumköy\'de 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
    ],
  },

  // ── Kağıthane ─────────────────────────────────────────────────────────────
  'kagithane-caglayan': {
    intro: 'İstanbul Adliye Sarayı\'na yakın konumu ve ticaret alanlarıyla Çağlayan, hem iş yerleri hem konut binaları için yoğun çilingir talebi alınan bir semttir. Metrobüs bağlantısı sayesinde hızlı ulaşım sağlıyoruz.',
    landmark: 'İstanbul Adliye Sarayı ve çevre iş binaları',
    transport: 'Metrobüs Çağlayan durağı',
    faq: [
      { q: 'Çağlayan\'da iş yeri kapısı açılır mı?', a: 'Evet, ofis ve ticari kapılar dahil 7/24 hizmet veriyoruz.' },
      { q: 'Çağlayan\'a kaç dakikada gelirsiniz?', a: 'Ortalama 15-25 dakikada Çağlayan\'a ulaşıyoruz.' },
    ],
  },
  'kagithane-seyrantepe': {
    intro: 'Türk Telekom Stadyumu yakınındaki modern rezidansları ve hızla yenilenen yapısıyla Seyrantepe, Kağıthane\'nin yeni yüzüdür. Yeni rezidans kapı sistemleri ve site kilitleri için 7/24 hizmet veriyoruz.',
    landmark: 'Türk Telekom Stadyumu yakınlığı ve yeni siteler',
    transport: 'M7 Seyrantepe istasyonu',
    faq: [
      { q: 'Seyrantepe\'de yeni rezidans kapısı açılır mı?', a: 'Evet, modern çelik kapı sistemlerinde tecrübeli ekibimizle hizmet veriyoruz.' },
      { q: 'Seyrantepe\'ye kaç dakikada gelirsiniz?', a: 'Seyrantepe\'ye ortalama 15-20 dakikada ulaşıyoruz.' },
    ],
  },
  'kagithane-gultepe': {
    intro: 'Kağıthane\'nin köklü mahallelerinden Gültepe, yoğun apartman yapılaşması ve canlı sokak yaşamıyla tanınır. Eski bina kapı kilitleri ve ortak alan sistemleri için hızlı müdahale yapıyoruz.',
    landmark: 'Gültepe Çarşısı ve yoğun konut dokusu',
    transport: 'Kağıthane-Gültepe minibüs güzergahı',
    faq: [
      { q: 'Gültepe\'de eski apartman kilidi açılır mı?', a: 'Evet, eski tip kilit ve bina kapılarında deneyimliyiz.' },
      { q: 'Gültepe\'de 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
    ],
  },
  'kagithane-hamidiye': {
    intro: 'Kağıthane Vadisi\'ne yakın Hamidiye\'de tarihi doku ile yeni yapılaşma iç içe geçmiştir. Her iki yapı tipindeki kapı ve kilit sistemleri için deneyimliyiz.',
    landmark: 'Kağıthane Vadisi yakınlığı',
    transport: 'Kağıthane otobüs hatları',
    faq: [
      { q: 'Hamidiye\'de acil kapı açma hizmeti var mı?', a: 'Evet, 7/24 hizmet veriyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Hamidiye\'de kilit değişimi yapıyor musunuz?', a: 'Evet, konut ve apartman kapısı kilidi değişimi yapıyoruz.' },
    ],
  },
  'kagithane-nurtepe': {
    intro: 'Kağıthane\'nin yüksek kesimlerindeki Nurtepe, yoğun nüfuslu toplu konut alanlarıyla tanınan bir mahalledir. Apartman ve site giriş sistemleri için 7/24 kapsamlı hizmet sunuyoruz.',
    landmark: 'Nurtepe toplu konut alanları',
    transport: 'Kağıthane otobüs güzergahı',
    faq: [
      { q: 'Nurtepe\'de toplu konut kapısı açılır mı?', a: 'Evet, site ve apartman giriş kapılarında deneyimliyiz.' },
      { q: 'Nurtepe\'ye kaç dakikada gelirsiniz?', a: 'Ortalama 20-30 dakikada Nurtepe\'ye ulaşıyoruz.' },
    ],
  },
  'kagithane-celiktepe': {
    intro: 'Küçük sanayi ve konut alanlarının iç içe olduğu Çeliktepe\'de hem ticari hem konut kapı sistemleri için 7/24 müdahale imkanı sunuyoruz.',
    landmark: 'Çeliktepe sanayi ve konut karma bölgesi',
    transport: 'Kağıthane metrobüs bağlantısı',
    faq: [
      { q: 'Çeliktepe\'de sanayi dükkanı kapısı açılır mı?', a: 'Evet, ticari ve konut kapıları için 7/24 hizmet veriyoruz.' },
      { q: 'Çeliktepe\'de 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
    ],
  },
  'kagithane-gursel': {
    intro: 'Kentsel dönüşümün etkisiyle yenilenen yapılarıyla Gürsel, hem eski hem yeni kapı sistemleri barındıran dinamik bir konut mahallesidir. Her ikisi için de uzmanlarımızla hizmet veriyoruz.',
    landmark: 'Kağıthane kentsel dönüşüm konut alanları',
    transport: 'Kağıthane otobüs hatları',
    faq: [
      { q: 'Gürsel\'de kentsel dönüşüm yeni bina kapısı açılır mı?', a: 'Evet, modern çelik kapı sistemlerinde tecrübeli ekibimizle hizmet veriyoruz.' },
      { q: 'Gürsel\'de 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
    ],
  },
  'kagithane-harmantepe': {
    intro: 'Kağıthane\'nin sakin konut mahallelerinden Harmantepe, çoğunlukla aile tipi apartmanlardan oluşur. Standart konut kapısı açma ve kilit değişimi için 7/24 hizmet sunuyoruz.',
    landmark: 'Harmantepe Parkı ve konut dokusu',
    transport: 'Kağıthane otobüs hatları',
    faq: [
      { q: 'Harmantepe\'de acil çilingir alabilir miyim?', a: 'Evet, Harmantepe\'ye 20-30 dakikada ulaşıyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Harmantepe\'de kilit değişimi yapıyor musunuz?', a: 'Evet, silindir ve kapı kilidi değişimi hizmeti sunuyoruz.' },
    ],
  },
  'kagithane-kustepe': {
    intro: 'Şişli sınırına komşu olan Kuştepe, yoğun yapılaşmış ve nüfus yoğunluğunun yüksek olduğu bir mahalledir. Hızlı müdahale gerektiren kapı açma taleplerine 20-25 dakikada yanıt veriyoruz.',
    landmark: 'Şişli-Kağıthane sınır bölgesi',
    transport: 'Şişli-Kağıthane arası otobüs hatları',
    faq: [
      { q: 'Kuştepe\'de acil kapı açma hizmeti var mı?', a: 'Evet, yoğun mahalledeki her türlü kapıda 7/24 müdahale yapıyoruz.' },
      { q: 'Kuştepe\'ye kaç dakikada gelirsiniz?', a: 'Kuştepe\'ye ortalama 15-25 dakikada ulaşıyoruz.' },
    ],
  },
  'kagithane-ortabayir': {
    intro: 'Kağıthane Vadisi çevresindeki Ortabayır\'da tarihi doku ile yeni yapılaşma bir arada yaşar. Konut ve ticari kapı sistemleri için 7/24 hizmet sunuyoruz.',
    landmark: 'Kağıthane Vadisi çevresi',
    transport: 'Kağıthane otobüs güzergahı',
    faq: [
      { q: 'Ortabayır\'da 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
      { q: 'Ortabayır\'da kilit değişimi yapıyor musunuz?', a: 'Evet, her türlü kilit sisteminde değişim hizmeti sunuyoruz.' },
    ],
  },
  'kagithane-talatpasa': {
    intro: 'Talatpaşa Caddesi boyunca uzanan ticaret ve konut karma dokusuyla Talatpaşa, Kağıthane\'nin en hareketli güzergahlarından biridir. İş yeri ve konut kapıları için 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Talatpaşa Caddesi ticaret bölgesi',
    transport: 'Kağıthane metrobüs bağlantısı',
    faq: [
      { q: 'Talatpaşa\'da dükkan kapısı açılır mı?', a: 'Evet, cadde üzerindeki iş yerleri ve konutlar için 7/24 hizmet veriyoruz.' },
      { q: 'Talatpaşa\'ya kaç dakikada gelirsiniz?', a: 'Talatpaşa\'ya ortalama 15-25 dakikada ulaşıyoruz.' },
    ],
  },
  'kagithane-gulbag': {
    intro: 'Kağıthane\'nin konut ağırlıklı sakin mahallelerinden Gülbağ, Gülbağ Parkı çevresinde şekillenen aile yaşamına uygun bir yapıya sahiptir. Konut kapısı açma ve kilit değişimi için hizmet sunuyoruz.',
    landmark: 'Gülbağ Parkı ve konut bölgesi',
    transport: 'Kağıthane yerel otobüs hatları',
    faq: [
      { q: 'Gülbağ\'da acil çilingir var mı?', a: 'Evet, Gülbağ\'a 20-30 dakikada ulaşıyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Gülbağ\'da kilit değişimi yapıyor musunuz?', a: 'Evet, konut kilidi değişimi hizmeti sunuyoruz.' },
    ],
  },
  'kagithane-hurriyet': {
    intro: 'Kentsel dönüşümün etkisiyle değişen toplu konut alanlarıyla Hürriyet, yeni yapılarda modern kapı sistemleri gerektiren bir mahalledir. 7/24 hizmet sunuyoruz.',
    landmark: 'Kağıthane toplu konut alanları',
    transport: 'Kağıthane otobüs hatları',
    faq: [
      { q: 'Hürriyet\'te yeni bina kapısı açılır mı?', a: 'Evet, modern çelik kapı sistemlerinde tecrübeliyiz.' },
      { q: 'Hürriyet\'te 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
    ],
  },
  'kagithane-emniyetevleri': {
    intro: 'Güvenlik odaklı konut projeleriyle şekillenen Emniyet Evleri\'nde, site ve bağımsız konut için kapsamlı kilit çözümleri sunuyoruz. Güvenlik sınıfı yüksek kilit sistemleri konusunda da yönlendirme yapıyoruz.',
    landmark: 'Kağıthane güney sınırı güvenli konut bölgesi',
    transport: 'Kağıthane bağlantı hatları',
    faq: [
      { q: 'Emniyet Evleri\'nde site kapısı açılır mı?', a: 'Evet, güvenlikli site kapılarında 7/24 hizmet veriyoruz.' },
      { q: 'Emniyet Evleri\'ne kaç dakikada gelirsiniz?', a: 'Ortalama 20-30 dakikada Emniyet Evleri\'ne ulaşıyoruz.' },
    ],
  },
  'kagithane-sultanselim': {
    intro: 'Kağıthane\'nin en büyük ve yoğun mahallelerinden Sultan Selim, kentsel dönüşüm projeleriyle hızla değişmektedir. Yoğun konut talebine yanıt verebilecek araç filosuyla 7/24 hizmet sunuyoruz.',
    landmark: 'Sultan Selim Camii ve büyük konut dokusu',
    transport: 'Kağıthane-Eyüp bağlantı güzergahı',
    faq: [
      { q: 'Sultan Selim\'de acil kapı açma hizmeti var mı?', a: 'Evet, Sultan Selim\'e 15-25 dakikada ulaşıyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Sultan Selim\'de kilit değişimi yapıyor musunuz?', a: 'Evet, her türlü konut kilidi değişimi hizmeti sunuyoruz.' },
    ],
  },

  // ── Eyüpsultan ────────────────────────────────────────────────────────────
  'eyupsultan-alibeykoy': {
    intro: 'T5 tramvay hattıyla İstanbul\'a bağlanan Alibeyköy, yeni konut siteleri ve geniş konut projelerinin odak noktasıdır. Site giriş kapılarından daire kapılarına kadar tüm Alibeyköy genelinde 7/24 çilingir hizmeti veriyoruz.',
    landmark: 'Alibeyköy Göleti ve T5 tramvay hattı',
    transport: 'T5 Alibeyköy tramvay durağı',
    faq: [
      { q: 'Alibeyköy\'de site kapısı açılır mı?', a: 'Evet, site giriş ve daire kapılarında 7/24 hizmet veriyoruz. 15-20 dakikada yanınızdayız.' },
      { q: 'Alibeyköy\'de kilit değişimi yapıyor musunuz?', a: 'Evet, konut kilidi ve silindir değişimi yapıyoruz.' },
    ],
  },
  'eyupsultan-gokturk': {
    intro: 'Lüks villaları ve golf kulübüyle İstanbul\'un en seçkin sayfiye mahallelerinden biri olan Göktürk\'te, özel kapı güvenlik sistemleri ve villa kilitleri için uzman ekibimizle hizmet sunuyoruz.',
    landmark: 'Göktürk Ormanları ve Golf Kulübü',
    transport: 'TEM Otoyolu bağlantısı, özel araç bölgesi',
    faq: [
      { q: 'Göktürk\'te villa kapısı açılır mı?', a: 'Evet, müstakil ev ve villa kapılarında özel deneyimimiz mevcuttur. 25-35 dakikada yanınızdayız.' },
      { q: 'Göktürk\'te güvenlik kilidi değişimi yapılır mı?', a: 'Evet, yüksek güvenlikli kilit sistemleri de dahil her türlü değişim yapıyoruz.' },
    ],
  },
  'eyupsultan-kemerburgaz': {
    intro: 'Belgrad Ormanı\'nın kenarında konumlanan Kemerburgaz, yeşil alanları ve köy dokusuyla doğa içinde sakin bir yaşam sunar. Orman kenarı konutlar için de 7/24 çilingir hizmeti veriyoruz.',
    landmark: 'Kemerburgaz Ormanı ve Alibeyköy Barajı',
    transport: 'Eyüpsultan-Kemerburgaz minibüs güzergahı',
    faq: [
      { q: 'Kemerburgaz\'a kaç dakikada gelirsiniz?', a: 'Kemerburgaz\'a ortalama 30-45 dakikada ulaşıyoruz.' },
      { q: 'Kemerburgaz\'da villa kapısı açılır mı?', a: 'Evet, köy evi ve villa kapı sistemlerinde hizmet veriyoruz.' },
    ],
  },
  'eyupsultan-rami': {
    intro: 'Tarihi Rami Kışlası\'nın dönüşüm sürecinde olan Rami, sanayi ve konut karışımı büyük bir yerleşim alanıdır. Fabrika, depo ve konut kapı sistemleri için 7/24 hizmet sunuyoruz.',
    landmark: 'Rami Kışlası dönüşüm projesi alanı',
    transport: 'T4 Rami tramvay durağı',
    faq: [
      { q: 'Rami\'de sanayi kapısı açılır mı?', a: 'Evet, fabrika ve atölye kapıları dahil her türlü kapı için hizmet veriyoruz.' },
      { q: 'Rami\'ye kaç dakikada gelirsiniz?', a: 'Rami\'ye ortalama 15-25 dakikada ulaşıyoruz.' },
    ],
  },
  'eyupsultan-islambey': {
    intro: 'Eyüpsultan\'ın köklü mahallelerinden İslambey, tarihi yapılarıyla özgün bir doku sergiler. Eski binalardaki özel kilit sistemleri için de uzmanlarımızla hizmet veriyoruz.',
    landmark: 'Eyüp merkezi yakınlığı ve tarihi yapılar',
    transport: 'Eyüpsultan otobüs güzergahı',
    faq: [
      { q: 'İslambey\'de eski bina kapısı açılır mı?', a: 'Evet, tarihi yapı kapılarında hasar vermeden açma yapıyoruz.' },
      { q: 'İslambey\'de 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
    ],
  },
  'eyupsultan-topculer': {
    intro: 'Haliç kıyısındaki Topçular\'da sanayi ve depoların yanı sıra yakın çevredeki konutlar için de 7/24 çilingir hizmeti veriyoruz. Her türlü kapı sistemi için hızlı müdahale sağlıyoruz.',
    landmark: 'Haliç kıyısı ve depo-sanayi alanları',
    transport: 'Haliç güzergahı otobüs hatları',
    faq: [
      { q: 'Topçular\'da depo kapısı açılır mı?', a: 'Evet, sanayi ve ticari kapılar için 7/24 hizmet veriyoruz.' },
      { q: 'Topçular\'a kaç dakikada gelirsiniz?', a: 'Topçular\'a ortalama 20-30 dakikada ulaşıyoruz.' },
    ],
  },
  'eyupsultan-silahtaraga': {
    intro: 'Haliç kıyısında Santral İstanbul\'la yeniden hayat bulan Silahtarağa, kültür ve sanat mekanlarının yanı sıra çevresindeki konut alanlarıyla dikkat çeker. Bu dönüşüm bölgesinde her türlü kapı sistemi için hizmet veriyoruz.',
    landmark: 'Santral İstanbul (eski Silahtarağa Elektrik Santrali)',
    transport: 'Eyüpsultan otobüs güzergahı',
    faq: [
      { q: 'Silahtarağa\'da 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
      { q: 'Silahtarağa\'da konut kapısı açılır mı?', a: 'Evet, her türlü konut tipinde hizmet veriyoruz.' },
    ],
  },
  'eyupsultan-emniyettepe': {
    intro: 'Eyüpsultan\'ın yoğun nüfuslu mahallelerinden Emniyettepe\'de orta gelir grubu konutları ağırlıklıdır. Hızlı müdahale gerektiren konut kapısı açma ve kilit değişimi için 7/24 hizmet sunuyoruz.',
    landmark: 'Eyüpsultan merkezi yakınlığı',
    transport: 'Eyüpsultan otobüs hatları',
    faq: [
      { q: 'Emniyettepe\'de acil kapı açma hizmeti var mı?', a: 'Evet, 20-25 dakikada Emniyettepe\'ye ulaşıyoruz.' },
      { q: 'Emniyettepe\'de kilit değişimi yapıyor musunuz?', a: 'Evet, konut kilidi değişimi hizmeti sunuyoruz.' },
    ],
  },
  'eyupsultan-dugmeciler': {
    intro: 'Tarihi sanayi karakterini koruyan Düğmeciler\'de Haliç kıyısı boyunca küçük üretim alanları ve konutlar bir arada yer alır. Her iki yapı tipi için de 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Haliç kıyısı ve tarihi dokular',
    transport: 'Haliç güzergahı, Eyüpsultan bağlantı hatları',
    faq: [
      { q: 'Düğmeciler\'de 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
      { q: 'Düğmeciler\'de ticari kapı açılır mı?', a: 'Evet, sanayi ve konut kapıları için hizmet veriyoruz.' },
    ],
  },
  'eyupsultan-yesilpinar': {
    intro: 'Konut ve ticaretin dengelendiği Yeşilpınar\'da her iki kullanım türü için de 7/24 çilingir hizmeti veriyoruz. Yeşilpınar Caddesi çevresindeki yapılar hizmet alanımız içindedir.',
    landmark: 'Yeşilpınar Caddesi ve karma kullanım bölgesi',
    transport: 'Eyüpsultan otobüs güzergahı',
    faq: [
      { q: 'Yeşilpınar\'da acil çilingir alabilir miyim?', a: 'Evet, Yeşilpınar\'a 20-30 dakikada ulaşıyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Yeşilpınar\'da kilit değişimi yapıyor musunuz?', a: 'Evet, konut ve iş yeri kilidi değişimi hizmeti sunuyoruz.' },
    ],
  },
  'eyupsultan-guzeltepe': {
    intro: 'Eyüpsultan\'ın yüksek kesimlerinden Güzeltepe, Haliç ve İstanbul manzarası sunan yeni konut projeleriyle dikkat çekmektedir. Modern kapı sistemlerinde uzman ekibimizle 7/24 hizmet veriyoruz.',
    landmark: 'Haliç ve İstanbul panoraması, yeni konut projeleri',
    transport: 'Eyüpsultan yerel otobüs hatları',
    faq: [
      { q: 'Güzeltepe\'de yeni bina kapısı açılır mı?', a: 'Evet, modern çelik kapı sistemlerinde tecrübeliyiz.' },
      { q: 'Güzeltepe\'ye kaç dakikada gelirsiniz?', a: 'Güzeltepe\'ye ortalama 20-30 dakikada ulaşıyoruz.' },
    ],
  },
  'eyupsultan-nusratiye': {
    intro: 'Eyüp Sultan Camii\'ne yakın konumuyla Nüsratiye, dini ve tarihi öneme sahip değerli bir noktadadır. Tarihi mahallenin özgün konut yapılarında kilit ve kapı hizmetleri sunuyoruz.',
    landmark: 'Eyüp Sultan Camii yakınlığı',
    transport: 'Haliç vapuru, Eyüp iskelesi',
    faq: [
      { q: 'Nüsratiye\'de tarihi konut kapısı açılır mı?', a: 'Evet, tarihi yapılardaki özel kilit sistemlerinde deneyimliyiz.' },
      { q: 'Nüsratiye\'de 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
    ],
  },
  'eyupsultan-aksemsettin': {
    intro: 'Akşemsettin Türbesi\'yle tarihi anlam taşıyan ve ziyaretçilerin yoğun ilgisini çeken Akşemsettin Mahallesi\'nde özgün Osmanlı konut dokusuna uygun kilit sistemleri için hizmet veriyoruz.',
    landmark: 'Akşemsettin Türbesi ve tarihi semt dokusu',
    transport: 'Eyüpsultan merkezi ulaşım',
    faq: [
      { q: 'Akşemsettin\'de eski konut kapısı açılır mı?', a: 'Evet, tarihi yapıların özgün kilit sistemlerini hasar vermeden açıyoruz.' },
      { q: 'Akşemsettin\'de 7/24 çilingir var mı?', a: 'Evet, 0542 694 69 20\'yi arayın.' },
    ],
  },
  'eyupsultan-nisanca': {
    intro: 'Eyüpsultan\'ın sakin konut mahallelerinden Nişanca, geniş aile konutları ve müstakil yapılarıyla tanınır. Her ölçekteki konut tipi için 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Eyüpsultan güneyi ve müstakil konut bölgesi',
    transport: 'Eyüpsultan otobüs hatları',
    faq: [
      { q: 'Nişanca\'da acil kapı açma hizmeti var mı?', a: 'Evet, Nişanca\'ya 20-30 dakikada ulaşıyoruz. 0542 694 69 20\'yi arayın.' },
      { q: 'Nişanca\'da müstakil ev kapısı açılır mı?', a: 'Evet, müstakil konutlarda da deneyimliyiz.' },
    ],
  },
};

// ─── Raw district/neighborhood data ─────────────────────────────────────────
const RAW = [
  {base:'besiktas', name:'Beşiktaş', hoods:[
    ['etiler',       'Etiler'],
    ['levazim',      'Levazım'],
    ['bebek',        'Bebek'],
    ['ortakoy',      'Ortaköy'],
    ['levent',       'Levent'],
    ['arnavutkoy',   'Arnavutköy'],
    ['akatlar',      'Akatlar'],
    ['balmumcu',     'Balmumcu'],
    ['sinanpasa',    'Sinanpaşa'],
    ['gayrettepe',   'Gayrettepe'],
    ['yildiz',       'Yıldız'],
    ['kurucesme',    'Kuruçeşme'],
    ['visnezade',    'Vişnezade'],
    ['abbasaga',     'Abbasağa'],
    ['dikiliktas',   'Dikilitaş'],
  ]},
  {base:'sisli', name:'Şişli', hoods:[
    ['mecidiyekoy',  'Mecidiyeköy'],
    ['nisantasi',    'Nişantaşı'],
    ['osmanbey',     'Osmanbey'],
    ['bomonti',      'Bomonti'],
    ['harbiye',      'Harbiye'],
    ['gulbahar',     'Gülbahar'],
    ['ferikoy',      'Feriköy'],
    ['tesvikiye',    'Teşvikiye'],
    ['kurtulus',     'Kurtuluş'],
    ['pangalti',     'Pangaltı'],
    ['esentepe',     'Esentepe'],
  ]},
  {base:'sariyer', name:'Sarıyer', hoods:[
    ['maslak',       'Maslak'],
    ['istinye',      'İstinye'],
    ['tarabya',      'Tarabya'],
    ['yenikoy',      'Yeniköy'],
    ['buyukdere',    'Büyükdere'],
    ['ayazaga',      'Ayazağa'],
    ['zekeriyakoy',  'Zekeriyaköy'],
    ['bahcekoy',     'Bahçeköy'],
    ['kilyos',       'Kilyos'],
    ['derbent',      'Derbent'],
    ['rumelifeneri', 'Rumelifeneri'],
    ['pinar',        'Pınar'],
    ['gumusdere',    'Gümüşdere'],
    ['kumkoy',       'Kumköy'],
  ]},
  {base:'kagithane', name:'Kağıthane', hoods:[
    ['caglayan',      'Çağlayan'],
    ['seyrantepe',    'Seyrantepe'],
    ['gultepe',       'Gültepe'],
    ['hamidiye',      'Hamidiye'],
    ['nurtepe',       'Nurtepe'],
    ['celiktepe',     'Çeliktepe'],
    ['gursel',        'Gürsel'],
    ['harmantepe',    'Harmantepe'],
    ['kustepe',       'Kuştepe'],
    ['ortabayir',     'Ortabayır'],
    ['talatpasa',     'Talatpaşa'],
    ['gulbag',        'Gülbağ'],
    ['hurriyet',      'Hürriyet'],
    ['emniyetevleri', 'Emniyet Evleri'],
    ['sultanselim',   'Sultan Selim'],
  ]},
  {base:'eyupsultan', name:'Eyüpsultan', hoods:[
    ['alibeykoy',    'Alibeyköy'],
    ['gokturk',      'Göktürk'],
    ['kemerburgaz',  'Kemerburgaz'],
    ['rami',         'Rami'],
    ['islambey',     'İslambey'],
    ['topculer',     'Topçular'],
    ['silahtaraga',  'Silahtarağa'],
    ['emniyettepe',  'Emniyettepe'],
    ['dugmeciler',   'Düğmeciler'],
    ['yesilpinar',   'Yeşilpınar'],
    ['guzeltepe',    'Güzeltepe'],
    ['nusratiye',    'Nüsratiye'],
    ['aksemsettin',  'Akşemsettin'],
    ['nisanca',      'Nişanca'],
  ]},
];

export const ALL_PAGES = [];

RAW.forEach(d => {
  const dc = DISTRICT_CONTENT[d.base] || {};

  const hoods = d.hoods.map(([hBase, hName]) => ({
    path: `${d.base}-${hBase}-cilingir`,
    name: hName,
  }));

  ALL_PAGES.push({
    path: `${d.base}-cilingir`,
    name: d.name,
    isNeighborhood: false,
    districtName: d.name,
    districtBase: d.base,
    metaTitle: dc.metaTitle || `${d.name} Çilingir | 7/24 Acil Hizmet | Çilingirciniz`,
    metaDesc:  dc.metaDesc  || `${d.name} bölgesinde 7/24 acil çilingir hizmeti. Kapı açma, kilit değişimi. 0542 694 69 20`,
    content: {
      intro:     dc.intro     || '',
      landmarks: dc.landmarks || '',
      transport: dc.transport || '',
      scenario:  dc.scenario  || '',
      services:  dc.services  || [],
      faq:       dc.faq       || [],
    },
    nearby: hoods,
  });

  d.hoods.forEach(([hBase, hName]) => {
    const key = `${d.base}-${hBase}`;
    const hc  = HOOD_CONTENT[key] || {};

    const siblings = d.hoods
      .filter(([s]) => s !== hBase)
      .map(([s, n]) => ({ path: `${d.base}-${s}-cilingir`, name: n }));

    ALL_PAGES.push({
      path: `${d.base}-${hBase}-cilingir`,
      name: hName,
      isNeighborhood: true,
      districtName: d.name,
      districtBase: d.base,
      districtPath: `${d.base}-cilingir`,
      metaTitle: `${hName} Çilingir | ${d.name} 7/24 Acil`,
      metaDesc:  `${hName} mahallesinde (${d.name}) 7/24 acil çilingir. ${hc.landmark ? hc.landmark + ' yakınında.' : ''} Kapı açma, kilit değişimi, 20-30 dk. 0542 694 69 20`.slice(0, 160),
      content: {
        intro:    hc.intro    || `${hName} mahallesinde kapıda kaldınız mı? Çilingirciniz olarak 7/24 acil çilingir hizmeti sunuyoruz. Ortalama 20-30 dakikada yanınızdayız.`,
        landmark: hc.landmark || '',
        transport:hc.transport|| '',
        faq:      hc.faq      || [],
      },
      nearby: siblings,
    });
  });
});
