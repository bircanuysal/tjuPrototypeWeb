export class InteractionService {
  bind() {
    this.bindHeaderScroll()
    this.bindMegaMenus()
    this.bindAdministrativeStaffFilter()
  }

  bindHeaderScroll() {
    const header = document.querySelector('.site-header')
    const floatingTools = document.querySelector('.floating-tools')

    if (!header || !floatingTools) return

    if (this.syncHeader) {
      window.removeEventListener('scroll', this.syncHeader)
    }

    const syncHeader = () => {
      const isScrolled = window.scrollY > 60
      header.classList.toggle('is-scrolled', isScrolled)
      floatingTools.classList.toggle('is-hidden', isScrolled)
    }

    this.syncHeader = syncHeader
    syncHeader()
    window.addEventListener('scroll', syncHeader, { passive: true })
  }

  bindMegaMenus() {
    document.querySelectorAll('.has-mega').forEach((item) => {
      let closeTimer

      const openMenu = () => {
        window.clearTimeout(closeTimer)
        item.classList.add('is-open')
      }

      const closeMenu = () => {
        closeTimer = window.setTimeout(() => {
          item.classList.remove('is-open')
        }, 260)
      }

      item.addEventListener('mouseenter', openMenu)
      item.addEventListener('mouseleave', closeMenu)
      item.addEventListener('focusin', openMenu)
      item.addEventListener('focusout', closeMenu)
    })
  }

  bindAdministrativeStaffFilter() {
    const filter = document.querySelector('.staff-filter')
    const cards = document.querySelectorAll('.staff-card')

    if (!filter || !cards.length) return

    const applyFilter = () => {
      const formData = new FormData(filter)
      const name = String(formData.get('name') || '').trim().toLowerCase()
      const department = String(formData.get('department') || '')

      cards.forEach((card) => {
        const matchesName = !name || card.dataset.name.includes(name)
        const matchesDepartment = !department || card.dataset.department === department

        card.hidden = !matchesName || !matchesDepartment
      })
    }

    filter.addEventListener('submit', (event) => {
      event.preventDefault()
      applyFilter()
    })

    filter.addEventListener('input', applyFilter)
    filter.addEventListener('change', applyFilter)
  }
}
