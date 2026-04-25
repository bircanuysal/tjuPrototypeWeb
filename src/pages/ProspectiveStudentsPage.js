export class ProspectiveStudentsPage {
  constructor(content) {
    this.content = content
  }

  renderNavItem(item, index) {
    return `
      <div class="prospective-nav-item ${index === 0 ? 'is-active' : ''} ${item.links ? 'has-submenu' : ''}">
        <a href="${item.path}">${item.label}</a>
        ${
          item.links
            ? `
              <div class="prospective-submenu">
                ${item.links.map((label) => `<a href="#">${label}</a>`).join('')}
              </div>
            `
            : ''
        }
      </div>
    `
  }

  renderIntroCards(page) {
    return page.introCards
      .map(
        (card) => `
          <article class="prospective-intro-card">
            <img src="${card.image}" alt="" />
            <h2>${card.title}</h2>
            <p>${card.body}</p>
          </article>
        `,
      )
      .join('')
  }

  renderFeatureCards(page) {
    return page.featureCards
      .map(
        (card) => `
          <article class="prospective-feature-card">
            <img src="${card.image}" alt="" />
            <h2>${card.title}</h2>
            <p>${card.body}</p>
            <a href="#">${card.button}</a>
          </article>
        `,
      )
      .join('')
  }

  renderVideos(page) {
    return page.videos.map((label) => `<a href="#">${label}</a>`).join('')
  }

  render() {
    const page = this.content.prospectiveStudents

    return `
      <main class="prospective-page">
        <header class="prospective-header">
          <a class="prospective-brand" href="/" data-route="/">
            <span class="brand-mark">
              <img src="/tju-logo.svg" alt="" />
            </span>
            <span>
              <strong>${page.logoTitle}</strong>
              <small>${page.logoSubtitle}</small>
            </span>
          </a>
        </header>

        <section class="prospective-shell">
          <nav class="prospective-nav" aria-label="${page.pageTitle}">
            ${page.nav.map((item, index) => this.renderNavItem(item, index)).join('')}
          </nav>

          <section class="prospective-hero" style="--prospective-hero-image: url('${page.heroImage}')">
            <div class="prospective-hero-label">${page.heroTag}</div>
            <h1>${page.heroTitle}</h1>
            <div class="prospective-dots" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </section>

          <section class="prospective-intro-grid">
            ${this.renderIntroCards(page)}
          </section>

          <section class="prospective-info-band">
            <div class="prospective-feature-grid">
              ${this.renderFeatureCards(page)}
            </div>
            <aside class="prospective-videos">
              <h2>${page.videoTitle}</h2>
              ${this.renderVideos(page)}
            </aside>
          </section>
        </section>

        <footer class="prospective-footer">
          ${page.footerLinks.map((label) => `<a href="#">${label}</a>`).join(' | ')}
        </footer>
      </main>
    `
  }
}
