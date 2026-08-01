// ─── District-level rich content ────────────────────────────────────────────
const DISTRICT_CONTENT = {
  besiktas: {
    metaTitle: 'Beşiktaş Çilingir | 20-30 Dk\'da Kapı Açma | Çilingirciniz',
    metaDesc: 'Beşiktaş\'ta kapıda kaldınız mı? 7/24 acil çilingir — 20-30 dk. Etiler, Levent, Ortaköy, Bebek, Arnavutköy tüm mahalleler. Kilit değişimi, oto çilingir. Hemen Ara: 0538 059 01 73',
    intro: 'Avrupa yakasının en prestijli ilçelerinden Beşiktaş\'ta kapıda kaldınız mı? Çilingirciniz ekibi Dolmabahçe\'den Etiler\'e, Ortaköy\'den Levent\'e tüm mahallelerde 7/24 hizmetinizdedir. Çelik kapı açma, silindir değişimi, bina ana kapı sistemleri ve oto çilingir dahil kapsamlı hizmetimizle ortalama 20-30 dakikada kapınızdayız. Gece geç saatlerde ya da tatil günlerinde dahi tek bir telefonla profesyonel destek alırsınız.',
    landmarks: 'Dolmabahçe Sarayı, Beşiktaş Meydanı ve Kabataş İskelesi',
    transport: 'Beşiktaş vapur iskelesi, 29E ve 43T otobüs hatları, Kabataş tramvay, M2 Levent ve Gayrettepe istasyonları',
    scenario: 'Çarşı\'da alışveriş sonrası arabanıza anahtarı kilitleyip kapıda kalmak, Etiler\'deki sitenizde şifreli kapının pili bitmesi ya da Levent\'teki ofis kapısını kaybetmek — bunlar en sık karşılaştığımız durumlar. Telefonla konum bildirmeniz yeterli, gerisini biz hallederiz.',
    services: ['Çelik kapı açma ve kilit değişimi', 'Bina giriş kilidi ve silindir değişimi', 'Oto çilingir ve araç kapı açma', 'Kasa açma', 'Anahtar kopyalama'],
    faq: [
      { q: 'Beşiktaş\'ta gece kapıda kalsam ne yapmalıyım?', a: '0538 059 01 73\'yi arayın. Gece yarısı dahil 7/24 hizmetimiz aktif olup Beşiktaş genelinde ortalama 20-30 dakikada yanınızdayız.' },
      { q: 'Beşiktaş\'ta kilit değişimi fiyatları nasıl?', a: 'Fiyat kilit markasına ve kapı tipine göre değişir. Kapınızı yerinde inceleyip net teklif veriyoruz; ek ücret çıkmaz.' },
      { q: 'Levent\'te ofis kapısı açılır mı?', a: 'Evet, İş Kuleleri, Kanyon AVM ve tüm Levent plaza binalarında 7/24 çilingir hizmeti veriyoruz. Ortalama 15-20 dakikada yanınızdayız.' },
      { q: 'Beşiktaş\'ta hangi mahallelere hizmet veriyorsunuz?', a: 'Beşiktaş\'ın tüm mahallelerine hizmet veriyoruz: Etiler, Levent, Ortaköy, Bebek, Arnavutköy, Levazım, Akatlar, Gayrettepe, Sinanpaşa, Vişnezade, Yıldız, Abbasağa, Kuruçeşme, Dikilitaş ve Balmumcu.' },
      { q: 'Etiler ve Ortaköy\'e hizmet veriyor musunuz?', a: 'Evet, Beşiktaş\'ın tüm mahallelerine — Etiler, Ortaköy, Levent, Bebek, Arnavutköy dahil — hizmet veriyoruz.' },
      { q: 'Çelik kapı açılırken hasar olur mu?', a: 'Profesyonel ekibimiz mümkün her durumda hasarsız açma tekniklerini kullanır. Kapı ve kilit tipine göre en az etkili yöntemi seçiyoruz.' },
    ],
  },
  sisli: {
    metaTitle: 'Şişli Çilingir | 20-30 Dk\'da Kapı Açma | Çilingirciniz',
    metaDesc: 'Şişli\'de kapıda kaldınız mı? 7/24 acil çilingir — 20-30 dk. Mecidiyeköy, Nişantaşı, Bomonti, Osmanbey tüm mahalleler. Kilit değişimi, oto çilingir. Hemen Ara: 0538 059 01 73',
    intro: 'İstanbul\'un iş ve eğlence merkezi Şişli\'de kapıda kalmak ya da kilit değiştirmek istiyorsanız Çilingirciniz ekibi her an yanınızdadır. Cevahir AVM\'den İş Kulelerine, Nişantaşı\'nın butik sokaklarından Bomonti\'nin yükselen rezidanslarına kadar tüm Şişli\'ye 7/24 hizmet veriyoruz. Yoğun trafik saatlerinde bile araç filosuyla en kısa yoldan 20-30 dakikada kapınızdayız.',
    landmarks: 'Cevahir AVM, İş Kuleleri ve Mecidiyeköy metrobüs kavşağı',
    transport: 'M2 Mecidiyeköy ve Osmanbey istasyonları, Zincirlikuyu metrobüs durağı, M2 Gayrettepe',
    scenario: 'Mecidiyeköy\'de ofis çıkışı arabaya anahtarı kilitlemek, Nişantaşı\'ndaki lüks daireye girememeniz ya da Bomonti\'deki yeni rezidansın kapısında kalmak — birkaç dakika içinde teknisyenimiz yolda olur.',
    services: ['Ofis kapısı açma ve kilit değişimi', 'Rezidans ve lüks konut kilitleri', 'Oto çilingir', 'Akıllı kilit kurulumu', 'Anahtar kopyalama'],
    faq: [
      { q: 'Şişli\'de 7/24 çilingir bulabilir miyim?', a: 'Evet, Çilingirciniz olarak Şişli\'nin tüm mahallelerinde 7/24 hizmet veriyoruz. 0538 059 01 73\'yi arayın, 20-30 dakikada yanınızdayız.' },
      { q: 'Mecidiyeköy\'de ofis kapısı açılır mı?', a: 'Evet, Mecidiyeköy\'deki Torun Center, Nurol Tower ve tüm plaza binalarında 7/24 çilingir hizmeti veriyoruz. Ortalama 15-20 dakikada yanınızdayız.' },
      { q: 'Nişantaşı\'nda kilit değişimi yapıyor musunuz?', a: 'Evet, Nişantaşı\'nın tüm sokak ve apartmanlarına ulaşıyoruz. Yüksek güvenlikli kilit markaları konusunda da yönlendirme yapıyoruz.' },
      { q: 'Bomonti\'deki yeni rezidans kapıları açılır mı?', a: 'Evet, Nidapark Bomonti ve Bomonti Residences dahil modern rezidansların çelik kapı sistemlerinde tecrübeli teknisyenlerimiz çalışmaktadır.' },
      { q: 'Şişli\'de hangi mahallelere hizmet veriyorsunuz?', a: 'Şişli\'nin tüm mahallelerine hizmet veriyoruz: Mecidiyeköy, Nişantaşı, Osmanbey, Bomonti, Harbiye, Teşvikiye, Esentepe, Kurtuluş, Feriköy, Gülbahar ve Pangaltı.' },
      { q: 'Esentepe\'de kurumsal ofis kapısı açılır mı?', a: 'Evet, Esentepe\'deki Yapı Kredi Plaza, İstanbul Tower 205 ve tüm kurumsal binalarda 7/24 hizmet veriyoruz. Ortalama 15-20 dakikada yanınızdayız.' },
    ],
  },
  sariyer: {
    metaTitle: 'Sarıyer Çilingir | 20-30 Dk\'da Kapı Açma | Çilingirciniz',
    metaDesc: 'Sarıyer\'de kapıda kaldınız mı? 7/24 acil çilingir — 20-30 dk. Maslak, Ayazağa, İstinye, Zekeriyaköy tüm bölgeler. Villa kilit, plaza ofisi. Hemen Ara: 0538 059 01 73',
    intro: 'İstanbul Boğazı\'nın Avrupa kıyısını takip eden Sarıyer, Maslak\'taki plaza binalarından Zekeriyaköy\'ün villa evlerine ve Kilyos\'un sahil konutlarına kadar geniş bir coğrafyayı kapsar. Çilingirciniz olarak bu geniş ilçenin tüm noktalarına 7/24 hizmet veriyoruz. Uzak mahallelere bile ortalama 30-40 dakikada ulaşabilen araç filomuzla Sarıyer\'in hiçbir köşesi erişilmez değildir.',
    landmarks: 'Emirgan Korusu, İstinye Park AVM ve Maslak plaza binaları',
    transport: 'M2 Maslak, Hacıosman ve Ayazağa istasyonları, Sarıyer vapur iskelesi',
    scenario: 'Maslak\'taki plaza binasına gece girememeniz, Ayazağa\'daki yeni rezidansın kapısında kalmak ya da Zekeriyaköy villa kapınıza anahtarı unutmak — Sarıyer\'in uzak noktalarına da ulaşıyoruz.',
    services: ['Villa ve müstakil ev kapı açma', 'Maslak plaza ofis kilitleri', 'Tarihi yalı kapı sistemleri', 'Oto çilingir', 'Yazlık konut kilit değişimi'],
    faq: [
      { q: 'Sarıyer\'in uzak mahallelerine de hizmet veriyor musunuz?', a: 'Evet, Zekeriyaköy, Kilyos, Rumelifeneri, Kumköy gibi uzak noktalara da ulaşıyoruz. Varış süresi 30-40 dakika olabilir.' },
      { q: 'Maslak\'ta iş yeri kapısı açılır mı?', a: 'Evet, Maslak\'taki Spine Tower, Sabancı Center ve tüm plaza binalarında 7/24 hizmet veriyoruz. M2 metro hattı sayesinde 15-20 dakikada yanınızdayız.' },
      { q: 'Ayazağa\'da yeni konut projesi kapısı açılır mı?', a: 'Evet, Vadistanbul, RAMS Ayazağa ve çevresindeki rezidans projelerinde modern çelik kapı sistemleri için 7/24 hizmet veriyoruz. Ortalama 15-25 dakikada yanınızdayız.' },
      { q: 'Zekeriyaköy\'de villa kapısı açıyor musunuz?', a: 'Evet, Zekeriyaköy villa bölgesinde özel kapı ve güvenlik sistemleri için uzman ekibimizle hizmet veriyoruz. Ortalama 30-40 dakikada kapınızdayız.' },
      { q: 'Sarıyer\'de hangi mahallelere hizmet veriyorsunuz?', a: 'Sarıyer\'in tüm bölgelerine hizmet veriyoruz: Maslak, Ayazağa, İstinye, Büyükdere, Tarabya, Yeniköy, Zekeriyaköy, Pınar, Bahçeköy, Kilyos, Gümüşdere, Kumköy, Derbent ve Rumelifeneri.' },
      { q: 'Sarıyer\'de gece çilingir bulunur mu?', a: '7/24 hizmetimiz Sarıyer\'in tüm mahallelerini kapsar. Gece saatlerinde de 0538 059 01 73\'den ulaşabilirsiniz.' },
    ],
  },
  kagithane: {
    metaTitle: 'Kağıthane Çilingir | 20-30 Dk\'da Kapı Açma | Çilingirciniz',
    metaDesc: 'Kağıthane\'de kapıda kaldınız mı? 7/24 acil çilingir — 20-30 dk. Seyrantepe, Çağlayan, Gültepe tüm mahalleler. Kilit değişimi, oto çilingir. Hemen Ara: 0538 059 01 73',
    intro: 'Hızla dönüşen Kağıthane, modern konut projeleri, kentsel dönüşüm alanları ve köklü mahallelerin bir arada yaşadığı dinamik bir ilçedir. Kağıthane Vadisi çevresindeki yeni yapılardan Gültepe\'nin köklü apartmanlarına, Seyrantepe\'nin rezidanslarından Çağlayan\'ın iş merkezlerine kadar 7/24 acil çilingir hizmetindeyiz. M7 metro hattı sayesinde ulaşım kolaylaştı; biz de size daha hızlı ulaşıyoruz.',
    landmarks: 'Kağıthane Vadisi, İstanbul Adliye Sarayı ve M7 Kağıthane istasyonu',
    transport: 'M7 Kağıthane ve Seyrantepe istasyonları, Çağlayan metrobüs durağı',
    scenario: 'Kentsel dönüşümle yeni teslim edilen dairenizin kapısında kalmak ya da Çağlayan\'daki iş yerinizin kilidini kaybetmek — her durumda Çilingirciniz yanınızdadır.',
    services: ['Kentsel dönüşüm yeni kapı kilitleri', 'Apartman giriş sistemleri', 'İş yeri kapı açma', 'Oto çilingir', 'Anahtar kopyalama'],
    faq: [
      { q: 'Kağıthane\'de 7/24 çilingir var mı?', a: 'Evet, Kağıthane\'nin tüm mahallelerinde 7/24 hizmet veriyoruz. 0538 059 01 73\'yi arayın.' },
      { q: 'Seyrantepe\'de rezidans kapısı açılır mı?', a: 'Evet, Seyrantepe\'deki yeni rezidans ve site kapıları için deneyimliyiz. 20-30 dakikada kapınızdayız.' },
      { q: 'Kağıthane\'de kilit değişimi ne kadar sürer?', a: 'Standart silindir değişimi 15-30 dakika sürer. Çelik kapı kilidi değişimi biraz daha uzun olabilir; yerinde bilgi veririz.' },
      { q: 'Kağıthane\'nin tüm mahallelerine gidiyor musunuz?', a: 'Evet, Çağlayan, Gültepe, Sultan Selim, Nurtepe dahil tüm Kağıthane mahallelerine hizmet veriyoruz.' },
    ],
  },
  eyupsultan: {
    metaTitle: 'Eyüpsultan Çilingir | 20-30 Dk\'da Kapı Açma | Çilingirciniz',
    metaDesc: 'Eyüpsultan\'da kapıda kaldınız mı? 7/24 acil çilingir — 20-30 dk. Alibeyköy, Göktürk, Rami, Kemerburgaz tüm mahalleler. Villa kilit, kapı açma. Hemen Ara: 0538 059 01 73',
    intro: 'Eyüp Sultan Camii\'nin tarihi dokusuyla Göktürk\'ün yeşil villa bölgelerini, Alibeyköy\'ün modern sitelerini ve Kemerburgaz\'ın orman kenarı yaşamını bünyesinde barındıran Eyüpsultan\'da Çilingirciniz 7/24 hizmetinizde. Haliç kıyısındaki tarihi yapılardan TEM Otoyolu yakınındaki villalara kadar geniş bir coğrafyaya ulaşıyoruz. Eyüpsultan\'ın uzak noktalarına ortalama 25-40 dakikada varış sağlıyoruz.',
    landmarks: 'Eyüp Sultan Camii, Pierre Loti Tepesi ve Alibeyköy Göleti',
    transport: 'T5 Alibeyköy tramvay hattı, T4 Rami durağı, Haliç vapuru, TEM bağlantısı Göktürk',
    scenario: 'Alibeyköy\'deki sitenin kapısında kalmak, Göktürk villasının kilidini değiştirmek, Rami\'deki iş yerinin kapısını açmak ya da Kemerburgaz\'daki orman kenarı evinizin anahtarını kaybetmek — telefona sarılın, gerisini biz halledelim.',
    services: ['Villa ve müstakil ev kapı sistemleri', 'Tarihi bina kapı açma', 'Site giriş kilidi değişimi', 'Oto çilingir', 'Anahtar kopyalama'],
    faq: [
      { q: 'Eyüpsultan\'da 7/24 çilingir hizmeti var mı?', a: 'Evet, Eyüpsultan\'ın tüm mahallelerinde 7/24 hizmet veriyoruz. 0538 059 01 73\'den bize ulaşın.' },
      { q: 'Alibeyköy\'e kaç dakikada gelirsiniz?', a: 'Alibeyköy\'e ortalama 15-25 dakikada ulaşıyoruz. T5 tramvay hattı güzergahında trafik akışı hızlı olduğundan yanınıza çabuk ulaşıyoruz.' },
      { q: 'Göktürk\'te villa kapısı açılır mı?', a: 'Evet, Göktürk ve Kemerburgaz villa bölgelerinde özel kapı ve güvenlik sistemleri konusunda deneyimliyiz. Ortalama 25-35 dakikada kapınızdayız.' },
      { q: 'Rami\'de iş yeri kapısı açılır mı?', a: 'Evet, Rami\'deki fabrika, depo ve ticari kapılar dahil 7/24 hizmet veriyoruz. T4 tramvay güzergahı sayesinde ortalama 15-25 dakikada yanınızdayız.' },
      { q: 'Eyüpsultan\'da hangi mahallelere hizmet veriyorsunuz?', a: 'Eyüpsultan\'ın tüm mahallelerine hizmet veriyoruz: Alibeyköy, Göktürk, Rami, Kemerburgaz, İslambey, Topçular, Silahtarağa, Emniyettepe, Düğmeciler, Yeşilpınar, Güzeltepe, Nüsratiye, Akşemsettin ve Nişanca.' },
      { q: 'Tarihi mahalle yapılarında eski kilit sistemleri açılır mı?', a: 'Evet, Eyüp\'ün tarihi yapılarındaki eski tip kilit sistemlerinde de hizmet veriyoruz. Hasar vermeden açma konusunda tecrübeliyiz.' },
    ],
  },
};

