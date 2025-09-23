import './AboutUs.css';
import { useState, useEffect } from 'react';

const AboutUs = () => {
  // Carousel state and logic
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesPerView, setImagesPerView] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  
  // All carousel images (excluding the ones already used in main content)
  const originalImages = [
    { src: '/images/About us/IMG_0433.jpg', alt: 'Our first trip to India together, 2023', rotation: 'rotate(2deg)' },
    { src: '/images/About us/IMG_0579.jpg', alt: 'Our first trip to Jaipur together, 2023', rotation: 'rotate(-1deg)' },
    { src: '/images/About us/IMG_2390.jpg', alt: 'Day after we got engaged in Marrakesh, 2025', rotation: 'rotate(3deg)' },
    { src: '/images/About us/IMG_8754.jpg', alt: 'Exploring Lisbon, 2022', rotation: 'rotate(-2deg)' },
    { src: '/images/About us/IMG_9088.jpg', alt: 'Offroading in the Agafay desert, 2025', rotation: 'rotate(1deg)' },
    { src: '/images/About us/IMG_9262.jpg', alt: 'Getting delicious sandwiches together in Florence, 2024', rotation: 'rotate(-3deg) scaleY(-1)' },
    { src: '/images/About us/IMG_9632.jpg', alt: 'Cocktail making class, 2023', rotation: 'rotate(2deg)' },
    { src: '/images/About us/f3282601-cbaa-4807-8c70-afa659c56a70.jpg', alt: 'Eating gelato in London, 2024', rotation: 'rotate(-1deg)' },
    { src: '/images/About us/coupleanimation.GIF', alt: 'Animated Memory', rotation: 'rotate(0deg)' },
    { src: '/images/About us/Hanging out in Paris, 2025.JPG', alt: 'Hanging out in Paris, 2025', rotation: 'rotate(0deg)' }
  ];
  
  // Create infinite carousel by duplicating images
  const carouselImages = [...originalImages, ...originalImages, ...originalImages];
  
  // Handle responsive images per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImagesPerView(1);
      } else if (window.innerWidth <= 1024) {
        setImagesPerView(2);
      } else {
        setImagesPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Initialize carousel to start from the middle set of images
  useEffect(() => {
    setCurrentImageIndex(originalImages.length);
  }, [originalImages.length]);
  
  // Auto-scroll functionality with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => prev + 1);
    }, 4000); // Auto-scroll every 4 seconds
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle infinite loop transitions
  useEffect(() => {
    const handleInfiniteLoop = () => {
      if (currentImageIndex >= originalImages.length * 2) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex(originalImages.length);
          setIsTransitioning(false);
        }, 500);
      } else if (currentImageIndex < originalImages.length) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentImageIndex(originalImages.length * 2 - imagesPerView);
          setIsTransitioning(false);
        }, 500);
      }
    };
    
    if (currentImageIndex !== originalImages.length) {
      handleInfiniteLoop();
    }
  }, [currentImageIndex, originalImages.length, imagesPerView]);
  
  const handlePrevImage = () => {
    setCurrentImageIndex(prev => prev - 1);
  };
  
  const handleNextImage = () => {
    setCurrentImageIndex(prev => prev + 1);
  };
  
  const openImageOverlay = (image) => {
    setSelectedImage(image);
  };
  
  const closeImageOverlay = () => {
    setSelectedImage(null);
  };
  return (
    <div className="about-us">
      <div className="container">
        <div className="page-header">
          <h1 className="section-title">About Us</h1>
        </div>
        
        <div className="about-content">
          {/* Opening Story with Image */}
          <div className="story-intro">
            <div className="story-text">
              <p>
                We met as many do in this modern age, through Hinge. What was meant to be an encounter in 
                mid-December 2021, ended up getting pushed due to COVID and wanting to be cautious before 
                Sidh was traveling to the US; Tuisha thought perhaps Sidh was disinterested given he had 
                postponed the date. However, right as Sidh came back from the US, he messaged Tuisha and 
                asked to meet, so they finally had their first date on NYE 2021 at a pub in London.
              </p>
            </div>
            <div className="story-image">
              <div className="polaroid">
                <img 
                  src="/images/About us/date.jpg" 
                  alt="First Date Photo" 
                  style={{height: '300px', width: '250px', objectFit: 'cover', transform: 'scaleY(-1)'}} 
                />
              </div>
            </div>
          </div>

          {/* Journey Section */}
          <div className="story-journey">
            <div className="journey-image">
              <div className="polaroid">
                <img 
                  src="/images/About us/travel.jpg" 
                  alt="Travel Photo" 
                  style={{height: '280px', width: '220px', objectFit: 'cover'}} 
                />
              </div>
              <div className="decoration-small">
                <img 
                  src="/images/decoration.png" 
                  alt="Decorative Element" 
                  style={{height: '80px', width: '80px', objectFit: 'contain'}} 
                />
              </div>
            </div>
            <div className="journey-text">
              <p>
                The two got off to a slow start as Tuisha was getting her Masters and wanted to take things slow 
                and Sidh was taking things slow in his own way. However, the two bonded over their passion for 
                food, drinks, pop culture, and love for traveling. Over the first 6 months they increasingly spent 
                more and more time together and began traveling to Edinburgh, Paris, Lisbon, and the US all 
                within their first year of dating.
              </p>
              <p>
                As time has progressed, they have become each others foundation to vent to each other, 
                problem-solve, comfortably binge television shows together, seek new restaurants, and 
                challenge each other to who is the better cook in the kitchen. They have now been to 10+ 
                countries together and intend to keep exploring the world in new ways.
              </p>
            </div>
          </div>

          {/* Background Section with Side Images */}
          <div className="story-backgrounds">
            <div className="background-decoration-left">
              <img 
                src="/images/decorationtulip.png" 
                alt="Decorative tulip" 
                style={{height: '90px', width: '90px', objectFit: 'contain'}} 
              />
            </div>
            <div className="background-content">
              <div className="background-text">
                <h3>Our Different Worlds</h3>
                <p>
                  We both come from Punjabi families, but our upbringings couldn't have been more different. 
                  Sidh spent most of his life in the US — in Utah — while Tuisha grew up in the heart of Delhi. 
                  (South Delhi... of course needs a mention!)
                </p>
              </div>
              
              <div className="background-images">
                <div className="sidh-section">
                  <div className="polaroid small">
                    <img 
                      src="/images/About us/sidh.jpg" 
                      alt="Sidh's World" 
                      style={{height: '200px', width: '160px', objectFit: 'cover'}} 
                    />
                  </div>
                  <div className="background-description">
                    <p>
                      Sidh is all indie-rock pop with strong female vocals, back-to-back movies, and a tight-knit group 
                      of North American friends. He's super close to his brother, and while on the surface they both 
                      come off as thoroughly American, there's a strong, quiet connection to their Punjabi roots.
                    </p>
                  </div>
                </div>
                
                <div className="tuisha-section">
                  <div className="polaroid small">
                    <img 
                      src="/images/About us/TUISHA SOLO PIC.jpg" 
                      alt="Tuisha's World" 
                      style={{height: '200px', width: '160px', objectFit: 'cover'}} 
                    />
                  </div>
                  <div className="background-description">
                    <p>
                      We're a bit of an opposites-attract situation. I was always considered the soft-spoken one in 
                      Delhi — which says a lot, considering how bold, loud, and vibrant the city is. But something 
                      about stepping into Sidh's world, I guess I wasn't as quiet as I thought I was!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Together Section */}
          <div className="story-together">
            <div className="together-decoration-leaf">
              <img 
                src="/images/decorationleaf.png" 
                alt="Decorative leaf" 
                style={{height: '110px', width: '110px', objectFit: 'contain'}} 
              />
            </div>
            <div className="together-image">
              <div className="polaroid large">
                <img 
                  src="/images/About us/coupletogether.jpg" 
                  alt="Couple Together" 
                  style={{height: '350px', width: '280px', objectFit: 'cover'}} 
                />
              </div>
            </div>
            <div className="together-text">
              <p>
                Tuisha is the type to watch the same movie a hundred times if she love it. Tuisha laughs too 
                loud, he's calm and focused. I'm all over the place, he's methodical and productive. But 
                somewhere in all of that difference, we found such ease and joy with each other.
              </p>
              <p className="conclusion">
                We'd love for our wedding to reflect that — something beautiful and full of character, but also 
                deeply personal and uniquely us.
              </p>
            </div>
          </div>

          {/* Image Carousel Section */}
          <div className="carousel-section">
            <h3 className="carousel-title">Our Journey in Pictures</h3>
            <div className="image-carousel">
              <div className="carousel-container">
                <button 
                  className="carousel-btn prev-btn" 
                  onClick={handlePrevImage}
                >
                  ‹
                </button>
                
                <div className="carousel-images">
                  <div 
                    className="carousel-track"
                    style={{ 
                      transform: `translateX(-${currentImageIndex * (100 / imagesPerView)}%)`,
                      transition: isTransitioning ? 'none' : 'transform 0.5s ease-in-out'
                    }}
                  >
                    {carouselImages.map((image, index) => (
                      <div key={index} className="carousel-item">
                        <div 
                          className="carousel-polaroid"
                          onClick={() => openImageOverlay(image)}
                        >
                          <img 
                            src={image.src} 
                            alt={image.alt}
                            style={{ transform: image.rotation }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  className="carousel-btn next-btn" 
                  onClick={handleNextImage}
                >
                  ›
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Image Overlay */}
      {selectedImage && (
        <div className="image-overlay" onClick={closeImageOverlay}>
          <div className="overlay-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeImageOverlay}>
              ×
            </button>
            <div className="overlay-image-container">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt} 
                className="overlay-image"
              />
            </div>
            <div className="overlay-caption">
              <h3>{selectedImage.alt}</h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutUs;