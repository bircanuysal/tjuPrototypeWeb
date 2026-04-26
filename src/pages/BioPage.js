export class BioPage {
  constructor(content, subpageHero, profile) {
    this.content = content
    this.subpageHero = subpageHero
    this.profile = profile
  }

  render() {
    return `
      <main>
        ${this.subpageHero.render({ title: this.profile.heroTitle, image: this.profile.image })}

        <section class="bio-section">
          <article class="bio-card">
            <figure class="bio-photo">
              <img src="${this.profile.image}" alt="" />
            </figure>
            <div class="bio-copy">
              <p class="bio-role">${this.profile.role}</p>
              <h2>${this.profile.name}</h2>
              ${this.profile.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
              <a href="${this.profile.backPath}" data-route="${this.profile.backPath}">${this.profile.backLabel}</a>
            </div>
          </article>
        </section>
      </main>
    `
  }
}
