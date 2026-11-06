
import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero section-container">
      <div className="hero-content">
        <p className="eyebrow">PORTFOLIO / 2026</p>

        <h1>
          Hello, I'm
          <br />
          <span>Rommel Jacob</span>
          <br />
          Andrade.
        </h1>

        <p className="hero-description">
          An aspiring developer passionate about creating
          meaningful digital experiences through technology,
          creativity, and continuous learning.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="primary-button">
            Explore My Work ↗
          </Link>

          <Link to="/about" className="text-button">
            More About Me
          </Link>
        </div>
      </div>

      <div className="hero-visual">
        <div className="visual-top">
          <span>CREATIVE MIND</span>
          <span>001 / 004</span>
        </div>

        <div className="initials">RA</div>

        <div className="visual-bottom">
          <span>ROMMEL JACOB ANDRADE</span>
          <span>ASPIRING DEVELOPER</span>
        </div>
      </div>

      <div className="hero-bottom">
        <span>BASED IN THE PHILIPPINES</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  )
}

export default Home
