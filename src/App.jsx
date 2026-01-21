import './styles/global.css'
import { site } from './content/site'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const layout = site.layout
  const fontFamily =
    site.branding.fontFamily === 'system'
      ? "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
      : site.branding.fontFamily
  const vars = {
    '--accent-color': site.branding.accentColor,
    '--font-family': fontFamily,
    '--container-max': `${layout.containerMaxWidthPx}px`,
    '--container-fluid-vw': layout.containerFluidVw,
    '--wide-max': `${layout.wideContainerMaxWidthPx}px`,
    '--wide-fluid-vw': layout.wideContainerFluidVw,
    '--narrow-max': `${layout.narrowContainerMaxWidthPx}px`,
    '--narrow-fluid-vw': layout.narrowContainerFluidVw,
    '--fullbleed-max': `${layout.fullBleedMaxWidthPx}px`,
    '--section-pad-y-mobile': `${layout.sectionPaddingYMobilePx}px`,
    '--section-pad-y-desktop': `${layout.sectionPaddingYDesktopPx}px`,
    '--radius': `${layout.borderRadiusPx}px`,
    '--header-height': `${layout.headerHeightPx}px`,
    '--gutter-tight': layout.gutterTight,
    '--gutter-standard': layout.gutterStandard,
    '--gutter-wide': layout.gutterWide,
    '--motion-duration': `${site.motion.durationMs}ms`,
    '--motion-stagger': `${site.motion.staggerMs}ms`,
  }

  return (
    <div className="page" style={vars}>
      <Header />
      <main>
        <Hero />
        <Services />
        <Projects />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
