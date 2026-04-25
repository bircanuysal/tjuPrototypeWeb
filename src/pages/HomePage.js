export class HomePage {
  constructor(content, layout) {
    this.content = content
    this.layout = layout
  }

  render() {
    return `
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
            ${this.content.announcements
              .map(
                (item) => `
                <article class="announcement-card ${item.tone}">
                  <div class="announcement-image"></div>
                  <time>${item.date}</time>
                  <h3>${item.title}</h3>
                  <a href="#">${this.content.links.announcementDetail}</a>
                </article>
              `,
              )
              .join('')}
          </div>
        </section>

        <section id="news" class="section news-section">
          ${this.content.news
            .map(
              (item, index) => `
              <article class="news-item ${index % 2 ? 'reverse' : ''}">
                <div class="news-copy">
                  <h2>${item.title}</h2>
                  <p class="lead">${item.lead || ''}</p>
                  <p>${item.body}</p>
                  <a href="#">${this.content.links.newsDetail}</a>
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
            <h2>${this.content.sectionTitles.statsTitle}</h2>
            <div class="stats-grid">
              ${this.content.stats
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
            ${this.content.gallery
              .map(
                (item) => `
                <figure class="gallery-tile">
                  <span role="img" aria-label="${item}"></span>
                </figure>
              `,
              )
              .join('')}
          </div>
        </section>
      </main>
    `
  }
}
