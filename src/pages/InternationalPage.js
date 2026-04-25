export class InternationalPage {
  constructor(content) {
    this.content = content
  }

  renderGlobalNav(page) {
    return `
      <div class="international-topbar">
        <a class="international-back" href="/" data-route="/" aria-label="Ana sayfaya dön">←</a>
        <nav class="international-global-nav" aria-label="International üst menü">
          ${page.topNav
            .map(([label, path], index) => `<a class="${index === 0 ? 'is-active' : ''}" href="${path}" data-route="${path}">${label}</a>`)
            .join('')}
        </nav>
        <div class="international-tools" aria-label="${this.content.labels.quickActions}">
          ${page.tools
            .map((tool) => `<button type="button" aria-label="${tool.label}">${tool.text}</button>`)
            .join('')}
        </div>
      </div>
    `
  }

  renderHeroNav(page) {
    return `
      <div class="international-hero-nav">
        <a class="international-brand" href="/" data-route="/">
          <span class="brand-mark">
            <img src="/tju-logo.svg" alt="" />
          </span>
          <span>
            <strong>${page.logoTitle}</strong>
            <small>${page.logoSubtitle}</small>
          </span>
        </a>
        <nav aria-label="${page.pageTitle} menüsü">
          ${page.nav
            .map(
              (item) => `
                <div class="international-nav-item ${item.featured ? 'is-featured' : ''} ${item.links ? 'has-submenu' : ''}">
                  <a href="${item.path}">${item.label}</a>
                  ${
                    item.links
                      ? `
                        <div class="international-submenu">
                          ${item.links.map((label) => `<a href="#">${label}</a>`).join('')}
                        </div>
                      `
                      : ''
                  }
                </div>
              `,
            )
            .join('')}
        </nav>
      </div>
    `
  }

  renderCards(page) {
    return page.cards
      .map(
        (card) => `
          <article class="international-card">
            <img src="${card.image}" alt="" />
            <h2>${card.title}</h2>
            <p>${card.body}</p>
          </article>
        `,
      )
      .join('')
  }

  renderVideos(page) {
    return page.videos
      .map(
        (video) => `
          <article class="international-video">
            <img src="${video.image}" alt="" />
            <div class="international-video-overlay">
              <h3>${video.title}</h3>
              <span aria-hidden="true">▶</span>
            </div>
          </article>
        `,
      )
      .join('')
  }

  render() {
    const page = this.content.international

    return `
      ${this.renderGlobalNav(page)}
      <main class="international-page">
        <section class="international-hero" style="--international-hero-image: url('${page.heroImage}')">
          ${this.renderHeroNav(page)}
          <h1>${page.heroTitle}</h1>
        </section>

        <section id="student-life" class="international-cards">
          ${this.renderCards(page)}
        </section>

        <section class="international-videos">
          ${this.renderVideos(page)}
        </section>
      </main>

      <footer class="international-footer">
        <p>${page.contactLabel}</p>
        <nav>
          ${page.footerLinks.map((label) => `<a href="#">${label}</a>`).join(' / ')}
        </nav>
        <small>${page.copyright}</small>
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
    `
  }
}
