import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <p className="subtitle animate-hero animate-fade-in-down">TOGETHER WITH THEIR FAMILIES THE OBEROI'S & TRISHA'S INVITE YOU TO CELEBRATE</p>
          <h1 className="hero-title animate-hero animate-fade-in-up">Sidh & Tuisha</h1>
          <div className="wedding-details animate-hero animate-fade-in-up">
            <p className="wedding-date">February 18-19, 2025</p>
            <p className="wedding-location">Tijara Fort Palace • Rajasthan, India</p>
          </div>
        </div>
      </section>

      {/* Homepage Card Section */}
      <section className="homepage-card-section">
        <div className="container">
          <div className="homepage-card">
            <div className="homepage-decoration-left">
              <img 
                src="/images/decorationleaf.png" 
                alt="Decorative leaf" 
                style={{height: '90px', width: '90px', objectFit: 'contain'}} 
              />
            </div>
            <h2 className="section-title">HOMEPAGE CARD TBD</h2>
            <div className="homepage-decoration-right">
              <img 
                src="/images/decorationtulip.png" 
                alt="Decorative tulip" 
                style={{height: '95px', width: '95px', objectFit: 'contain'}} 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section - Preview with image */}
      <section className="about-preview">
        <div className="container">
          <div className="story-decoration-top">
            <img 
              src="/images/decorationfan.png" 
              alt="Decorative fan" 
              style={{height: '80px', width: '80px', objectFit: 'contain'}} 
            />
          </div>
          <h2 className="section-title">Our Story</h2>
          <div className="about-preview-content">
            <div className="story-text">
              <p className="about-preview-text">
                We met as many do in this modern age, through Hinge. What started as a classic getting to know each other situation 
                has blossomed into a beautiful journey of love, travel, and shared adventures across 10+ countries.
              </p>
              <a href="/about" className="btn animate-button">READ OUR FULL STORY</a>
            </div>
            <div className="story-image">
              <div className="polaroid animate-polaroid">
                <img 
                  src="/images/About us/coupleanimation.GIF" 
                  alt="Sidh & Tuisha" 
                  style={{height: '300px', width: '100%', objectFit: 'cover'}} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="venue">
        <div className="container">
          <div className="venue-content">
            <div className="venue-text">
              <h3 className="venue-label">The Venue</h3>
              <h2 className="venue-name">Tijara Fort Palace</h2>
              <p className="venue-description">
                A magnificent 18th-century heritage fort palace nestled in the Aravalli Hills of Rajasthan. 
                This stunning venue combines royal grandeur with modern luxury, offering breathtaking views, 
                exquisite architecture, and an unforgettable backdrop for our special celebration.
              </p>
              <div className="venue-address">
                <p>Village Tijara, Alwar District</p>
                <p>Rajasthan 301411, India</p>
              </div>
            </div>
            <div className="venue-images">
              <div className="venue-image-stack">
                <div className="polaroid animate-polaroid">
                  <img 
                    src="/images/tijarafort.png" 
                    alt="Tijara Fort Palace" 
                    style={{height: '250px', width: '350px', objectFit: 'cover'}} 
                  />
                </div>
                <div className="venue-decoration">
                  <img 
                    src="/images/decoration.png" 
                    alt="Decorative Element" 
                    style={{height: '150px', width: '150px', objectFit: 'contain'}} 
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section className="rsvp-preview">
        <div className="container">
          <div className="rsvp-decoration-tree">
            <img 
              src="/images/decorationbigtree.png" 
              alt="Decorative tree" 
              style={{height: '140px', width: '140px', objectFit: 'contain'}} 
            />
          </div>
          <h2 className="section-title">RSVP</h2>
          <div className="rsvp-content">
            <p className="rsvp-description">
              We can't wait to celebrate with you! Please let us know if you'll be joining us 
              for our special day. Your presence would mean the world to us.
            </p>
            <a href="/rsvp" className="btn animate-button">RSVP NOW</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;