export class Router {
  constructor(routes, fallbackRoute) {
    this.routes = routes
    this.fallbackRoute = fallbackRoute
  }

  resolve(pathname = window.location.pathname) {
    return this.routes[pathname] || this.fallbackRoute
  }
}
