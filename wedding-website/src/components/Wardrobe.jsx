import './Wardrobe.css';

const Wardrobe = () => {
  return (
    <div className="wardrobe">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">Wardrobe</h1>
          <p className="subtitle">Dress code and outfit suggestions for each event</p>
        </div>
        
        <div className="content-placeholder">
          <div className="placeholder-img" style={{height: '400px'}}>
            [Wardrobe Guidelines & Suggestions]
          </div>
          <p className="placeholder-text">
            This page will provide detailed dress code information and outfit 
            suggestions for all wedding events, including color palettes and traditional attire guidance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wardrobe;