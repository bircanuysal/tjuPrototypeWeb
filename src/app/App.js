import { Layout } from '../components/Layout.js'
import { SubpageHero } from '../components/SubpageHero.js'
import { AdministrativeStaffPage } from '../pages/AdministrativeStaffPage.js'
import { ContactPage } from '../pages/ContactPage.js'
import { ContentPage } from '../pages/ContentPage.js'
import { CouncilPage } from '../pages/CouncilPage.js'
import { EngineeringDepartmentPage } from '../pages/EngineeringDepartmentPage.js'
import { EngineeringFacultyPage } from '../pages/EngineeringFacultyPage.js'
import { HomePage } from '../pages/HomePage.js'
import { InternationalPage } from '../pages/InternationalPage.js'
import { ProspectiveStudentsPage } from '../pages/ProspectiveStudentsPage.js'
import { RectoratePage } from '../pages/RectoratePage.js'
import { InteractionService } from '../services/InteractionService.js'
import { Router } from '../services/Router.js'

export class App {
  constructor(content) {
    this.content = content
    this.layout = new Layout(content)
    this.subpageHero = new SubpageHero(this.layout)
    this.interactions = new InteractionService()
    this.router = this.createRouter()
  }

  createRouter() {
    const homePage = new HomePage(this.content, this.layout)
    const engineeringDepartmentRoutes = Object.fromEntries(
      this.content.engineeringFaculty.departments.map((department) => [
        department.path,
        {
          title: `${department.title} | ${this.content.brand.title}`,
          page: new EngineeringDepartmentPage(this.content, department),
          useSiteChrome: false,
        },
      ]),
    )
    const contentPageRoutes = Object.fromEntries(
      this.content.aboutPages.map((page) => [
        page.path,
        {
          title: `${page.pageTitle} | ${this.content.brand.title}`,
          page: new ContentPage(this.content, this.subpageHero, page),
        },
      ]),
    )

    return new Router(
      {
        '/': {
          title: this.content.brand.title,
          page: homePage,
        },
        '/rektorluk': {
          title: `${this.content.rectorate.pageTitle} | ${this.content.brand.title}`,
          page: new RectoratePage(this.content, this.subpageHero),
        },
        '/mutevelli-heyeti': {
          title: `${this.content.council.pageTitle} | ${this.content.brand.title}`,
          page: new CouncilPage(this.content, this.subpageHero),
        },
        '/idari-personel': {
          title: `${this.content.administrativeStaff.pageTitle} | ${this.content.brand.title}`,
          page: new AdministrativeStaffPage(this.content, this.subpageHero),
        },
        '/iletisim': {
          title: `${this.content.contact.pageTitle} | ${this.content.brand.title}`,
          page: new ContactPage(this.content),
          useSiteChrome: false,
        },
        '/international': {
          title: `${this.content.international.pageTitle} | ${this.content.brand.title}`,
          page: new InternationalPage(this.content),
          useSiteChrome: false,
        },
        '/aday-ogrenciler': {
          title: `${this.content.prospectiveStudents.pageTitle} | ${this.content.brand.title}`,
          page: new ProspectiveStudentsPage(this.content),
          useSiteChrome: false,
        },
        '/muhendislik-fakultesi': {
          title: `${this.content.engineeringFaculty.pageTitle} | ${this.content.brand.title}`,
          page: new EngineeringFacultyPage(this.content),
          useSiteChrome: false,
        },
        ...contentPageRoutes,
        ...engineeringDepartmentRoutes,
      },
      {
        title: this.content.brand.title,
        page: homePage,
      },
    )
  }

  mount(selector) {
    this.root = document.querySelector(selector)
    this.render()
    this.bindRouteLinks()
    window.addEventListener('popstate', () => this.render())
  }

  render() {
    const route = this.router.resolve()
    document.title = route.title

    if (route.useSiteChrome === false) {
      this.root.innerHTML = route.page.render()
      this.interactions.bind()
      return
    }

    this.root.innerHTML = `
      ${this.layout.renderHeader()}
      ${route.page.render()}
      ${this.layout.renderFooter()}
    `

    this.interactions.bind()
  }

  bindRouteLinks() {
    document.addEventListener('click', (event) => {
      const routeLink = event.target.closest('a[data-route]')

      if (!routeLink) return

      const url = new URL(routeLink.href)

      if (url.origin !== window.location.origin) return

      event.preventDefault()
      window.history.pushState({}, '', url.pathname)
      window.scrollTo({ top: 0 })
      this.render()
    })
  }
}
