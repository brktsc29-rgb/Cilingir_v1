const RAW = [
  {base:'besiktas', name:'Beşiktaş', hoods:[
    ['etiler',      'Etiler',       "Etiler'de"],
    ['levazim',     'Levazım',      "Levazım'da"],
    ['bebek',       'Bebek',        "Bebek'te"],
    ['ortakoy',     'Ortaköy',     "Ortакöy'de"],
    ['levent',      'Levent',       "Levent'te"],
    ['arnavutkoy',  'Arnavutköy',  "Arnavutköy'de"],
    ['akatlar',     'Akatlar',      "Akatlar'da"],
    ['balmumcu',    'Balmumcu',     "Balmumcu'da"],
  ]},
  {base:'sisli', name:'Şişli', hoods:[
    ['mecidiyekoy', 'Mecidiyекöy', "Mecidiyекöy'de"],
    ['nisantasi',   'Nişantaşı',   "Nişantaşı'nda"],
    ['osmanbey',    'Osmanbey',     "Osmanbey'de"],
    ['bomonti',     'Bomonti',      "Bomonti'de"],
    ['harbiye',     'Harbiye',      "Harbiye'de"],
    ['gulbahar',    'Gülbahar',    "Gülbahar'da"],
  ]},
  {base:'kadikoy', name:'Kadıköy', hoods:[
    ['moda',        'Moda',         "Moda'da"],
    ['fenerbahce',  'Fenerbağçe',  "Fenerbağçe'de"],
    ['feneryolu',   'Feneryolu',    "Feneryolu'nda"],
    ['caddebostan', 'Caddebostan',  "Caddebostan'da"],
    ['suadiye',     'Suadiye',      "Suadiye'de"],
    ['goztepe',     'Göztepe',     "Göztepe'de"],
    ['erenkoy',     'Erenköy',     "Erenköy'de"],
    ['kozyatagi',   'Kozyatağı',   "Kozyatağı'nda"],
  ]},
  {base:'uskudar', name:'Üsküdar', hoods:[
    ['cengelkoy',   'Çengelköy',   "Çengelköy'de"],
    ['acibadem',    'Acıbadem',    "Acıbadem'de"],
    ['altunizade',  'Altunizade',   "Altunizade'de"],
    ['beylerbeyi',  'Beylerbeyi',   "Beylerbeyi'nde"],
    ['kuzguncuk',   'Kuzguncuk',    "Kuzguncuk'ta"],
    ['baglarbasi',  'Bağlarbaşı',  "Bağlarbaşı'nda"],
  ]},
  {base:'beyoglu', name:'Beyoğlu', hoods:[
    ['taksim',      'Taksim',       "Taksim'de"],
    ['cihangir',    'Cihangir',     "Cihangir'de"],
    ['karakoy',     'Karaköy',     "Karaköy'de"],
    ['galata',      'Galata',       "Galata'da"],
    ['cukurcuma',   'Çukurcuma',   "Çukurcuma'da"],
  ]},
  {base:'fatih', name:'Fatih', hoods:[
    ['aksaray',     'Aksaray',      "Aksaray'da"],
    ['laleli',      'Laleli',       "Laleli'de"],
    ['sultanahmet', 'Sultanahmet',  "Sultanahmet'te"],
    ['balat',       'Balat',        "Balat'ta"],
    ['fener',       'Fener',        "Fener'de"],
    ['samatya',     'Samatya',      "Samatya'da"],
  ]},
  {base:'bakirkoy', name:'Bakırköy', hoods:[
    ['florya',      'Florya',       "Florya'da"],
    ['yesilkoy',    'Yeşilköy',    "Yeşilköy'de"],
    ['atakoy',      'Ataköy',      "Ataköy'de"],
    ['sirinevier',  'Şirinevler',  "Şirinevler'de"],
    ['kartaltepe',  'Kartaltepe',   "Kartaltepe'de"],
  ]},
  {base:'kagithane', name:'Kağıthane', hoods:[
    ['caglayan',    'Çağlayan',    "Çağlayan'da"],
    ['seyrantepe',  'Seyrantepe',   "Seyrantepe'de"],
    ['gultepe',     'Gültepe',     "Gültepe'de"],
    ['hamidiye',    'Hamidiye',     "Hamidiye'de"],
  ]},
  {base:'eyupsultan', name:'Eyüpsultan', hoods:[
    ['alibeykoy',   'Alibeyкöy',   "Alibeyкöy'de"],
    ['gokturk',     'Göktürk',     "Göktürk'te"],
    ['kemerburgaz', 'Kemerburgaz',  "Kemerburgaz'da"],
    ['rami',        'Rami',         "Rami'de"],
  ]},
  {base:'sariyer', name:'Sarıyer', hoods:[
    ['maslak',      'Maslak',       "Maslak'ta"],
    ['istinye',     'İstinye',      "İstinye'de"],
    ['tarabya',     'Tarabya',      "Tarabya'da"],
    ['yenikoy',     'Yeníköy',     "Yeniköy'de"],
    ['buyukdere',   'Büyükdere',   "Büyükdere'de"],
  ]},
];

export const ALL_PAGES = [];

RAW.forEach(d => {
  const hoods = d.hoods.map(([hBase, hName]) => ({
    path: `${d.base}-${hBase}-cilingir`,
    name: hName,
  }));

  ALL_PAGES.push({
    path: `${d.base}-cilingir`,
    name: d.name,
    isNeighborhood: false,
    districtName: d.name,
    metaTitle: `${d.name} Çilingir | 7/24 Acil Hizmet | Taşcı Çilingir`,
    metaDesc: `${d.name} bölgesinde 7/24 acil çilingir hizmeti. Kapı açma, kilit değişimi, oto çilingir. Ortalama 20-30 dakikada kapınızda. 0542 694 69 20`,
    nearby: hoods,
  });

  d.hoods.forEach(([hBase, hName]) => {
    const siblings = d.hoods
      .filter(([s]) => s !== hBase)
      .map(([s, n]) => ({ path: `${d.base}-${s}-cilingir`, name: n }));

    ALL_PAGES.push({
      path: `${d.base}-${hBase}-cilingir`,
      name: hName,
      isNeighborhood: true,
      districtName: d.name,
      districtPath: `${d.base}-cilingir`,
      metaTitle: `${hName} Çilingir | ${d.name} | 7/24 Acil | Taşcı Çilingir`,
      metaDesc: `${hName} (${d.name}) bölgesinde 7/24 acil çilingir hizmeti. Ortalama 20-30 dakikada kapınızda. 0542 694 69 20`,
      nearby: siblings,
    });
  });
});
