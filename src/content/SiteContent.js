export class SiteContent {
  static labels = {
    header: 'Ana menü',
    primaryNav: 'Birincil navigasyon',
    heroNav: 'Hero navigasyon',
    quickActions: 'Hızlı işlemler',
    homepage: 'Türk-Japon Bilim ve Teknoloji Üniversitesi ana sayfa',
    campusImage: 'Kampüs görseli',
    footerNav: 'Footer bağlantıları',
    socialMedia: 'Sosyal medya',
  }

  static brand = {
    title: 'TÜRK-JAPON BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ',
    subtitle: 'TURKISH-JAPANESE SCIENCE AND TECHNOLOGY UNIVERSITY',
    japaneseTitle: 'トルコ・日本科学技術大学',
  }

  static tools = [
    { label: 'Ara', text: '⌕' },
    { label: 'Kullanıcı', text: '♙' },
    { label: 'E-posta', text: '✉' },
    { label: 'English', text: 'EN' },
  ]

  static hero = {
    title: 'Geleceğe Hazır Bireyler İçin Yenilikçi Eğitim',
    ctaText: "TJU'de<br />Neler Oluyor?",
    ctaIcon: '→',
  }

  static sectionTitles = {
    announcementsEyebrow: 'Duyurular',
    announcementsTitle: 'Kampüsten güncel başlıklar',
    statsTitle: 'Çok Yönlü Gelişimi Destekleyen TJU',
  }

  static links = {
    announcementDetail: 'Detaylı Bilgi →',
    newsDetail: 'Detaylar İçin Tıklayın! →',
    more: 'Daha fazla →',
  }

  static announcements = [
    {
      date: '03 Nisan 2026',
      title: 'Yeni Duyuru Sistemi Yayında | Kampüs İçi İletişimde Devrim',
      tone: 'blue',
    },
    {
      date: '11 Nisan 2026',
      title: 'Yeni Duyuru Sistemi Yayında | Kampüs İçi İletişimde Devrim',
      tone: 'indigo',
    },
    {
      date: '10 Nisan 2026-10 Nisan 2026',
      title: 'Yeni Duyuru Sistemi Yayında | Kampüs İçi İletişimde Devrim',
      tone: 'red',
    },
  ]

  static news = [
    {
      title: "TJU, 2026-2027 sezonunda Zirvede!",
      body:
        'Türk-Japon Bilim ve Teknoloji Üniversitesi, öğrenci memnuniyeti ve akademik gelişim odaklı çalışmalarıyla öne çıkıyor.',
      image: '/bospng.png',
    },
    {
      title: 'Rektörümüze Öğrencilerden TÜMA Altın Ödülü',
      lead: 'Öğrenci deneyimini merkeze alan yaklaşım.',
      body:
        'Akademik ilgi, destek ve kampüs yaşamını güçlendiren uygulamalarımızla öğrencilerimizin yanında olmaya devam ediyoruz.',
      image: '/bospng.png',
    },
  ]

  static stats = [
    ['5367', 'Kayıtlı Öğrenci', 'graduates'],
    ['23', 'Lisans Programı', 'board'],
    ['5', 'Fakülte', 'building'],
    ['336', 'Öğretim Elemanı', 'lecture'],
    ['% 100', 'İngilizce Eğitim', 'globe'],
  ]

  static mediaCards = {
    filmTitle: "TJU'lü Ol!",
    filmIcon: '▶',
    catalogTitle: 'TJU<br />Tanıtım Kataloğu',
    tourTitle: '360 Kampüs Turu',
  }

  static gallery = [
    'Araştırma',
    'Seminer',
    'Kampüs',
    'Spor',
    'Stüdyo',
    'Laboratuvar',
    'Konferans',
    'Atölye',
    'Salon',
    'Deney',
    'Yaşam',
    'Keşif',
  ]

  static audienceLinks = [
    ['Aday Öğrenciler', '/aday-ogrenciler'],
    ['Öğrenciler', '/ogrenciler'],
    ['Mezunlar', '/mezunlar'],
    ['International', '/international'],
  ]

  static teduMenu = [
    {
      title: 'Hakkımızda',
      links: [
        ['Türk Japon Üniversitesi', '/ted-universitesi'],
        ['Misyon ve Vizyon', '/misyon-ve-vizyon'],
        ['Yönetmelik ve Yönergeler', '/yonetmelik-ve-yonergeler'],
        ['Kişisel Verilerin Korunması', '/kisisel-verilerin-korunmasi'],
      ],
    },
    {
      title: 'Üniversite Yönetimi',
      links: [
        ['Konsey', '/mutevelli-heyeti'],
        ['Rektörlük', '/rektorluk'],
        ['Öğrenci Koordinatörlüğü', '/ogrenci-koordinatorlugu'],
        ['İdari Personel', '/idari-personel'],
        ['Organizasyon Şeması', '/organizasyon-semasi'],
        ['Akademik Kurullar', '/akademik-kurullar'],
        ['Komisyonlar', '/komisyonlar'],
      ],
    },
    {
      title: 'İnsan Kaynakları',
      links: [
        [
          'Öğretim Üyeliğine Yükseltilme ve Atanma Esasları',
          '/ogretim-uyeligine-yukseltilme-ve-atanma-esaslari',
        ],
        ['Çalışan El Kitabı', '/calisan-el-kitabi'],
        ['Akademik İş İmkanları', '/akademik-is-imkanlari'],
        ['İdari İş İmkanları', '/idari-is-imkanlari'],
      ],
    },
  ]

  static academicMenu = [
    {
      title: 'Akademik Birimler',
      sections: [
        {
          title: 'Fakülteler',
          links: [['Mühendislik Fakültesi', '/muhendislik-fakultesi']],
        },
      ],
      links: [
        ['Lisansüstü Programlar Enstitüsü', '/lisansustu-programlar-enstitusu'],
        ['İngilizce Dil Okulu (ELS)', '/ingilizce-dil-okulu'],
      ],
    },
    {
      title: 'Akademik Bilgiler',
      links: [
        ['Akademik Katalog', '/akademik-katalog'],
        ['Akademik Takvim', '/akademik-takvim'],
        ['Açılan Dersler', '/acilan-dersler'],
        ['Ek Dal Programları', '/ek-dal-programlari'],
        ['Akademik Kadro', '/akademik-kadro'],
      ],
    },
    {
      title: 'Yeni Kayıt ve Başvuru',
      links: [
        ['Çift Ana Dal / Yan Dal Programları', '/cift-ana-dal-yan-dal-programlari'],
        ['Burslar', '/burslar'],
      ],
    },
  ]

  static researchMenu = [
    {
      title: 'Araştırma Çıktıları',
      links: [
        ['Akademik Özgürlük Politikası', '/akademik-ozgurluk-politikasi'],
        ['Akademik Veri Yönetim Sistemi', '/akademik-veri-yonetim-sistemi'],
        ['AFETTEK', '/afettek'],
      ],
    },
    {
      title: 'Kurum İçi Araştırma Destekleri',
      links: [
        ['Araştırma Teşvik Ödülleri', '/arastirma-tesvik-odulleri'],
        ['Öğrenci Kongre Katılım Desteği', '/ogrenci-kongre-katilim-destegi'],
        ['Bilimsel Araştırma Projeleri', '/bilimsel-arastirma-projeleri'],
        ['Lisans Öğrencileri Araştırma Desteği', '/lisans-ogrencileri-arastirma-destegi'],
      ],
    },
  ]

  static discoverMenu = [
    {
      title: "TJU'nde Yaşam",
      links: [
        ['360 Sanal Tur', '/360-sanal-tur'],
        ['Spor Dostu Kampüs Etkinliklerimiz', '/spor-dostu-kampus-etkinliklerimiz'],
      ],
    },
    {
      title: 'Hizmetler',
      links: [
        ['Kütüphane', '/kutuphane'],
        ['Spor Tesisi', '/spor-tesisi'],
        ['Yurtlar', '/yurtlar'],
      ],
    },
    {
      title: 'Kültür Sanat ve Spor',
      links: [
        ['Öğrenci Toplulukları', '/ogrenci-topluluklari'],
        ['Bilim Projesi Takımları', '/bilim-projesi-takimlari'],
        ['Uluslararası Öğrenci Birlikleri', '/uluslararasi-ogrenci-birlikleri'],
        ['Spor Takımlarımız', '/spor-takimlarimiz'],
      ],
    },
    {
      title: 'Merkezler',
      links: [
        ['Kariyer Merkezi', '/kariyer-merkezi'],
        ['Öğretme Öğrenme Merkezi', '/ogretme-ogrenme-merkezi'],
        ['Sürekli Eğitim Merkezi', '/surekli-egitim-merkezi'],
        [
          'Öğrenci Gelişim ve Psikolojik Danışma Merkezi',
          '/ogrenci-gelisim-ve-psikolojik-danisma-merkezi',
        ],
      ],
    },
  ]

  static primaryNavItems = [
    {
      label: 'TJU',
      path: '/tedu',
      intro: 'TJU Hakkında',
      ariaLabel: 'TJU alt menüsü',
      groups: SiteContent.teduMenu,
    },
    {
      label: 'Akademik',
      path: '/akademik',
      intro: 'TJU Akademik',
      ariaLabel: 'Akademik alt menüsü',
      groups: SiteContent.academicMenu,
    },
    {
      label: 'Araştırma',
      path: '/arastirma',
      intro: 'TJU Araştırma',
      ariaLabel: 'Araştırma alt menüsü',
      groups: SiteContent.researchMenu,
    },
    {
      label: "TJU'ni Keşfet",
      path: '/teduyu-kesfet',
      intro: "TJU'ni Keşfet",
      ariaLabel: "TJU'ni Keşfet alt menüsü",
      groups: SiteContent.discoverMenu,
    },
  ]

  static footer = {
    links: [
      'Sıkça Sorulan Sorular',
      'Kişisel Verilerin Korunması',
      'Gizlilik Politikası',
      'Sorumluluk Reddi',
      'Bilgi Edinme',
      'Site Yöneticisi İletişim',
      'İhale ve Satınalma İlanları',
      'Açık Rıza',
      'Kurumsal Kimlik',
    ],
    copyright: '© Türk-Japon Bilim ve Teknoloji Üniversitesi.',
    socialLinks: ['●', '▶', 'f', '◎', 'in', '☏'],
    badges: ['IEP', 'Institutional Evaluation Programme', 'YÖKAK'],
  }

  static rectorate = {
    pageTitle: 'Rektörlük',
    role: 'Rektör',
    name: 'Prof. Dr. İhsan Sabuncuoğlu',
    email: 'rektorluk@tedu.edu.tr',
    officeTitle: 'Özel Kalem Müdürü',
    officeManager: 'Burcu Karaca',
    officeEmails: ['burcu.karaca@tedu.edu.tr', 'ozelkalem@tedu.edu.tr'],
    phones: ['0 (312) 585 0006', '0 (312) 585 0011 - 585 0009'],
    image: '/bospng.png',
  }

  static administrativeStaff = {
    pageTitle: 'İdari Personel',
    heroImage: '/bospng.png',
    search: {
      nameLabel: 'Ad Soyad',
      departmentLabel: 'Birim',
      allDepartments: '- Tümü -',
      button: 'Uygula',
    },
    staff: [
      {
        name: 'Mustafa Kutluhan Olcay',
        department: 'Genel Sekreter',
        title: 'Genel Sekreter',
        email: 'kutluhan.olcay@tedu.edu.tr',
        room: 'A-018',
        image: '/bospng.png',
      },
      {
        name: 'Kazım Acar',
        department: 'Yurtlar Müdürlüğü',
        title: 'Kat Görevlisi',
        email: '',
        room: '',
        image: '/bospng.png',
      },
      {
        name: 'Mustafa Acar',
        department: 'TEDÜ İktisadi İşletmesi',
        title: 'Mali İşler Şefi',
        email: 'mustafa.acar@tedu.edu.tr',
        room: 'A019',
        image: '/bospng.png',
      },
      {
        name: 'Ayşe Demir',
        department: 'Öğrenci İşleri',
        title: 'Uzman',
        email: 'ayse.demir@tedu.edu.tr',
        room: 'B-104',
        image: '/bospng.png',
      },
    ],
  }
}
