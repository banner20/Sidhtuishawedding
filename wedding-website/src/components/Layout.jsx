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
            {navItems.map((item) => (
              <Link key={item.path} to={item.path} className="animate-hover-glow">
                {item.label}
              </Link>
            ))}
          </div>
          <p className="footer-text">
            Built by Spectroxia Studios
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;