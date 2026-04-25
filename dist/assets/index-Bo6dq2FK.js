(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=class{constructor(e){this.content=e}renderMegaLinks(e=[]){return e.map(([e,t])=>`
          <li><a href="${t}" data-route="${t}">${e}</a></li>
        `).join(``)}renderMegaMenu(e,t,n){return`
      <div class="mega-menu" role="menu" aria-label="${n}">
        <div class="mega-intro">${e}</div>
        <div class="mega-columns">
          ${t.map(e=>`
                <section class="mega-column" aria-label="${e.title}">
                  <h3>${e.title}</h3>
                  ${(e.sections||[]).map(e=>`
                        <div class="mega-subsection">
                          <h4>${e.title}</h4>
                          <ul>${this.renderMegaLinks(e.links)}</ul>
                        </div>
                      `).join(``)}
                  <ul>
                    ${this.renderMegaLinks(e.links)}
                  </ul>
                </section>
              `).join(``)}
        </div>
      </div>
    `}renderPrimaryNav(e,t){return`
      <nav class="${e}" aria-label="${t}">
        ${this.content.primaryNavItems.map(e=>`
              <div class="nav-item has-mega">
                <a class="nav-link" href="${e.path}" data-route="${e.path}" aria-haspopup="true">${e.label}</a>
                ${this.renderMegaMenu(e.intro,e.groups,e.ariaLabel)}
              </div>
            `).join(``)}
      </nav>
    `}renderBrand(e=`brand`){return`
      <a class="${e}" href="/" data-route="/" aria-label="${this.content.labels.homepage}">
        <span class="brand-mark">
          <img src="/tjuLogo.png" alt="" />
        </span>
        <span class="brand-name">
          <strong>${this.content.brand.title}</strong>
          <span>${this.content.brand.subtitle}</span>
          <span>${this.content.brand.japaneseTitle}</span>
        </span>
      </a>
    `}renderHeroNavigation(){return`
      <div class="hero-brand-nav">
        ${this.renderBrand(`hero-brand brand`)}
        <div class="hero-nav-group">
          <div class="hero-topline">
            ${this.content.audienceLinks.map(([e,t])=>`
                <a href="${t}" data-route="${t}">${e}</a>
              `).join(``)}
          </div>
          ${this.renderPrimaryNav(`hero-nav`,this.content.labels.heroNav)}
        </div>
      </div>
    `}renderHeader(){return`
      <header class="site-header" aria-label="${this.content.labels.header}">
        ${this.renderBrand()}
        ${this.renderPrimaryNav(`main-nav`,this.content.labels.primaryNav)}
      </header>

      <div class="floating-tools" aria-label="${this.content.labels.quickActions}">
        ${this.content.tools.map(e=>`
              <button type="button" aria-label="${e.label}">${e.text}</button>
            `).join(``)}
      </div>
    `}renderFooter(){return`
      <footer class="site-footer">
        <div>
          <nav aria-label="${this.content.labels.footerNav}">
            ${this.content.footer.links.map(e=>`<a href="#">${e}</a>`).join(``)}
          </nav>
          <p>${this.content.footer.copyright}</p>
          <div class="socials" aria-label="${this.content.labels.socialMedia}">
            ${this.content.footer.socialLinks.map(e=>`<a href="#">${e}</a>`).join(``)}
          </div>
        </div>
        <div class="footer-badges">
          <strong>${this.content.footer.badges[0]}</strong>
          <span>${this.content.footer.badges[1]}</span>
          <strong>${this.content.footer.badges[2]}</strong>
        </div>
      </footer>
    `}},t=class{constructor(e){this.layout=e}render({title:e,image:t=`/bospng.png`}){return`
      <section class="subpage-hero">
        <div class="subpage-hero-shell" style="--subpage-hero-image: url('${t}')">
          ${this.layout.renderHeroNavigation()}
          <h1>${e}</h1>
        </div>
      </section>
    `}},n=class{constructor(e,t){this.content=e,this.subpageHero=t}getDepartments(e){return[...new Set(e.map(e=>e.department))]}render(){let e=this.content.administrativeStaff,t=this.getDepartments(e.staff);return`
      <main>
        ${this.subpageHero.render({title:e.pageTitle,image:e.heroImage})}

        <section class="staff-section">
          <form class="staff-filter" aria-label="${e.pageTitle} arama">
            <label>
              <span>${e.search.nameLabel}</span>
              <input type="search" name="name" autocomplete="off" />
            </label>
            <label>
              <span>${e.search.departmentLabel}</span>
              <select name="department">
                <option value="">${e.search.allDepartments}</option>
                ${t.map(e=>`<option value="${e}">${e}</option>`).join(``)}
              </select>
            </label>
            <button type="submit">${e.search.button}</button>
          </form>

          <div class="staff-list">
            ${e.staff.map(e=>`
                <article class="staff-card" data-name="${e.name.toLowerCase()}" data-department="${e.department}">
                  <figure class="staff-photo">
                    <img src="${e.image}" alt="" />
                  </figure>
                  <div class="staff-copy">
                    <h2>${e.name}</h2>
                    <p>${e.department}</p>
                    <p>${e.title}</p>
                  </div>
                  <div class="staff-meta">
                    ${e.email?`<a href="mailto:${e.email}"><span aria-hidden="true">✉</span>${e.email}</a>`:``}
                    ${e.room?`<p><span aria-hidden="true">⌖</span>Oda No: ${e.room}</p>`:``}
                  </div>
                </article>
              `).join(``)}
          </div>
        </section>
      </main>
    `}},r=class{constructor(e,t){this.content=e,this.layout=t}render(){return`
      <main>
        <section id="hero" class="hero-section">
          <div class="hero-shell">
            ${this.layout.renderHeroNavigation()}
            <h1>${this.content.hero.title}</h1>
            <a class="hero-cta" href="#announcements">
              <span>${this.content.hero.ctaText}</span>
              <strong aria-hidden="true">${this.content.hero.ctaIcon}</strong>
            </a>
          </div>
        </section>

        <section id="announcements" class="section section-tight">
          <div class="section-head">
            <p>${this.content.sectionTitles.announcementsEyebrow}</p>
            <h2>${this.content.sectionTitles.announcementsTitle}</h2>
          </div>
          <div class="announcement-grid">
            ${this.content.announcements.map(e=>`
                <article class="announcement-card ${e.tone}">
                  <div class="announcement-image"></div>
                  <time>${e.date}</time>
                  <h3>${e.title}</h3>
                  <a href="#">${this.content.links.announcementDetail}</a>
                </article>
              `).join(``)}
          </div>
        </section>

        <section id="news" class="section news-section">
          ${this.content.news.map((e,t)=>`
              <article class="news-item ${t%2?`reverse`:``}">
                <div class="news-copy">
                  <h2>${e.title}</h2>
                  <p class="lead">${e.lead||``}</p>
                  <p>${e.body}</p>
                  <a href="#">${this.content.links.newsDetail}</a>
                </div>
                <figure class="news-visual">
                  <img src="${e.image}" alt="" />
                </figure>
              </article>
            `).join(``)}
        </section>

        <section id="stats" class="stats-section">
          <div class="stats-overlay">
            <h2>${this.content.sectionTitles.statsTitle}</h2>
            <div class="stats-grid">
              ${this.content.stats.map(([e,t,n])=>`
                  <article class="stat-card">
                    <span class="line-icon ${n}" aria-hidden="true"></span>
                    <strong>${e}</strong>
                    <p>${t}</p>
                  </article>
                `).join(``)}
            </div>
            <a href="#">${this.content.links.more}</a>
          </div>
        </section>

        <section id="discover" class="section discover-section">
          <article class="media-card film">
            <span class="play" aria-hidden="true">${this.content.mediaCards.filmIcon}</span>
            <h2>${this.content.mediaCards.filmTitle}</h2>
          </article>
          <div class="discover-stack">
            <article class="media-card catalog">
              <span class="doc-icon" aria-hidden="true"></span>
              <h2>${this.content.mediaCards.catalogTitle}</h2>
            </article>
            <article class="media-card tour">
              <span class="map-icon" aria-hidden="true"></span>
              <h2>${this.content.mediaCards.tourTitle}</h2>
            </article>
          </div>
        </section>

        <section class="wide-photo" aria-label="${this.content.labels.campusImage}"></section>

        <section class="section gallery-section">
          <div class="mini-gallery">
            ${this.content.gallery.map(e=>`
                <figure class="gallery-tile">
                  <span role="img" aria-label="${e}"></span>
                </figure>
              `).join(``)}
          </div>
        </section>
      </main>
    `}},i=class{constructor(e,t){this.content=e,this.subpageHero=t}render(){let e=this.content.rectorate;return`
      <main>
        ${this.subpageHero.render({title:e.pageTitle,image:e.image})}

        <section class="rectorate-section">
          <div class="rectorate-card">
            <figure class="rectorate-photo">
              <img src="${e.image}" alt="" />
            </figure>
            <div class="rectorate-profile">
              <h2>${e.role}</h2>
              <p>${e.name}</p>
              <a href="mailto:${e.email}">${e.email}</a>
            </div>
          </div>

          <div class="rectorate-contact">
            <h3>${e.officeTitle}</h3>
            <p>${e.officeManager}</p>
            ${e.officeEmails.map(e=>`<a href="mailto:${e}">${e}</a>`).join(``)}
            ${e.phones.map(e=>`<p class="phone">${e}</p>`).join(``)}
          </div>
        </section>
      </main>
    `}},a=class{bind(){this.bindHeaderScroll(),this.bindMegaMenus(),this.bindAdministrativeStaffFilter()}bindHeaderScroll(){let e=document.querySelector(`.site-header`),t=document.querySelector(`.floating-tools`);if(!e||!t)return;this.syncHeader&&window.removeEventListener(`scroll`,this.syncHeader);let n=()=>{let n=window.scrollY>60;e.classList.toggle(`is-scrolled`,n),t.classList.toggle(`is-hidden`,n)};this.syncHeader=n,n(),window.addEventListener(`scroll`,n,{passive:!0})}bindMegaMenus(){document.querySelectorAll(`.has-mega`).forEach(e=>{let t,n=()=>{window.clearTimeout(t),e.classList.add(`is-open`)},r=()=>{t=window.setTimeout(()=>{e.classList.remove(`is-open`)},260)};e.addEventListener(`mouseenter`,n),e.addEventListener(`mouseleave`,r),e.addEventListener(`focusin`,n),e.addEventListener(`focusout`,r)})}bindAdministrativeStaffFilter(){let e=document.querySelector(`.staff-filter`),t=document.querySelectorAll(`.staff-card`);if(!e||!t.length)return;let n=()=>{let n=new FormData(e),r=String(n.get(`name`)||``).trim().toLowerCase(),i=String(n.get(`department`)||``);t.forEach(e=>{let t=!r||e.dataset.name.includes(r),n=!i||e.dataset.department===i;e.hidden=!t||!n})};e.addEventListener(`submit`,e=>{e.preventDefault(),n()}),e.addEventListener(`input`,n),e.addEventListener(`change`,n)}},o=class{constructor(e,t){this.routes=e,this.fallbackRoute=t}resolve(e=window.location.pathname){return this.routes[e]||this.fallbackRoute}};new class{constructor(n){this.content=n,this.layout=new e(n),this.subpageHero=new t(this.layout),this.interactions=new a,this.router=this.createRouter()}createRouter(){let e=new r(this.content,this.layout);return new o({"/":{title:this.content.brand.title,page:e},"/rektorluk":{title:`${this.content.rectorate.pageTitle} | ${this.content.brand.title}`,page:new i(this.content,this.subpageHero)},"/idari-personel":{title:`${this.content.administrativeStaff.pageTitle} | ${this.content.brand.title}`,page:new n(this.content,this.subpageHero)}},{title:this.content.brand.title,page:e})}mount(e){this.root=document.querySelector(e),this.render(),this.bindRouteLinks(),window.addEventListener(`popstate`,()=>this.render())}render(){let e=this.router.resolve();document.title=e.title,this.root.innerHTML=`
      ${this.layout.renderHeader()}
      ${e.page.render()}
      ${this.layout.renderFooter()}
    `,this.interactions.bind()}bindRouteLinks(){document.addEventListener(`click`,e=>{let t=e.target.closest(`a[data-route]`);if(!t)return;let n=new URL(t.href);n.origin===window.location.origin&&(e.preventDefault(),window.history.pushState({},``,n.pathname),window.scrollTo({top:0}),this.render())})}}(class e{static labels={header:`Ana menü`,primaryNav:`Birincil navigasyon`,heroNav:`Hero navigasyon`,quickActions:`Hızlı işlemler`,homepage:`Türk-Japon Bilim ve Teknoloji Üniversitesi ana sayfa`,campusImage:`Kampüs görseli`,footerNav:`Footer bağlantıları`,socialMedia:`Sosyal medya`};static brand={title:`TÜRK-JAPON BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ`,subtitle:`TURKISH-JAPANESE SCIENCE AND TECHNOLOGY UNIVERSITY`,japaneseTitle:`トルコ・日本科学技術大学`};static tools=[{label:`Ara`,text:`⌕`},{label:`Kullanıcı`,text:`♙`},{label:`E-posta`,text:`✉`},{label:`English`,text:`EN`}];static hero={title:`Geleceğe Hazır Bireyler İçin Yenilikçi Eğitim`,ctaText:`TJU'de<br />Neler Oluyor?`,ctaIcon:`→`};static sectionTitles={announcementsEyebrow:`Duyurular`,announcementsTitle:`Kampüsten güncel başlıklar`,statsTitle:`Çok Yönlü Gelişimi Destekleyen TJU`};static links={announcementDetail:`Detaylı Bilgi →`,newsDetail:`Detaylar İçin Tıklayın! →`,more:`Daha fazla →`};static announcements=[{date:`03 Nisan 2026`,title:`Yeni Duyuru Sistemi Yayında | Kampüs İçi İletişimde Devrim`,tone:`blue`},{date:`11 Nisan 2026`,title:`Yeni Duyuru Sistemi Yayında | Kampüs İçi İletişimde Devrim`,tone:`indigo`},{date:`10 Nisan 2026-10 Nisan 2026`,title:`Yeni Duyuru Sistemi Yayında | Kampüs İçi İletişimde Devrim`,tone:`red`}];static news=[{title:`TJU, 2026-2027 sezonunda Zirvede!`,body:`Türk-Japon Bilim ve Teknoloji Üniversitesi, öğrenci memnuniyeti ve akademik gelişim odaklı çalışmalarıyla öne çıkıyor.`,image:`/bospng.png`},{title:`Rektörümüze Öğrencilerden TÜMA Altın Ödülü`,lead:`Öğrenci deneyimini merkeze alan yaklaşım.`,body:`Akademik ilgi, destek ve kampüs yaşamını güçlendiren uygulamalarımızla öğrencilerimizin yanında olmaya devam ediyoruz.`,image:`/bospng.png`}];static stats=[[`5367`,`Kayıtlı Öğrenci`,`graduates`],[`23`,`Lisans Programı`,`board`],[`5`,`Fakülte`,`building`],[`336`,`Öğretim Elemanı`,`lecture`],[`% 100`,`İngilizce Eğitim`,`globe`]];static mediaCards={filmTitle:`TJU'lü Ol!`,filmIcon:`▶`,catalogTitle:`TJU<br />Tanıtım Kataloğu`,tourTitle:`360 Kampüs Turu`};static gallery=[`Araştırma`,`Seminer`,`Kampüs`,`Spor`,`Stüdyo`,`Laboratuvar`,`Konferans`,`Atölye`,`Salon`,`Deney`,`Yaşam`,`Keşif`];static audienceLinks=[[`Aday Öğrenciler`,`/aday-ogrenciler`],[`Öğrenciler`,`/ogrenciler`],[`Mezunlar`,`/mezunlar`],[`International`,`/international`]];static teduMenu=[{title:`Hakkımızda`,links:[[`Türk Japon Üniversitesi`,`/ted-universitesi`],[`Misyon ve Vizyon`,`/misyon-ve-vizyon`],[`Yönetmelik ve Yönergeler`,`/yonetmelik-ve-yonergeler`],[`Kişisel Verilerin Korunması`,`/kisisel-verilerin-korunmasi`]]},{title:`Üniversite Yönetimi`,links:[[`Konsey`,`/mutevelli-heyeti`],[`Rektörlük`,`/rektorluk`],[`Öğrenci Koordinatörlüğü`,`/ogrenci-koordinatorlugu`],[`İdari Personel`,`/idari-personel`],[`Organizasyon Şeması`,`/organizasyon-semasi`],[`Akademik Kurullar`,`/akademik-kurullar`],[`Komisyonlar`,`/komisyonlar`]]},{title:`İnsan Kaynakları`,links:[[`Öğretim Üyeliğine Yükseltilme ve Atanma Esasları`,`/ogretim-uyeligine-yukseltilme-ve-atanma-esaslari`],[`Çalışan El Kitabı`,`/calisan-el-kitabi`],[`Akademik İş İmkanları`,`/akademik-is-imkanlari`],[`İdari İş İmkanları`,`/idari-is-imkanlari`]]}];static academicMenu=[{title:`Akademik Birimler`,sections:[{title:`Fakülteler`,links:[[`Mühendislik Fakültesi`,`/muhendislik-fakultesi`]]}],links:[[`Lisansüstü Programlar Enstitüsü`,`/lisansustu-programlar-enstitusu`],[`İngilizce Dil Okulu (ELS)`,`/ingilizce-dil-okulu`]]},{title:`Akademik Bilgiler`,links:[[`Akademik Katalog`,`/akademik-katalog`],[`Akademik Takvim`,`/akademik-takvim`],[`Açılan Dersler`,`/acilan-dersler`],[`Ek Dal Programları`,`/ek-dal-programlari`],[`Akademik Kadro`,`/akademik-kadro`]]},{title:`Yeni Kayıt ve Başvuru`,links:[[`Çift Ana Dal / Yan Dal Programları`,`/cift-ana-dal-yan-dal-programlari`],[`Burslar`,`/burslar`]]}];static researchMenu=[{title:`Araştırma Çıktıları`,links:[[`Akademik Özgürlük Politikası`,`/akademik-ozgurluk-politikasi`],[`Akademik Veri Yönetim Sistemi`,`/akademik-veri-yonetim-sistemi`],[`AFETTEK`,`/afettek`]]},{title:`Kurum İçi Araştırma Destekleri`,links:[[`Araştırma Teşvik Ödülleri`,`/arastirma-tesvik-odulleri`],[`Öğrenci Kongre Katılım Desteği`,`/ogrenci-kongre-katilim-destegi`],[`Bilimsel Araştırma Projeleri`,`/bilimsel-arastirma-projeleri`],[`Lisans Öğrencileri Araştırma Desteği`,`/lisans-ogrencileri-arastirma-destegi`]]}];static discoverMenu=[{title:`TJU'nde Yaşam`,links:[[`360 Sanal Tur`,`/360-sanal-tur`],[`Spor Dostu Kampüs Etkinliklerimiz`,`/spor-dostu-kampus-etkinliklerimiz`]]},{title:`Hizmetler`,links:[[`Kütüphane`,`/kutuphane`],[`Spor Tesisi`,`/spor-tesisi`],[`Yurtlar`,`/yurtlar`]]},{title:`Kültür Sanat ve Spor`,links:[[`Öğrenci Toplulukları`,`/ogrenci-topluluklari`],[`Bilim Projesi Takımları`,`/bilim-projesi-takimlari`],[`Uluslararası Öğrenci Birlikleri`,`/uluslararasi-ogrenci-birlikleri`],[`Spor Takımlarımız`,`/spor-takimlarimiz`]]},{title:`Merkezler`,links:[[`Kariyer Merkezi`,`/kariyer-merkezi`],[`Öğretme Öğrenme Merkezi`,`/ogretme-ogrenme-merkezi`],[`Sürekli Eğitim Merkezi`,`/surekli-egitim-merkezi`],[`Öğrenci Gelişim ve Psikolojik Danışma Merkezi`,`/ogrenci-gelisim-ve-psikolojik-danisma-merkezi`]]}];static primaryNavItems=[{label:`TJU`,path:`/tedu`,intro:`TJU Hakkında`,ariaLabel:`TJU alt menüsü`,groups:e.teduMenu},{label:`Akademik`,path:`/akademik`,intro:`TJU Akademik`,ariaLabel:`Akademik alt menüsü`,groups:e.academicMenu},{label:`Araştırma`,path:`/arastirma`,intro:`TJU Araştırma`,ariaLabel:`Araştırma alt menüsü`,groups:e.researchMenu},{label:`TJU'ni Keşfet`,path:`/teduyu-kesfet`,intro:`TJU'ni Keşfet`,ariaLabel:`TJU'ni Keşfet alt menüsü`,groups:e.discoverMenu}];static footer={links:[`Sıkça Sorulan Sorular`,`Kişisel Verilerin Korunması`,`Gizlilik Politikası`,`Sorumluluk Reddi`,`Bilgi Edinme`,`Site Yöneticisi İletişim`,`İhale ve Satınalma İlanları`,`Açık Rıza`,`Kurumsal Kimlik`],copyright:`© Türk-Japon Bilim ve Teknoloji Üniversitesi.`,socialLinks:[`●`,`▶`,`f`,`◎`,`in`,`☏`],badges:[`IEP`,`Institutional Evaluation Programme`,`YÖKAK`]};static rectorate={pageTitle:`Rektörlük`,role:`Rektör`,name:`Prof. Dr. İhsan Sabuncuoğlu`,email:`rektorluk@tedu.edu.tr`,officeTitle:`Özel Kalem Müdürü`,officeManager:`Burcu Karaca`,officeEmails:[`burcu.karaca@tedu.edu.tr`,`ozelkalem@tedu.edu.tr`],phones:[`0 (312) 585 0006`,`0 (312) 585 0011 - 585 0009`],image:`/bospng.png`};static administrativeStaff={pageTitle:`İdari Personel`,heroImage:`/bospng.png`,search:{nameLabel:`Ad Soyad`,departmentLabel:`Birim`,allDepartments:`- Tümü -`,button:`Uygula`},staff:[{name:`Mustafa Kutluhan Olcay`,department:`Genel Sekreter`,title:`Genel Sekreter`,email:`kutluhan.olcay@tedu.edu.tr`,room:`A-018`,image:`/bospng.png`},{name:`Kazım Acar`,department:`Yurtlar Müdürlüğü`,title:`Kat Görevlisi`,email:``,room:``,image:`/bospng.png`},{name:`Mustafa Acar`,department:`TEDÜ İktisadi İşletmesi`,title:`Mali İşler Şefi`,email:`mustafa.acar@tedu.edu.tr`,room:`A019`,image:`/bospng.png`},{name:`Ayşe Demir`,department:`Öğrenci İşleri`,title:`Uzman`,email:`ayse.demir@tedu.edu.tr`,room:`B-104`,image:`/bospng.png`}]}}).mount(`#app`);