export class SubpageHero {
  constructor(layout) {
    this.layout = layout
  }

  render({ title, image = '/campus-placeholder.png' }) {
    return `
      <section class="subpage-hero">
        <div class="subpage-hero-shell" style="--subpage-hero-image: url('${image}')">
          ${this.layout.renderHeroNavigation()}
          <h1>${title}</h1>
        </div>
      </section>
    `
  }
}
