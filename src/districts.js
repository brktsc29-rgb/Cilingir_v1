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
