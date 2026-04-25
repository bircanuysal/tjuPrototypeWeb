export class EngineeringFacultyPage {
  constructor(content) {
    this.content = content
  }

  renderFacultyHeader(page) {
    return `
      <header class="faculty-header">
        <a class="faculty-brand" href="/" data-route="/">
          <span class="brand-mark">
            <img src="/tju-logo.svg" alt="" />
          </span>
          <span>
            <strong>${page.logoTitle}</strong>
            <small>${page.logoSubtitle}</small>
          </span>
        </a>
        <nav class="faculty-nav" aria-label="${page.pageTitle}">
          ${page.nav.map(([label, path]) => `<a href="${path}">${label}</a>`).join('')}
        </nav>
      </header>
    `
  }

  renderDepartmentCards(page) {
    return page.departments
      .map(
        (department, index) => `
          <a class="faculty-department-card" href="${department.path}" data-route="${department.path}" style="--card-offset: ${index}">
            <img src="${page.heroImage}" alt="" />
            <h2>${department.title}</h2>
          </a>
        `,
      )
      .join('')
  }

  renderAgendaCards(page) {
    return page.agendaCards
      .map(
        (item) => `
          <article class="faculty-agenda-card">
            <img src="${item.image}" alt="" />
            <div class="faculty-agenda-dates">
              <span aria-hidden="true">▦</span>
              <p>${item.start}</p>
              <p>${item.end}</p>
            </div>
            <h3>${item.title}</h3>
            <a href="#">${page.moreLabel}</a>
          </article>
        `,
      )
      .join('')
  }

  render() {
    const page = this.content.engineeringFaculty

    return `
      ${this.renderFacultyHeader(page)}
      <main class="faculty-page">
        <section class="faculty-hero" style="--faculty-hero-image: url('${page.heroImage}')">
          <div class="faculty-hero-copy">
            <p>${page.heroEyebrow}</p>
            <h1>${page.pageTitle}</h1>
          </div>
          <a class="faculty-hero-cta" href="#agenda">
            <span>${page.heroCta}</span>
            <strong aria-hidden="true">→</strong>
          </a>
        </section>

        <section id="departments" class="faculty-departments">
          ${this.renderDepartmentCards(page)}
        </section>

        <section class="faculty-dean">
          <div>
            <h2>${page.deanMessage.title}</h2>
            <p>${page.deanMessage.body}</p>
          </div>
          <figure>
            <img src="${page.deanMessage.image}" alt="" />
          </figure>
        </section>

        <section id="agenda" class="faculty-agenda">
          <div class="faculty-tabs" role="tablist" aria-label="Gündem">
            ${page.agendaTabs
              .map(
                (tab, index) => `
                  <button class="${index === 0 ? 'is-active' : ''}" type="button">${tab}</button>
                `,
              )
              .join('')}
          </div>
          <div class="faculty-agenda-grid">
            ${this.renderAgendaCards(page)}
          </div>
          <div class="faculty-pagination" aria-label="Pagination">
            ${page.pagination
              .map(
                (label, index) => `
                  <span class="${index === 0 ? 'is-active' : ''}">${label}</span>
                `,
              )
              .join('')}
          </div>
        </section>
      </main>
      <footer class="faculty-footer">
        <nav>
          ${page.footerLinks.map((label) => `<a href="#">${label}</a>`).join(' / ')}
        </nav>
        <p>${page.address}</p>
        <div class="faculty-socials">
          <a href="#">●</a>
          <a href="#">▶</a>
          <a href="#">f</a>
          <a href="#">◎</a>
          <a href="#">in</a>
          <a href="#">☏</a>
        </div>
      </footer>
    `
  }
}
