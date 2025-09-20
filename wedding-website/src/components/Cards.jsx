import './Cards.css';
import { useState } from 'react';

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const cardImages = [
    {
      id: 1,
      fileName: "Dunes and tunes.png",
      title: "Dunes and Tunes",
      description: "A musical celebration under the starlit desert sky with rhythmic beats and melodic harmony",
      rotation: "rotate(-2deg)"
    },
    {
      id: 2,
      fileName: "Golden hour.png",
      title: "Golden Hour",
      description: "Capturing the magical moments when day meets night in perfect golden light",
      rotation: "rotate(3deg)"
    },
    {
      id: 3,
      fileName: "Moonlight Soiree.png",
      title: "Moonlight Soiree",
      description: "An elegant evening celebration illuminated by the gentle glow of moonbeams",
      rotation: "rotate(-1deg)"
    },
    {
      id: 4,
      fileName: "Oasis of Love.png",
      title: "Oasis of Love",
      description: "A sanctuary of romance and joy where hearts unite in eternal celebration",
      rotation: "rotate(2deg)"
    }
  ];

  return (
    <div className="cards">
      <div className="container">
        <div className="cards-decoration-fan">
          <img 
            src="/images/decorationfan.png" 
            alt="Decorative fan" 
            style={{height: '130px', width: '130px', objectFit: 'contain'}} 
          />
        </div>
        <div className="page-header">
          <h1 className="section-title">Wedding Cards</h1>
          <p className="subtitle">Our beautiful wedding invitations and announcements</p>
        </div>
        
        <div className="cards-gallery">
          {cardImages.map((card) => (
            <div 
              key={card.id} 
              className="card-item" 
              data-stagger="200"
              style={{ transform: card.rotation }}
              onClick={() => setSelectedCard(card)}
            >
              <div className="card-image-container">
                <img 
                  src={`/images/Cards/${card.fileName}`}
                  alt={card.title}
                  className="card-image"
                />
              </div>
              <div className="card-info">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="cards-note">
          <div className="cards-decoration-leaf">
            <img 
              src="/images/decorationleaf.png" 
              alt="Decorative leaf" 
              style={{height: '85px', width: '85px', objectFit: 'contain'}} 
            />
          </div>
          <p>
            These cards represent the beginning of our journey together and the invitation 
            for our loved ones to celebrate this special milestone with us.
          </p>
        </div>
      </div>

      {/* Overlay Preview */}
      {selectedCard && (
        <div className="card-overlay" onClick={() => setSelectedCard(null)}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setSelectedCard(null)}>
              ×
            </button>
            <div className="overlay-image-container">
              <img 
                src={`/images/Cards/${selectedCard.fileName}`}
                alt={selectedCard.title}
                className="overlay-image"
              />
            </div>
            <div className="overlay-info">
              <h2 className="overlay-title">{selectedCard.title}</h2>
              <p className="overlay-description">{selectedCard.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cards;