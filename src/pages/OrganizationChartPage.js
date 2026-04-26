export class OrganizationChartPage {
  constructor(content) {
    this.content = content
    this.page = content.organizationChart
  }

  renderHeader() {
    return `
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
          ${this.page.nav.map(([label, path]) => `<a href="${path}" data-route="${path}">${label}</a>`).join('')}
        </nav>
      </header>
    `
  }

  renderUnit(label, tone = '') {
    return `<li class="org-unit ${tone}">${label}</li>`
  }

  renderTopCluster(title, items, className) {
    return `
      <section class="org-top-cluster ${className}" aria-label="${title}">
        <h3>${title}</h3>
        <ul>
          ${items.map((item) => this.renderUnit(item)).join('')}
        </ul>
      </section>
    `
  }

  renderGroup(group) {
    return `
      <section class="org-column org-tone-${group.tone}" aria-label="${group.title}">
        <h3>
          <span>${group.title}</span>
          ${group.subtitle ? `<small>${group.subtitle}</small>` : ''}
        </h3>
        <ul>
          ${group.items.map((item) => this.renderUnit(item)).join('')}
        </ul>
      </section>
    `
  }

  renderLegend() {
    return `
      <div class="org-legend" aria-label="Organizasyon şeması renk açıklamaları">
        ${this.page.legend
          .map(([label, tone]) => `<span class="org-legend-item org-tone-${tone}">${label}</span>`)
          .join('')}
      </div>
    `
  }

  renderFooter() {
    return `
      <footer class="org-footer">
        <nav aria-label="${this.content.labels.footerNav}">
          ${this.page.footerLinks.map((label) => `<a href="#">${label}</a>`).join('')}
        </nav>
        <p>${this.page.copyright}</p>
      </footer>
    `
  }

  render() {
    return `
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
                ${this.renderTopCluster('Bağlı Kurullar', this.page.foundationUnits, 'org-top-left')}
                <div class="org-node org-node-rector">Rektörlük</div>
                ${this.renderTopCluster('Rektörlüğe Bağlı Birimler', this.page.rectorateUnits, 'org-top-right')}
              </div>

              <div class="org-branches">
                ${this.page.groups.map((group) => this.renderGroup(group)).join('')}
              </div>
            </div>
          </div>

          ${this.renderLegend()}
        </section>
      </main>
      ${this.renderFooter()}
    `
  }
}
