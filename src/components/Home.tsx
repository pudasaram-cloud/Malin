import heroBg from '../assets/herobg-aligned.jpg';

export default function Home() {
  return (
    <section id="home" className="hero-wrapper">
      {/* Background portrait layer */}
      <div className="hero-bg-layer" aria-hidden="true">
        <img
          src={heroBg}
          alt="Hero Portrait"
          className="hero-portrait-img"
          decoding="async"
          loading="eager"
        />
        <div className="hero-gradient-overlay" />
      </div>

      <main className="hero-main">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-row">
              <span className="title-text reveal-title-1">Digital Solutions.</span>
            </span>
            <span className="title-row">
              <span className="title-text reveal-title-2">Built to Grow.</span>
            </span>
          </h1>

          <p className="hero-subtitle reveal-subtitle">
            Full-Stack Web Developer &amp; UI/UX Designer creating modern websites, web applications, and custom business management systems.
          </p>

          <div className="hero-cta-group reveal-cta">
            <a href="#technology" className="btn btn-primary">
              Explore Tech Stack
            </a>

            <a href="#contact" className="btn btn-secondary">
              <span>Let's Work Together</span>
              <span className="arrow-icon">→</span>
            </a>
          </div>
        </div>
      </main>
    </section>
  );
}
