import { site } from '../content/site'

export default function Contact() {
  const { contactSection, company, contact, layoutUsage } = site

  return (
    <section id="contact" className="section contact">
      <div
        className="section-inner"
        data-width={layoutUsage.contact.width}
        data-gutter={layoutUsage.contact.gutter}
      >
        <div className="contact-grid">
          <div className="contact-info">
            <h2>{contactSection.sectionTitle}</h2>
            <p className="section-lede">{contactSection.sectionText}</p>
            <div className="contact-details">
              <p>{company.name}</p>
              <p>{company.location}</p>
              <p>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </p>
              <p>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </p>
            </div>
          </div>
          {contactSection.form.enabled ? (
            <form
              className="contact-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <label>
                {contactSection.form.fields.nameLabel}
                <input
                  type="text"
                  name="name"
                  placeholder={contactSection.form.fields.namePlaceholder}
                />
              </label>
              <label>
                {contactSection.form.fields.emailLabel}
                <input
                  type="email"
                  name="email"
                  placeholder={contactSection.form.fields.emailPlaceholder}
                />
              </label>
              <label>
                {contactSection.form.fields.messageLabel}
                <textarea
                  name="message"
                  rows={5}
                  placeholder={contactSection.form.fields.messagePlaceholder}
                />
              </label>
              <button type="submit">
                {contactSection.form.fields.submitText}
              </button>
              <p className="form-disclaimer">
                {contactSection.form.disclaimerText}
              </p>
            </form>
          ) : null}
        </div>
      </div>
    </section>
  )
}
