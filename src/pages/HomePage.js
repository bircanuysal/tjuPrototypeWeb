export class HomePage {
  constructor(content, layout) {
    this.content = content
    this.layout = layout
  }

  renderStatIcon(index) {
    const icons = [
      `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="14" y="12" width="36" height="44" rx="4" stroke="white" stroke-width="3"/>
        <path d="M22 24H42M22 34H42M22 44H34" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 10L10 22H54L32 10Z" stroke="white" stroke-width="3" stroke-linejoin="round"/>
        <path d="M16 22V50M28 22V50M40 22V50M52 22V50" stroke="white" stroke-width="3" stroke-linecap="round"/>
        <path d="M10 54H54" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="22" r="10" stroke="white" stroke-width="3"/>
        <path d="M16 54C18.5 43 25 38 32 38C39 38 45.5 43 48 54" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
      `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="22" stroke="white" stroke-width="3"/>
        <path d="M10 32H54M32 10C38 17 41 24 41 32C41 40 38 47 32 54C26 47 23 40 23 32C23 24 26 17 32 10Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      `<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="12" width="44" height="40" rx="6" stroke="white" stroke-width="3"/>
        <path d="M22 24H42M32 24V42M24 42H40" stroke="white" stroke-width="3" stroke-linecap="round"/>
      </svg>`,
    ]

    return icons[index] || icons[0]
  }

  render() {
    return `
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
                  ([value, label], index) => `
                  <article class="stat-card">
                    <span class="line-icon" aria-hidden="true">${this.renderStatIcon(index)}</span>
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
              ${this.content.gallery
                .map((item) => {
                  const title = typeof item === 'string' ? item : item.title
                  const image = typeof item === 'string' ? '/campus-placeholder.png' : item.image

                  return `
                  <figure class="gallery-tile">
                    <img src="${image}" alt="${title}" />
                  </figure>
                `
                })
                .join('')}
            </div>
          </div>
        </section>
      </main>
    `
  }
}
