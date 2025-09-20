import './RSVP.css';

const RSVP = () => {
  return (
    <div className="rsvp-page">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">RSVP</h1>
          <p className="subtitle">Please let us know if you'll be joining our celebration</p>
        </div>
        
        <div className="rsvp-form-container">
          <form className="rsvp-form-full">
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" required />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" required />
              </div>
            </div>

            <div className="form-section">
              <h3>Event Details</h3>
              <div className="form-group">
                <label>Number of Guests</label>
                <div className="guest-options">
                  <label><input type="radio" name="guests" value="1" /> One</label>
                  <label><input type="radio" name="guests" value="2" /> Two</label>
                  <label><input type="radio" name="guests" value="3" /> Three</label>
                  <label><input type="radio" name="guests" value="4" /> Four</label>
                </div>
              </div>
              
              <div className="form-group">
                <label>Attendance *</label>
                <div className="attendance-options">
                  <label><input type="checkbox" /> Absolutely with pleasure</label>
                  <label><input type="checkbox" /> Regretfully Decline</label>
                  <label><input type="checkbox" /> Rehearsal Dinner</label>
                  <label><input type="checkbox" /> Ceremony</label>
                  <label><input type="checkbox" /> Reception</label>
                </div>
              </div>
            </div>

            <div className="form-section">
              <div className="form-group">
                <label>Special Dietary Requirements or Notes</label>
                <textarea rows="4" placeholder="Please let us know about any dietary restrictions, accessibility needs, or special requests..."></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-large">Submit RSVP</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RSVP;