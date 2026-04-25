export class ContentPage {
  constructor(content, subpageHero, page) {
    this.content = content
    this.subpageHero = subpageHero
    this.page = page
  }

  renderLinks() {
    return (this.page.links || [])
      .map((label) => `<a href="#">${label}</a>`)
      .join('')
  }

  render() {
    return `
      <main>
        ${this.subpageHero.render({ title: this.page.heroTitle || this.page.pageTitle, image: this.page.image })}

        <section class="content-page-section">
          <article class="content-page-body">
            ${this.page.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
            <div class="content-page-links">
              ${this.renderLinks()}
            </div>
          </article>
        </section>
      </main>
    `
  }
}
