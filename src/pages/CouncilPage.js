export class CouncilPage {
  constructor(content, subpageHero) {
    this.content = content
    this.subpageHero = subpageHero
  }

  renderMember(member, index) {
    return `
      <article class="council-card ${index === 0 ? 'is-lead' : ''}">
        <figure class="council-photo">
          <img src="${member.image}" alt="" />
        </figure>
        <div class="council-copy">
          <h2>${member.name}</h2>
          ${member.role ? `<p>${member.role}</p>` : ''}
          ${member.bioPath ? `<a href="${member.bioPath}" data-route="${member.bioPath}">Özgeçmiş için tıklayınız.</a>` : ''}
        </div>
      </article>
    `
  }

  render() {
    const council = this.content.council

    return `
      <main>
        ${this.subpageHero.render({ title: council.pageTitle, image: council.image })}

        <section class="council-section">
          ${council.members.map((member, index) => this.renderMember(member, index)).join('')}
        </section>
      </main>
    `
  }
}
