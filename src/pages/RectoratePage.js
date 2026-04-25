export class RectoratePage {
  constructor(content, subpageHero) {
    this.content = content
    this.subpageHero = subpageHero
  }

  render() {
    const rectorate = this.content.rectorate

    return `
      <main>
        ${this.subpageHero.render({ title: rectorate.pageTitle, image: rectorate.image })}

        <section class="rectorate-section">
          <div class="rectorate-card">
            <figure class="rectorate-photo">
              <img src="${rectorate.image}" alt="" />
            </figure>
            <div class="rectorate-profile">
              <h2>${rectorate.role}</h2>
              <p>${rectorate.name}</p>
              <a href="mailto:${rectorate.email}">${rectorate.email}</a>
            </div>
          </div>

          <div class="rectorate-contact">
            <h3>${rectorate.officeTitle}</h3>
            <p>${rectorate.officeManager}</p>
            ${rectorate.officeEmails
              .map((email) => `<a href="mailto:${email}">${email}</a>`)
              .join('')}
            ${rectorate.phones.map((phone) => `<p class="phone">${phone}</p>`).join('')}
          </div>
        </section>
      </main>
    `
  }
}
