export class AdministrativeStaffPage {
  constructor(content, subpageHero) {
    this.content = content
    this.subpageHero = subpageHero
  }

  getDepartments(staff) {
    return [...new Set(staff.map((person) => person.department))]
  }

  render() {
    const page = this.content.administrativeStaff
    const departments = this.getDepartments(page.staff)

    return `
      <main>
        ${this.subpageHero.render({ title: page.pageTitle, image: page.heroImage })}

        <section class="staff-section">
          <form class="staff-filter" aria-label="${page.pageTitle} arama">
            <label>
              <span>${page.search.nameLabel}</span>
              <input type="search" name="name" autocomplete="off" />
            </label>
            <label>
              <span>${page.search.departmentLabel}</span>
              <select name="department">
                <option value="">${page.search.allDepartments}</option>
                ${departments
                  .map((department) => `<option value="${department}">${department}</option>`)
                  .join('')}
              </select>
            </label>
            <button type="submit">${page.search.button}</button>
          </form>

          <div class="staff-list">
            ${page.staff
              .map(
                (person) => `
                <article class="staff-card" data-name="${person.name.toLowerCase()}" data-department="${person.department}">
                  <figure class="staff-photo">
                    <img src="${person.image}" alt="" />
                  </figure>
                  <div class="staff-copy">
                    <h2>${person.name}</h2>
                    <p>${person.department}</p>
                    <p>${person.title}</p>
                  </div>
                  <div class="staff-meta">
                    ${
                      person.email
                        ? `<a href="mailto:${person.email}"><span aria-hidden="true">✉</span>${person.email}</a>`
                        : ''
                    }
                    ${
                      person.room
                        ? `<p><span aria-hidden="true">⌖</span>Oda No: ${person.room}</p>`
                        : ''
                    }
                  </div>
                </article>
              `,
              )
              .join('')}
          </div>
        </section>
      </main>
    `
  }
}
