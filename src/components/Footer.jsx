import { site } from '../content/site'

export default function Footer() {
  const year = new Date().getFullYear()
  const text = site.footer.textTemplate
    .replace('{YEAR}', year)
    .replace('{COMPANY}', site.company.name)

  return (
    <footer className="section footer">
      <div
        className="section-inner"
        data-width={site.layoutUsage.footer.width}
        data-gutter={site.layoutUsage.footer.gutter}
      >
        <p>{text}</p>
      </div>
    </footer>
  )
}
