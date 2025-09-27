import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RSVP.css';

const RSVP = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayMessage, setOverlayMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [attendance, setAttendance] = useState('');
  const navigate = useNavigate();

  const handleAttendanceChange = (event) => {
    setAttendance(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Get form data
    const formData = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      phone: event.target.phone.value,
      attendance: event.target.attendance.value,
      guests: event.target.guests.value,
      notes: event.target.notes.value
    };

    // Debug logging
    console.log('=== RSVP FORM SUBMISSION ===');
    console.log('Form data:', formData);
    console.log('Attendance value:', formData.attendance);
    console.log('=== END DEBUG ===');

    // Show loading state
    setOverlayMessage('Submitting RSVP...');
    setIsSuccess(false);
    setShowOverlay(true);

    try {
      // Create FormData for submission
      const submitData = new FormData();
      submitData.append('first_name', formData.first_name);
      submitData.append('last_name', formData.last_name);
      submitData.append('phone', formData.phone);
      submitData.append('attendance', formData.attendance);
      submitData.append('guests', formData.guests);
      submitData.append('notes', formData.notes);

      // Log what we're sending
      console.log('=== SENDING TO GOOGLE APPS SCRIPT ===');
      for (let [key, value] of submitData.entries()) {
        console.log(`${key}: ${value}`);
      }
      console.log('=== END SENDING ===');

      // Submit to Google Apps Script
      const response = await fetch('https://script.google.com/macros/s/AKfycbwT8gYbIRPw80Dv12z7bDI6VJ6Pc1b1qW2s1TwN7LGsxy4FOzKIU2shlfqoFV47rzHn/exec', {
        method: 'POST',
        mode: 'no-cors',
        body: submitData
      });

      // Show success message
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
      
    } catch (error) {
      console.error('RSVP submission error:', error);
      setOverlayMessage('Error submitting RSVP. Please try again.');
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
                      name="attendance" 
                      value="Yes" 
                      required 
                      onChange={handleAttendanceChange}
                      checked={attendance === 'Yes'}
                    />
                    <span>Yes, I'll be there!</span>
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="attendance" 
                      value="No" 
                      required 
                      onChange={handleAttendanceChange}
                      checked={attendance === 'No'}
                    />
                    <span>Sorry, I can't make it</span>
                  </label>
                </div>
              </div>
              
              <div className="form-group">
                <label>Number of Guests</label>
                <input 
                  type="text" 
                  name="guests" 
                  placeholder="Enter number of guests" 
                  disabled={attendance === 'No'}
                />
                {attendance === 'No' && (
                  <small className="field-disabled-message">This field is disabled because you've indicated you can't attend.</small>
                )}
              </div>
            </div>

            <div className={`form-section ${attendance === 'No' ? 'disabled-section' : ''}`}>
              <div className="form-group">
                <label>Special Dietary Requirements or Notes</label>
                <textarea 
                  name="notes" 
                  rows="4" 
                  placeholder="Please let us know about any dietary restrictions, accessibility needs, or special requests..."
                  disabled={attendance === 'No'}
                ></textarea>
                {attendance === 'No' && (
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
