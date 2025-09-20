import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
  const location = useLocation();

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
            <ul className="nav-list">
              {navItems.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link 
                    to={item.path} 
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
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
            <Link to="/">Home</Link>
            <Link to="/story">Our Story</Link>
            <Link to="/venue">Venue</Link>
            <Link to="/itinerary">Itinerary</Link>
            <Link to="/registry">Registry</Link>
            <Link to="/rsvp">RSVP</Link>
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