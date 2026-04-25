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
    title: 'Biz Hazırız! Öğrencilerimizi Bekliyoruz.',
    ctaText: "TJU'de<br />Neler Oluyor?",
    ctaIcon: '→',
  }

  static sectionTitles = {
    announcementsEyebrow: 'Duyurular',
    announcementsTitle: "TJU'den Duyurular",
    statsTitle: 'Yeni Kampüsünde TJU',
  }

  static links = {
    announcementDetail: 'Detaylı Bilgi →',
    newsDetail: 'Detaylar İçin Tıklayın! →',
    more: 'Daha fazla →',
  }

  static announcements = [
    {
      date: '03 Nisan 2026',
      title: "17 Mayıs'ta Türk Japon Kültür Günü Etkinliği | Kültürel Bağlarımızı Güçlendiriyoruz",
      tone: 'red',
    },
    {
      date: '11 Nisan 2026',
      title: 'Yeni Duyuru Sistemi Yayında | Kampüs İçi İletişimde Devrim',
      tone: 'red',
    },
    {
      date: '10 Nisan 2026-10 Nisan 2026',
      title: 'Yeni Duyuru Sistemi Yayında | Kampüs İçi İletişimi Destekliyoruz',
      tone: 'red',
    },
  ]

  static news = [
    {
      title: "TJU, Yeni Kampüsünde!",
      body:
        'Türk-Japon Bilim ve Teknoloji Üniversitesi, öğrenci memnuniyeti ve akademik gelişim odaklı projeleriyle öne çıkıyor.',
      image: '/campus-placeholder.png',
    },
    {
      title: 'TJU 4 Mühendislik Bölümü ile Eğitim Öğretime Başlıyor',
      lead: 'Öğrenci deneyimini merkeze alan yaklaşım.',
      body:
        'Akademik ilgi, destek ve kampüs yaşamını güçlendiren uygulamalarımızla öğrencilerimizin yanında olmaya devam ediyoruz.',
      image: '/campus-placeholder.png',
    },
  ]

  static stats = [
  
    ['4', 'Lisans Programı', 'board'],
    ['1', 'Fakülte', 'building'],
    ['16', 'Öğretim Elemanı', 'lecture'],
    ['% 100', 'İngilizce Eğitim', 'globe'],
    ['Japonca Eğitim İmkanı', 'globe'],

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
    ['International', '/international'],
  ]

  static prospectiveStudents = {
    pageTitle: 'Üniversite Adaylarına Bilgi',
    logoTitle: 'TÜRK-JAPON BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ',
    logoSubtitle: 'Üniversite Adaylarına Bilgi',
    heroImage: '/campus-placeholder.png',
    heroTitle: 'Geleceğini TJU ile Şekillendir',
    heroTag: 'Aday Öğrenciler',
    nav: [
      {
        label: 'Tanıtım',
        path: '#tanitim',
        links: [
          'Kampüs Ziyaretleri',
          'Meslek Seminerleri',
          'Sanal Kampüs Turu',
          'Tanıtım Kitapçığı',
          'Tanıtım Videoları',
          'Randevu Al',
        ],
      },
      {
        label: 'YKS Bilgileri',
        path: '#yks',
        links: ['Kontenjanlar ve Puanlar', 'Yerleştirme Koşulları'],
      },
      {
        label: 'Eğitim Programları',
        path: '#programlar',
        links: ['Tüm Lisans Programları', 'Puan Türlerine Göre Bölümler', 'Ders Programları', 'İngilizce Hazırlık Programı'],
      },
      { label: 'Akademik Bilgiler', path: '#akademik' },
      {
        label: 'Kampüste Yaşam',
        path: '#kampus',
        links: ['Yurtlar', 'Kafeteryalar', 'Spor ve Sağlık', 'Sosyal ve Kültürel', 'Kampüs Planı', 'TJU’ye Ulaşım'],
      },
      { label: 'Sorular', path: '#sorular' },
    ],
    introCards: [
      {
        title: 'Kontenjanlar, Puanlar',
        body:
          'TJU programlarına yerleşmek için YKS’ye katılmak, tercih döneminde ilgili programı tercih etmek ve ÖSYM tarafından programa yerleştirilmek gerekir.',
        image: '/campus-placeholder.png',
      },
      {
        title: 'Tanıtım Kitapçığı',
        body:
          'Tanıtım kitapçığında TJU’nun akademik ve sosyal olanakları, eğitim programları ve öğretim kadrosuna ilişkin bilgiler yer alır.',
        image: '/campus-placeholder.png',
      },
      {
        title: 'Uluslararası Olanaklar',
        body:
          'TJU, Japonya başta olmak üzere farklı ülkelerdeki üniversitelerle öğrenci değişimi ve akademik iş birliği olanakları sunar.',
        image: '/campus-placeholder.png',
      },
    ],
    featureCards: [
      {
        title: 'Neden TJU',
        body:
          'Türk-Japon Bilim ve Teknoloji Üniversitesi; mühendislik odağı, uluslararası vizyonu ve yenilikçi eğitim yaklaşımıyla aday öğrencilerine güçlü bir akademik ortam sağlar.',
        image: '/campus-placeholder.png',
        button: 'Devamını Oku',
      },
    ],
    videoTitle: 'Tanıtım Videoları',
    videos: ['TJU’yu Tanı', 'Mühendislik Fakültesi', 'Kampüs Yaşamı', 'Öğrenci Deneyimi', 'Uluslararası Olanaklar'],
    footerLinks: ['info@tju.edu.tr', 'Türk-Japon Bilim ve Teknoloji Üniversitesi'],
  }

  static international = {
    pageTitle: 'International Programs Office',
    logoTitle: 'TJU',
    logoSubtitle: 'International Programs Office',
    heroTitle: 'International<br />Programs Office',
    heroImage: '/campus-placeholder.png',
    topNav: [
      ['TJU', '/'],
      ['Academics', '/akademik'],
      ['Explore TJU', '/teduyu-kesfet'],
    ],
    tools: [
      { label: 'Search', text: '⌕' },
      { label: 'User', text: '♙' },
      { label: 'E-mail', text: '✉' },
    ],
    nav: [
      { label: 'About', path: '#about' },
      {
        label: 'Apply Now',
        path: '#apply',
        featured: true,
        links: ['Undergraduate', 'Graduate', 'How to Apply', 'Agency Portal'],
      },
      { label: 'Application Information', path: '#application' },
      {
        label: 'Academics',
        path: '#academics',
        links: ['Faculties & Schools', 'Academic Calendar', 'Courses Offered', 'Grading System'],
      },
      {
        label: 'Student Life',
        path: '#student-life',
        links: [
          'Visa & Residence Permit',
          'Health Insurance',
          'Dormitories',
          'Student Affairs',
          'Equivalency Certificate',
          'Explore TJU',
          'Discover Ankara',
          'Adapting to Turkish Culture',
        ],
      },
      {
        label: 'Exchange Programs',
        path: '#exchange-programs',
        links: [
          'Erasmus+ Programme',
          'Outgoing (EU Mobility)',
          'Incoming (EU Mobility)',
          'Erasmus+ International Credit Mobility',
          'International (non-EU) Exchange Program',
          'Information',
          'Application',
          'Useful Documents',
          'Application Requirements For Partner Universities',
          'Departmental Coordinators',
          'Erasmus Policy Statement',
          'ECHE',
          'Contact',
          'ESN TJU',
        ],
      },
      {
        label: 'Partnerships',
        path: '#partnerships',
        links: [
          'Memorandum of Understanding (MoU)',
          'Consortiums',
          'Erasmus+ Inter-institutional Agreements (2021-2027)',
          'Student Exchange Agreements',
        ],
      },
      { label: 'Announcements', path: '#announcements' },
    ],
    cards: [
      {
        title: 'Social Activities and Students Societies',
        body:
          'Student organizations such as communities, international student associations, science project teams, and sports teams are managed by students under the supervision of academic advisors.',
        image: '/campus-placeholder.png',
      },
      {
        title: 'Dormitories',
        body:
          'TJU dormitories aim to provide a home-like and safe environment for students. Common areas support studying, resting, and socializing.',
        image: '/campus-placeholder.png',
      },
      {
        title: 'Study in the Heart of Ankara',
        body:
          'TJU campus is located in Ankara, offering students access to academic, social, and cultural opportunities in the capital.',
        image: '/campus-placeholder.png',
      },
    ],
    videos: [
      {
        title: 'TJU International - UPO 1',
        image: '/campus-placeholder.png',
      },
      {
        title: 'TJU International - UPO 2',
        image: '/campus-placeholder.png',
      },
    ],
    contactLabel: 'Contact',
    footerLinks: [
      'Clarification Text on Personal Data Processing',
      'Disclaimer',
      'Corporate Identity',
      'Open Consent Statement',
    ],
    copyright: '© Türk-Japon Bilim ve Teknoloji Üniversitesi.',
  }

  static aboutPages = [
    {
      path: '/ted-universitesi',
      pageTitle: 'Türk Japon Üniversitesi',
      heroTitle: 'Türk Japon<br />Üniversitesi',
      image: '/campus-placeholder.png',
      paragraphs: [
        'Türk-Japon Bilim ve Teknoloji Üniversitesi, Türkiye ile Japonya arasındaki bilimsel, teknolojik ve kültürel iş birliğini güçlendirmek amacıyla kurulmuştur. Üniversite; nitelikli eğitim, araştırma ve yenilik üretimini merkeze alan bir yükseköğretim kurumu olarak yapılandırılmıştır.',
        'TJU, mühendislik ve teknoloji alanlarında güçlü akademik programları, uluslararası bakış açısı ve disiplinler arası çalışma kültürüyle öğrencilerini geleceğin ihtiyaçlarına hazırlamayı hedefler.',
        'Üniversitemiz; öğrenci odaklı eğitim anlayışı, araştırma kapasitesi ve topluma katkı yaklaşımıyla ulusal ve uluslararası ölçekte değer üretmeyi amaçlar.',
      ],
      links: ['Akademik Birimler', 'Araştırma Olanakları', 'Kampüs Yaşamı'],
    },
    {
      path: '/misyon-ve-vizyon',
      pageTitle: 'Misyon ve Vizyon',
      heroTitle: 'Misyon ve<br />Vizyon',
      image: '/campus-placeholder.png',
      paragraphs: [
        'Misyonumuz; bilim, teknoloji ve insan odaklı eğitim anlayışıyla sorgulayan, üreten, etik değerlere bağlı ve küresel ölçekte sorumluluk alabilen bireyler yetiştirmektir.',
        'Vizyonumuz; Türkiye ve Japonya arasındaki akademik iş birliğini güçlendiren, araştırma çıktılarıyla topluma katkı sağlayan ve yenilikçi eğitim modeliyle öne çıkan uluslararası bir üniversite olmaktır.',
        'Bu doğrultuda TJU, öğrencilerine yalnızca akademik bilgi değil, aynı zamanda eleştirel düşünme, takım çalışması, kültürler arası iletişim ve sürdürülebilir çözüm üretme becerileri kazandırmayı hedefler.',
      ],
      links: ['Stratejik Öncelikler', 'Eğitim Yaklaşımı', 'Uluslararası İş Birlikleri'],
    },
    {
      path: '/yonetmelik-ve-yonergeler',
      pageTitle: 'Yönetmelik ve Yönergeler',
      heroTitle: 'Yönetmelik ve<br />Yönergeler',
      image: '/campus-placeholder.png',
      paragraphs: [
        'Üniversitenin akademik ve idari süreçleri; şeffaflık, hesap verebilirlik ve sürdürülebilir kalite ilkeleri doğrultusunda yönetmelik ve yönergelerle düzenlenir.',
        'Öğrenciler, akademik personel ve idari birimler için geçerli olan temel usul ve esaslar bu bölümde toplanır. İçerikler; eğitim-öğretim, ölçme-değerlendirme, disiplin, başvuru ve kurumsal işleyiş başlıklarında güncellenebilir yapıdadır.',
        'Bu sayfada yer alan dokümanlar bilgilendirme amaçlıdır; resmi süreçlerde üniversitenin güncel kurul kararları ve mevzuat metinleri esas alınır.',
      ],
      links: ['Öğrenci Yönergeleri', 'Akademik Süreçler', 'Kurumsal Belgeler'],
    },
    {
      path: '/kisisel-verilerin-korunmasi',
      pageTitle: 'Kişisel Verilerin Korunması',
      heroTitle: 'Kişisel Verilerin<br />Korunması',
      image: '/campus-placeholder.png',
      paragraphs: [
        'Türk-Japon Bilim ve Teknoloji Üniversitesi, kişisel verilerin korunmasına ilişkin süreçleri yürürlükteki mevzuat ve kurumsal güvenlik ilkeleri doğrultusunda yürütür.',
        'Kişisel veriler; hukuka uygunluk, amaçla sınırlılık, ölçülülük ve gerekli süre kadar saklama ilkelerine bağlı kalınarak işlenir. Üniversite, veri güvenliğini sağlamak için teknik ve idari tedbirleri alır.',
        'Aydınlatma metinleri, başvuru yöntemleri ve ilgili politika belgeleri bu sayfa altında düzenlenebilir. İçerik gerektiğinde kurum ihtiyaçlarına göre güncellenebilir.',
      ],
      links: ['Aydınlatma Metinleri', 'Başvuru Formu', 'Veri Güvenliği Politikası'],
    },
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
      ],
    },
  ]

  static researchMenu = [
    {
      title: 'Araştırma Çıktıları',
      links: [
        ['Akademik Özgürlük Politikası', '/akademik-ozgurluk-politikasi'],
        ['Akademik Veri Yönetim Sistemi', '/akademik-veri-yonetim-sistemi'],
       
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
    {
      label: 'İletişim',
      path: '/iletisim',
    },
  ]

  static contact = {
    pageTitle: 'İletişim',
    closeLabel: 'Ana sayfaya dön',
    heading: 'TÜRK-JAPON BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ İLETİŞİM BİLGİLERİ',
    addressLabel: 'ADRES',
    address:
      'Turan Güneş Bulvarı, Yukarı Dikmen Mahallesi, Neşet Ertaş Caddesi No: 4, 06550 Çankaya/Ankara',
    phoneLabel: 'TELEFON',
    phone: '+90 312 955 20 26',
    phoneHref: '+903129552026',
    faxLabel: 'FAKS',
    fax: '+90 312 955 20 25',
    emailLabel: 'E-MAİL',
    email: 'info@tju.edu.tr',
    kepLabel: 'KEP',
    kep: 'info@tju.edu.tr',
    backgroundImage: '/campus-placeholder.png',
    actions: [
      { label: 'Tüm Birimler', path: '#units', icon: '▦' },
      { label: "Haritada TJU", path: '#map', icon: '⌖' },
      { label: 'Ulaşım', path: '#transport', icon: '◉' },
    ],
  }

  static council = {
    pageTitle: 'Konsey',
    image: '/campus-placeholder.png',
    members: [
      {
        name: 'S. Selçuk Pehlivanoğlu',
        role: 'Başkan',
        image: '/campus-placeholder.png',
        bioLabel: 'Özgeçmiş için tıklayınız.',
      },
      {
        name: 'A. Kartal Usluel',
        role: 'Başkan Vekili',
        image: '/campus-placeholder.png',
        bioLabel: 'Özgeçmiş için tıklayınız.',
      },
      {
        name: 'Prof. Dr. Ad Soyad',
        role: 'Üye',
        image: '/campus-placeholder.png',
        bioLabel: 'Özgeçmiş için tıklayınız.',
      },
      {
        name: 'Dr. Ad Soyad',
        role: 'Üye',
        image: '/campus-placeholder.png',
        bioLabel: 'Özgeçmiş için tıklayınız.',
      },
    ],
  }

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
    badges: [, 'Institutional Evaluation Programme',],

  }

  static rectorate = {
    pageTitle: 'Rektörlük',
    people: [
      {
        role: 'Rektör',
        name: 'Prof. Dr. Mustafa Verşan Kök',
        email: 'rektorluk@tedu.edu.tr',
        image: '/campus-placeholder.png',
      },
      {
        role: 'Provost',
        name: 'Prof. Dr. Ad Soyad',
        email: 'provost@tju.edu.tr',
        image: '/campus-placeholder.png',
      },
      {
        role: 'Rektör Danışmanı',
        name: 'Dr. Ad Soyad',
        email: 'danisman@tju.edu.tr',
        image: '/campus-placeholder.png',
      },
    ],
    officeTitle: 'Özel Kalem Müdürü',
    officeManager: 'Burcu Karaca',
    officeEmails: ['burcu.karaca@tedu.edu.tr', 'ozelkalem@tedu.edu.tr'],
    phones: ['0 (312) 585 0006', '0 (312) 585 0011 - 585 0009'],
    image: '/campus-placeholder.png',
  }

  static administrativeStaff = {
    pageTitle: 'İdari Personel',
    heroImage: '/campus-placeholder.png',
    search: {
      nameLabel: 'Ad Soyad',
      departmentLabel: 'Birim',
      allDepartments: '- Tümü -',
      button: 'Uygula',
    },
    staff: [
      {
        name: 'İlsu Tataroğlu ÖMÜR',
        department: 'İnsan Kaynakları',
        title: 'İnsana Kaynakları Direktörü',
        email: 'ilsu.tataroglu@tju.edu.tr',
        room: '6.Kat, 691',
        image: '/campus-placeholder.png',
      },
      {
        name: 'Bilge ZOBU',
        department: 'Muhasebe',
        title: 'Muhasebe Sorumlusu',
        email: 'bilge.zobu@tju.edu.tr',
        room: '6. Kat, 692',
        image: '/campus-placeholder.png',
      },
      {
        name: 'Betül UYSAL',
        department: 'Kurumsal İletişim',
        title: 'Kurumsal İletişim Uzmanı',
        email: 'betul.uysal@tju.edu.tr',
        room: '6. Kat, 695',
        image: '/campus-placeholder.png',
      },
      {
        name: 'Onur KOŞAR',
        department: 'Bilgi İşlem',
        title: 'Bilgi İşlem Direktörü',
        email: 'onur.kosar@tju.edu.tr',
        room: '6. Kat, 698',
        image: '/campus-placeholder.png',
      },
    ],
  }

  static engineeringFaculty = {
    pageTitle: 'Mühendislik Fakültesi',
    logoTitle: 'TJU',
    logoSubtitle: 'Mühendislik Fakültesi',
    heroEyebrow: "TJU Mühendislik'te neler oluyor?",
    heroCta: "TJU Mühendislik'te<br />neler oluyor?",
    heroImage: '/campus-placeholder.png',
    nav: [
      ['Hakkımızda', '#about'],
      ['Bölümler', '#departments'],
      ['Öğrenciler', '#students'],
      ['Aday Öğrenciler', '#prospective-students'],
      ['Akademik Kadro', '#people'],
      ['İletişim', '#contact'],
    ],
    departments: [
      {
        title: 'Bilgisayar Mühendisliği',
        path: '/muhendislik-fakultesi/bilgisayar-muhendisligi',
        heroTitle: 'Bilgisayar<br />Mühendisliği<br />Bölümü',
        subtitle: 'Bilgisayar Mühendisliği Bölümü',
      },
      {
        title: 'Elektrik-Elektronik Mühendisliği',
        path: '/muhendislik-fakultesi/elektrik-elektronik-muhendisligi',
        heroTitle: 'Elektrik-Elektronik<br />Mühendisliği<br />Bölümü',
        subtitle: 'Elektrik-Elektronik Mühendisliği Bölümü',
      },
      {
        title: 'Çevre Mühendisliği',
        path: '/muhendislik-fakultesi/cevre-muhendisligi',
        heroTitle: 'Çevre<br />Mühendisliği<br />Bölümü',
        subtitle: 'Çevre Mühendisliği Bölümü',
      },
      {
        title: 'Havacılık ve Malzeme Mühendisliği',
        path: '/muhendislik-fakultesi/havacilik-ve-malzeme-muhendisligi',
        heroTitle: 'Havacılık ve Malzeme<br />Mühendisliği<br />Bölümü',
        subtitle: 'Havacılık ve Malzeme Mühendisliği Bölümü',
      },
    ],
    deanMessage: {
      title: 'Dekan Mesajı',
      body:
        'TJU Mühendislik Fakültesi, lisans ve lisansüstü düzeyde nitelikli eğitim, güçlü araştırma olanakları ve sektörle yakın iş birliği kuran akademik kadrosuyla öncü bir eğitim ve araştırma merkezi olmayı hedefler.',
      image: '/campus-placeholder.png',
    },
    agendaTabs: ['Haberler', 'Etkinlikler'],
    agendaCards: [
      {
        start: '16 Nisan 2026',
        end: '18 Nisan 2026',
        title: 'Duyuru İçeriği',
        image: '/campus-placeholder.png',
      },
      {
        start: '16 Nisan 2026',
        end: '16 Nisan 2026',
        title: 'Araştırma görevlimiz....  tarafından hazırlanan makale yayımlandı',
        image: '/campus-placeholder.png',
      },
      {
        start: '12 Mart 2026',
        end: '12 Mart 2026',
        title: 'Öğretim görevlimiz .... ilk yazar olduğu yeni çalışma yayımlandı',
        image: '/campus-placeholder.png',
      },
    ],
    moreLabel: 'Detaylı Bilgi →',
    pagination: ['1', '2', '3', '4', 'Sonraki ›', 'Son »'],
    footerLinks: [
      'Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni',
      'Sorumluluk Reddi',
      'Kurumsal Kimlik',
      'Açık Rıza Beyanı',
    ],
    address: '© Türk-Japon Bilim ve Teknoloji Üniversitesi.',
  }

  static engineeringDepartmentTemplate = {
    nav: [
      ['Hakkımızda', '#about'],
      ['Program', '#program'],
      ['Akademik Kadro', '#academic-staff'],
      ['MÜDEK', '#mudek'],
      ['Öğrenciler', '#students'],
      ['Haberler', '#news'],
      ['Araştırma', '#research'],
      ['Sosyal Medya', '#social'],
      ['İletişim', '#contact'],
    ],
    heroImage: '/campus-placeholder.png',
    featureCards: [
      'Öğretim Programı',
      'Akademik Kadro',
      'Araştırma Alanları',
      'Mezunlar',
      'Laboratuvarlar',
    ],
    chairMessage: {
      title: 'Bölüm Başkanının Mesajı',
      greeting: 'Sevgili Öğrenciler,',
      body:
        'TJU mühendislik programları olarak temel hedefimiz, öğrencilerimizi yalnızca teorik bilgiyle donatmakla kalmayıp bu bilgileri gerçek dünya problemlerine uygulayabilen, bilim ve teknoloji alanındaki güncel gelişmeleri takip eden mühendisler olarak yetiştirmektir.',
      image: '/campus-placeholder.png',
    },
    why: {
      titlePrefix: 'Neden',
      heading: 'Neden TJU',
      body:
        'Programımız, öğrencilerine sunduğu çeşitli fırsatlar, güçlü akademik yaklaşım ve sektörle kurduğu iş birlikleriyle dikkat çekmektedir. Öğrenciler gerçek dünya deneyimi kazanma şansı elde eder.',
      link: 'Devamı için tıklayın! →',
      image: '/campus-placeholder.png',
    },
    newsTitle: 'Haberler ve Etkinlikler',
    news: [
      {
        title: 'Genç Beyinler yeni projelerini sundu',
        date: '15 Mayıs 2026',
        image: '/campus-placeholder.png',
      },
      {
        title: 'Teknoloji, cesaret ve liderlik söyleşisi gerçekleşti',
        date: '22 Nisan 2026',
        image: '/campus-placeholder.png',
      },
      {
        title: 'Mühendislik öğrencilerinden disiplinler arası proje',
        date: '10 Nisan 2026',
        image: '/campus-placeholder.png',
      },
      {
        title: 'Mühendislik programlarına başvuru takvimi açıklandı',
        date: '01 Nisan 2026',
        image: '/campus-placeholder.png',
      },
    ],
  }
}
