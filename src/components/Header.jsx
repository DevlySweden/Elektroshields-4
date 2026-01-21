import { site } from '../content/site'
import useScrollPosition from '../hooks/useScrollPosition'

export default function Header() {
  const scrollY = useScrollPosition()
  const isScrolled = scrollY > 40
  const cta = site.hero.secondaryAction

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div
        className="section-inner header-inner"
        data-width={site.layoutUsage.header.width}
        data-gutter={site.layoutUsage.header.gutter}
      >
        <a className="brand" href="#hero" aria-label={site.company.name}>
          <img src={site.branding.logoPath} alt={site.company.name} />
        </a>
        {cta ? (
          <a className="header-cta" href={`#${cta.target}`}>
            {cta.label}
          </a>
        ) : null}
      </div>
    </header>
  )
}
