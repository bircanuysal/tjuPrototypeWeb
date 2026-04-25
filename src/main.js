import './style.css'

const announcements = [
  {
    date: '03 Nisan 2026',
    title:
      'CITY LECTURES | Fundamentals of Housing Layouts & Spatial Typologies | Eren Efeoğlu',
    tone: 'blue',
  },
  {
    date: '11 Nisan 2026',
    title:
      'Öğrencilerimizin Başarısı | "İskenderun: Pro-Seismic City Design" Birincilik Ödülü',
    tone: 'indigo',
  },
  {
    date: '10 Nisan 2026-10 Nisan 2026',
    title: 'Hayır Diyebilme Semineri',
    tone: 'red',
  },
]

const news = [
  {
    title: "TEDÜ, TÜMA 2025'te Yine Zirvede!",
    lead: "TEDÜ, TÜMA 2025'te Yine Zirvede!",
    body:
      "Türk-Japon Bilim ve Teknoloji Üniversitesi, öğrenci memnuniyeti ve akademik gelişim odaklı çalışmalarıyla öne çıkıyor.",
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

const stats = [
  ['5367', 'Kayıtlı Öğrenci', 'graduates'],
  ['23', 'Lisans Programı', 'board'],
  ['5', 'Fakülte', 'building'],
  ['336', 'Öğretim Elemanı', 'lecture'],
  ['% 100', 'İngilizce Eğitim', 'globe'],
]

const gallery = [
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

const audienceLinks = [
  ['Aday Öğrenciler', '/aday-ogrenciler'],
  ['Öğrenciler', '/ogrenciler'],
  ['Mezunlar', '/mezunlar'],
  ['International', '/international'],
]

const teduMenu = [
  {
    title: 'Hakkımızda',
    links: [
      ['TED Üniversitesi', '/ted-universitesi'],
      ['Misyon ve Vizyon', '/misyon-ve-vizyon'],
      ['Stratejik Plan', '/stratejik-plan'],
      ['Sayılarla TEDÜ', '/sayilarla-tedu'],
      ['Kalite Güvence Sistemi', '/kalite-guvence-sistemi'],
      ['Akreditasyonlar', '/akreditasyonlar'],
      ['Yönetmelik ve Yönergeler', '/yonetmelik-ve-yonergeler'],
      ['Özgürlük Politikası', '/ozgurluk-politikasi'],
      ['Etik Kurallar', '/etik-kurallar'],
      ['Bilgi Güvenliği Politikası', '/bilgi-guvenligi-politikasi'],
      ['Eğitime Tam Destek', '/egitime-tam-destek'],
      ['Toplumsal Cinsiyet Eşitliği Planı', '/toplumsal-cinsiyet-esitligi-plani'],
      ['Kişisel Verilerin Korunması', '/kisisel-verilerin-korunmasi'],
    ],
  },
  {
    title: 'Üniversite Yönetimi',
    links: [
      ['TEDYÜV', '/tedyuv'],
      ['Mütevelli Heyeti', '/mutevelli-heyeti'],
      ['Rektörlük', '/rektorluk'],
      ['Rektörlerimiz', '/rektorlerimiz'],
      ['Öğrenci Koordinatörlüğü', '/ogrenci-koordinatorlugu'],
      ['İdari Personel', '/idari-personel'],
      ['Organizasyon Şeması', '/organizasyon-semasi'],
      ['İdari Uygulamalar', '/idari-uygulamalar'],
      ['Akademik Kurullar', '/akademik-kurullar'],
      ['Komisyonlar', '/komisyonlar'],
      ['Bilim İletişimi Ofisi', '/bilim-iletisimi-ofisi'],
    ],
  },
  {
    title: 'İnsan Kaynakları',
    links: [
      ['Öğretim Üyeliğine Yükseltilme ve Atanma Esasları', '/ogretim-uyeligine-yukseltilme-ve-atanma-esaslari'],
      ['Çalışan El Kitabı', '/calisan-el-kitabi'],
      ['Akademik İş İmkanları', '/akademik-is-imkanlari'],
      ['İdari İş İmkanları', '/idari-is-imkanlari'],
      ['Kaybettiğimiz Değerler', '/kaybettigimiz-degerler'],
    ],
  },
]

const academicMenu = [
  {
    title: 'Akademik Birimler',
    sections: [
      {
        title: 'Fakülteler',
        links: [
          ['Eğitim Fakültesi', '/egitim-fakultesi'],
          ['Mühendislik Fakültesi', '/muhendislik-fakultesi'],
          ['Fen-Edebiyat Fakültesi', '/fen-edebiyat-fakultesi'],
          ['İktisadi ve İdari Bilimler Fakültesi', '/iktisadi-ve-idari-bilimler-fakultesi'],
          ['Mimarlık ve Tasarım Fakültesi', '/mimarlik-ve-tasarim-fakultesi'],
        ],
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

const researchMenu = [
  {
    title: 'Araştırma Çıktıları',
    links: [
      ['Akademik Özgürlük Politikası', '/akademik-ozgurluk-politikasi'],
      ['Akademik Veri Yönetim Sistemi', '/akademik-veri-yonetim-sistemi'],
      ['AFETTEK', '/afettek'],
    ],
  },
  {
    title: 'Merkezler / Birimler',
    links: [
      ['Araştırma Teknoloji ve İnovasyon Direktörlüğü (ATİD)', '/arastirma-teknoloji-ve-inovasyon-direktorlugu'],
      ['Küresel Güney Çalışmaları Birimi', '/kuresel-guney-calismalari-birimi'],
      ['TEDUTECH Teknoloji Transferi A.Ş.', '/tedutech-teknoloji-transferi'],
      ['Sosyal İnovasyon Merkezi', '/sosyal-inovasyon-merkezi'],
      ['Uygulamalı Veri Bilimi Birimi (Cads@TEDU)', '/uygulamali-veri-bilimi-birimi'],
      ['Ticaret Araştırmaları Merkezi (TEDÜ TAM)', '/ticaret-arastirmalari-merkezi'],
      ['Toplumsal Cinsiyet Çalışmaları Merkezi', '/toplumsal-cinsiyet-calismalari-merkezi'],
      ['İnsan Araştırmaları Etik Kurulu (İAEK)', '/insan-arastirmalari-etik-kurulu'],
      ['Sürdürülebilir TEDÜ', '/surdurulebilir-tedu'],
    ],
  },
  {
    title: 'Kurum İçi Araştırma Destekleri',
    links: [
      ['Araştırma Teşvik Ödülleri', '/arastirma-tesvik-odulleri'],
      ['Öğrenci Kongre Katılım Desteği', '/ogrenci-kongre-katilim-destegi'],
      ['Bilimsel Araştırma Projeleri', '/bilimsel-arastirma-projeleri'],
      ['Lisans Öğrencileri Araştırma Desteği', '/lisans-ogrencileri-arastirma-destegi'],
      ['Kişisel Araştırma Fonu (KAF) Desteği', '/kisisel-arastirma-fonu-destegi'],
    ],
  },
]

const discoverMenu = [
  {
    title: "TEDÜ'de Yaşam",
    links: [
      ['360 Sanal Tur', '/360-sanal-tur'],
      ['RadioTEDU', '/radiotedu'],
      ['Spor Dostu Kampüs Etkinliklerimiz', '/spor-dostu-kampus-etkinliklerimiz'],
      ['TEDUPass Card', '/tedupass-card'],
    ],
  },
  {
    title: 'Hizmetler',
    links: [
      ['Kütüphane', '/kutuphane'],
      ['COPeS - Coronavirus Psiko-Sosyal Destek', '/copes-coronavirus-psiko-sosyal-destek'],
      ['Sağlık Birimi', '/saglik-birimi'],
      ['Spor Tesisi', '/spor-tesisi'],
      ['Yurtlar', '/yurtlar'],
      ['Engelsiz TEDÜ', '/engelsiz-tedu'],
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
      ['Öğrenci Gelişim ve Psikolojik Danışma Merkezi', '/ogrenci-gelisim-ve-psikolojik-danisma-merkezi'],
    ],
  },
]

const renderMegaLinks = (links = []) =>
  links
    .map(
      ([label, path]) => `
        <li><a href="${path}" data-route="${path}">${label}</a></li>
      `,
    )
    .join('')

const renderMegaMenu = (intro, groups, label) => `
  <div class="mega-menu" role="menu" aria-label="${label}">
    <div class="mega-intro">${intro}</div>
    <div class="mega-columns">
      ${groups
        .map(
          (group) => `
            <section class="mega-column" aria-label="${group.title}">
              <h3>${group.title}</h3>
              ${(group.sections || [])
                .map(
                  (section) => `
                    <div class="mega-subsection">
                      <h4>${section.title}</h4>
                      <ul>${renderMegaLinks(section.links)}</ul>
                    </div>
                  `,
                )
                .join('')}
              <ul>
                ${renderMegaLinks(group.links)}
              </ul>
            </section>
          `,
        )
        .join('')}
    </div>
  </div>
`

const renderPrimaryNav = (className, label) => `
  <nav class="${className}" aria-label="${label}">
    <div class="nav-item has-mega">
      <a class="nav-link" href="/tedu" data-route="/tedu" aria-haspopup="true">TEDÜ</a>
      ${renderMegaMenu('TEDÜ Hakkında', teduMenu, 'TEDÜ alt menüsü')}
    </div>
    <div class="nav-item has-mega">
      <a class="nav-link" href="/akademik" data-route="/akademik" aria-haspopup="true">Akademik</a>
      ${renderMegaMenu('TEDÜ Akademik', academicMenu, 'Akademik alt menüsü')}
    </div>
    <div class="nav-item has-mega">
      <a class="nav-link" href="/arastirma" data-route="/arastirma" aria-haspopup="true">Araştırma</a>
      ${renderMegaMenu('TEDÜ Araştırma', researchMenu, 'Araştırma alt menüsü')}
    </div>
    <div class="nav-item has-mega">
      <a class="nav-link" href="/teduyu-kesfet" data-route="/teduyu-kesfet" aria-haspopup="true">TEDÜ'yü Keşfet</a>
      ${renderMegaMenu("TEDÜ'yü Keşfet", discoverMenu, "TEDÜ'yü Keşfet alt menüsü")}
    </div>
  </nav>
`

const renderBrand = (className = 'brand') => `
  <a class="${className}" href="#hero" aria-label="Türk-Japon Bilim ve Teknoloji Üniversitesi ana sayfa">
    <span class="brand-mark">
      <img src="/tjuLogo.png" alt="" />
    </span>
    <span class="brand-name">
      <strong>TÜRK-JAPON BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ</strong>
      <span>TURKISH-JAPANESE SCIENCE AND TECHNOLOGY UNIVERSITY</span>
      <span>トルコ・日本科学技術大学</span>
    </span>
  </a>
`

document.querySelector('#app').innerHTML = `
  <header class="site-header" aria-label="Ana menü">
    ${renderBrand()}

    ${renderPrimaryNav('main-nav', 'Birincil navigasyon')}
  </header>

  <div class="floating-tools" aria-label="Hızlı işlemler">
    <button type="button" aria-label="Ara">⌕</button>
    <button type="button" aria-label="Kullanıcı">♙</button>
    <button type="button" aria-label="E-posta">✉</button>
    <button type="button" aria-label="English">EN</button>
  </div>

  <main>
    <section id="hero" class="hero-section">
      <div class="hero-shell">
        <div class="hero-brand-nav">
          ${renderBrand('hero-brand brand')}
          <div class="hero-nav-group">
            <div class="hero-topline">
              ${audienceLinks
                .map(
                  ([label, path]) => `
                  <a href="${path}" data-route="${path}">${label}</a>
                `,
                )
                .join('')}
            </div>
            ${renderPrimaryNav('hero-nav', 'Hero navigasyon')}
          </div>
        </div>
        <h1>Geleceğe Hazır Bireyler İçin Yenilikçi Eğitim</h1>
        <a class="hero-cta" href="#announcements">
          <span>TEDÜ'de<br />Neler Oluyor?</span>
          <strong aria-hidden="true">→</strong>
        </a>
      </div>
    </section>

    <section id="announcements" class="section section-tight">
      <div class="section-head">
        <p>Duyurular</p>
        <h2>Kampüsten güncel başlıklar</h2>
      </div>
      <div class="announcement-grid">
        ${announcements
          .map(
            (item, index) => `
            <article class="announcement-card ${item.tone}">
              <div class="announcement-image"></div>
              <time>${item.date}</time>
              <h3>${item.title}</h3>
              <a href="#">Detaylı Bilgi →</a>
            </article>
          `,
          )
          .join('')}
      </div>
    </section>

    <section id="news" class="section news-section">
      ${news
        .map(
          (item, index) => `
          <article class="news-item ${index % 2 ? 'reverse' : ''}">
            <div class="news-copy">
              <h2>${item.title}</h2>
              <p class="lead">${item.lead}</p>
              <p>${item.body}</p>
              <a href="#">Detaylar İçin Tıklayın! →</a>
            </div>
            <figure class="news-visual">
              <img src="${item.image}" alt="" />
            </figure>
          </article>
        `,
        )
        .join('')}
    </section>

    <section id="stats" class="stats-section">
      <div class="stats-overlay">
        <h2>Çok Yönlü Gelişimi Destekleyen TEDÜ</h2>
        <div class="stats-grid">
          ${stats
            .map(
              ([value, label, icon]) => `
              <article class="stat-card">
                <span class="line-icon ${icon}" aria-hidden="true"></span>
                <strong>${value}</strong>
                <p>${label}</p>
              </article>
            `,
            )
            .join('')}
        </div>
        <a href="#">Daha fazla →</a>
      </div>
    </section>

    <section id="discover" class="section discover-section">
      <article class="media-card film">
        <span class="play" aria-hidden="true">▶</span>
        <h2>TEDÜ'lü Ol!</h2>
      </article>
      <div class="discover-stack">
        <article class="media-card catalog">
          <span class="doc-icon" aria-hidden="true"></span>
          <h2>TJU<br />Tanıtım Kataloğu</h2>
        </article>
        <article class="media-card tour">
          <span class="map-icon" aria-hidden="true"></span>
          <h2>360 Kampüs Turu</h2>
        </article>
      </div>
    </section>

    <section class="wide-photo" aria-label="Kampüs görseli"></section>

    <section class="section gallery-section">
      <div class="mini-gallery">
        ${gallery
          .map(
            (item, index) => `
            <figure class="gallery-tile">
              <span role="img" aria-label="${item}"></span>
            </figure>
          `,
          )
          .join('')}
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div>
      <nav aria-label="Footer bağlantıları">
        <a href="#">Sıkça Sorulan Sorular</a>
        <a href="#">Kişisel Verilerin Korunması</a>
        <a href="#">Gizlilik Politikası</a>
        <a href="#">Sorumluluk Reddi</a>
        <a href="#">Bilgi Edinme</a>
        <a href="#">Site Yöneticisi İletişim</a>
        <a href="#">İhale ve Satınalma İlanları</a>
        <a href="#">Açık Rıza</a>
        <a href="#">Kurumsal Kimlik</a>
      </nav>
      <p>© Türk-Japon Bilim ve Teknoloji Üniversitesi.</p>
      <div class="socials" aria-label="Sosyal medya">
        <a href="#">●</a>
        <a href="#">▶</a>
        <a href="#">f</a>
        <a href="#">◎</a>
        <a href="#">in</a>
        <a href="#">☏</a>
      </div>
    </div>
    <div class="footer-badges">
      <strong>IEP</strong>
      <span>Institutional Evaluation Programme</span>
      <strong>YÖKAK</strong>
    </div>
  </footer>
`

const header = document.querySelector('.site-header')
const floatingTools = document.querySelector('.floating-tools')
const megaItems = document.querySelectorAll('.has-mega')

const syncHeader = () => {
  const isScrolled = window.scrollY > 60
  header.classList.toggle('is-scrolled', isScrolled)
  floatingTools.classList.toggle('is-hidden', isScrolled)
}

megaItems.forEach((item) => {
  let closeTimer

  const openMenu = () => {
    window.clearTimeout(closeTimer)
    item.classList.add('is-open')
  }

  const closeMenu = () => {
    closeTimer = window.setTimeout(() => {
      item.classList.remove('is-open')
    }, 260)
  }

  item.addEventListener('mouseenter', openMenu)
  item.addEventListener('mouseleave', closeMenu)
  item.addEventListener('focusin', openMenu)
  item.addEventListener('focusout', closeMenu)
})

syncHeader()
window.addEventListener('scroll', syncHeader, { passive: true })
