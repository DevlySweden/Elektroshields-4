import { site } from '../content/site'

export default function Services() {
  const { services, motion, layoutUsage } = site

  return (
    <section id="services" className="section services">
      <div
        className="section-inner"
        data-width={layoutUsage.services.width}
        data-gutter={layoutUsage.services.gutter}
      >
        <div className="section-head">
          <h2>{services.sectionTitle}</h2>
          <p className="section-lede">{services.sectionText}</p>
        </div>
        <div className="services-list">
          {services.items.map((item, index) => (
            <div
              key={item.title}
              className={`service-item motion-${motion.preset}`}
              style={{ '--delay': `${index * motion.staggerMs}ms` }}
            >
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
