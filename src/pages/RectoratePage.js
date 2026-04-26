export class RectoratePage {
  constructor(content, subpageHero) {
    this.content = content
    this.subpageHero = subpageHero
  }

  renderPerson(person) {
    return `
      <div class="rectorate-card">
        <figure class="rectorate-photo">
          <img src="${person.image}" alt="" />
        </figure>
        <div class="rectorate-profile">
          <h2>${person.role}</h2>
          <p>${person.name}</p>
          <a href="mailto:${person.email}">${person.email}</a>
          ${person.bioPath ? `<a class="rectorate-bio-link" href="${person.bioPath}" data-route="${person.bioPath}">Özgeçmiş için tıklayınız.</a>` : ''}
        </div>
      </div>
    `
  }

  renderOfficeContact(rectorate) {
    return `
      <div class="rectorate-contact">
        <h3>${rectorate.officeTitle}</h3>
        <p>${rectorate.officeManager}</p>
        ${rectorate.officeEmails
          .map((email) => `<a href="mailto:${email}">${email}</a>`)
          .join('')}
        ${rectorate.phones.map((phone) => `<p class="phone">${phone}</p>`).join('')}
      </div>
    `
  }

  render() {
    const rectorate = this.content.rectorate
    const [rector, ...otherPeople] = rectorate.people

    return `
      <main>
        ${this.subpageHero.render({ title: rectorate.pageTitle, image: rectorate.image })}

        <section class="rectorate-section">
          <div class="rectorate-people">
            ${rector ? this.renderPerson(rector) : ''}
            ${this.renderOfficeContact(rectorate)}
            ${otherPeople.map((person) => this.renderPerson(person)).join('')}
          </div>
        </section>
      </main>
    `
  }
}
