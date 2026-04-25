export class EngineeringDepartmentPage {
  constructor(content, department) {
    this.content = content
    this.department = department
  }

  get template() {
    return this.content.engineeringDepartmentTemplate
  }

  renderHeader() {
    return `
      <header class="department-header">
        <a class="department-back" href="/muhendislik-fakultesi" data-route="/muhendislik-fakultesi" aria-label="Mühendislik Fakültesine dön">←</a>
        <a class="department-title-link" href="/" data-route="/">${this.content.engineeringFaculty.logoTitle}</a>
        <nav class="department-top-nav" aria-label="${this.department.title}">
          ${this.content.primaryNavItems
            .map((item) => `<a href="${item.path}" data-route="${item.path}">${item.label}</a>`)
            .join('')}
        </nav>
        <div class="department-tools" aria-label="${this.content.labels.quickActions}">
          ${this.content.tools
            .map((tool) => `<button type="button" aria-label="${tool.label}">${tool.text}</button>`)
            .join('')}
        </div>
      </header>
    `
  }

  renderHero() {
    return `
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
            ${this.template.nav.map(([label, path]) => `<a href="${path}">${label}</a>`).join('')}
          </nav>
        </div>
        <h1>${this.department.heroTitle}</h1>
      </section>
    `
  }

  renderFeatureCards() {
    return `
      <section class="department-feature-cards">
        ${this.template.featureCards
          .map(
            (title, index) => `
              <a href="#" class="department-feature-card" style="--feature-offset: ${index}">
                <img src="${this.template.heroImage}" alt="" />
                <span>${title}</span>
              </a>
            `,
          )
          .join('')}
      </section>
    `
  }

  renderChairMessage() {
    return `
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
    `
  }

  renderWhySection() {
    return `
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
    `
  }

  renderNews() {
    return `
      <section id="news" class="department-news">
        <h2>${this.template.newsTitle}</h2>
        <div class="department-news-grid">
          ${this.template.news
            .map(
              (item) => `
                <article class="department-news-card">
                  <img src="${item.image}" alt="" />
                  <time>${item.date}</time>
                  <h3>${item.title}</h3>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>
    `
  }

  render() {
    return `
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
          ${this.content.engineeringFaculty.footerLinks.map((label) => `<a href="#">${label}</a>`).join(' / ')}
        </nav>
        <p>${this.content.engineeringFaculty.address}</p>
      </footer>
    `
  }
}
