import { site } from '../content/site'
import { projects } from '../content/projects'

export default function Projects() {
  const { layoutUsage } = site
  const items = projects.items.slice(0, projects.maxItems)

  return (
    <section id="projects" className="section projects">
      <div
        className="section-inner"
        data-width={layoutUsage.projects.width}
        data-gutter={layoutUsage.projects.gutter}
      >
        <div className="section-head">
          <h2>{projects.sectionTitle}</h2>
          <p className="section-lede">{projects.sectionText}</p>
        </div>
        <div className="projects-list">
          {items.map((item, index) => {
            const alignment = index % 2 === 0 ? 'align-left' : 'align-right'
            const width =
              projects.widthPattern[index % projects.widthPattern.length] ||
              'wide'

            return (
              <article
                key={item.title}
                className={`project-item ${alignment} width-${width}`}
              >
                <div className="project-media">
                  <img src={item.imagePath} alt={item.title} />
                </div>
                <div className="project-body">
                  <p className="project-meta">{item.meta}</p>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
