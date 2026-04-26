export class InteractionService {
  bind() {
    this.bindHeaderScroll()
    this.bindMegaMenus()
    this.bindPortalOverlay()
    this.bindAdministrativeStaffFilter()
    this.bindGallerySlider()
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

  bindPortalOverlay() {
    const overlay = document.querySelector('.portal-overlay')
    const trigger = document.querySelector('[data-portal-trigger]')
    const closeButton = document.querySelector('.portal-close')

    if (!overlay || !trigger || !closeButton) return

    const openOverlay = () => {
      overlay.classList.add('is-open')
      overlay.setAttribute('aria-hidden', 'false')
      document.body.classList.add('portal-is-open')
      closeButton.focus()
    }

    const closeOverlay = () => {
      overlay.classList.remove('is-open')
      overlay.setAttribute('aria-hidden', 'true')
      document.body.classList.remove('portal-is-open')
      trigger.focus()
    }

    trigger.addEventListener('click', openOverlay)
    closeButton.addEventListener('click', closeOverlay)

    overlay.addEventListener('click', (event) => {
      if (event.target === overlay) {
        closeOverlay()
      }
    })

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && overlay.classList.contains('is-open')) {
        closeOverlay()
      }
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

  bindGallerySlider() {
    const track = document.querySelector('[data-gallery-track]')
    const prevButton = document.querySelector('[data-gallery-prev]')
    const nextButton = document.querySelector('[data-gallery-next]')

    if (this.syncGalleryControls) {
      window.removeEventListener('resize', this.syncGalleryControls)
      this.syncGalleryControls = null
    }

    if (!track || !prevButton || !nextButton) return

    const scrollGallery = (direction) => {
      const firstTile = track.querySelector('.gallery-tile')
      const tileWidth = firstTile ? firstTile.getBoundingClientRect().width : track.clientWidth
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0

      track.scrollBy({
        left: direction * (tileWidth + gap),
        behavior: 'smooth',
      })
    }

    const syncControls = () => {
      const maxScroll = track.scrollWidth - track.clientWidth

      prevButton.disabled = track.scrollLeft <= 4
      nextButton.disabled = track.scrollLeft >= maxScroll - 4
    }

    prevButton.addEventListener('click', () => scrollGallery(-1))
    nextButton.addEventListener('click', () => scrollGallery(1))
    track.addEventListener('scroll', syncControls, { passive: true })
    this.syncGalleryControls = syncControls
    window.addEventListener('resize', syncControls)
    syncControls()
  }
}
