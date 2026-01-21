import { site } from '../content/site'

export default function Hero() {
  const { hero, layoutUsage } = site

  return (
    <section
      id="hero"
      className="section hero"
      style={{ '--hero-image': `url(${hero.imagePath})` }}
    >
      <div
        className="section-inner hero-inner"
        data-width={layoutUsage.hero.width}
        data-gutter={layoutUsage.hero.gutter}
      >
        <div className="hero-content">
          <span className="hero-badge">{hero.badge}</span>
          <h1>{hero.headline}</h1>
          <p className="hero-subtext">{hero.subtext}</p>
          {hero.secondaryAction ? (
            <a className="hero-link" href={`#${hero.secondaryAction.target}`}>
              {hero.secondaryAction.label}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
