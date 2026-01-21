import { useEffect, useRef, useState } from 'react'
import { site } from '../content/site'
import { gallery } from '../content/gallery'
import useReducedMotion from '../hooks/useReducedMotion'

export default function Gallery() {
  const railRef = useRef(null)
  const reducedMotion = useReducedMotion()
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const rail = railRef.current
    if (!rail) {
      return
    }

    const maxScrollLeft = rail.scrollWidth - rail.clientWidth
    setCanScrollLeft(rail.scrollLeft > 2)
    setCanScrollRight(rail.scrollLeft < maxScrollLeft - 2)
  }

  const scrollByStep = (direction) => {
    const rail = railRef.current
    if (!rail) {
      return
    }

    const firstCard = rail.querySelector('.gallery__card')
    const styles = getComputedStyle(rail)
    const gapValue = parseFloat(styles.columnGap || styles.gap || 0)
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 0
    const step = cardWidth + gapValue

    rail.scrollBy({
      left: direction * step,
      behavior: reducedMotion ? 'auto' : 'smooth',
    })
  }

  useEffect(() => {
    const rail = railRef.current
    if (!rail) {
      return undefined
    }

    updateScrollState()
    const onScroll = () => updateScrollState()
    rail.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', updateScrollState)

    return () => {
      rail.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  return (
    <section id="gallery" className="section gallery">
      <div
        className="section-inner"
        data-width={site.layoutUsage.gallery.width}
        data-gutter={site.layoutUsage.gallery.gutter}
      >
        <div className="section-head">
          <h2>{gallery.sectionTitle}</h2>
          <p className="section-lede">{gallery.sectionText}</p>
        </div>
        <div className="gallery-wrap">
          <button
            type="button"
            className="gallery-arrow is-left"
            aria-label="Scrolla vänster"
            onClick={() => scrollByStep(-1)}
            disabled={!canScrollLeft}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M8.5 5.5l7 6.5-7 6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="gallery__railWrap">
            <div
              className="gallery__rail"
              ref={railRef}
              tabIndex={0}
              style={{
                '--g-cols': gallery.behavior.desktopColumns,
                '--g-gap': `${gallery.behavior.gapPx}px`,
                '--g-edge': `${gallery.behavior.edgePaddingPx}px`,
                '--g-fit': gallery.behavior.imageFit,
                '--g-aspect': gallery.behavior.aspectRatio,
                '--g-scroll': gallery.behavior.scrollBehavior,
              }}
            >
              {gallery.images.map((image) => (
                <figure className="gallery__card" key={image.src}>
                  <img src={image.src} alt={image.alt} />
                </figure>
              ))}
            </div>
            <div className="gallery-fades" aria-hidden="true">
              <span className="fade fade-left" data-active={canScrollLeft} />
              <span className="fade fade-right" data-active={canScrollRight} />
            </div>
          </div>
          <button
            type="button"
            className="gallery-arrow"
            aria-label="Scrolla höger"
            onClick={() => scrollByStep(1)}
            disabled={!canScrollRight}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                d="M8.5 5.5l7 6.5-7 6.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
