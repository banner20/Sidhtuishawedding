import './Wardrobe.css';
import { useState } from 'react';

const Wardrobe = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const wardrobeImages = [
    {
      id: 1,
      fileName: "Wdunesandtunes.png",
      title: "Dunes and Tunes Attire",
      description: "Desert-inspired outfits with earthy tones and comfortable fabrics for dancing under the stars",
      rotation: "rotate(-1.5deg)"
    },
    {
      id: 2,
      fileName: "Wgoldenhour.png",
      title: "Golden Hour Elegance",
      description: "Warm, sophisticated attire perfect for capturing those magical golden hour moments",
      rotation: "rotate(2.5deg)"
    },
    {
      id: 3,
      fileName: "Wmoonlightsoiree.png",
      title: "Moonlight Soiree Style",
      description: "Evening formal wear with elegant silhouettes for a romantic moonlit celebration",
      rotation: "rotate(-0.5deg)"
    },
    {
      id: 4,
      fileName: "Woasisoflove.png",
      title: "Oasis of Love Outfit",
      description: "Flowing, romantic attire that captures the essence of love in a serene oasis setting",
      rotation: "rotate(1.8deg)"
    }
  ];
  return (
    <div className="wardrobe">
      <div className="container">
        <div className="wardrobe-decoration-tulip">
          <img 
            src="/images/decorationtulip.png" 
            alt="Decorative tulip" 
            style={{height: '120px', width: '120px', objectFit: 'contain'}} 
          />
        </div>
        <div className="page-header">
          <h1 className="section-title">Wardrobe</h1>
          <p className="subtitle">Dress code and outfit suggestions for each event</p>
        </div>
        
        <div className="cards-gallery">
          {wardrobeImages.map((card) => (
            <div 
              key={card.id} 
              className="card-item" 
              data-stagger="200"
              style={{ transform: card.rotation }}
              onClick={() => setSelectedCard(card)}
            >
              <div className="card-image-container">
                <img 
                  src={`/images/Wardrobe/${card.fileName}`}
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
          <div className="wardrobe-decoration-fan">
            <img 
              src="/images/decorationfan.png" 
              alt="Decorative fan" 
              style={{height: '100px', width: '100px', objectFit: 'contain'}} 
            />
          </div>
          <p>
            These outfit suggestions will help you choose the perfect attire for each celebration, 
            ensuring comfort and style throughout our special events.
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
                src={`/images/Wardrobe/${selectedCard.fileName}`}
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

export default Wardrobe;