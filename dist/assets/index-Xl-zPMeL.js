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
        ${this.content.primaryNavItems.map(e=>e.groups?`
              <div class="nav-item has-mega">
                <a class="nav-link" href="${e.path}" data-route="${e.path}" aria-haspopup="true">${e.label}</a>
                ${this.renderMegaMenu(e.intro,e.groups,e.ariaLabel)}
              </div>
            `:`
                <div class="nav-item">
                  <a class="nav-link" href="${e.path}" data-route="${e.path}">${e.label}</a>
                </div>
              `).join(``)}
      </nav>
    `}renderBrand(e=`brand`){return`
      <a class="${e}" href="/" data-route="/" aria-label="${this.content.labels.homepage}">
        <span class="brand-mark">
          <img src="/tju-logo.svg" alt="" />
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
    `}renderPortalOverlay(){return`
      <section class="portal-overlay" aria-hidden="true" aria-label="TJU portal bağlantıları">
        <div class="portal-panel">
          <button class="portal-close" type="button" aria-label="${this.content.portal.closeLabel}">×</button>
          <div class="portal-brand">
            <span class="brand-mark">
              <img src="/tju-logo.svg" alt="" />
            </span>
            <strong>TJU</strong>
          </div>
          <div class="portal-content">
            <p>${this.content.portal.title}</p>
            <div class="portal-icon" aria-hidden="true">
              <svg width="82" height="82" viewBox="0 0 82 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="41" cy="27" r="13" stroke="white" stroke-width="4"/>
                <path d="M19 68C23 52 31 45 41 45C51 45 59 52 63 68" stroke="white" stroke-width="4" stroke-linecap="round"/>
                <path d="M21 68H61" stroke="white" stroke-width="4" stroke-linecap="round"/>
              </svg>
            </div>
            <nav class="portal-links" aria-label="TJU portal menüsü">
              ${this.content.portal.links.map(e=>`<a href="#">${e}</a>`).join(``)}
            </nav>
          </div>
        </div>
      </section>
    `}renderHeader(){return`
      <header class="site-header" aria-label="${this.content.labels.header}">
        ${this.renderBrand()}
        ${this.renderPrimaryNav(`main-nav`,this.content.labels.primaryNav)}
      </header>

      <div class="floating-tools" aria-label="${this.content.labels.quickActions}">
        ${this.content.tools.map(e=>`
              <button type="button" aria-label="${e.label}" ${e.label===`Kullanıcı`?`data-portal-trigger`:``}>${e.text}</button>
            `).join(``)}
      </div>

      ${this.renderPortalOverlay()}
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
    `}},t=class{constructor(e){this.layout=e}render({title:e,image:t=`/campus-placeholder.png`}){return`
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
    `}},r=class{constructor(e,t,n){this.content=e,this.subpageHero=t,this.profile=n}render(){return`
      <main>
        ${this.subpageHero.render({title:this.profile.heroTitle,image:this.profile.image})}

        <section class="bio-section">
          <article class="bio-card">
            <figure class="bio-photo">
              <img src="${this.profile.image}" alt="" />
            </figure>
            <div class="bio-copy">
              <p class="bio-role">${this.profile.role}</p>
              <h2>${this.profile.name}</h2>
              ${this.profile.paragraphs.map(e=>`<p>${e}</p>`).join(``)}
              <a href="${this.profile.backPath}" data-route="${this.profile.backPath}">${this.profile.backLabel}</a>
            </div>
          </article>
        </section>
      </main>
    `}},i=class{constructor(e){this.content=e}renderActions(){return this.content.contact.actions.map(e=>`
          <a class="contact-action" href="${e.path}">
            <span aria-hidden="true">${e.icon}</span>
            ${e.label}
          </a>
        `).join(``)}render(){let e=this.content.contact;return`
      <main class="contact-page" style="--contact-bg: url('${e.backgroundImage}')">
        <section class="contact-panel" aria-labelledby="contact-title">
          <a class="contact-brand" href="/" data-route="/" aria-label="${this.content.labels.homepage}">
            <span class="brand-mark">
              <img src="/tju-logo.svg" alt="" />
            </span>
            <span>${this.content.engineeringFaculty.logoTitle}</span>
          </a>

          <a class="contact-close" href="/" data-route="/" aria-label="${e.closeLabel}">×</a>

          <div class="contact-copy">
            <div class="contact-symbol" aria-hidden="true">
              <span>✉</span>
              <span>☎</span>
            </div>
            <div class="contact-details">
              <h1 id="contact-title">${e.heading}</h1>
              <dl>
                <div>
                  <dt>${e.addressLabel}</dt>
                  <dd>${e.address}</dd>
                </div>
                <div>
                  <dt>${e.emailLabel}</dt>
                  <dd><a href="mailto:${e.email}">${e.email}</a></dd>
                </div>
                <div>
                  <dt>${e.kepLabel}</dt>
                  <dd><a href="mailto:${e.kep}">${e.kep}</a></dd>
                </div>
                <div>
                  <dt>${e.phoneLabel}</dt>
                  <dd><a href="tel:${e.phoneHref}">${e.phone}</a></dd>
                </div>
                <div>
                  <dt>${e.faxLabel}</dt>
                  <dd>${e.fax}</dd>
                </div>
              </dl>
              <div class="contact-actions">
                ${this.renderActions()}
              </div>
            </div>
          </div>
        </section>
      </main>
    `}},a=class{constructor(e,t,n){this.content=e,this.subpageHero=t,this.page=n}renderLinks(){return(this.page.links||[]).map(e=>`<a href="#">${e}</a>`).join(``)}render(){return`
      <main>
        ${this.subpageHero.render({title:this.page.heroTitle||this.page.pageTitle,image:this.page.image})}

        <section class="content-page-section">
          <article class="content-page-body">
            ${this.page.paragraphs.map(e=>`<p>${e}</p>`).join(``)}
            <div class="content-page-links">
              ${this.renderLinks()}
            </div>
          </article>
        </section>
      </main>
    `}},o=class{constructor(e,t){this.content=e,this.subpageHero=t}renderMember(e,t){return`
      <article class="council-card ${t===0?`is-lead`:``}">
        <figure class="council-photo">
          <img src="${e.image}" alt="" />
        </figure>
        <div class="council-copy">
          <h2>${e.name}</h2>
          ${e.role?`<p>${e.role}</p>`:``}
          ${e.bioPath?`<a href="${e.bioPath}" data-route="${e.bioPath}">Özgeçmiş için tıklayınız.</a>`:``}
        </div>
      </article>
    `}render(){let e=this.content.council;return`
      <main>
        ${this.subpageHero.render({title:e.pageTitle,image:e.image})}

        <section class="council-section">
          ${e.members.map((e,t)=>this.renderMember(e,t)).join(``)}
        </section>
      </main>
    `}},s=class{constructor(e,t){this.content=e,this.department=t}get template(){return this.content.engineeringDepartmentTemplate}renderHeader(){return`
      <header class="department-header">
        <a class="department-back" href="/muhendislik-fakultesi" data-route="/muhendislik-fakultesi" aria-label="Mühendislik Fakültesine dön">←</a>
        <a class="department-title-link" href="/" data-route="/">${this.content.engineeringFaculty.logoTitle}</a>
        <nav class="department-top-nav" aria-label="${this.department.title}">
          ${this.content.primaryNavItems.map(e=>`<a href="${e.path}" data-route="${e.path}">${e.label}</a>`).join(``)}
        </nav>
        <div class="department-tools" aria-label="${this.content.labels.quickActions}">
          ${this.content.tools.map(e=>`<button type="button" aria-label="${e.label}">${e.text}</button>`).join(``)}
        </div>
      </header>
    `}renderHero(){return`
      <section class="department-hero" style="--department-hero-image: url('${this.template.heroImage}')">
        <div class="department-hero-nav">
          <a class="department-brand" href="/muhendislik-fakultesi" data-route="/muhendislik-fakultesi">
            <span class="brand-mark">
              <img src="/tju-logo.svg" alt="" />
            </span>
            <span>
              <strong>${this.content.engineeringFaculty.logoTitle}</strong>
              <small>${this.department.subtitle}</small>
            </span>
          </a>
          <nav aria-label="${this.department.title} menüsü">
            ${this.template.nav.map(([e,t])=>`<a href="${t}">${e}</a>`).join(``)}
          </nav>
        </div>
        <h1>${this.department.heroTitle}</h1>
      </section>
    `}renderFeatureCards(){return`
      <section class="department-feature-cards">
        ${this.template.featureCards.map((e,t)=>`
              <a href="#" class="department-feature-card" style="--feature-offset: ${t}">
                <img src="${this.template.heroImage}" alt="" />
                <span>${e}</span>
              </a>
            `).join(``)}
      </section>
    `}renderChairMessage(){return`
      <section id="about" class="department-chair">
        <div>
          <h2>${this.template.chairMessage.title}</h2>
          <p>${this.template.chairMessage.greeting}</p>
          <p>${this.template.chairMessage.body}</p>
        </div>
        <figure>
          <img src="${this.template.chairMessage.image}" alt="" />
        </figure>
      </section>
    `}renderWhySection(){return`
      <section id="program" class="department-why">
        <div>
          <h2>${this.template.why.titlePrefix} ${this.department.title}?</h2>
          <h3>${this.template.why.heading} ${this.department.title}?</h3>
          <p>${this.template.why.body}</p>
          <a href="#">${this.template.why.link}</a>
        </div>
        <figure>
          <img src="${this.template.why.image}" alt="" />
        </figure>
      </section>
    `}renderNews(){return`
      <section id="news" class="department-news">
        <h2>${this.template.newsTitle}</h2>
        <div class="department-news-grid">
          ${this.template.news.map(e=>`
                <article class="department-news-card">
                  <img src="${e.image}" alt="" />
                  <time>${e.date}</time>
                  <h3>${e.title}</h3>
                </article>
              `).join(``)}
        </div>
      </section>
    `}render(){return`
      ${this.renderHeader()}
      <main class="department-page">
        ${this.renderHero()}
        ${this.renderFeatureCards()}
        ${this.renderChairMessage()}
        ${this.renderWhySection()}
        ${this.renderNews()}
      </main>
      <footer class="faculty-footer department-footer">
        <nav>
          ${this.content.engineeringFaculty.footerLinks.map(e=>`<a href="#">${e}</a>`).join(` / `)}
        </nav>
        <p>${this.content.engineeringFaculty.address}</p>
      </footer>
    `}},c=class{constructor(e){this.content=e}renderFacultyHeader(e){return`
      <header class="faculty-header">
        <a class="faculty-brand" href="/" data-route="/">
          <span class="brand-mark">
            <img src="/tju-logo.svg" alt="" />
          </span>
          <span>
            <strong>${e.logoTitle}</strong>
            <small>${e.logoSubtitle}</small>
          </span>
        </a>
        <nav class="faculty-nav" aria-label="${e.pageTitle}">
          ${e.nav.map(([e,t])=>`<a href="${t}">${e}</a>`).join(``)}
        </nav>
      </header>
    `}renderDepartmentCards(e){return e.departments.map((t,n)=>`
          <a class="faculty-department-card" href="${t.path}" data-route="${t.path}" style="--card-offset: ${n}">
            <img src="${e.heroImage}" alt="" />
            <h2>${t.title}</h2>
          </a>
        `).join(``)}renderAgendaCards(e){return e.agendaCards.map(t=>`
          <article class="faculty-agenda-card">
            <img src="${t.image}" alt="" />
            <div class="faculty-agenda-dates">
              <span aria-hidden="true">▦</span>
              <p>${t.start}</p>
              <p>${t.end}</p>
            </div>
            <h3>${t.title}</h3>
            <a href="#">${e.moreLabel}</a>
          </article>
        `).join(``)}render(){let e=this.content.engineeringFaculty;return`
      ${this.renderFacultyHeader(e)}
      <main class="faculty-page">
        <section class="faculty-hero" style="--faculty-hero-image: url('${e.heroImage}')">
          <div class="faculty-hero-copy">
            <p>${e.heroEyebrow}</p>
            <h1>${e.pageTitle}</h1>
          </div>
          <a class="faculty-hero-cta" href="#agenda">
            <span>${e.heroCta}</span>
            <strong aria-hidden="true">→</strong>
          </a>
        </section>

        <section id="departments" class="faculty-departments">
          ${this.renderDepartmentCards(e)}
        </section>

        <section class="faculty-dean">
          <div>
            <h2>${e.deanMessage.title}</h2>
            <p>${e.deanMessage.body}</p>
          </div>
          <figure>
            <img src="${e.deanMessage.image}" alt="" />
          </figure>
        </section>

        <section id="agenda" class="faculty-agenda">
          <div class="faculty-tabs" role="tablist" aria-label="Gündem">
            ${e.agendaTabs.map((e,t)=>`
                  <button class="${t===0?`is-active`:``}" type="button">${e}</button>
                `).join(``)}
          </div>
          <div class="faculty-agenda-grid">
            ${this.renderAgendaCards(e)}
          </div>
          <div class="faculty-pagination" aria-label="Pagination">
            ${e.pagination.map((e,t)=>`
                  <span class="${t===0?`is-active`:``}">${e}</span>
                `).join(``)}
          </div>
        </section>
      </main>
      <footer class="faculty-footer">
        <nav>
          ${e.footerLinks.map(e=>`<a href="#">${e}</a>`).join(` / `)}
        </nav>
        <p>${e.address}</p>
        <div class="faculty-socials">
          <a href="#">●</a>
          <a href="#">▶</a>
          <a href="#">f</a>
          <a href="#">◎</a>
          <a href="#">in</a>
          <a href="#">☏</a>
        </div>
      </footer>
    `}},l=class{constructor(e,t){this.content=e,this.layout=t}renderStatIcon(e){let t=[`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="12" width="36" height="44" rx="4" stroke="white" stroke-width="3"/>
        <path d="M22 24H42M22 34H42M22 44H34" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>`,`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 10L10 22H54L32 10Z" stroke="white" stroke-width="3" stroke-linejoin="round"/>
        <path d="M16 22V50M28 22V50M40 22V50M52 22V50" stroke="white" stroke-width="3" stroke-linecap="round"/>
        <path d="M10 54H54" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>`,`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="22" r="10" stroke="white" stroke-width="3"/>
        <path d="M16 54C18.5 43 25 38 32 38C39 38 45.5 43 48 54" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>`,`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="22" stroke="white" stroke-width="3"/>
        <path d="M10 32H54M32 10C38 17 41 24 41 32C41 40 38 47 32 54C26 47 23 40 23 32C23 24 26 17 32 10Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,`<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="12" width="44" height="40" rx="6" stroke="white" stroke-width="3"/>
        <path d="M22 24H42M32 24V42M24 42H40" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>`];return t[e]||t[0]}render(){return`
      <main>
        <section id="hero" class="hero-section">
          <div class="hero-shell">
            <div class="hero-slider" aria-label="TJU duyuru görselleri">
              <div class="hero-slider-track">
                <img
                  class="hero-slide-image"
                  src="/reference/54942c02-ba2a-42c4-ac8e-1f06d4c4edbe.jpg"
                  alt="TJU yeni kampüs duyurusu"
                />
                <img
                  class="hero-slide-image"
                  src="/reference/04534356-cb95-4946-aeb7-ef1105b9ac6d.jpg"
                  alt="TJU lisans programları duyurusu"
                />
              </div>
              <div class="hero-slider-dots" aria-hidden="true">
                <span></span>
                <span></span>
              </div>
            </div>
            ${this.layout.renderHeroNavigation()}
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
              ${this.content.stats.map(([e,t],n)=>`
                  <article class="stat-card">
                    <span class="line-icon" aria-hidden="true">${this.renderStatIcon(n)}</span>
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

        <section class="section gallery-section" aria-label="${this.content.sectionTitles.galleryTitle}">
          <div class="gallery-header">
            <h2>${this.content.sectionTitles.galleryTitle}</h2>
            <div class="gallery-controls" aria-label="${this.content.sectionTitles.galleryTitle} kontrolleri">
              <button class="gallery-control" type="button" data-gallery-prev aria-label="Önceki görseller">
                <span aria-hidden="true">‹</span>
              </button>
              <button class="gallery-control" type="button" data-gallery-next aria-label="Sonraki görseller">
                <span aria-hidden="true">›</span>
              </button>
            </div>
          </div>
          <div class="gallery-viewport">
            <div class="mini-gallery" data-gallery-track tabindex="0">
              ${this.content.gallery.map(e=>{let t=typeof e==`string`?e:e.title;return`
                  <figure class="gallery-tile">
                    <img src="${typeof e==`string`?`/campus-placeholder.png`:e.image}" alt="${t}" />
                  </figure>
                `}).join(``)}
            </div>
          </div>
        </section>
      </main>
    `}},u=class{constructor(e){this.content=e}renderGlobalNav(e){return`
      <div class="international-topbar">
        <a class="international-back" href="/" data-route="/" aria-label="Ana sayfaya dön">←</a>
        <nav class="international-global-nav" aria-label="International üst menü">
          ${e.topNav.map(([e,t],n)=>`<a class="${n===0?`is-active`:``}" href="${t}" data-route="${t}">${e}</a>`).join(``)}
        </nav>
        <div class="international-tools" aria-label="${this.content.labels.quickActions}">
          ${e.tools.map(e=>`<button type="button" aria-label="${e.label}">${e.text}</button>`).join(``)}
        </div>
      </div>
    `}renderHeroNav(e){return`
      <div class="international-hero-nav">
        <a class="international-brand" href="/" data-route="/">
          <span class="brand-mark">
            <img src="/tju-logo.svg" alt="" />
          </span>
          <span>
            <strong>${e.logoTitle}</strong>
            <small>${e.logoSubtitle}</small>
          </span>
        </a>
        <nav aria-label="${e.pageTitle} menüsü">
          ${e.nav.map(e=>`
                <div class="international-nav-item ${e.featured?`is-featured`:``} ${e.links?`has-submenu`:``}">
                  <a href="${e.path}">${e.label}</a>
                  ${e.links?`
                        <div class="international-submenu">
                          ${e.links.map(e=>`<a href="#">${e}</a>`).join(``)}
                        </div>
                      `:``}
                </div>
              `).join(``)}
        </nav>
      </div>
    `}renderCards(e){return e.cards.map(e=>`
          <article class="international-card">
            <img src="${e.image}" alt="" />
            <h2>${e.title}</h2>
            <p>${e.body}</p>
          </article>
        `).join(``)}renderVideos(e){return e.videos.map(e=>`
          <article class="international-video">
            <img src="${e.image}" alt="" />
            <div class="international-video-overlay">
              <h3>${e.title}</h3>
              <span aria-hidden="true">▶</span>
            </div>
          </article>
        `).join(``)}render(){let e=this.content.international;return`
      ${this.renderGlobalNav(e)}
      <main class="international-page">
        <section class="international-hero" style="--international-hero-image: url('${e.heroImage}')">
          ${this.renderHeroNav(e)}
          <h1>${e.heroTitle}</h1>
        </section>

        <section id="student-life" class="international-cards">
          ${this.renderCards(e)}
        </section>

        <section class="international-videos">
          ${this.renderVideos(e)}
        </section>
      </main>

      <footer class="international-footer">
        <p>${e.contactLabel}</p>
        <nav>
          ${e.footerLinks.map(e=>`<a href="#">${e}</a>`).join(` / `)}
        </nav>
        <small>${e.copyright}</small>
        <div class="faculty-socials">
          <a href="#">●</a>
          <a href="#">▶</a>
          <a href="#">f</a>
          <a href="#">◎</a>
          <a href="#">in</a>
          <a href="#">☏</a>
        </div>
      </footer>

      <button class="international-chat" type="button" aria-label="Chat">☵</button>
    `}},d=class{constructor(e){this.content=e,this.page=e.organizationChart}renderHeader(){return`
      <header class="org-header">
        <a class="org-brand" href="/" data-route="/" aria-label="${this.content.labels.homepage}">
          <span class="brand-mark">
            <img src="/tju-logo.svg" alt="" />
          </span>
          <span>
            <strong>TJU</strong>
            <small>${this.content.brand.title}</small>
          </span>
        </a>
        <nav class="org-nav" aria-label="${this.page.pageTitle}">
          ${this.page.nav.map(([e,t])=>`<a href="${t}" data-route="${t}">${e}</a>`).join(``)}
        </nav>
      </header>
    `}renderUnit(e,t=``){return`<li class="org-unit ${t}">${e}</li>`}renderTopCluster(e,t,n){return`
      <section class="org-top-cluster ${n}" aria-label="${e}">
        <h3>${e}</h3>
        <ul>
          ${t.map(e=>this.renderUnit(e)).join(``)}
        </ul>
      </section>
    `}renderGroup(e){return`
      <section class="org-column org-tone-${e.tone}" aria-label="${e.title}">
        <h3>
          <span>${e.title}</span>
          ${e.subtitle?`<small>${e.subtitle}</small>`:``}
        </h3>
        <ul>
          ${e.items.map(e=>this.renderUnit(e)).join(``)}
        </ul>
      </section>
    `}renderLegend(){return`
      <div class="org-legend" aria-label="Organizasyon şeması renk açıklamaları">
        ${this.page.legend.map(([e,t])=>`<span class="org-legend-item org-tone-${t}">${e}</span>`).join(``)}
      </div>
    `}renderFooter(){return`
      <footer class="org-footer">
        <nav aria-label="${this.content.labels.footerNav}">
          ${this.page.footerLinks.map(e=>`<a href="#">${e}</a>`).join(``)}
        </nav>
        <p>${this.page.copyright}</p>
      </footer>
    `}render(){return`
      ${this.renderHeader()}
      <main class="org-page">
        <section class="org-hero" style="--org-hero-image: url('${this.page.heroImage}')">
          <div class="org-hero-overlay"></div>
          <h1>${this.page.heroTitle}</h1>
        </section>

        <section class="org-chart-section" aria-labelledby="org-chart-title">
          <div class="org-section-heading">
            <p>TJU Kurumsal Yapısı</p>
            <h2 id="org-chart-title">${this.page.pageTitle}</h2>
          </div>

          <div class="org-chart-scroll">
            <div class="org-chart">
              <div class="org-node org-node-main">Mütevelli Heyeti</div>

              <div class="org-top-row">
                ${this.renderTopCluster(`Bağlı Kurullar`,this.page.foundationUnits,`org-top-left`)}
                <div class="org-node org-node-rector">Rektörlük</div>
                ${this.renderTopCluster(`Rektörlüğe Bağlı Birimler`,this.page.rectorateUnits,`org-top-right`)}
              </div>

              <div class="org-branches">
                ${this.page.groups.map(e=>this.renderGroup(e)).join(``)}
              </div>
            </div>
          </div>

          ${this.renderLegend()}
        </section>
      </main>
      ${this.renderFooter()}
    `}},f=class{constructor(e){this.content=e}renderNavItem(e,t){return`
      <div class="prospective-nav-item ${t===0?`is-active`:``} ${e.links?`has-submenu`:``}">
        <a href="${e.path}">${e.label}</a>
        ${e.links?`
              <div class="prospective-submenu">
                ${e.links.map(e=>`<a href="#">${e}</a>`).join(``)}
              </div>
            `:``}
      </div>
    `}renderIntroCards(e){return e.introCards.map(e=>`
          <article class="prospective-intro-card">
            <img src="${e.image}" alt="" />
            <h2>${e.title}</h2>
            <p>${e.body}</p>
          </article>
        `).join(``)}renderFeatureCards(e){return e.featureCards.map(e=>`
          <article class="prospective-feature-card">
            <img src="${e.image}" alt="" />
            <h2>${e.title}</h2>
            <p>${e.body}</p>
            <a href="#">${e.button}</a>
          </article>
        `).join(``)}renderVideos(e){return e.videos.map(e=>`<a href="#">${e}</a>`).join(``)}render(){let e=this.content.prospectiveStudents;return`
      <main class="prospective-page">
        <header class="prospective-header">
          <a class="prospective-brand" href="/" data-route="/">
            <span class="brand-mark">
              <img src="/tju-logo.svg" alt="" />
            </span>
            <span>
              <strong>${e.logoTitle}</strong>
              <small>${e.logoSubtitle}</small>
            </span>
          </a>
        </header>

        <section class="prospective-shell">
          <nav class="prospective-nav" aria-label="${e.pageTitle}">
            ${e.nav.map((e,t)=>this.renderNavItem(e,t)).join(``)}
          </nav>

          <section class="prospective-hero" style="--prospective-hero-image: url('${e.heroImage}')">
            <div class="prospective-hero-label">${e.heroTag}</div>
            <h1>${e.heroTitle}</h1>
            <div class="prospective-dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>

          <section class="prospective-intro-grid">
            ${this.renderIntroCards(e)}
          </section>

          <section class="prospective-info-band">
            <div class="prospective-feature-grid">
              ${this.renderFeatureCards(e)}
            </div>
            <aside class="prospective-videos">
              <h2>${e.videoTitle}</h2>
              ${this.renderVideos(e)}
            </aside>
          </section>
        </section>

        <footer class="prospective-footer">
          ${e.footerLinks.map(e=>`<a href="#">${e}</a>`).join(` | `)}
        </footer>
      </main>
    `}},p=class{constructor(e,t){this.content=e,this.subpageHero=t}renderPerson(e){return`
      <div class="rectorate-card">
        <figure class="rectorate-photo">
          <img src="${e.image}" alt="" />
        </figure>
        <div class="rectorate-profile">
          <h2>${e.role}</h2>
          <p>${e.name}</p>
          <a href="mailto:${e.email}">${e.email}</a>
          ${e.bioPath?`<a class="rectorate-bio-link" href="${e.bioPath}" data-route="${e.bioPath}">Özgeçmiş için tıklayınız.</a>`:``}
        </div>
      </div>
    `}renderOfficeContact(e){return`
      <div class="rectorate-contact">
        <h3>${e.officeTitle}</h3>
        <p>${e.officeManager}</p>
        ${e.officeEmails.map(e=>`<a href="mailto:${e}">${e}</a>`).join(``)}
        ${e.phones.map(e=>`<p class="phone">${e}</p>`).join(``)}
      </div>
    `}render(){let e=this.content.rectorate,[t,...n]=e.people;return`
      <main>
        ${this.subpageHero.render({title:e.pageTitle,image:e.image})}

        <section class="rectorate-section">
          <div class="rectorate-people">
            ${t?this.renderPerson(t):``}
            ${this.renderOfficeContact(e)}
            ${n.map(e=>this.renderPerson(e)).join(``)}
          </div>
        </section>
      </main>
    `}},m=class{bind(){this.bindHeaderScroll(),this.bindMegaMenus(),this.bindPortalOverlay(),this.bindAdministrativeStaffFilter(),this.bindGallerySlider()}bindHeaderScroll(){let e=document.querySelector(`.site-header`),t=document.querySelector(`.floating-tools`);if(!e||!t)return;this.syncHeader&&window.removeEventListener(`scroll`,this.syncHeader);let n=()=>{let n=window.scrollY>60;e.classList.toggle(`is-scrolled`,n),t.classList.toggle(`is-hidden`,n)};this.syncHeader=n,n(),window.addEventListener(`scroll`,n,{passive:!0})}bindMegaMenus(){document.querySelectorAll(`.has-mega`).forEach(e=>{let t,n=()=>{window.clearTimeout(t),e.classList.add(`is-open`)},r=()=>{t=window.setTimeout(()=>{e.classList.remove(`is-open`)},260)};e.addEventListener(`mouseenter`,n),e.addEventListener(`mouseleave`,r),e.addEventListener(`focusin`,n),e.addEventListener(`focusout`,r)})}bindPortalOverlay(){let e=document.querySelector(`.portal-overlay`),t=document.querySelector(`[data-portal-trigger]`),n=document.querySelector(`.portal-close`);if(!e||!t||!n)return;let r=()=>{e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`portal-is-open`),n.focus()},i=()=>{e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`portal-is-open`),t.focus()};t.addEventListener(`click`,r),n.addEventListener(`click`,i),e.addEventListener(`click`,t=>{t.target===e&&i()}),document.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.classList.contains(`is-open`)&&i()})}bindAdministrativeStaffFilter(){let e=document.querySelector(`.staff-filter`),t=document.querySelectorAll(`.staff-card`);if(!e||!t.length)return;let n=()=>{let n=new FormData(e),r=String(n.get(`name`)||``).trim().toLowerCase(),i=String(n.get(`department`)||``);t.forEach(e=>{let t=!r||e.dataset.name.includes(r),n=!i||e.dataset.department===i;e.hidden=!t||!n})};e.addEventListener(`submit`,e=>{e.preventDefault(),n()}),e.addEventListener(`input`,n),e.addEventListener(`change`,n)}bindGallerySlider(){let e=document.querySelector(`[data-gallery-track]`),t=document.querySelector(`[data-gallery-prev]`),n=document.querySelector(`[data-gallery-next]`);if(this.syncGalleryControls&&=(window.removeEventListener(`resize`,this.syncGalleryControls),null),!e||!t||!n)return;let r=t=>{let n=e.querySelector(`.gallery-tile`),r=n?n.getBoundingClientRect().width:e.clientWidth,i=Number.parseFloat(getComputedStyle(e).columnGap)||0;e.scrollBy({left:t*(r+i),behavior:`smooth`})},i=()=>{let r=e.scrollWidth-e.clientWidth;t.disabled=e.scrollLeft<=4,n.disabled=e.scrollLeft>=r-4};t.addEventListener(`click`,()=>r(-1)),n.addEventListener(`click`,()=>r(1)),e.addEventListener(`scroll`,i,{passive:!0}),this.syncGalleryControls=i,window.addEventListener(`resize`,i),i()}},h=class{constructor(e,t){this.routes=e,this.fallbackRoute=t}resolve(e=window.location.pathname){return this.routes[e]||this.fallbackRoute}};new class{constructor(n){this.content=n,this.layout=new e(n),this.subpageHero=new t(this.layout),this.interactions=new m,this.router=this.createRouter()}createRouter(){let e=new l(this.content,this.layout),t=Object.fromEntries(this.content.engineeringFaculty.departments.map(e=>[e.path,{title:`${e.title} | ${this.content.brand.title}`,page:new s(this.content,e),useSiteChrome:!1}])),m=Object.fromEntries(this.content.aboutPages.map(e=>[e.path,{title:`${e.pageTitle} | ${this.content.brand.title}`,page:new a(this.content,this.subpageHero,e)}])),g=Object.fromEntries(this.content.bioProfiles.map(e=>[e.path,{title:`${e.pageTitle} | ${this.content.brand.title}`,page:new r(this.content,this.subpageHero,e)}]));return new h({"/":{title:this.content.brand.title,page:e},"/rektorluk":{title:`${this.content.rectorate.pageTitle} | ${this.content.brand.title}`,page:new p(this.content,this.subpageHero)},"/mutevelli-heyeti":{title:`${this.content.council.pageTitle} | ${this.content.brand.title}`,page:new o(this.content,this.subpageHero)},"/idari-personel":{title:`${this.content.administrativeStaff.pageTitle} | ${this.content.brand.title}`,page:new n(this.content,this.subpageHero)},"/organizasyon-semasi":{title:`${this.content.organizationChart.pageTitle} | ${this.content.brand.title}`,page:new d(this.content),useSiteChrome:!1},"/iletisim":{title:`${this.content.contact.pageTitle} | ${this.content.brand.title}`,page:new i(this.content),useSiteChrome:!1},"/international":{title:`${this.content.international.pageTitle} | ${this.content.brand.title}`,page:new u(this.content),useSiteChrome:!1},"/aday-ogrenciler":{title:`${this.content.prospectiveStudents.pageTitle} | ${this.content.brand.title}`,page:new f(this.content),useSiteChrome:!1},"/muhendislik-fakultesi":{title:`${this.content.engineeringFaculty.pageTitle} | ${this.content.brand.title}`,page:new c(this.content),useSiteChrome:!1},...m,...g,...t},{title:this.content.brand.title,page:e})}mount(e){this.root=document.querySelector(e),this.render(),this.bindRouteLinks(),window.addEventListener(`popstate`,()=>this.render())}render(){let e=this.router.resolve();if(document.title=e.title,e.useSiteChrome===!1){this.root.innerHTML=e.page.render(),this.interactions.bind();return}this.root.innerHTML=`
      ${this.layout.renderHeader()}
      ${e.page.render()}
      ${this.layout.renderFooter()}
    `,this.interactions.bind()}bindRouteLinks(){document.addEventListener(`click`,e=>{let t=e.target.closest(`a[data-route]`);if(!t)return;let n=new URL(t.href);n.origin===window.location.origin&&(e.preventDefault(),window.history.pushState({},``,n.pathname),window.scrollTo({top:0}),this.render())})}}(class e{static labels={header:`Ana menü`,primaryNav:`Birincil navigasyon`,heroNav:`Hero navigasyon`,quickActions:`Hızlı işlemler`,homepage:`Türk-Japon Bilim ve Teknoloji Üniversitesi ana sayfa`,campusImage:`Kampüs görseli`,footerNav:`Footer bağlantıları`,socialMedia:`Sosyal medya`};static brand={title:`TÜRK-JAPON BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ`,subtitle:`TURKISH-JAPANESE SCIENCE AND TECHNOLOGY UNIVERSITY`,japaneseTitle:`トルコ・日本科学技術大学`};static tools=[{label:`Ara`,text:`⌕`},{label:`Kullanıcı`,text:`♙`},{label:`E-posta`,text:`✉`},{label:`English`,text:`EN`}];static portal={title:`Geleceğe Hazır<br />Bireyler İçin<br />Yenilikçi Eğitim`,closeLabel:`Portal menüsünü kapat`,links:[`MyTJU Portal`,`Uzaktan TJU`,`TJU Mail (Öğrenci)`,`TJU Mail (Personel)`,`Office 365`,`Moodle`,`Eduroam`,`Kütüphane Kataloğu`,`Mezun Portalı`,`EBYS`,`Akademik Faaliyet Raporlama`,`Web İçerik Yönetim Sistemi`]};static hero={title:`Biz Hazırız! Öğrencilerimizi Bekliyoruz.`,ctaText:`TJU'de<br />Neler Oluyor?`,ctaIcon:`→`};static sectionTitles={announcementsEyebrow:`Duyurular`,announcementsTitle:`TJU'den Duyurular`,statsTitle:`Yeni Kampüsünde TJU`,galleryTitle:`Kampüsten Kareler`};static links={announcementDetail:`Detaylı Bilgi →`,newsDetail:`Detaylar İçin Tıklayın! →`,more:`Daha fazla →`};static announcements=[{date:`03 Nisan 2026`,title:`17 Mayıs'ta Türk Japon Kültür Günü Etkinliği | Kültürel Bağlarımızı Güçlendiriyoruz`,tone:`red`},{date:`8 Nisan 2026`,title:`Türk-Japon Bilim ve Teknoloji Üniversitesi Yeni Adresinde`,tone:`red`},{date:`1 Nisan 2026-10 Nisan 2026`,title:`Deprem Afeti Bilimi Programı için Program Koordinatörü Başvuruları Başladı`,tone:`red`}];static news=[{title:`Japonya'ya Resmî Ziyaretler ve STS Forumu 2025 Katılımı`,body:`Türk-Japon Bilim ve Teknoloji Üniversitesi (TJU) Rektörü Prof. Dr. Mustafa Verşan KÖK, üniversitenin kuruluş ve gelişim sürecine katkı sağlamak ve akademik ile kurumsal iş birliklerini güçlendirmek amacıyla, TJU Provost’u Prof. Dr. Hisakazu Mihara ile birlikte Ekim 2025’te Japonya’ya resmî bir ziyarette bulundu.`,image:`/reference/1_pp.jpg`},{title:`TJU, Yeni Kampüsünde!`,body:`Türk-Japon Bilim ve Teknoloji Üniversitesi, öğrenci memnuniyeti ve akademik gelişim odaklı projeleriyle öne çıkıyor.`,image:`/campus-placeholder.png`},{title:`TJU 4 Mühendislik Bölümü ile Eğitim Öğretime Başlıyor`,lead:` Türk-Japon Bilim ve Teknoloji Üniversitesi’nde eğitim, kuramsal bilgi ile uygulama ve sektör deneyimini bütünleştiren entegre bir model üzerine yapılandırılmıştır..`,body:`Akademik ilgi, destek ve kampüs yaşamını güçlendiren uygulamalarımızla öğrencilerimizin yanında olmaya devam ediyoruz.`,image:`/campus-placeholder.png`}];static stats=[[`4`,`Lisans Programı`,`board`],[`1`,`Fakülte`,`building`],[`16`,`Öğretim Elemanı`,`lecture`],[`% 100`,`İngilizce Eğitim`,`globe`],[`Japonca Eğitim İmkanı`,`globe`]];static mediaCards={filmTitle:`TJU'lü Ol!`,filmIcon:`▶`,catalogTitle:`TJU<br />Tanıtım Kataloğu`,tourTitle:`360 Kampüs Turu`};static gallery=[{title:`Kütüphane`,image:`/reference/kutuphane_image_07.jpg`},{title:`Kampüs`,image:`/reference/barinma_image_02.jpg`},{title:`Kütüphane Girişi`,image:`/reference/kutuphane_image_01.jpg`},{title:`Kampüs Meydanı`,image:`/reference/Adsız tasarım copy.png`},{title:`Ana Yerleşke`,image:`/reference/Adsız tasarım.png`},{title:`Kampüs Binası`,image:`/reference/Buroşür 1     (190).jpg`}];static audienceLinks=[[`Aday Öğrenciler`,`/aday-ogrenciler`],[`Öğrenciler`,`/ogrenciler`],[`International`,`/international`]];static prospectiveStudents={pageTitle:`Üniversite Adaylarına Bilgi`,logoTitle:`TÜRK-JAPON BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ`,logoSubtitle:`Üniversite Adaylarına Bilgi`,heroImage:`/campus-placeholder.png`,heroTitle:`Geleceğini TJU ile Şekillendir`,heroTag:`Aday Öğrenciler`,nav:[{label:`Tanıtım`,path:`#tanitim`,links:[`Kampüs Ziyaretleri`,`Meslek Seminerleri`,`Sanal Kampüs Turu`,`Tanıtım Kitapçığı`,`Tanıtım Videoları`,`Randevu Al`]},{label:`YKS Bilgileri`,path:`#yks`,links:[`Kontenjanlar ve Puanlar`,`Yerleştirme Koşulları`]},{label:`Eğitim Programları`,path:`#programlar`,links:[`Tüm Lisans Programları`,`Puan Türlerine Göre Bölümler`,`Ders Programları`,`İngilizce Hazırlık Programı`]},{label:`Akademik Bilgiler`,path:`#akademik`},{label:`Kampüste Yaşam`,path:`#kampus`,links:[`Yurtlar`,`Kafeteryalar`,`Spor ve Sağlık`,`Sosyal ve Kültürel`,`Kampüs Planı`,`TJU’ye Ulaşım`]},{label:`Sorular`,path:`#sorular`}],introCards:[{title:`Kontenjanlar, Puanlar`,body:`TJU programlarına yerleşmek için YKS’ye katılmak, tercih döneminde ilgili programı tercih etmek ve ÖSYM tarafından programa yerleştirilmek gerekir.`,image:`/campus-placeholder.png`},{title:`Tanıtım Kitapçığı`,body:`Tanıtım kitapçığında TJU’nun akademik ve sosyal olanakları, eğitim programları ve öğretim kadrosuna ilişkin bilgiler yer alır.`,image:`/campus-placeholder.png`},{title:`Uluslararası Olanaklar`,body:`TJU, Japonya başta olmak üzere farklı ülkelerdeki üniversitelerle öğrenci değişimi ve akademik iş birliği olanakları sunar.`,image:`/campus-placeholder.png`}],featureCards:[{title:`Neden TJU`,body:`Türk-Japon Bilim ve Teknoloji Üniversitesi; mühendislik odağı, uluslararası vizyonu ve yenilikçi eğitim yaklaşımıyla aday öğrencilerine güçlü bir akademik ortam sağlar.`,image:`/campus-placeholder.png`,button:`Devamını Oku`}],videoTitle:`Tanıtım Videoları`,videos:[`TJU’yu Tanı`,`Mühendislik Fakültesi`,`Kampüs Yaşamı`,`Öğrenci Deneyimi`,`Uluslararası Olanaklar`],footerLinks:[`info@tju.edu.tr`,`Türk-Japon Bilim ve Teknoloji Üniversitesi`]};static international={pageTitle:`International Programs Office`,logoTitle:`TJU`,logoSubtitle:`International Programs Office`,heroTitle:`International<br />Programs Office`,heroImage:`/campus-placeholder.png`,topNav:[[`TJU`,`/`],[`Academics`,`/akademik`],[`Explore TJU`,`/teduyu-kesfet`]],tools:[{label:`Search`,text:`⌕`},{label:`User`,text:`♙`},{label:`E-mail`,text:`✉`}],nav:[{label:`About`,path:`#about`},{label:`Apply Now`,path:`#apply`,featured:!0,links:[`Undergraduate`,`Graduate`,`How to Apply`,`Agency Portal`]},{label:`Application Information`,path:`#application`},{label:`Academics`,path:`#academics`,links:[`Faculties & Schools`,`Academic Calendar`,`Courses Offered`,`Grading System`]},{label:`Student Life`,path:`#student-life`,links:[`Visa & Residence Permit`,`Health Insurance`,`Dormitories`,`Student Affairs`,`Equivalency Certificate`,`Explore TJU`,`Discover Ankara`,`Adapting to Turkish Culture`]},{label:`Exchange Programs`,path:`#exchange-programs`,links:[`Erasmus+ Programme`,`Outgoing (EU Mobility)`,`Incoming (EU Mobility)`,`Erasmus+ International Credit Mobility`,`International (non-EU) Exchange Program`,`Information`,`Application`,`Useful Documents`,`Application Requirements For Partner Universities`,`Departmental Coordinators`,`Erasmus Policy Statement`,`ECHE`,`Contact`,`ESN TJU`]},{label:`Partnerships`,path:`#partnerships`,links:[`Memorandum of Understanding (MoU)`,`Consortiums`,`Erasmus+ Inter-institutional Agreements (2021-2027)`,`Student Exchange Agreements`]},{label:`Announcements`,path:`#announcements`}],cards:[{title:`Social Activities and Students Societies`,body:`Student organizations such as communities, international student associations, science project teams, and sports teams are managed by students under the supervision of academic advisors.`,image:`/campus-placeholder.png`},{title:`Dormitories`,body:`TJU dormitories aim to provide a home-like and safe environment for students. Common areas support studying, resting, and socializing.`,image:`/campus-placeholder.png`},{title:`Study in the Heart of Ankara`,body:`TJU campus is located in Ankara, offering students access to academic, social, and cultural opportunities in the capital.`,image:`/campus-placeholder.png`}],videos:[{title:`TJU International - UPO 1`,image:`/campus-placeholder.png`},{title:`TJU International - UPO 2`,image:`/campus-placeholder.png`}],contactLabel:`Contact`,footerLinks:[`Clarification Text on Personal Data Processing`,`Disclaimer`,`Corporate Identity`,`Open Consent Statement`],copyright:`© Türk-Japon Bilim ve Teknoloji Üniversitesi.`};static aboutPages=[{path:`/ted-universitesi`,pageTitle:`Türk Japon Üniversitesi`,heroTitle:`Türk Japon<br />Üniversitesi`,image:`/campus-placeholder.png`,paragraphs:[`Türk-Japon Bilim ve Teknoloji Üniversitesi, Türkiye ile Japonya arasındaki bilimsel, teknolojik ve kültürel iş birliğini güçlendirmek amacıyla kurulmuştur. Üniversite; nitelikli eğitim, araştırma ve yenilik üretimini merkeze alan bir yükseköğretim kurumu olarak yapılandırılmıştır.`,`TJU, mühendislik ve teknoloji alanlarında güçlü akademik programları, uluslararası bakış açısı ve disiplinler arası çalışma kültürüyle öğrencilerini geleceğin ihtiyaçlarına hazırlamayı hedefler.`,`Üniversitemiz; öğrenci odaklı eğitim anlayışı, araştırma kapasitesi ve topluma katkı yaklaşımıyla ulusal ve uluslararası ölçekte değer üretmeyi amaçlar.`],links:[`Akademik Birimler`,`Araştırma Olanakları`,`Kampüs Yaşamı`]},{path:`/misyon-ve-vizyon`,pageTitle:`Misyon ve Vizyon`,heroTitle:`Misyon ve<br />Vizyon`,image:`/campus-placeholder.png`,paragraphs:[`Misyonumuz; bilim, teknoloji ve insan odaklı eğitim anlayışıyla sorgulayan, üreten, etik değerlere bağlı ve küresel ölçekte sorumluluk alabilen bireyler yetiştirmektir.`,`Vizyonumuz; Türkiye ve Japonya arasındaki akademik iş birliğini güçlendiren, araştırma çıktılarıyla topluma katkı sağlayan ve yenilikçi eğitim modeliyle öne çıkan uluslararası bir üniversite olmaktır.`,`Bu doğrultuda TJU, öğrencilerine yalnızca akademik bilgi değil, aynı zamanda eleştirel düşünme, takım çalışması, kültürler arası iletişim ve sürdürülebilir çözüm üretme becerileri kazandırmayı hedefler.`],links:[`Stratejik Öncelikler`,`Eğitim Yaklaşımı`,`Uluslararası İş Birlikleri`]},{path:`/yonetmelik-ve-yonergeler`,pageTitle:`Yönetmelik ve Yönergeler`,heroTitle:`Yönetmelik ve<br />Yönergeler`,image:`/campus-placeholder.png`,paragraphs:[`Üniversitenin akademik ve idari süreçleri; şeffaflık, hesap verebilirlik ve sürdürülebilir kalite ilkeleri doğrultusunda yönetmelik ve yönergelerle düzenlenir.`,`Öğrenciler, akademik personel ve idari birimler için geçerli olan temel usul ve esaslar bu bölümde toplanır. İçerikler; eğitim-öğretim, ölçme-değerlendirme, disiplin, başvuru ve kurumsal işleyiş başlıklarında güncellenebilir yapıdadır.`,`Bu sayfada yer alan dokümanlar bilgilendirme amaçlıdır; resmi süreçlerde üniversitenin güncel kurul kararları ve mevzuat metinleri esas alınır.`],links:[`Öğrenci Yönergeleri`,`Akademik Süreçler`,`Kurumsal Belgeler`]},{path:`/kisisel-verilerin-korunmasi`,pageTitle:`Kişisel Verilerin Korunması`,heroTitle:`Kişisel Verilerin<br />Korunması`,image:`/campus-placeholder.png`,paragraphs:[`Türk-Japon Bilim ve Teknoloji Üniversitesi, kişisel verilerin korunmasına ilişkin süreçleri yürürlükteki mevzuat ve kurumsal güvenlik ilkeleri doğrultusunda yürütür.`,`Kişisel veriler; hukuka uygunluk, amaçla sınırlılık, ölçülülük ve gerekli süre kadar saklama ilkelerine bağlı kalınarak işlenir. Üniversite, veri güvenliğini sağlamak için teknik ve idari tedbirleri alır.`,`Aydınlatma metinleri, başvuru yöntemleri ve ilgili politika belgeleri bu sayfa altında düzenlenebilir. İçerik gerektiğinde kurum ihtiyaçlarına göre güncellenebilir.`],links:[`Aydınlatma Metinleri`,`Başvuru Formu`,`Veri Güvenliği Politikası`]},{path:`/akademik-katalog`,pageTitle:`Akademik Katalog`,heroTitle:`Akademik<br />Katalog`,image:`/campus-placeholder.png`,paragraphs:[`Akademik katalog; TJU programlarının eğitim amaçları, ders yapıları, kredi bilgileri ve mezuniyet koşullarına ilişkin temel bilgileri bir araya getirir.`,`Öğrenciler ve aday öğrenciler, programların içeriklerini karşılaştırmak ve akademik planlarını oluşturmak için bu sayfadan yararlanabilir.`,`Katalog içerikleri akademik kurulların kararları ve güncel program düzenlemeleri doğrultusunda geliştirilebilir.`],links:[`Program Bilgileri`,`Ders İçerikleri`,`Mezuniyet Koşulları`]},{path:`/akademik-takvim`,pageTitle:`Akademik Takvim`,heroTitle:`Akademik<br />Takvim`,image:`/campus-placeholder.png`,paragraphs:[`Akademik takvim; kayıt, ders ekleme-bırakma, sınav, tatil ve mezuniyet süreçlerine ilişkin dönemsel tarihleri içerir.`,`TJU öğrencileri, akademik ve idari işlemlerini planlarken takvimde yer alan tarihleri esas alır.`,`Takvim bilgileri ilgili akademik yılın kararlarına göre güncellenebilir ve duyurularla desteklenir.`],links:[`Güz Dönemi`,`Bahar Dönemi`,`Sınav Takvimi`]},{path:`/acilan-dersler`,pageTitle:`Açılan Dersler`,heroTitle:`Açılan<br />Dersler`,image:`/campus-placeholder.png`,paragraphs:[`Açılan dersler sayfası, ilgili dönemde programlar kapsamında sunulan dersleri ve derslere ilişkin temel bilgileri paylaşır.`,`Ders listeleri öğrencilerin dönem planlaması, danışman görüşmeleri ve kayıt işlemleri için yol gösterici bir kaynak olarak hazırlanır.`,`Derslerin açılma durumu, kontenjan ve program ihtiyaçlarına göre dönem içinde değişebilir.`],links:[`Lisans Dersleri`,`Lisansüstü Dersler`,`Ders Programları`]},{path:`/ek-dal-programlari`,pageTitle:`Ek Dal Programları`,heroTitle:`Ek Dal<br />Programları`,image:`/campus-placeholder.png`,paragraphs:[`Ek dal programları, öğrencilerin ana programlarına ek olarak farklı akademik alanlarda yetkinlik kazanmasını destekler.`,`Program başvuru koşulları, ders yükümlülükleri ve başarı kriterleri ilgili akademik birimlerin kararları doğrultusunda belirlenir.`,`TJU, disiplinler arası öğrenmeyi teşvik eden esnek ve nitelikli akademik olanaklar sunmayı hedefler.`],links:[`Başvuru Koşulları`,`Program Yapısı`,`Danışmanlık`]},{path:`/akademik-kadro`,pageTitle:`Akademik Kadro`,heroTitle:`Akademik<br />Kadro`,image:`/campus-placeholder.png`,paragraphs:[`Akademik kadro sayfası, TJU bünyesinde eğitim, araştırma ve topluma katkı faaliyetlerini yürüten öğretim elemanlarını tanıtır.`,`Öğretim üyeleri ve araştırmacılar; uzmanlık alanları, yayınları, projeleri ve dersleriyle üniversitenin akademik üretimine katkı sağlar.`,`Kadro bilgileri akademik birimlerin güncel yapılanmasına göre düzenlenebilir.`],links:[`Fakülteler`,`Bölümler`,`Araştırma Alanları`]},{path:`/cift-ana-dal-yan-dal-programlari`,pageTitle:`Çift Ana Dal / Yan Dal Programları`,heroTitle:`Çift Ana Dal<br />Yan Dal Programları`,image:`/campus-placeholder.png`,paragraphs:[`Çift ana dal ve yan dal programları, başarılı öğrencilerin ikinci bir akademik alanda sistemli öğrenim görmesini sağlar.`,`Başvuru, kabul, devam ve mezuniyet koşulları ilgili yönetmelik ve akademik birim kararları çerçevesinde yürütülür.`,`Programlar öğrencilerin disiplinler arası bakış açısını güçlendirmek ve kariyer seçeneklerini genişletmek amacıyla tasarlanır.`],links:[`Başvuru Takvimi`,`Koşullar`,`Program Listesi`]},{path:`/akademik-ozgurluk-politikasi`,pageTitle:`Akademik Özgürlük Politikası`,heroTitle:`Akademik Özgürlük<br />Politikası`,image:`/campus-placeholder.png`,paragraphs:[`TJU, akademik özgürlüğü bilimsel üretimin, eleştirel düşüncenin ve nitelikli eğitimin temel unsurlarından biri olarak kabul eder.`,`Araştırma, öğretim ve ifade süreçleri; etik ilkeler, hukuki sorumluluklar ve kurumsal kalite yaklaşımıyla birlikte değerlendirilir.`,`Bu politika, akademik topluluğun özgür ve sorumlu biçimde bilgi üretmesini destekleyen çerçeveyi tanımlar.`],links:[`Etik İlkeler`,`Araştırma Politikaları`,`Kurumsal Kalite`]},{path:`/akademik-veri-yonetim-sistemi`,pageTitle:`Akademik Veri Yönetim Sistemi`,heroTitle:`Akademik Veri<br />Yönetim Sistemi`,image:`/campus-placeholder.png`,paragraphs:[`Akademik veri yönetim sistemi, üniversitenin yayın, proje, akademik performans ve araştırma çıktılarının düzenli biçimde izlenmesini destekler.`,`Sistem; raporlama, değerlendirme ve stratejik planlama süreçleri için güvenilir veri altyapısı oluşturmayı amaçlar.`,`Akademik birimler, güncel ve doğrulanabilir verilerle kurumsal gelişime katkı sağlar.`],links:[`Yayınlar`,`Projeler`,`Raporlama`]},{path:`/arastirma-tesvik-odulleri`,pageTitle:`Araştırma Teşvik Ödülleri`,heroTitle:`Araştırma Teşvik<br />Ödülleri`,image:`/campus-placeholder.png`,paragraphs:[`Araştırma teşvik ödülleri, TJU akademik topluluğunun nitelikli bilimsel üretimini görünür kılmak ve desteklemek amacıyla yapılandırılır.`,`Yayın, proje, patent, iş birliği ve toplumsal etki gibi başlıklarda yürütülen çalışmalar değerlendirme süreçlerine dahil edilebilir.`,`Teşvik mekanizmaları üniversitenin araştırma kapasitesini güçlendirmeye katkı sağlar.`],links:[`Başvuru`,`Değerlendirme`,`Ödül Kategorileri`]},{path:`/ogrenci-kongre-katilim-destegi`,pageTitle:`Öğrenci Kongre Katılım Desteği`,heroTitle:`Öğrenci Kongre<br />Katılım Desteği`,image:`/campus-placeholder.png`,paragraphs:[`Öğrenci kongre katılım desteği, öğrencilerin bilimsel toplantılarda çalışmalarını paylaşmasını ve akademik ağlarını geliştirmesini teşvik eder.`,`Destek başvuruları etkinlik niteliği, sunum durumu, akademik uygunluk ve bütçe olanakları çerçevesinde değerlendirilir.`,`Bu süreç öğrencilerin araştırma kültürüne erken aşamada katılımını güçlendirmeyi hedefler.`],links:[`Başvuru Formu`,`Destek Koşulları`,`Sonuçlar`]},{path:`/bilimsel-arastirma-projeleri`,pageTitle:`Bilimsel Araştırma Projeleri`,heroTitle:`Bilimsel Araştırma<br />Projeleri`,image:`/campus-placeholder.png`,paragraphs:[`Bilimsel araştırma projeleri, TJU akademisyenlerinin özgün araştırma fikirlerini sistemli biçimde geliştirmesine olanak sağlar.`,`Proje süreçleri; başvuru, değerlendirme, yürütme, raporlama ve çıktılar bakımından kurumsal ilkelerle desteklenir.`,`TJU, ulusal ve uluslararası araştırma iş birliklerini güçlendiren proje kültürünü önceliklendirir.`],links:[`Proje Başvuruları`,`Yürütme Esasları`,`Raporlama`]},{path:`/lisans-ogrencileri-arastirma-destegi`,pageTitle:`Lisans Öğrencileri Araştırma Desteği`,heroTitle:`Lisans Öğrencileri<br />Araştırma Desteği`,image:`/campus-placeholder.png`,paragraphs:[`Lisans öğrencileri araştırma desteği, öğrencilerin akademik merakını projeye dönüştürmesini ve araştırma deneyimi kazanmasını amaçlar.`,`Öğrenciler, akademik danışmanlarıyla birlikte araştırma sorusu geliştirme, yöntem belirleme ve çıktı üretme süreçlerine katılır.`,`Destek programı, TJU’nun araştırma odaklı eğitim yaklaşımını lisans düzeyinde görünür kılar.`],links:[`Başvuru`,`Danışmanlık`,`Öğrenci Projeleri`]},{path:`/360-sanal-tur`,pageTitle:`360 Sanal Tur`,heroTitle:`360 Sanal<br />Tur`,image:`/campus-placeholder.png`,paragraphs:[`360 sanal tur, TJU kampüsünü ve üniversite yaşamını dijital ortamda keşfetmek isteyen ziyaretçiler için hazırlanır.`,`Aday öğrenciler, öğrenciler ve paydaşlar; eğitim alanları, sosyal mekanlar ve kampüs olanakları hakkında genel izlenim edinebilir.`,`Sanal tur içerikleri kampüs gelişimi ve yeni mekan düzenlemeleri doğrultusunda güncellenebilir.`],links:[`Kampüs Alanları`,`Laboratuvarlar`,`Sosyal Mekanlar`]},{path:`/spor-dostu-kampus-etkinliklerimiz`,pageTitle:`Spor Dostu Kampüs Etkinliklerimiz`,heroTitle:`Spor Dostu Kampüs<br />Etkinliklerimiz`,image:`/campus-placeholder.png`,paragraphs:[`Spor dostu kampüs etkinlikleri, öğrencilerin fiziksel iyi oluşunu ve kampüs içi sosyal etkileşimini destekleyen faaliyetleri kapsar.`,`Turnuvalar, açık alan etkinlikleri, takım çalışmaları ve farkındalık programları öğrencilerin aktif kampüs yaşamına katılımını artırır.`,`TJU, akademik başarıyı destekleyen dengeli bir yaşam kültürünü önemser.`],links:[`Etkinlik Takvimi`,`Spor Alanları`,`Öğrenci Katılımı`]},{path:`/kutuphane`,pageTitle:`Kütüphane`,heroTitle:`Kütüphane`,image:`/campus-placeholder.png`,paragraphs:[`TJU Kütüphanesi, eğitim ve araştırma süreçlerini basılı ve dijital kaynaklarla destekleyen akademik bir bilgi merkezidir.`,`Öğrenciler ve akademisyenler; çalışma alanları, veri tabanları, danışma hizmetleri ve kaynak erişimi olanaklarından yararlanabilir.`,`Kütüphane hizmetleri üniversitenin akademik gelişimiyle birlikte genişletilir.`],links:[`Kaynaklar`,`Veri Tabanları`,`Çalışma Alanları`]},{path:`/spor-tesisi`,pageTitle:`Spor Tesisi`,heroTitle:`Spor<br />Tesisi`,image:`/campus-placeholder.png`,paragraphs:[`Spor tesisi, öğrencilerin ve çalışanların sağlıklı yaşam alışkanlıklarını destekleyen kampüs olanaklarından biridir.`,`Tesis kullanımı, programlar ve etkinlikler üniversitenin sosyal yaşam planlaması kapsamında düzenlenir.`,`TJU, spor ve hareket kültürünü kampüs deneyiminin doğal bir parçası olarak görür.`],links:[`Kullanım Bilgileri`,`Programlar`,`Etkinlikler`]},{path:`/yurtlar`,pageTitle:`Yurtlar`,heroTitle:`Yurtlar`,image:`/campus-placeholder.png`,paragraphs:[`Yurtlar sayfası, öğrencilerin barınma olanakları ve kampüs yaşamına uyum süreçleri hakkında genel bilgi sunar.`,`Güvenli, erişilebilir ve destekleyici yaşam alanları öğrencilerin akademik ve sosyal gelişimine katkı sağlar.`,`Yurt hizmetleri başvuru dönemleri, kontenjanlar ve ilgili düzenlemeler doğrultusunda güncellenebilir.`],links:[`Başvuru`,`Yaşam Alanları`,`Kurallar`]},{path:`/ogrenci-topluluklari`,pageTitle:`Öğrenci Toplulukları`,heroTitle:`Öğrenci<br />Toplulukları`,image:`/campus-placeholder.png`,paragraphs:[`Öğrenci toplulukları, TJU öğrencilerinin akademik, kültürel, sosyal ve sportif alanlarda birlikte üretmesini destekler.`,`Topluluk faaliyetleri öğrencilerin liderlik, iletişim, takım çalışması ve proje geliştirme becerilerini güçlendirir.`,`TJU, öğrencilerin kampüs yaşamına aktif katılımını teşvik eden çoğulcu bir topluluk kültürü oluşturmayı hedefler.`],links:[`Topluluk Listesi`,`Etkinlikler`,`Başvuru`]},{path:`/bilim-projesi-takimlari`,pageTitle:`Bilim Projesi Takımları`,heroTitle:`Bilim Projesi<br />Takımları`,image:`/campus-placeholder.png`,paragraphs:[`Bilim projesi takımları, öğrencilerin mühendislik, teknoloji ve araştırma odaklı projelerde ekip halinde çalışmasını sağlar.`,`Takımlar; yarışmalar, prototip geliştirme, bilimsel üretim ve disiplinler arası uygulama süreçlerine katılabilir.`,`Bu yapı, öğrencilerin teorik bilgiyi gerçek problemlere uygulama becerisini destekler.`],links:[`Takımlar`,`Projeler`,`Başarılar`]},{path:`/uluslararasi-ogrenci-birlikleri`,pageTitle:`Uluslararası Öğrenci Birlikleri`,heroTitle:`Uluslararası Öğrenci<br />Birlikleri`,image:`/campus-placeholder.png`,paragraphs:[`Uluslararası öğrenci birlikleri, farklı kültürlerden gelen öğrencilerin kampüs yaşamına katılımını ve etkileşimini destekler.`,`Kültürel etkinlikler, tanışma programları ve öğrenci dayanışması faaliyetleri uluslararasılaşma yaklaşımının önemli parçasıdır.`,`TJU, Türkiye ve Japonya başta olmak üzere çok kültürlü bir öğrenme ortamı kurmayı önemser.`],links:[`Etkinlikler`,`Öğrenci Destekleri`,`Kültürel Programlar`]},{path:`/spor-takimlarimiz`,pageTitle:`Spor Takımlarımız`,heroTitle:`Spor<br />Takımlarımız`,image:`/campus-placeholder.png`,paragraphs:[`Spor takımları, öğrencilerin takım ruhu, disiplin ve temsil bilinci kazanmasına katkı sağlar.`,`Üniversite içi ve dışı organizasyonlara katılım, öğrencilerin sosyal gelişimini ve aidiyet duygusunu güçlendirir.`,`TJU, sportif başarıyı sağlıklı kampüs yaşamının tamamlayıcı bir unsuru olarak değerlendirir.`],links:[`Takımlar`,`Antrenmanlar`,`Müsabakalar`]},{path:`/kariyer-merkezi`,pageTitle:`Kariyer Merkezi`,heroTitle:`Kariyer<br />Merkezi`,image:`/campus-placeholder.png`,paragraphs:[`Kariyer Merkezi, öğrencilerin eğitimleri boyunca mesleki farkındalık geliştirmesini ve kariyer planlarını bilinçli biçimde oluşturmasını destekler.`,`Danışmanlık, etkinlik, sektör buluşmaları, staj ve iş olanaklarına yönelik çalışmalar kariyer gelişimi süreçlerinin temel başlıklarıdır.`,`TJU, öğrencilerin akademik bilgiyle birlikte profesyonel yetkinlikler kazanmasını önemser.`],links:[`Kariyer Danışmanlığı`,`Staj`,`Sektör Buluşmaları`]},{path:`/ogretme-ogrenme-merkezi`,pageTitle:`Öğretme Öğrenme Merkezi`,heroTitle:`Öğretme Öğrenme<br />Merkezi`,image:`/campus-placeholder.png`,paragraphs:[`Öğretme Öğrenme Merkezi, nitelikli öğretim uygulamalarını destekleyen ve öğrenme deneyimini geliştiren çalışmalar yürütür.`,`Merkez; öğretim yöntemleri, ölçme-değerlendirme, akademik destek ve eğitim teknolojileri alanlarında kaynak ve programlar sunabilir.`,`TJU’nun öğrenci odaklı eğitim yaklaşımı bu merkezin çalışmalarıyla güçlendirilir.`],links:[`Eğitimler`,`Akademik Destek`,`Kaynaklar`]},{path:`/surekli-egitim-merkezi`,pageTitle:`Sürekli Eğitim Merkezi`,heroTitle:`Sürekli Eğitim<br />Merkezi`,image:`/campus-placeholder.png`,paragraphs:[`Sürekli Eğitim Merkezi, toplumun ve sektörlerin değişen ihtiyaçlarına yönelik yaşam boyu öğrenme programları geliştirmeyi amaçlar.`,`Mesleki gelişim, sertifika, kısa eğitim ve kurumlara özel programlar merkez faaliyetlerinin kapsamına girebilir.`,`TJU, üniversite bilgisini toplumla buluşturan esnek ve erişilebilir öğrenme modellerini destekler.`],links:[`Programlar`,`Sertifikalar`,`Başvuru`]},{path:`/ogrenci-gelisim-ve-psikolojik-danisma-merkezi`,pageTitle:`Öğrenci Gelişim ve Psikolojik Danışma Merkezi`,heroTitle:`Öğrenci Gelişim ve<br />Psikolojik Danışma Merkezi`,image:`/campus-placeholder.png`,paragraphs:[`Öğrenci Gelişim ve Psikolojik Danışma Merkezi, öğrencilerin akademik, sosyal ve kişisel gelişim süreçlerine destek sunar.`,`Bireysel görüşmeler, grup çalışmaları, farkındalık etkinlikleri ve yönlendirme hizmetleri öğrencilerin iyi oluşunu güçlendirmeyi hedefler.`,`Merkez çalışmaları gizlilik, erişilebilirlik ve öğrenci odaklı destek ilkeleri doğrultusunda yürütülür.`],links:[`Randevu`,`Atölyeler`,`Destek Hizmetleri`]}];static teduMenu=[{title:`Hakkımızda`,links:[[`Türk Japon Üniversitesi`,`/ted-universitesi`],[`Misyon ve Vizyon`,`/misyon-ve-vizyon`],[`Yönetmelik ve Yönergeler`,`/yonetmelik-ve-yonergeler`],[`Kişisel Verilerin Korunması`,`/kisisel-verilerin-korunmasi`]]},{title:`Üniversite Yönetimi`,links:[[`Üniversite Konseyi`,`/mutevelli-heyeti`],[`Rektörlük`,`/rektorluk`],[`Öğrenci Koordinatörlüğü`,`/ogrenci-koordinatorlugu`],[`İdari Personel`,`/idari-personel`],[`Organizasyon Şeması`,`/organizasyon-semasi`],[`Akademik Kurullar`,`/akademik-kurullar`],[`Komisyonlar`,`/komisyonlar`]]},{title:`İnsan Kaynakları`,links:[[`Öğretim Üyeliğine Yükseltilme ve Atanma Esasları`,`/ogretim-uyeligine-yukseltilme-ve-atanma-esaslari`],[`Çalışan El Kitabı`,`/calisan-el-kitabi`],[`Akademik İş İmkanları`,`/akademik-is-imkanlari`],[`İdari İş İmkanları`,`/idari-is-imkanlari`]]}];static academicMenu=[{title:`Akademik Birimler`,sections:[{title:`Fakülteler`,links:[[`Mühendislik Fakültesi`,`/muhendislik-fakultesi`]]}],links:[[`Lisansüstü Programlar Enstitüsü`,`/lisansustu-programlar-enstitusu`],[`İngilizce Dil Okulu (ELS)`,`/ingilizce-dil-okulu`]]},{title:`Akademik Bilgiler`,links:[[`Akademik Katalog`,`/akademik-katalog`],[`Akademik Takvim`,`/akademik-takvim`],[`Açılan Dersler`,`/acilan-dersler`],[`Ek Dal Programları`,`/ek-dal-programlari`],[`Akademik Kadro`,`/akademik-kadro`]]},{title:`Yeni Kayıt ve Başvuru`,links:[[`Çift Ana Dal / Yan Dal Programları`,`/cift-ana-dal-yan-dal-programlari`]]}];static researchMenu=[{title:`Araştırma Çıktıları`,links:[[`Akademik Özgürlük Politikası`,`/akademik-ozgurluk-politikasi`],[`Akademik Veri Yönetim Sistemi`,`/akademik-veri-yonetim-sistemi`]]},{title:`Kurum İçi Araştırma Destekleri`,links:[[`Araştırma Teşvik Ödülleri`,`/arastirma-tesvik-odulleri`],[`Öğrenci Kongre Katılım Desteği`,`/ogrenci-kongre-katilim-destegi`],[`Bilimsel Araştırma Projeleri`,`/bilimsel-arastirma-projeleri`],[`Lisans Öğrencileri Araştırma Desteği`,`/lisans-ogrencileri-arastirma-destegi`]]}];static discoverMenu=[{title:`TJU'nde Yaşam`,links:[[`360 Sanal Tur`,`/360-sanal-tur`],[`Spor Dostu Kampüs Etkinliklerimiz`,`/spor-dostu-kampus-etkinliklerimiz`]]},{title:`Hizmetler`,links:[[`Kütüphane`,`/kutuphane`],[`Spor Tesisi`,`/spor-tesisi`],[`Yurtlar`,`/yurtlar`]]},{title:`Kültür Sanat ve Spor`,links:[[`Öğrenci Toplulukları`,`/ogrenci-topluluklari`],[`Bilim Projesi Takımları`,`/bilim-projesi-takimlari`],[`Uluslararası Öğrenci Birlikleri`,`/uluslararasi-ogrenci-birlikleri`],[`Spor Takımlarımız`,`/spor-takimlarimiz`]]},{title:`Merkezler`,links:[[`Kariyer Merkezi`,`/kariyer-merkezi`],[`Öğretme Öğrenme Merkezi`,`/ogretme-ogrenme-merkezi`],[`Sürekli Eğitim Merkezi`,`/surekli-egitim-merkezi`],[`Öğrenci Gelişim ve Psikolojik Danışma Merkezi`,`/ogrenci-gelisim-ve-psikolojik-danisma-merkezi`]]}];static primaryNavItems=[{label:`TJU`,path:`/tedu`,intro:`TJU Hakkında`,ariaLabel:`TJU alt menüsü`,groups:e.teduMenu},{label:`Akademik`,path:`/akademik`,intro:`TJU Akademik`,ariaLabel:`Akademik alt menüsü`,groups:e.academicMenu},{label:`Araştırma`,path:`/arastirma`,intro:`TJU Araştırma`,ariaLabel:`Araştırma alt menüsü`,groups:e.researchMenu},{label:`TJU'ni Keşfet`,path:`/teduyu-kesfet`,intro:`TJU'ni Keşfet`,ariaLabel:`TJU'ni Keşfet alt menüsü`,groups:e.discoverMenu},{label:`İletişim`,path:`/iletisim`}];static contact={pageTitle:`İletişim`,closeLabel:`Ana sayfaya dön`,heading:`TÜRK-JAPON BİLİM VE TEKNOLOJİ ÜNİVERSİTESİ İLETİŞİM BİLGİLERİ`,addressLabel:`ADRES`,address:`Turan Güneş Bulvarı, Yukarı Dikmen Mahallesi, Neşet Ertaş Caddesi No: 4, 06550 Çankaya/Ankara`,phoneLabel:`TELEFON`,phone:`+90 312 955 20 26`,phoneHref:`+903129552026`,faxLabel:`FAKS`,fax:`+90 312 955 20 25`,emailLabel:`E-MAİL`,email:`info@tju.edu.tr`,kepLabel:`KEP`,kep:`info@tju.edu.tr`,backgroundImage:`/campus-placeholder.png`,actions:[{label:`Tüm Birimler`,path:`#units`,icon:`▦`},{label:`Haritada TJU`,path:`#map`,icon:`⌖`},{label:`Ulaşım`,path:`#transport`,icon:`◉`}]};static council={pageTitle:`Üniversite Konseyi`,image:`/campus-placeholder.png`,members:[{name:`Prof. Dr. Erol ÖZVAR`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/erol-ozvar`},{name:`İbrahim ŞENEL`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/ibrahim-senel`},{name:`Prof. Dr. İsmail YÜKSEK`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/ismail-yuksek`},{name:`Kiyoshi ARAKİ`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/kiyoshi-araki`},{name:`Prof. Dr. Lütfiye DURAK ATA`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/lutfiye-durak-ata`},{name:`Prof. Dr. Mehmet Naci İNCİ`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/mehmet-naci-inci`},{name:`Prof. Dr. Mesut GÜNER`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/mesut-guner`},{name:`Prof. Dr. Mustafa Verşan KÖK`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/mustafa-versan-kok`},{name:`Prof. Dr. Ryoji NOYORİ`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/ryoji-noyori`},{name:`Toichi SAKATA`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/toichi-sakata`},{name:`Prof. Dr. Yoichiro MATSUMOTO`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/yoichiro-matsumoto`}]};static footer={links:[`Sıkça Sorulan Sorular`,`Kişisel Verilerin Korunması`,`Gizlilik Politikası`,`Sorumluluk Reddi`,`Bilgi Edinme`,`Site Yöneticisi İletişim`,`İhale ve Satınalma İlanları`,`Açık Rıza`,`Kurumsal Kimlik`],copyright:`© Türk-Japon Bilim ve Teknoloji Üniversitesi.`,socialLinks:[`●`,`▶`,`f`,`◎`,`in`,`☏`],badges:[,`Institutional Evaluation Programme`]};static organizationChart={pageTitle:`Organizasyon Şeması`,heroTitle:`Organizasyon<br />Şeması`,heroImage:`/campus-placeholder.png`,nav:[[`TJU`,`/tedu`],[`Akademik`,`/akademik`],[`Araştırma`,`/arastirma`],[`TJU'ni Keşfet`,`/teduyu-kesfet`]],foundationUnits:[`Strateji ve Kalite Kurulu`,`Hukuk Müşavirliği`,`İç Denetim`,`Danışma Kurulları`],rectorateUnits:[`Rektörlük Ofisi`,`Genel Sekreterlik`,`Kurumsal İletişim`,`Bilgi İşlem`],groups:[{title:`Akademik Birimler`,tone:`academic`,items:[`Mühendislik Fakültesi`,`Lisansüstü Programlar Enstitüsü`,`İngilizce Dil Okulu`,`Akademik Kurullar`,`Bölüm Başkanlıkları`]},{title:`Rektör Yardımcılığı`,subtitle:`Eğitim`,tone:`education`,items:[`Öğrenci İşleri`,`Eğitim Planlama ve Destek Ofisi`,`Uluslararası Programlar Ofisi`,`Öğretme ve Öğrenme Merkezi`,`Kalite Komisyonu`]},{title:`Rektör Yardımcılığı`,subtitle:`Araştırma`,tone:`research`,items:[`Araştırma ve Proje Ofisi`,`Teknoloji Transfer Ofisi`,`Girişimcilik ve İnovasyon`,`Laboratuvar Koordinasyonu`,`Kütüphane`]},{title:`Öğrenci Koordinatörlüğü`,tone:`student`,items:[`Öğrenci Gelişim ve Danışma`,`Sosyal ve Kültürel İşler`,`Öğrenci Toplulukları`,`Kariyer Merkezi`,`Yurt ve Yaşam Hizmetleri`]},{title:`İdari Birimler`,tone:`administrative`,items:[`İdari ve Mali İşler`,`İnsan Kaynakları`,`Yapı İşleri`,`Satın Alma`,`Sağlık, Kültür ve Spor`]}],legend:[[`Üst yönetim`,`leadership`],[`Akademik birimler`,`academic`],[`Eğitim`,`education`],[`Araştırma`,`research`],[`Öğrenci ve idari hizmetler`,`administrative`]],footerLinks:[`Sıkça Sorulan Sorular`,`Kişisel Verilerin Korunması`,`Gizlilik Politikası`,`Sorumluluk Reddi`],copyright:`© Türk-Japon Bilim ve Teknoloji Üniversitesi.`};static rectorate={pageTitle:`Rektörlük`,people:[{role:`Rektör`,name:`Prof. Dr. Mustafa Verşan Kök`,email:`rektorluk@tedu.edu.tr`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/mustafa-versan-kok`},{role:`Provost`,name:`Prof. Dr. Ad Soyad`,email:`provost@tju.edu.tr`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/provost-ad-soyad`},{role:`Rektör Danışmanı`,name:`Dr. Ad Soyad`,email:`danisman@tju.edu.tr`,image:`/campus-placeholder.png`,bioPath:`/ozgecmis/rektor-danismani-ad-soyad`}],officeTitle:`Özel Kalem Müdürü`,officeManager:`Burcu Karaca`,officeEmails:[`burcu.karaca@tedu.edu.tr`,`ozelkalem@tedu.edu.tr`],phones:[`0 (312) 585 0006`,`0 (312) 585 0011 - 585 0009`],image:`/campus-placeholder.png`};static bioProfiles=[{path:`/ozgecmis/erol-ozvar`,name:`Prof. Dr. Erol ÖZVAR`,role:`Üniversite Konseyi Üyesi`,image:`/campus-placeholder.png`},{path:`/ozgecmis/ibrahim-senel`,name:`İbrahim ŞENEL`,role:`Üniversite Konseyi Üyesi`,image:`/campus-placeholder.png`},{path:`/ozgecmis/ismail-yuksek`,name:`Prof. Dr. İsmail YÜKSEK`,role:`Üniversite Konseyi Üyesi`,image:`/campus-placeholder.png`},{path:`/ozgecmis/kiyoshi-araki`,name:`Kiyoshi ARAKİ`,role:`Üniversite Konseyi Üyesi`,image:`/campus-placeholder.png`},{path:`/ozgecmis/lutfiye-durak-ata`,name:`Prof. Dr. Lütfiye DURAK ATA`,role:`Üniversite Konseyi Üyesi`,image:`/campus-placeholder.png`},{path:`/ozgecmis/mehmet-naci-inci`,name:`Prof. Dr. Mehmet Naci İNCİ`,role:`Üniversite Konseyi Üyesi`,image:`/campus-placeholder.png`},{path:`/ozgecmis/mesut-guner`,name:`Prof. Dr. Mesut GÜNER`,role:`Üniversite Konseyi Üyesi`,image:`/campus-placeholder.png`},{path:`/ozgecmis/mustafa-versan-kok`,name:`Prof. Dr. Mustafa Verşan KÖK`,role:`Rektör / Üniversite Konseyi Üyesi`,image:`/campus-placeholder.png`},{path:`/ozgecmis/ryoji-noyori`,name:`Prof. Dr. Ryoji NOYORİ`,role:`Üniversite Konseyi Üyesi`,image:`/campus-placeholder.png`},{path:`/ozgecmis/toichi-sakata`,name:`Toichi SAKATA`,role:`Üniversite Konseyi Üyesi`,image:`/campus-placeholder.png`},{path:`/ozgecmis/yoichiro-matsumoto`,name:`Prof. Dr. Yoichiro MATSUMOTO`,role:`Üniversite Konseyi Üyesi`,image:`/campus-placeholder.png`},{path:`/ozgecmis/provost-ad-soyad`,name:`Prof. Dr. Ad Soyad`,role:`Provost`,image:`/campus-placeholder.png`},{path:`/ozgecmis/rektor-danismani-ad-soyad`,name:`Dr. Ad Soyad`,role:`Rektör Danışmanı`,image:`/campus-placeholder.png`}].map(e=>({...e,pageTitle:`${e.name} Özgeçmiş`,heroTitle:`${e.name}<br />Özgeçmiş`,backLabel:`Listeye geri dön`,backPath:e.role.startsWith(`Rektör`)||e.role===`Provost`?`/rektorluk`:`/mutevelli-heyeti`,paragraphs:[`${e.name}, Türk-Japon Bilim ve Teknoloji Üniversitesi ${e.role} olarak üniversitenin akademik ve kurumsal gelişimine katkı sunmaktadır.`,`Özgeçmiş bilgileri; eğitim, akademik ve mesleki deneyim, görevler, yayınlar, projeler ve kurumsal katkılar başlıklarında bu sayfada yayımlanmak üzere düzenlenebilir.`,`Bu alan, resmi özgeçmiş metni ve güncel bilgiler eklendiğinde aynı sayfa yapısı korunarak zenginleştirilecektir.`]}));static administrativeStaff={pageTitle:`İdari Personel`,heroImage:`/campus-placeholder.png`,search:{nameLabel:`Ad Soyad`,departmentLabel:`Birim`,allDepartments:`- Tümü -`,button:`Uygula`},staff:[{name:`İlsu Tataroğlu ÖMÜR`,department:`İnsan Kaynakları`,title:`İnsana Kaynakları Direktörü`,email:`ilsu.tataroglu@tju.edu.tr`,room:`6.Kat, 691`,image:`/campus-placeholder.png`},{name:`Bilge ZOBU`,department:`Muhasebe`,title:`Muhasebe Sorumlusu`,email:`bilge.zobu@tju.edu.tr`,room:`6. Kat, 692`,image:`/campus-placeholder.png`},{name:`Betül UYSAL`,department:`Kurumsal İletişim`,title:`Kurumsal İletişim Uzmanı`,email:`betul.uysal@tju.edu.tr`,room:`6. Kat, 695`,image:`/campus-placeholder.png`},{name:`Onur KOŞAR`,department:`Bilgi İşlem`,title:`Bilgi İşlem Direktörü`,email:`onur.kosar@tju.edu.tr`,room:`6. Kat, 698`,image:`/campus-placeholder.png`}]};static engineeringFaculty={pageTitle:`Mühendislik Fakültesi`,logoTitle:`TJU`,logoSubtitle:`Mühendislik Fakültesi`,heroEyebrow:`TJU Mühendislik'te neler oluyor?`,heroCta:`TJU Mühendislik'te<br />neler oluyor?`,heroImage:`/campus-placeholder.png`,nav:[[`Hakkımızda`,`#about`],[`Bölümler`,`#departments`],[`Öğrenciler`,`#students`],[`Aday Öğrenciler`,`#prospective-students`],[`Akademik Kadro`,`#people`],[`İletişim`,`#contact`]],departments:[{title:`Bilgisayar Mühendisliği`,path:`/muhendislik-fakultesi/bilgisayar-muhendisligi`,heroTitle:`Bilgisayar<br />Mühendisliği<br />Bölümü`,subtitle:`Bilgisayar Mühendisliği Bölümü`},{title:`Elektrik-Elektronik Mühendisliği`,path:`/muhendislik-fakultesi/elektrik-elektronik-muhendisligi`,heroTitle:`Elektrik-Elektronik<br />Mühendisliği<br />Bölümü`,subtitle:`Elektrik-Elektronik Mühendisliği Bölümü`},{title:`Çevre Mühendisliği`,path:`/muhendislik-fakultesi/cevre-muhendisligi`,heroTitle:`Çevre<br />Mühendisliği<br />Bölümü`,subtitle:`Çevre Mühendisliği Bölümü`},{title:`Havacılık ve Malzeme Mühendisliği`,path:`/muhendislik-fakultesi/havacilik-ve-malzeme-muhendisligi`,heroTitle:`Havacılık ve Malzeme<br />Mühendisliği<br />Bölümü`,subtitle:`Havacılık ve Malzeme Mühendisliği Bölümü`}],deanMessage:{title:`Dekan Mesajı`,body:`TJU Mühendislik Fakültesi, lisans ve lisansüstü düzeyde nitelikli eğitim, güçlü araştırma olanakları ve sektörle yakın iş birliği kuran akademik kadrosuyla öncü bir eğitim ve araştırma merkezi olmayı hedefler.`,image:`/campus-placeholder.png`},agendaTabs:[`Haberler`,`Etkinlikler`],agendaCards:[{start:`16 Nisan 2026`,end:`18 Nisan 2026`,title:`Duyuru İçeriği`,image:`/campus-placeholder.png`},{start:`16 Nisan 2026`,end:`16 Nisan 2026`,title:`Araştırma görevlimiz....  tarafından hazırlanan makale yayımlandı`,image:`/campus-placeholder.png`},{start:`12 Mart 2026`,end:`12 Mart 2026`,title:`Öğretim görevlimiz .... ilk yazar olduğu yeni çalışma yayımlandı`,image:`/campus-placeholder.png`}],moreLabel:`Detaylı Bilgi →`,pagination:[`1`,`2`,`3`,`4`,`Sonraki ›`,`Son »`],footerLinks:[`Kişisel Verilerin İşlenmesine İlişkin Aydınlatma Metni`,`Sorumluluk Reddi`,`Kurumsal Kimlik`,`Açık Rıza Beyanı`],address:`© Türk-Japon Bilim ve Teknoloji Üniversitesi.`};static engineeringDepartmentTemplate={nav:[[`Hakkımızda`,`#about`],[`Program`,`#program`],[`Akademik Kadro`,`#academic-staff`],[`MÜDEK`,`#mudek`],[`Öğrenciler`,`#students`],[`Haberler`,`#news`],[`Araştırma`,`#research`],[`Sosyal Medya`,`#social`],[`İletişim`,`#contact`]],heroImage:`/campus-placeholder.png`,featureCards:[`Öğretim Programı`,`Akademik Kadro`,`Araştırma Alanları`,`Mezunlar`,`Laboratuvarlar`],chairMessage:{title:`Bölüm Başkanının Mesajı`,greeting:`Sevgili Öğrenciler,`,body:`TJU mühendislik programları olarak temel hedefimiz, öğrencilerimizi yalnızca teorik bilgiyle donatmakla kalmayıp bu bilgileri gerçek dünya problemlerine uygulayabilen, bilim ve teknoloji alanındaki güncel gelişmeleri takip eden mühendisler olarak yetiştirmektir.`,image:`/campus-placeholder.png`},why:{titlePrefix:`Neden`,heading:`Neden TJU`,body:`Programımız, öğrencilerine sunduğu çeşitli fırsatlar, güçlü akademik yaklaşım ve sektörle kurduğu iş birlikleriyle dikkat çekmektedir. Öğrenciler gerçek dünya deneyimi kazanma şansı elde eder.`,link:`Devamı için tıklayın! →`,image:`/campus-placeholder.png`},newsTitle:`Haberler ve Etkinlikler`,news:[{title:`Genç Beyinler yeni projelerini sundu`,date:`15 Mayıs 2026`,image:`/campus-placeholder.png`},{title:`Teknoloji, cesaret ve liderlik söyleşisi gerçekleşti`,date:`22 Nisan 2026`,image:`/campus-placeholder.png`},{title:`Mühendislik öğrencilerinden disiplinler arası proje`,date:`10 Nisan 2026`,image:`/campus-placeholder.png`},{title:`Mühendislik programlarına başvuru takvimi açıklandı`,date:`01 Nisan 2026`,image:`/campus-placeholder.png`}]}}).mount(`#app`);