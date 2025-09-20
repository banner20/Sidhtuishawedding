import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/faq', label: 'FAQ' },
    { path: '/travel', label: 'Travel Recommendations' },
    { path: '/cards', label: 'Cards' },
    { path: '/wardrobe', label: 'Wardrobe' },
    { path: '/rsvp', label: 'RSVP' }
  ];

  return (
    <div className="layout">
      <header className="header">
        <nav className="nav">
          <div className="container">
            {/* Mobile Menu Button */}
            <button 
              className="mobile-menu-btn"
              onClick={toggleMobileMenu}
              aria-label="Toggle navigation menu"
            >
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>
            
            <ul className={`nav-list ${isMobileMenuOpen ? 'mobile-open' : ''}`} data-stagger="100">
              {navItems.map((item, index) => (
                <li key={item.path} className="nav-item">
                  <Link 
                    to={item.path} 
                    className={`nav-link animate-hover-glow ${location.pathname === item.path ? 'active' : ''}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-nav">
            <Link to="/" className="animate-hover-glow">Home</Link>
            <Link to="/story" className="animate-hover-glow">Our Story</Link>
            <Link to="/venue" className="animate-hover-glow">Venue</Link>
            <Link to="/itinerary" className="animate-hover-glow">Itinerary</Link>
            <Link to="/registry" className="animate-hover-glow">Registry</Link>
            <Link to="/rsvp" className="animate-hover-glow">RSVP</Link>
          </div>
          <p className="footer-text">
            Powered by Webflow, built by Abel Hancock | Licensing
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;