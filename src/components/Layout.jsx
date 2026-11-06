
import { Link, Outlet, useLocation } from 'react-router-dom'

function Layout() {
  const location = useLocation()

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <div className="site-wrapper">
      <header className="header">
        <div className="nav-container">
          <Link to="/" className="logo">
            ROMMEL<span>.</span>
          </Link>

          <nav className="navigation">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={
                  location.pathname === link.path ? 'active' : ''
                }
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <Link to="/contact" className="contact-nav">
            Let's Talk ↗
          </Link>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <p>© 2026 Rommel Jacob Andrade</p>
        <p>Designed with purpose. Built with React.</p>
      </footer>
    </div>
  )
}

export default Layout
