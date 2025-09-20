import './Cards.css';

const Cards = () => {
  return (
    <div className="cards">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">Cards</h1>
          <p className="subtitle">Wedding invitations and special announcements</p>
        </div>
        
        <div className="content-placeholder">
          <div className="placeholder-img" style={{height: '400px'}}>
            [Wedding Cards & Invitations]
          </div>
          <p className="placeholder-text">
            This page will showcase the beautiful wedding invitation cards 
            and other special announcements for the celebration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;