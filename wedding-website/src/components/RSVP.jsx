import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RSVP.css';

const RSVP = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayMessage, setOverlayMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [attendance, setAttendance] = useState(''); // Changed back to attendance
  const navigate = useNavigate();

  const handleAttendanceChange = (event) => {
    setAttendance(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('first_name', event.target.first_name.value);
    formData.append('last_name', event.target.last_name.value);
    formData.append('phone', event.target.phone.value);
    formData.append('attendance', event.target.attendance.value);
    formData.append('guests', event.target.guests.value);
    formData.append('notes', event.target.notes.value);

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwcYQq916KkjBsacg7PwggRdsqarfHayiVyBiIc-YyLlN7ctZSxgXjJQTnTVRYjtf4o/exec', {
        method: 'POST',
        body: formData
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);
      
      // For Google Apps Script, we can't read the response due to CORS
      // But if the request was sent successfully (status 200), we assume success
      if (response.ok) {
        // Show success overlay
        setOverlayMessage('RSVP submitted successfully!');
        setIsSuccess(true);
        setShowOverlay(true);
        
        // Reset form
        event.target.reset();
        setAttendance('');
        
        // Redirect to homepage after 3 seconds
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        // Show error overlay
        setOverlayMessage(`Failed to submit RSVP. Server returned status: ${response.status}. Please try again.`);
        setIsSuccess(false);
        setShowOverlay(true);
      }
    } catch (error) {
      console.error('Network error details:', error);
      // Show error overlay
      setOverlayMessage('Error submitting RSVP. Please check your internet connection and try again.');
      setIsSuccess(false);
      setShowOverlay(true);
    }
  };

  const closeOverlay = () => {
    setShowOverlay(false);
    if (isSuccess) {
      navigate('/');
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
                <label>Will you be attending? *</label>
                <div className="radio-group">
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="attendance"  // Changed back to attendance
                      value="yes" 
                      required 
                      onChange={handleAttendanceChange}  // Changed back to handleAttendanceChange
                      checked={attendance === 'yes'}
                    />
                    <span>Yes, I'll be there!</span>
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="attendance"  // Changed back to attendance
                      value="no" 
                      required 
                      onChange={handleAttendanceChange}  // Changed back to handleAttendanceChange
                      checked={attendance === 'no'}
                    />
                    <span>Sorry, I can't make it</span>
                  </label>
                </div>
              </div>
              
              {/* Number of Guests field - disabled when attendance is 'no' */}
              <div className="form-group">
                <label>Number of Guests</label>
                <input 
                  type="text" 
                  name="guests" 
                  placeholder="Enter number of guests" 
                  disabled={attendance === 'no'}
                />
                {attendance === 'no' && (
                  <small className="field-disabled-message">This field is disabled because you've indicated you can't attend.</small>
                )}
              </div>
            </div>

            {/* Special Dietary Requirements or Notes section - disabled when attendance is 'no' */}
            <div className={`form-section ${attendance === 'no' ? 'disabled-section' : ''}`}>
              <div className="form-group">
                <label>Special Dietary Requirements or Notes</label>
                <textarea 
                  name="notes" 
                  rows="4" 
                  placeholder="Please let us know about any dietary restrictions, accessibility needs, or special requests..."
                  disabled={attendance === 'no'}
                ></textarea>
                {attendance === 'no' && (
                  <small className="field-disabled-message">This section is disabled because you've indicated you can't attend.</small>
                )}
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

      {/* Overlay for submission feedback */}
      {showOverlay && (
        <div className="overlay">
          <div className="overlay-content">
            <div className={`overlay-message ${isSuccess ? 'success' : 'error'}`}>
              {overlayMessage}
            </div>
            {isSuccess ? (
              <p>Redirecting to homepage...</p>
            ) : (
              <button className="btn btn-large" onClick={closeOverlay}>Close</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RSVP;