// ─── Neighborhood-level content ──────────────────────────────────────────────
const HOOD_CONTENT = {
  // ── Beşiktaş ──────────────────────────────────────────────────────────────
  'besiktas-etiler': {
    metaTitle: 'Etiler Çilingir | Beşiktaş 7/24 — 20-25 Dk Acil',
    metaDesc: 'Etiler\'de kapıda mı kaldınız? 7/24 acil çilingir, 20-25 dk. Akmerkez AVM ve lüks site bölgesi yakını. Villa kapı açma, silindir değişimi, oto çilingir. 0538 059 01 73',
    intro: 'Lüks rezidansları, villa tipi konutları ve Akmerkez AVM çevresindeki iş yerleriyle tanınan Etiler\'de kapıda kalmak artık sorun değil. Çilingirciniz olarak villa kapı sistemlerinden apartman çelik kapılarına kadar Etiler genelinde 7/24 hizmet veriyoruz.',
    landmark: 'Akmerkez AVM ve Etiler\'in seçkin siteler bölgesi',
    transport: '59F otobüs, Etiler-Levent minibüs güzergahı',
    faq: [
      { q: 'Etiler\'de gece kapıda kalsam ne yapmalıyım?', a: '0538 059 01 73\'yi arayın. Etiler\'e ortalama 20-25 dakikada ulaşıyoruz, gece gündüz fark etmez.' },
      { q: 'Etiler\'de villa kapısı açılır mı?', a: 'Evet, Etiler\'deki müstakil ev ve villa kapıları için özel deneyimimiz mevcuttur. Yüksek güvenlikli çelik kapılar ve akıllı kilit sistemleri de açıyoruz.' },
      { q: 'Etiler\'de kilit değişimi yaptırabilir miyim?', a: 'Evet, A sınıfı ve yüksek güvenlik silindiri değişimi dahil tüm kilit markaları için aynı gün hizmet sunuyoruz. Kapınız yerinde incelenerek net fiyat verilir.' },
      { q: 'Etiler\'de oto çilingir hizmeti var mı?', a: 'Evet, Akmerkez otoparkı ve Etiler sokakları dahil araç kapısı açma, rezerve anahtar üretimi ve transponder programlama hizmetleri sunuyoruz.' },
    ],
  },
  'besiktas-levazim': {
    intro: 'Beşiktaş\'ın üst gelir segmentine hitap eden Levazım, güvenlikli site ve konut komplekslerinin yoğun olduğu bir mahalledir. Site kapı sistemleri ve güvenli konut kilitleri için Çilingirciniz yanınızdadır.',
    landmark: 'Levazım Caddesi ve çevresindeki lüks siteler',
    transport: 'Etiler otobüs hatları, taksi güzergahı',
    faq: [
      { q: 'Levazım\'da site güvenlik kapısı açılır mı?', a: 'Evet, Levazım\'daki güvenlikli site kapılarında ve konutlarda hizmet veriyoruz. 0538 059 01 73\'yi arayın.' },
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
    metaTitle: 'Ortaköy Çilingir | Beşiktaş 7/24 — 20-30 Dk Acil',
    metaDesc: 'Ortaköy\'de kapıda mı kaldınız? 7/24 acil çilingir, 20-30 dk. Ortaköy Camii ve Boğaz Köprüsü yakını. Kapı açma, kilit değişimi, oto çilingir. 0538 059 01 73',
    intro: 'Ortaköy Camii ve tarihi meydanıyla ünlü Ortaköy, Boğaz Köprüsü\'nün dibinde canlı bir semt yaşamına sahiptir. Karakteristik apartmanlarda ve meydan çevresindeki iş yerlerinde 7/24 kapı açma ve kilit değişimi hizmeti veriyoruz.',
    landmark: 'Ortaköy Camii ve Boğaz Köprüsü',
    transport: 'Ortaköy vapur iskelesi, otobüs hatları',
    faq: [
      { q: 'Ortaköy\'de gece çilingir bulunur mu?', a: 'Evet, Ortaköy\'de 7/24 hizmet veriyoruz. Gece saatlerinde de 0538 059 01 73\'yi arayabilirsiniz.' },
      { q: 'Ortaköy\'deki iş yeri kapısı açılır mı?', a: 'Evet, restoran, kafe ve ticari işyerlerinde kilit açma ve değişimi yapıyoruz. Meydan çevresindeki yapılara hızlı ulaşıyoruz.' },
      { q: 'Ortaköy\'de kilit değişimi yapıyor musunuz?', a: 'Evet, konut ve iş yeri kilit değişiminde deneyimliyiz. Eskiyen veya zarar gören kilitleri aynı gün değiştiriyoruz.' },
      { q: 'Ortaköy\'e kaç dakikada gelirsiniz?', a: 'Ortaköy\'e ortalama 20-30 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın, teknisyenimiz yola çıksın.' },
    ],
  },
  'besiktas-levent': {
    metaTitle: 'Levent Çilingir | Beşiktaş 7/24 — 15-20 Dk Acil',
    metaDesc: 'Levent\'te kapıda mı kaldınız? 7/24 acil çilingir, 15-20 dk. İş Kuleleri, Kanyon AVM yakını. Ofis kapı açma, kilit değişimi, oto çilingir. 0538 059 01 73',
    intro: 'Büyük ve Küçük Levent olarak ikiye ayrılan bu finans bölgesinde İş Kuleleri, Kanyon AVM ve büyük şirket genel merkezleri yer alır. Ofis ve rezidans kapı sistemleri için Çilingirciniz 7/24 hizmetinizde.',
    landmark: 'İş Kuleleri ve Kanyon AVM',
    transport: 'M2 Levent ve 4. Levent metro istasyonları',
    faq: [
      { q: 'Levent\'te ofis kapısı açılır mı?', a: 'Evet, İş Kuleleri, Kanyon AVM çevresi ve tüm Levent plaza binalarında 7/24 hizmet veriyoruz. M2 metro hattı sayesinde 15-20 dakikada yanınızdayız.' },
      { q: 'Levent\'te gece çilingir alabilir miyim?', a: 'Evet, gece yarısı dahil 7/24 hizmetimiz aktif. 0538 059 01 73\'yi arayın, kurumsal veya konut kapısı fark etmez.' },
      { q: 'Levent\'te kilit değişimi ne kadar sürer?', a: 'Standart silindir değişimi 15-30 dakika sürer. Levent plaza binalarında master-key sistemleri ve elektronik kilit değişimleri için yerinde bilgi veriyoruz.' },
      { q: 'Levent\'te oto çilingir var mı?', a: 'Evet, İş Kuleleri ve Kanyon AVM otoparkları dahil Levent genelinde araç kapısı açma ve rezerve anahtar hizmetleri sunuyoruz.' },
    ],
  },
  'besiktas-arnavutkoy': {
    intro: 'Osmanlı döneminden kalma ahşap yalıları ve Boğaz kıyısındaki tarihi dokusuyla Arnavutköy, İstanbul\'un en özgün semtlerinden biridir. Tarihi yapılardaki eski kilit sistemleri için özel yetkinliğe sahip teknisyenlerimiz hizmetinizde.',
    landmark: 'Arnavutköy sahil şeridi ve tarihi yalılar',
    transport: 'Arnavutköy vapur iskelesi',
    faq: [
      { q: 'Arnavutköy\'deki eski yalı kapısı açılır mı?', a: 'Evet, tarihi yapılardaki eski tip kilitleri hasar vermeden açma konusunda deneyimliyiz.' },
      { q: 'Arnavutköy\'de 7/24 hizmet var mı?', a: 'Evet, 0538 059 01 73\'yi arayın. Arnavutköy\'e 20-30 dakikada ulaşıyoruz.' },
    ],
  },
  'besiktas-akatlar': {
    intro: 'Akatlar Sitesi ve çevresindeki güvenlikli konut kompleksleriyle tanınan Akatlar\'da site ve apartman kapı sistemlerinde uzmanlaşmış ekibimizle 7/24 hizmet veriyoruz.',
    landmark: 'Akatlar Sitesi ve Levent\'e yakınlık',
    transport: 'Levent metrobüs bağlantıları, minibüs hatları',
    faq: [
      { q: 'Akatlar\'da site giriş kilidi değişimi yapılır mı?', a: 'Evet, Akatlar\'daki sitelerin giriş kapısı ve daire kilit değişimlerini yapıyoruz.' },
      { q: 'Akatlar\'a kaç dakikada gelirsiniz?', a: 'Ortalama 20-25 dakikada Akatlar\'a ulaşıyoruz. 0538 059 01 73\'den bilgi alın.' },
    ],
  },
  'besiktas-balmumcu': {
    intro: 'Barbaros Bulvarı\'na yakın konumuyla ulaşımı kolay Balmumcu, konut ve küçük iş yeri karışımıyla orta yoğunlukta bir mahalledir. Her türlü kapı ve kilit sistemi için 7/24 hizmet sunuyoruz.',
    landmark: 'Barbaros Bulvarı bağlantısı',
    transport: 'Beşiktaş-Zincirlikuyu otobüs hatları',
    faq: [
      { q: 'Balmumcu\'da acil çilingir var mı?', a: 'Evet, Balmumcu\'ya 20-30 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
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
      { q: 'Gayrettepe\'ye kaç dakikada gelirsiniz?', a: 'Gayrettepe\'ye 15-25 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
    ],
  },
  'besiktas-yildiz': {
    intro: 'Yıldız Sarayı\'nın gölgesinde, koruluk alanına bitişik ve Çırağan Sarayı\'na yakın konumuyla Yıldız, prestijli otel ve rezidansların bulunduğu sakin bir semttir.',
    landmark: 'Yıldız Sarayı ve Çırağan Sarayı',
    transport: 'Beşiktaş otobüs hatları',
    faq: [
      { q: 'Yıldız\'da lüks konut kapısı açılır mı?', a: 'Evet, yüksek güvenlikli kapı ve kilit sistemlerinde deneyimliyiz. 0538 059 01 73\'yi arayın.' },
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
      { q: 'Vişnezade\'de çilingir hizmeti alabilir miyim?', a: 'Evet, Vişnezade\'ye 20-30 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
      { q: 'Vişnezade\'de eski apartman kapısı açılır mı?', a: 'Evet, eski tip kilit ve kapı sistemlerinde de hizmet veriyoruz.' },
    ],
  },
  'besiktas-abbasaga': {
    intro: 'Abbasağa Parkı etrafında şekillenen ve sahile yakın konumuyla gözde bir yaşam alanı olan Abbasağa\'da, park çevresi cafelerin bulunduğu binalarda ve konutlarda 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Abbasağa Parkı',
    transport: 'Beşiktaş ana güzergahları',
    faq: [
      { q: 'Abbasağa\'da acil kapı açma hizmeti var mı?', a: 'Evet, Abbasağa\'ya 20-30 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
      { q: 'Abbasağa\'da kilit değişimi yapıyor musunuz?', a: 'Evet, silindir ve çelik kapı kilidi dahil tüm kilit tiplerinde hizmet veriyoruz.' },
    ],
  },
  'besiktas-dikiliktas': {
    intro: 'Beşiktaş\'ın doğusunda, Şişli sınırına yakın Dikilitaş, yeni konut projelerinin yükseldiği gelişmekte olan bir mahalledir. Modern çelik kapı ve akıllı kilit sistemleri dahil her tür kapı için 7/24 hizmet veriyoruz.',
    landmark: 'Beşiktaş-Şişli sınır bölgesi',
    transport: 'Gayrettepe bağlantı hatları',
    faq: [
      { q: 'Dikilitaş\'ta yeni bina kapısı açılır mı?', a: 'Evet, modern çelik kapı sistemleri için deneyimliyiz. 0538 059 01 73\'yi arayın.' },
      { q: 'Dikilitaş\'ta kilit değişimi fiyatı nedir?', a: 'Yerinde inceleme sonrası net fiyat veriyoruz. Gizli ücret uygulamıyoruz.' },
    ],
  },

  // ── Şişli ────────────────────────────────────────────────────────────────
  'sisli-mecidiyekoy': {
    metaTitle: 'Mecidiyeköy Çilingir | Şişli 7/24 — 15-25 Dk Acil',
    metaDesc: 'Mecidiyeköy\'de kapıda mı kaldınız? 7/24 acil çilingir, 15-25 dk. Torun Center, Nurol Tower ve metrobüs kavşağı yakını. Ofis kapı açma, kilit değişimi. 0538 059 01 73',
    intro: 'İstanbul\'un finans ve iş dünyasının kalbindeki Mecidiyeköy, M2 metro ve metrobüs kavşağında konumlanmış devasa bir ticaret ve konut bölgesidir. Ofis kapılarından rezidans sistemlerine kadar 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Mecidiyeköy İş Merkezi, Torun Center ve Nurol Tower',
    transport: 'M2 Mecidiyeköy, Zincirlikuyu metrobüs durağı',
    faq: [
      { q: 'Mecidiyeköy\'de ofis kapısı açılır mı?', a: 'Evet, Torun Center, Nurol Tower ve tüm Mecidiyeköy plaza binalarında 7/24 hizmet veriyoruz. M2 metro güzergahı sayesinde 15-20 dakikada yanınızdayız.' },
      { q: 'Mecidiyeköy\'de gece çilingir var mı?', a: 'Evet, gece yarısı dahil 7/24 hizmetimiz aktif. 0538 059 01 73\'yi arayın, iş yeri veya konut kapısı fark etmez.' },
      { q: 'Mecidiyeköy\'de kilit değişimi yapıyor musunuz?', a: 'Evet, kurumsal ve konut kilidi değişiminde deneyimliyiz. Master-key sistemleri, elektronik kilit ve silindir değişimi aynı gün yapılmaktadır.' },
      { q: 'Mecidiyeköy\'de oto çilingir hizmeti var mı?', a: 'Evet, metrobüs durağı ve çevresindeki otoparklar dahil Mecidiyeköy genelinde araç kapısı açma ve anahtar hizmetleri sunuyoruz.' },
    ],
  },
  'sisli-nisantasi': {
    metaTitle: 'Nişantaşı Çilingir | Şişli 7/24 — 20-30 Dk Acil',
    metaDesc: 'Nişantaşı\'nda kapıda mı kaldınız? 7/24 acil çilingir, 20-30 dk. Teşvikiye Caddesi ve City\'s AVM yakını. Lüks konut kapı açma, silindir değişimi. 0538 059 01 73',
    intro: 'Teşvikiye Caddesi\'nin lüks markaları ve butik daireleriyle ünlü Nişantaşı\'nda çelik kapı ve özel güvenlik kilitleri için 7/24 hizmet veriyoruz. Yüksek güvenlik seviyesinde kilit sistemi konusunda da yönlendirme yapıyoruz.',
    landmark: 'Teşvikiye Caddesi ve City\'s Nişantaşı AVM',
    transport: 'Şişli-Mecidiyeköy arası otobüs hatları, Osmanbey M2 istasyonu yakını',
    faq: [
      { q: 'Nişantaşı\'nda lüks konut kapısı açılır mı?', a: 'Evet, Nişantaşı\'nın butik apartmanları ve Nişantaşı Koru gibi rezidans projelerinde yüksek güvenlikli kapı sistemlerini açıyoruz. 20-30 dakikada yanınızdayız.' },
      { q: 'Nişantaşı\'nda kilit değişimi yapıyor musunuz?', a: 'Evet, Kale, Mul-T-Lock, ISEO gibi A sınıfı kilit markaları dahil tüm kilit tiplerinde değişim yapıyoruz. Yerinde inceleme sonrası net fiyat verilir.' },
      { q: 'Nişantaşı\'nda gece çilingir bulabilir miyim?', a: 'Evet, gece yarısı dahil 7/24 hizmetimiz aktif. 0538 059 01 73\'yi arayın, Nişantaşı\'na ortalama 20-30 dakikada ulaşıyoruz.' },
      { q: 'Nişantaşı\'ndaki eski bina kapısı açılır mı?', a: 'Evet, Nişantaşı\'nın köklü apartmanlarındaki eski tip kilit sistemlerini de hasar vermeden açıyoruz. Gerekirse yerinde silindir değişimi yapıyoruz.' },
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
    metaTitle: 'Bomonti Çilingir | Şişli 7/24 — 20-30 Dk Acil',
    metaDesc: 'Bomonti\'de kapıda mı kaldınız? 7/24 acil çilingir, 20-30 dk. Nidapark Bomonti ve Bomonti Residences yakını. Rezidans kapı açma, kilit değişimi. 0538 059 01 73',
    intro: 'Eski Bomonti Bira Fabrikası\'nın yeniden yaşama kazandırıldığı Bomonti, lüks rezidansları ve butik oteliyle hızla dönüşen bir semttir. Yeni rezidans çelik kapıları ve tarihi bina sistemleri için 7/24 hizmet sunuyoruz.',
    landmark: 'Bomonti Bira Fabrikası dönüşüm alanı, Nidapark Bomonti ve Bomonti Residences by Rotana',
    transport: 'Şişli-Bomonti minibüs ve otobüs hatları',
    faq: [
      { q: 'Bomonti\'de rezidans kapısı açılır mı?', a: 'Evet, Nidapark Bomonti (536 konut), Bomonti Residences by Rotana (840 konut) ve çevre rezidanslarda çelik kapı sistemleri için 7/24 hizmet veriyoruz.' },
      { q: 'Bomonti\'de gece çilingir bulunur mu?', a: 'Evet, 7/24 hizmetimiz aktif. 0538 059 01 73\'yi arayın, Bomonti\'ye ortalama 20-30 dakikada ulaşıyoruz.' },
      { q: 'Bomonti\'de kilit değişimi yaptırabilir miyim?', a: 'Evet, yeni rezidanslardaki müteahhit kilit silindirini A sınıfı güvenlik ürünüyle değiştirme dahil tüm kilit tipleri için aynı gün hizmet sunuyoruz.' },
      { q: 'Bomonti\'deki eski bina kapısı da açılır mı?', a: 'Evet, Bomonti\'nin dönüşüm öncesi tarihi yapılarındaki eski tip kilit sistemlerini de hasar vermeden açıyoruz.' },
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
      { q: 'Gülbahar\'da acil çilingir var mı?', a: 'Evet, 7/24 hizmet veriyoruz. 0538 059 01 73\'yi arayın, 20-30 dakikada geliyoruz.' },
      { q: 'Gülbahar\'da kilit değişimi yapıyor musunuz?', a: 'Evet, silindir ve kapı kilidi değişimi hizmeti sunuyoruz.' },
    ],
  },
  'sisli-ferikoy': {
    intro: 'Feriköy Pazarı ve mezarlık alanıyla sakin bir doku sergileyen Feriköy\'de küçük esnaf ve konut yapısının iç içe olduğu yapıda, eski tip kilit sistemleri için özel deneyimimizle hizmet sunuyoruz.',
    landmark: 'Feriköy Semt Pazarı ve Mezarlık',
    transport: 'Şişli-Okmeydanı otobüs hatları',
    faq: [
      { q: 'Feriköy\'de eski bina kilidi açılır mı?', a: 'Evet, eski tip kilit ve kapı sistemlerinde deneyimliyiz. Hasar vermeden açma yapıyoruz.' },
      { q: 'Feriköy\'de 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
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
      { q: 'Kurtuluş\'ta 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
    ],
  },
  'sisli-pangalti': {
    intro: 'Hastaneleri ve eğitim kurumlarıyla tanınan Pangaltı, ailelerin tercih ettiği sakin bir mahalledir. Konut ve hastane çevresi kapı açma hizmetleri için 7/24 hizmet sunuyoruz.',
    landmark: 'Pangaltı hastaneleri ve okulları',
    transport: 'Şişli-Gayrettepe otobüs hatları',
    faq: [
      { q: 'Pangaltı\'da acil çilingir alabilir miyim?', a: 'Evet, Pangaltı\'ya 20-25 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
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
    metaTitle: 'Maslak Çilingir | Sarıyer 7/24 — 15-20 Dk Acil',
    metaDesc: 'Maslak\'ta kapıda mı kaldınız? 7/24 acil çilingir, 15-20 dk. Spine Tower, Maslak 1453, Skyland İstanbul yakını. Plaza ofis, rezidans kapı açma. 0538 059 01 73',
    intro: 'Spine Tower, Maslak 1453 ve Skyland İstanbul gibi büyük konut-ofis projelerinin yükseldiği Maslak, İstanbul\'un en hareketli iş merkezlerinden biridir. Plaza ofislerinden konut projelerine 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Spine Tower, Maslak 1453 (~4.200 konut), Skyland İstanbul ve İTÜ Maslak Kampüsü',
    transport: 'M2 Maslak metro istasyonu',
    faq: [
      { q: 'Maslak\'ta plaza kapısı açılır mı?', a: 'Evet, Spine Tower, Sabancı Center ve çevresindeki tüm ofis binalarında 7/24 hizmet veriyoruz. M2 metro sayesinde 15-20 dakikada yanınızdayız.' },
      { q: 'Maslak\'ta rezidans kapısı açılır mı?', a: 'Evet, Maslak 1453 ve Skyland İstanbul\'daki yüksek güvenlikli kapı sistemleri dahil tüm konut projelerinde hizmet veriyoruz.' },
      { q: 'Maslak\'ta kilit değişimi yapıyor musunuz?', a: 'Evet, kurumsal ve konut kilidi değişimi hizmeti sunuyoruz. Müteahhit standart silindir yerine yüksek güvenlik kilidi takımı da yapıyoruz.' },
      { q: 'Maslak\'ta gece çilingir bulunur mu?', a: 'Evet, 7/24 hizmetimiz aktif. 0538 059 01 73\'yi arayın, Maslak\'a ortalama 15-20 dakikada ulaşıyoruz.' },
    ],
  },
  'sariyer-istinye': {
    metaTitle: 'İstinye Çilingir | Sarıyer 7/24 — 20-30 Dk Acil',
    metaDesc: 'İstinye\'de kapıda mı kaldınız? 7/24 acil çilingir, 20-30 dk. İstinye Park AVM ve Boğaz manzaralı konut projeleri yakını. Kapı açma, kilit değişimi. 0538 059 01 73',
    intro: 'Tarihi tersane alanından dönüşen İstinye, İstinye Park AVM ve çevresindeki lüks konut kompleksleriyle Sarıyer\'in en gözde bölgelerinden biridir. AVM ve lüks konut kapı sistemleri için 7/24 hizmet veriyoruz.',
    landmark: 'İstinye Park AVM ve İstinye Körfezi',
    transport: 'Sarıyer otobüs hatları, vapur güzergahı',
    faq: [
      { q: 'İstinye\'de lüks konut kapısı açılır mı?', a: 'Evet, İstinye\'nin Boğaz manzaralı konut projelerinde yüksek güvenlikli kapı sistemleri için tecrübeli ekibimizle hizmet veriyoruz.' },
      { q: 'İstinye\'ye kaç dakikada gelirsiniz?', a: 'İstinye\'ye ortalama 20-30 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
      { q: 'İstinye Park AVM çevresinde oto çilingir var mı?', a: 'Evet, İstinye Park AVM ve çevre otoparklarda araç kapısı açma ve anahtar hizmetleri sunuyoruz.' },
      { q: 'İstinye\'de kilit değişimi yapıyor musunuz?', a: 'Evet, konut ve iş yeri kilit değişiminde deneyimliyiz. Aynı gün hizmet verilmektedir.' },
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
      { q: 'Yeniköy\'de 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
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
    metaTitle: 'Ayazağa Çilingir | Sarıyer 7/24 — 15-25 Dk Acil',
    metaDesc: 'Ayazağa\'da kapıda mı kaldınız? 7/24 acil çilingir, 15-25 dk. Vadistanbul, RAMS Ayazağa, İTÜ Kampüsü yakını. Rezidans kapı açma, kilit değişimi. 0538 059 01 73',
    intro: 'İTÜ Ayazağa kampüsü ve Vadistanbul, RAMS Ayazağa gibi büyük konut projeleriyle öne çıkan Ayazağa\'da M2 metro hattı sayesinde hızlı ulaşım sağlıyoruz. Öğrenci konutlarından büyük rezidans sitelerine kadar 7/24 hizmet sunuyoruz.',
    landmark: 'Vadistanbul (~2.100 daire), RAMS Ayazağa (~4.000 konut planlı) ve İTÜ Ayazağa Kampüsü',
    transport: 'M2 Ayazağa metro istasyonu',
    faq: [
      { q: 'Ayazağa\'da rezidans kapısı açılır mı?', a: 'Evet, Vadistanbul Teras, Vadistanbul Bahçe ve RAMS Ayazağa gibi büyük projelerde yüksek güvenlikli kapı sistemleri için 7/24 hizmet veriyoruz.' },
      { q: 'Ayazağa\'ya kaç dakikada gelirsiniz?', a: 'M2 Ayazağa istasyonu güzergahından ortalama 15-25 dakikada Ayazağa\'ya ulaşıyoruz.' },
      { q: 'Ayazağa\'da kilit değişimi yapıyor musunuz?', a: 'Evet, yeni teslim rezidanslardaki müteahhit silindir değişimi dahil tüm kilit tiplerinde aynı gün hizmet sunuyoruz.' },
      { q: 'Ayazağa\'da gece çilingir bulunur mu?', a: 'Evet, gece yarısı dahil 7/24 hizmetimiz aktif. 0538 059 01 73\'yi arayın.' },
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
      { q: 'Bahçeköy\'de 7/24 çilingir var mı?', a: 'Evet, uzak mesafelere de hizmet veriyoruz. 0538 059 01 73\'yi arayın.' },
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
      { q: 'Derbent\'te 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın. Derbent\'e 30-40 dakikada ulaşıyoruz.' },
      { q: 'Derbent\'te kilit değişimi yapıyor musunuz?', a: 'Evet, köy evi ve Boğaz manzaralı konutlarda kilit değişimi yapıyoruz.' },
    ],
  },
  'sariyer-rumelifeneri': {
    intro: 'İstanbul Boğazı\'nın Karadeniz\'e açıldığı noktada konumlanan Rumelifeneri, deniz feneri ve balıkçı restoran kültürüyle özgün bir karaktere sahip bir semttir. Her türlü konut için çilingir hizmeti sunuyoruz.',
    landmark: 'Rumeli Feneri ve Boğaz çıkış noktası',
    transport: 'Sarıyer-Rumelifeneri minibüs hattı',
    faq: [
      { q: 'Rumelifeneri\'ne kaç dakikada gelirsiniz?', a: 'Rumelifeneri\'ne ortalama 45-60 dakikada ulaşıyoruz; durum önceden bildirilir.' },
      { q: 'Rumelifeneri\'nde 7/24 çilingir var mı?', a: 'Evet, uzak noktalara da hizmet veriyoruz. 0538 059 01 73\'yi arayın.' },
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
      { q: 'Gümüşdere\'de yazlık konut kapısı açılır mı?', a: 'Evet, mevsimlik konutlarda da hizmet veriyoruz. 0538 059 01 73\'yi arayın.' },
      { q: 'Gümüşdere\'ye kaç dakikada gelirsiniz?', a: 'Ortalama 40-55 dakikada Gümüşdere\'ye ulaşıyoruz.' },
    ],
  },
  'sariyer-kumkoy': {
    intro: 'Karadeniz kıyısında Sarıyer\'in kuzeyine doğru uzanan Kumköy, giderek artan villa ve tatil konutlarına sahip gelişen bir bölgedir. Uzak mesafelere de hizmet veriyoruz.',
    landmark: 'Karadeniz kıyısı ve tatil bölgesi',
    transport: 'İstanbul-Kilyos güzergahı',
    faq: [
      { q: 'Kumköy\'e kaç dakikada gelirsiniz?', a: 'Kumköy\'e ortalama 45-60 dakikada ulaşıyoruz; önceden bilgi veriyoruz.' },
      { q: 'Kumköy\'de 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
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
      { q: 'Gültepe\'de 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
    ],
  },
  'kagithane-hamidiye': {
    metaTitle: 'Hamidiye Çilingir | Kağıthane 7/24 — 20-30 Dk Acil',
    metaDesc: 'Hamidiye\'de kapıda mı kaldınız? 7/24 acil çilingir, 20-30 dk. Avrupa Konutları Çamlıvadi ve tüm mahalle kapıları açılır. Kilit değişimi. 0538 059 01 73',
    intro: 'Kağıthane Vadisi\'ne yakın Hamidiye\'de tarihi doku ile yeni yapılaşma iç içe geçmiştir. Her iki yapı tipindeki kapı ve kilit sistemleri için deneyimliyiz.',
    landmark: 'Kağıthane Vadisi yakınlığı',
    transport: 'Kağıthane otobüs hatları',
    faq: [
      { q: 'Hamidiye\'de acil kapı açma hizmeti var mı?', a: 'Evet, 7/24 hizmet veriyoruz. 0538 059 01 73\'yi arayın.' },
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
      { q: 'Çeliktepe\'de 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
    ],
  },
  'kagithane-gursel': {
    intro: 'Kentsel dönüşümün etkisiyle yenilenen yapılarıyla Gürsel, hem eski hem yeni kapı sistemleri barındıran dinamik bir konut mahallesidir. Her ikisi için de uzmanlarımızla hizmet veriyoruz.',
    landmark: 'Kağıthane kentsel dönüşüm konut alanları',
    transport: 'Kağıthane otobüs hatları',
    faq: [
      { q: 'Gürsel\'de kentsel dönüşüm yeni bina kapısı açılır mı?', a: 'Evet, modern çelik kapı sistemlerinde tecrübeli ekibimizle hizmet veriyoruz.' },
      { q: 'Gürsel\'de 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
    ],
  },
  'kagithane-harmantepe': {
    intro: 'Kağıthane\'nin sakin konut mahallelerinden Harmantepe, çoğunlukla aile tipi apartmanlardan oluşur. Standart konut kapısı açma ve kilit değişimi için 7/24 hizmet sunuyoruz.',
    landmark: 'Harmantepe Parkı ve konut dokusu',
    transport: 'Kağıthane otobüs hatları',
    faq: [
      { q: 'Harmantepe\'de acil çilingir alabilir miyim?', a: 'Evet, Harmantepe\'ye 20-30 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
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
      { q: 'Ortabayır\'da 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
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
      { q: 'Gülbağ\'da acil çilingir var mı?', a: 'Evet, Gülbağ\'a 20-30 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
      { q: 'Gülbağ\'da kilit değişimi yapıyor musunuz?', a: 'Evet, konut kilidi değişimi hizmeti sunuyoruz.' },
    ],
  },
  'kagithane-hurriyet': {
    intro: 'Kentsel dönüşümün etkisiyle değişen toplu konut alanlarıyla Hürriyet, yeni yapılarda modern kapı sistemleri gerektiren bir mahalledir. 7/24 hizmet sunuyoruz.',
    landmark: 'Kağıthane toplu konut alanları',
    transport: 'Kağıthane otobüs hatları',
    faq: [
      { q: 'Hürriyet\'te yeni bina kapısı açılır mı?', a: 'Evet, modern çelik kapı sistemlerinde tecrübeliyiz.' },
      { q: 'Hürriyet\'te 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
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
      { q: 'Sultan Selim\'de acil kapı açma hizmeti var mı?', a: 'Evet, Sultan Selim\'e 15-25 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
      { q: 'Sultan Selim\'de kilit değişimi yapıyor musunuz?', a: 'Evet, her türlü konut kilidi değişimi hizmeti sunuyoruz.' },
    ],
  },

  // ── Eyüpsultan ────────────────────────────────────────────────────────────
  'eyupsultan-alibeykoy': {
    metaTitle: 'Alibeyköy Çilingir | Eyüpsultan 7/24 — 15-20 Dk Acil',
    metaDesc: 'Alibeyköy\'de kapıda mı kaldınız? 7/24 acil çilingir, 15-20 dk. Alibeyköy Göleti, T5 tramvay hattı yakını. Site kapı açma, kilit değişimi, oto çilingir. 0538 059 01 73',
    intro: 'T5 tramvay hattıyla İstanbul\'a bağlanan Alibeyköy, yeni konut siteleri ve geniş konut projelerinin odak noktasıdır. Site giriş kapılarından daire kapılarına kadar tüm Alibeyköy genelinde 7/24 çilingir hizmeti veriyoruz.',
    landmark: 'Alibeyköy Göleti ve T5 tramvay hattı',
    transport: 'T5 Alibeyköy tramvay durağı',
    faq: [
      { q: 'Alibeyköy\'de site kapısı açılır mı?', a: 'Evet, Alibeyköy\'deki site giriş kapıları ve daire kapılarında 7/24 hizmet veriyoruz. T5 tramvay güzergahı sayesinde 15-20 dakikada yanınızdayız.' },
      { q: 'Alibeyköy\'de gece çilingir var mı?', a: 'Evet, gece yarısı dahil 7/24 hizmetimiz aktif. 0538 059 01 73\'yi arayın, Alibeyköy\'e ortalama 15-20 dakikada ulaşıyoruz.' },
      { q: 'Alibeyköy\'de kilit değişimi yapıyor musunuz?', a: 'Evet, konut kilidi ve silindir değişimi aynı gün yapılmaktadır. Kentsel dönüşüm projelerindeki yeni kapılar için de stokta parça bulunduruyoruz.' },
      { q: 'Alibeyköy\'de oto çilingir hizmeti var mı?', a: 'Evet, Alibeyköy çevresindeki otoparklarda araç kapısı açma ve anahtar hizmetleri sunuyoruz.' },
    ],
  },
  'eyupsultan-gokturk': {
    metaTitle: 'Göktürk Çilingir | Eyüpsultan 7/24 — 25-35 Dk Acil',
    metaDesc: 'Göktürk\'te kapıda mı kaldınız? 7/24 acil çilingir, 25-35 dk. Göktürk villa bölgesi ve Golf Kulübü yakını. Villa kapı açma, güvenlik kilidi değişimi. 0538 059 01 73',
    intro: 'Lüks villaları ve golf kulübüyle İstanbul\'un en seçkin sayfiye mahallelerinden biri olan Göktürk\'te, özel kapı güvenlik sistemleri ve villa kilitleri için uzman ekibimizle hizmet sunuyoruz.',
    landmark: 'Göktürk Ormanları ve Golf Kulübü',
    transport: 'TEM Otoyolu bağlantısı, özel araç bölgesi',
    faq: [
      { q: 'Göktürk\'te villa kapısı açılır mı?', a: 'Evet, Göktürk\'ün müstakil ev ve villa kapılarında özel deneyimimiz mevcuttur. TEM bağlantısı sayesinde ortalama 25-35 dakikada yanınızdayız.' },
      { q: 'Göktürk\'te güvenlik kilidi değişimi yapılır mı?', a: 'Evet, A sınıfı silindir, motorlu garaj kapısı kilidi ve alarm entegrasyonlu kilit sistemleri dahil her türlü değişim yapıyoruz.' },
      { q: 'Göktürk\'te gece çilingir alabilir miyim?', a: 'Evet, gece yarısı dahil 7/24 hizmetimiz aktif. Göktürk\'ün köy ve villa bölgelerine de ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
      { q: 'Göktürk\'te akıllı kilit kurulumu yapılır mı?', a: 'Evet, Göktürk villaları için biyometrik kilit, video kapı zili ve alarm entegrasyonu konusunda da yönlendirme ve kurulum yapıyoruz.' },
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
    metaTitle: 'Rami Çilingir | Eyüpsultan 7/24 — 15-25 Dk Acil',
    metaDesc: 'Rami\'de kapıda mı kaldınız? 7/24 acil çilingir, 15-25 dk. Rami Kışlası ve T4 tramvay hattı yakını. Sanayi kapısı, konut kapı açma, kilit değişimi. 0538 059 01 73',
    intro: 'Tarihi Rami Kışlası\'nın dönüşüm sürecinde olan Rami, sanayi ve konut karışımı büyük bir yerleşim alanıdır. Fabrika, depo ve konut kapı sistemleri için 7/24 hizmet sunuyoruz.',
    landmark: 'Rami Kışlası dönüşüm projesi alanı',
    transport: 'T4 Rami tramvay durağı',
    faq: [
      { q: 'Rami\'de sanayi kapısı açılır mı?', a: 'Evet, Rami\'deki fabrika, depo ve atölye kapıları dahil her türlü ticari kapı için 7/24 hizmet veriyoruz. T4 tramvay güzergahı sayesinde 15-25 dakikada yanınızdayız.' },
      { q: 'Rami\'de konut kapısı açılır mı?', a: 'Evet, Rami\'nin konut apartmanları ve yeni yapılarında da hizmet veriyoruz. 0538 059 01 73\'yi arayın.' },
      { q: 'Rami\'de kilit değişimi yapıyor musunuz?', a: 'Evet, sanayi kilitleri, depo mandal sistemleri ve konut silindir değişimi dahil tüm kilit tiplerinde hizmet sunuyoruz.' },
      { q: 'Rami\'ye gece kaç dakikada gelirsiniz?', a: 'Rami\'ye ortalama 15-25 dakikada ulaşıyoruz. Gece yarısı dahil 7/24 hizmetimiz aktif.' },
    ],
  },
  'eyupsultan-islambey': {
    intro: 'Eyüpsultan\'ın köklü mahallelerinden İslambey, tarihi yapılarıyla özgün bir doku sergiler. Eski binalardaki özel kilit sistemleri için de uzmanlarımızla hizmet veriyoruz.',
    landmark: 'Eyüp merkezi yakınlığı ve tarihi yapılar',
    transport: 'Eyüpsultan otobüs güzergahı',
    faq: [
      { q: 'İslambey\'de eski bina kapısı açılır mı?', a: 'Evet, tarihi yapı kapılarında hasar vermeden açma yapıyoruz.' },
      { q: 'İslambey\'de 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
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
      { q: 'Silahtarağa\'da 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
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
      { q: 'Düğmeciler\'de 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
      { q: 'Düğmeciler\'de ticari kapı açılır mı?', a: 'Evet, sanayi ve konut kapıları için hizmet veriyoruz.' },
    ],
  },
  'eyupsultan-yesilpinar': {
    intro: 'Konut ve ticaretin dengelendiği Yeşilpınar\'da her iki kullanım türü için de 7/24 çilingir hizmeti veriyoruz. Yeşilpınar Caddesi çevresindeki yapılar hizmet alanımız içindedir.',
    landmark: 'Yeşilpınar Caddesi ve karma kullanım bölgesi',
    transport: 'Eyüpsultan otobüs güzergahı',
    faq: [
      { q: 'Yeşilpınar\'da acil çilingir alabilir miyim?', a: 'Evet, Yeşilpınar\'a 20-30 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
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
      { q: 'Nüsratiye\'de 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
    ],
  },
  'eyupsultan-aksemsettin': {
    intro: 'Akşemsettin Türbesi\'yle tarihi anlam taşıyan ve ziyaretçilerin yoğun ilgisini çeken Akşemsettin Mahallesi\'nde özgün Osmanlı konut dokusuna uygun kilit sistemleri için hizmet veriyoruz.',
    landmark: 'Akşemsettin Türbesi ve tarihi semt dokusu',
    transport: 'Eyüpsultan merkezi ulaşım',
    faq: [
      { q: 'Akşemsettin\'de eski konut kapısı açılır mı?', a: 'Evet, tarihi yapıların özgün kilit sistemlerini hasar vermeden açıyoruz.' },
      { q: 'Akşemsettin\'de 7/24 çilingir var mı?', a: 'Evet, 0538 059 01 73\'yi arayın.' },
    ],
  },
  'eyupsultan-nisanca': {
    intro: 'Eyüpsultan\'ın sakin konut mahallelerinden Nişanca, geniş aile konutları ve müstakil yapılarıyla tanınır. Her ölçekteki konut tipi için 7/24 çilingir hizmeti sunuyoruz.',
    landmark: 'Eyüpsultan güneyi ve müstakil konut bölgesi',
    transport: 'Eyüpsultan otobüs hatları',
    faq: [
      { q: 'Nişanca\'da acil kapı açma hizmeti var mı?', a: 'Evet, Nişanca\'ya 20-30 dakikada ulaşıyoruz. 0538 059 01 73\'yi arayın.' },
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
    metaDesc:  dc.metaDesc  || `${d.name} bölgesinde 7/24 acil çilingir hizmeti. Kapı açma, kilit değişimi. 0538 059 01 73`,
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
      metaTitle: hc.metaTitle || `${hName} Çilingir | ${d.name} 7/24 Acil`,
      metaDesc:  hc.metaDesc  || `${hName} mahallesinde (${d.name}) 7/24 acil çilingir. ${hc.landmark ? hc.landmark + ' yakınında.' : ''} Kapı açma, kilit değişimi, 20-30 dk. 0538 059 01 73`.slice(0, 160),
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
