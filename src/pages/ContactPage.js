export class ContactPage {
  constructor(content) {
    this.content = content
  }

  renderActions() {
    return this.content.contact.actions
      .map(
        (action) => `
          <a class="contact-action" href="${action.path}">
            <span aria-hidden="true">${action.icon}</span>
            ${action.label}
          </a>
        `,
      )
      .join('')
  }

  render() {
    const contact = this.content.contact

    return `
      <main class="contact-page" style="--contact-bg: url('${contact.backgroundImage}')">
        <section class="contact-panel" aria-labelledby="contact-title">
          <a class="contact-brand" href="/" data-route="/" aria-label="${this.content.labels.homepage}">
            <span class="brand-mark">
              <img src="/tju-logo.svg" alt="" />
            </span>
            <span>${this.content.engineeringFaculty.logoTitle}</span>
          </a>

          <a class="contact-close" href="/" data-route="/" aria-label="${contact.closeLabel}">×</a>

          <div class="contact-copy">
            <div class="contact-symbol" aria-hidden="true">
              <span>✉</span>
              <span>☎</span>
            </div>
            <div class="contact-details">
              <h1 id="contact-title">${contact.heading}</h1>
              <dl>
                <div>
                  <dt>${contact.addressLabel}</dt>
                  <dd>${contact.address}</dd>
                </div>
                <div>
                  <dt>${contact.emailLabel}</dt>
                  <dd><a href="mailto:${contact.email}">${contact.email}</a></dd>
                </div>
                <div>
                  <dt>${contact.kepLabel}</dt>
                  <dd><a href="mailto:${contact.kep}">${contact.kep}</a></dd>
                </div>
                <div>
                  <dt>${contact.phoneLabel}</dt>
                  <dd><a href="tel:${contact.phoneHref}">${contact.phone}</a></dd>
                </div>
                <div>
                  <dt>${contact.faxLabel}</dt>
                  <dd>${contact.fax}</dd>
                </div>
              </dl>
              <div class="contact-actions">
                ${this.renderActions()}
              </div>
            </div>
          </div>
        </section>
      </main>
    `
  }
}
