export class Layout {
  constructor(content) {
    this.content = content
  }

  renderMegaLinks(links = []) {
    return links
      .map(
        ([label, path]) => `
          <li><a href="${path}" data-route="${path}">${label}</a></li>
        `,
      )
      .join('')
  }

  renderMegaMenu(intro, groups, label) {
    return `
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
                          <ul>${this.renderMegaLinks(section.links)}</ul>
                        </div>
                      `,
                    )
                    .join('')}
                  <ul>
                    ${this.renderMegaLinks(group.links)}
                  </ul>
                </section>
              `,
            )
            .join('')}
        </div>
      </div>
    `
  }

  renderPrimaryNav(className, label) {
    return `
      <nav class="${className}" aria-label="${label}">
        ${this.content.primaryNavItems
          .map((item) => {
            if (!item.groups) {
              return `
                <div class="nav-item">
                  <a class="nav-link" href="${item.path}" data-route="${item.path}">${item.label}</a>
                </div>
              `
            }

            return `
              <div class="nav-item has-mega">
                <a class="nav-link" href="${item.path}" data-route="${item.path}" aria-haspopup="true">${item.label}</a>
                ${this.renderMegaMenu(item.intro, item.groups, item.ariaLabel)}
              </div>
            `
          })
          .join('')}
      </nav>
    `
  }

  renderBrand(className = 'brand') {
    return `
      <a class="${className}" href="/" data-route="/" aria-label="${this.content.labels.homepage}">
        <span class="brand-mark">
          <img src="/tju-logo.svg" alt="" />
        </span>
        <span class="brand-name">
          <strong>${this.content.brand.title}</strong>
          <span>${this.content.brand.subtitle}</span>
          <span>${this.content.brand.japaneseTitle}</span>
        </span>
      </a>
    `
  }

  renderHeroNavigation() {
    return `
      <div class="hero-brand-nav">
        ${this.renderBrand('hero-brand brand')}
        <div class="hero-nav-group">
          <div class="hero-topline">
            ${this.content.audienceLinks
              .map(
                ([label, path]) => `
                <a href="${path}" data-route="${path}">${label}</a>
              `,
              )
              .join('')}
          </div>
          ${this.renderPrimaryNav('hero-nav', this.content.labels.heroNav)}
        </div>
      </div>
    `
  }

  renderPortalOverlay() {
    return `
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
              ${this.content.portal.links.map((label) => `<a href="#">${label}</a>`).join('')}
            </nav>
          </div>
        </div>
      </section>
    `
  }

  renderHeader() {
    return `
      <header class="site-header" aria-label="${this.content.labels.header}">
        ${this.renderBrand()}
        ${this.renderPrimaryNav('main-nav', this.content.labels.primaryNav)}
      </header>

      <div class="floating-tools" aria-label="${this.content.labels.quickActions}">
        ${this.content.tools
          .map(
            (tool) => `
              <button type="button" aria-label="${tool.label}" ${tool.label === 'Kullanıcı' ? 'data-portal-trigger' : ''}>${tool.text}</button>
            `,
          )
          .join('')}
      </div>

      ${this.renderPortalOverlay()}
    `
  }

  renderFooter() {
    return `
      <footer class="site-footer">
        <div>
          <nav aria-label="${this.content.labels.footerNav}">
            ${this.content.footer.links.map((label) => `<a href="#">${label}</a>`).join('')}
          </nav>
          <p>${this.content.footer.copyright}</p>
          <div class="socials" aria-label="${this.content.labels.socialMedia}">
            ${this.content.footer.socialLinks.map((label) => `<a href="#">${label}</a>`).join('')}
          </div>
        </div>
        <div class="footer-badges">
          <strong>${this.content.footer.badges[0]}</strong>
          <span>${this.content.footer.badges[1]}</span>
          <strong>${this.content.footer.badges[2]}</strong>
        </div>
      </footer>
    `
  }
}
