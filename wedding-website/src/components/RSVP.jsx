import './RSVP.css';

const RSVP = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      phone: event.target.phone.value,
      guests: event.target.guests.value,
      notes: event.target.notes.value,
    };

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwcYQq916KkjBsacg7PwggRdsqarfHayiVyBiIc-YyLlN7ctZSxgXjJQTnTVRYjtf4o/exec', {
        method: 'POST',
        body: new URLSearchParams(data),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
      });

      const text = await response.text();
      if (text === 'Success') {
        alert('RSVP submitted successfully!');
        event.target.reset();
      } else {
        alert('Failed to submit RSVP. Please try again.');
      }
    } catch (error) {
      alert('Error submitting RSVP: ' + error.message);
    }
  };
  return (
    <div className="rsvp-page">
      <div className="container">
        <div className="page-header">
          <div className="rsvp-decoration-top">
            <img 
              src="/images/decorationtulip.png" 
              alt="Decorative tulip" 
              style={{height: '110px', width: '110px', objectFit: 'contain'}} 
            />
          </div>
          <h1 className="section-title">RSVP</h1>
          <p className="subtitle">Please let us know if you'll be joining our celebration</p>
        </div>
        
        <div className="rsvp-form-container">
          <div className="rsvp-form-decoration-left">
            <img 
              src="/images/decorationfan.png" 
              alt="Decorative fan" 
              style={{height: '90px', width: '90px', objectFit: 'contain'}} 
            />
          </div>
          <form className="rsvp-form-full" onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" name="first_name" required />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" name="last_name" required />
                </div>
              </div>
              <div className="form-group">
                <label>Phone Number *</label>
                <input type="tel" name="phone" required />
              </div>
            </div>

            <div className="form-section">
              <h3>Event Details</h3>
              <div className="form-group">
                <label>Number of Guests</label>
                <input type="text" name="guests" placeholder="Enter number of guests" />
              </div>

            </div>

            <div className="form-section">
              <div className="form-group">
                <label>Special Dietary Requirements or Notes</label>
                <textarea name="notes" rows="4" placeholder="Please let us know about any dietary restrictions, accessibility needs, or special requests..."></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-large">SUBMIT RSVP</button>
          </form>
          <div className="rsvp-form-decoration-right">
            <img 
              src="/images/decorationleaf.png" 
              alt="Decorative leaf" 
              style={{height: '85px', width: '85px', objectFit: 'contain'}} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RSVP;