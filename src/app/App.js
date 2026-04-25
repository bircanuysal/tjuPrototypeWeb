import { Layout } from '../components/Layout.js'
import { SubpageHero } from '../components/SubpageHero.js'
import { AdministrativeStaffPage } from '../pages/AdministrativeStaffPage.js'
import { HomePage } from '../pages/HomePage.js'
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
        '/idari-personel': {
          title: `${this.content.administrativeStaff.pageTitle} | ${this.content.brand.title}`,
          page: new AdministrativeStaffPage(this.content, this.subpageHero),
        },
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
