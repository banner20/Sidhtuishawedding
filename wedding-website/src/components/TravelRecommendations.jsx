import './TravelRecommendations.css';
import { useState } from 'react';

const TravelRecommendations = () => {
  const [activeCity, setActiveCity] = useState('delhi');
  const [openSections, setOpenSections] = useState({});
  const [activeDay, setActiveDay] = useState('day1');

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const itineraryData = {
    day1: {
      date: 'Day 1',
      theme: 'Modern & Offbeat Delhi',
      events: [
        {
          time: 'Morning',
          period: '',
          title: 'Hauz Khas Village & Fort',
          description: 'Visit medieval ruins by a lake, surrounded by quirky cafés and boutiques.'
        },
        {
          time: 'Afternoon',
          period: '',
          title: 'Dilli Haat & Lunch',
          description: 'Explore an open-air craft bazaar with food stalls from all over India. Lunch at the stalls (regional specialties like momos from the Northeast or Kashmiri kebabs).'
        },
        {
          time: 'Evening',
          period: '',
          title: 'Gandhi Smriti & Dinner',
          description: 'Optional Gandhi Smriti visit. Sunset cocktails at The Sky High (Ansals Plaza) or Qla (Mehrauli) with fort views. Dinner at Royal China or Sagar Ratna.'
        }
      ]
    },
    day2: {
      date: 'Day 2',
      theme: 'Iconic Monuments & Green Escapes',
      events: [
        {
          time: 'Morning',
          period: '',
          title: 'Qutub Minar & Archaeological Park',
          description: 'Visit Qutub Minar (UNESCO site, 12th century tower and surrounding ruins). Stop by Mehrauli Archaeological Park nearby if time allows—peaceful, uncrowded historical ruins.'
        },
        {
          time: 'Afternoon',
          period: '',
          title: 'Humayun\'s Tomb & Lunch',
          description: 'Explore Humayun\'s Tomb, precursor to the Taj Mahal with stunning Mughal gardens. Lunch nearby at Olive Qutub (beautiful alfresco dining in a restored colonial building).'
        },
        {
          time: 'Evening',
          period: '',
          title: 'Lodhi Gardens & Dinner',
          description: 'Stroll through Lodhi Gardens, a serene park dotted with tombs. Dinner at Indian Accent (fine dining, modern Indian cuisine) or Lodi – The Garden Restaurant for a relaxed garden setting.'
        }
      ]
    },
    day3: {
      date: 'Day 3',
      theme: 'Spiritual & Cultural Delhi',
      events: [
        {
          time: 'Morning',
          period: '',
          title: 'Lotus Temple & Akshardham',
          description: 'Start at the Lotus Temple (Bahá\'í temple of worship, known for its lotus-inspired design). Highly recommend for some peace and quiet. Head to Akshardham Temple for breathtaking carvings and cultural exhibits. Head to India Gate for a stroll and photos.'
        },
        {
          time: 'Afternoon',
          period: '',
          title: 'Bangla Sahib Gurdwara & Museums',
          description: 'Head to Bangla Sahib Gurdwara (Sikh temple) to cap off the spiritual journey and soak in a different culture altogether. Visit National Museum or Crafts Museum for art, history, and culture. Lunch at Cafe Lota (regional Indian plates in a relaxed courtyard).'
        },
        {
          time: 'Evening',
          period: '',
          title: 'Connaught Place & Dinner',
          description: 'Drive through Connaught Place (CP) for colonial architecture and modern shopping. Dinner options: Bukhara (legendary Mughlai food at ITC Maurya) or Farzi Cafe (modern Indian in CP).'
        }
      ]
    }
  };

  const days = [
    { key: 'day1', label: 'DAY 1' },
    { key: 'day2', label: 'DAY 2' },
    { key: 'day3', label: 'DAY 3' }
  ];

  const gurgaonItinerary = {
    title: 'Day 3 Alternative - Gurgaon Experience',
    subtitle: 'If you\'re not feeling the Spiritual Vibes you can go a different direction with Gurgaon.',
    description: 'Explore the modern side of Delhi with shopping malls, contemporary restaurants, and urban experiences in Gurgaon.',
    sections: [
      {
        time: 'Morning – Travel & Brunch',
        activities: [
          'Drive (~45–60 mins from central Delhi).',
          'Begin with a leisurely brunch at The Grammar Room (Mehrauli, en route) or once in Gurgaon at SodaBottleOpenerWala (quirky Parsi café).'
        ]
      },
      {
        time: 'Midday – Shopping & Lifestyle',
        activities: [
          'Ambience Mall, Gurgaon – One of India\'s largest malls with international & Indian brands, indoor ice skating rink, multiplex, and tons of food options.',
          'DLF CyberHub – Trendy open-air complex filled with cafés, microbreweries, and global restaurants; great for people-watching and casual strolls.',
          'For handicrafts & design shopping: Good Earth (MG Road) – Luxury Indian lifestyle & décor store. Fabindia Experience Center (Sector 29) – Sustainable clothing, crafts, and homeware with an in-house café.'
        ]
      },
      {
        time: 'Afternoon – Relax or Explore',
        activities: [
          'Guests who enjoy nature can stop at Aravalli Biodiversity Park or Leisure Valley Park for greenery amidst the cityscape.'
        ]
      },
      {
        time: 'Evening – Dining & Nightlife',
        activities: [
          'Cocktails & dinner at CyberHub (options include The Wine Company, Imperfecto, Soi 7, and Social).',
          'For fine dining: Threesixtyone° at The Oberoi Gurgaon',
          'For a lively end: Gurgaon is known for its microbreweries (like Manhattan Bar Exchange, Quaff Brewing, Prankster, or Ministry of Beer)'
        ]
      }
    ]
  };

  return (
    <div className="travel">
      <div className="container">
        <div className="page-header">
          <div className="travel-decoration-top">
            <img 
              src="/images/decorationleaf.png" 
              alt="Decorative leaf" 
              style={{height: '100px', width: '100px', objectFit: 'contain'}} 
            />
          </div>
          <h1 className="section-title">Travel Recommendations</h1>
          <p className="subtitle">Your guide to exploring incredible destinations</p>
          
          {/* City Switcher */}
          <div className="city-switcher">
            <button 
              className={`city-btn animate-button ${activeCity === 'delhi' ? 'active' : ''}`}
              onClick={() => setActiveCity('delhi')}
            >
              DELHI
            </button>
            <button 
              className={`city-btn animate-button ${activeCity === 'jaipur' ? 'active' : ''}`}
              onClick={() => setActiveCity('jaipur')}
            >
              JAIPUR
            </button>
          </div>
        </div>
        
        <div className="travel-content">
          {activeCity === 'delhi' && (
            <>
              {/* Historical & Architectural Highlights */}
              <section className="travel-section">
                <div className="travel-section-decoration">
                  <img 
                    src="/images/decorationtulip.png" 
                    alt="Decorative tulip" 
                    style={{height: '70px', width: '70px', objectFit: 'contain'}} 
                  />
                </div>
                <div 
                  className="section-header animate-hover-glow" 
                  onClick={() => toggleSection('delhi-historical')}
                >
                  <h2 className="travel-section-title">Historical & Architectural Highlights</h2>
                  <span className={`toggle-icon ${openSections['delhi-historical'] ? 'open' : ''}`}>{openSections['delhi-historical'] ? '−' : '+'}</span>
                </div>
                
                {openSections['delhi-historical'] && (
                  <div className="section-content">
                    <div className="attraction">
                      <h3>Qutub Minar</h3>
                      <p>India's tallest surviving minaret (approx. 72 m), a UNESCO World Heritage Site with intricate Indo-Islamic carvings and surrounding archaeological ruins.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Red Fort</h3>
                      <p>Mughal architectural marvel in Old Delhi; rich carvings, museums, and beautiful gardens.</p>
                      <div className="sub-attraction">
                        <h4>Yaad-e-Jallian Jallianwala Bagh Museum at Red Fort</h4>
                        <p>It is an interactive museum or exhibition that focuses on the Jallianwala Bagh massacre of 1919. Highly recommended for history enthusiasts.</p>
                      </div>
                    </div>
                    
                    <div className="attraction">
                      <h3>National Crafts Museum</h3>
                      <p>This is a museum showcasing Indian handicrafts with an outdoor area showing various huts/dwellings from different parts of India.</p>
                      <div className="hot-tip">
                        <strong>HOT TIP:</strong> There's a lovely restaurant called Cafe Lota, which you could try even if you don't go to the museum.
                      </div>
                    </div>
                    
                    <div className="attraction">
                      <h3>Humayun's Tomb</h3>
                      <p>Another UNESCO gem, a precursor to the Taj Mahal with stunning Mughal design.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>India Gate</h3>
                      <p>Iconic war memorial and a great spot for evening strolls, picnics, and photos. Highly recommend going during early morning hours to avoid the rush.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Lotus Temple</h3>
                      <p>A serene Bahá'í temple famed for its flower-like architecture and calm ambiance.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Lodhi Gardens</h3>
                      <p>Peaceful, green expanse dotted with Lodi-era tombs; perfect for relaxation or a walk.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Hauz Khas Village & Complex</h3>
                      <p>A mix of medieval ruins and modern cafes, boutiques, and galleries in South Delhi.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Chandni Chowk & Old Delhi</h3>
                      <p>If you dare dive into one of the busiest parts of the city, this is a way to see the bustling lanes of markets and street food, full of flavors and local life.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Gandhi Smriti</h3>
                      <p>Site where Mahatma Gandhi spent his final days; now a museum dedicated to his legacy.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Akshardham Temple</h3>
                      <p>Grand Hindu temple with elaborate carvings, cultural boat ride, and musical fountain.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Bangla Sahib Gurdwara</h3>
                      <p>Peaceful spiritual atmosphere, beautiful architecture, and the chance to experience Sikhism's core principles.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Day trip to the Taj Mahal</h3>
                      <p>An obvious must-do if this is your first time in India, how could you not go visit one of the seven wonders of the world?!</p>
                    </div>
                  </div>
                )}
              </section>

              {/* Local Charm, Culture, & Shopping */}
              <section className="travel-section">
                <div className="travel-section-decoration">
                  <img 
                    src="/images/decorationfan.png" 
                    alt="Decorative fan" 
                    style={{height: '75px', width: '75px', objectFit: 'contain'}} 
                  />
                </div>
                <div 
                  className="section-header" 
                  onClick={() => toggleSection('delhi-culture')}
                >
                  <h2 className="travel-section-title">Local Charm, Culture, & Shopping</h2>
                  <span className="toggle-icon">{openSections['delhi-culture'] ? '−' : '+'}</span>
                </div>
                
                {openSections['delhi-culture'] && (
                  <div className="section-content">
                    <div className="attraction">
                      <h3>Dilli Haat & Cottage Industries Emporium</h3>
                      <p>An absolute must do to get a glimpse of India in one space. Shopping, food, rugs, carpets, accessories - this will be a great thrill! An outdoor market with artisanal crafts, regional snacks, and exposure to all of the states in India. Recommend to go during the day to avoid the rush during the evening. Highly recommend eating the momos and exploring all of the cuisines that India has to offer.</p>
                      <div className="favorites">
                        <strong>Tuisha's favs</strong> - chicken momos at Momo Mia or Sikkim House, Vada Pav from Maharashtra stall
                      </div>
                    </div>
                    
                    <div className="attraction">
                      <h3>Street-Art Tour in Lodhi Colony</h3>
                      <p>Vibrant murals and creative energy for a contemporary touch to Delhi's cultural palette.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Khan Market</h3>
                      <p>Boutiques + cool cafés. Tuisha's favourite market</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Janpath</h3>
                      <p>LOVELY street shopping. Affordable souvenirs, jewelry. Haggle your way here! Cash only</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Shahpur Jat/Hauz Khas Market</h3>
                      <p>Quirky designer stores, murals, cafes.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>GK M block market</h3>
                      <p>For last minute wedding shopping</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Lajpat Nagar market</h3>
                      <p>For last minute wedding shopping</p>
                    </div>
                  </div>
                )}
              </section>

              {/* Dining & Culinary Experiences */}
              <section className="travel-section">
                <div 
                  className="section-header" 
                  onClick={() => toggleSection('delhi-dining')}
                >
                  <h2 className="travel-section-title">Dining & Culinary Experiences</h2>
                  <span className="toggle-icon">{openSections['delhi-dining'] ? '−' : '+'}</span>
                </div>
                
                {openSections['delhi-dining'] && (
                  <div className="section-content">
                    <h3 className="subsection-title">Iconic & Local Eateries</h3>
                    
                    <div className="attraction">
                      <h3>Karim's (Lodhi)</h3>
                      <p>Legendary Mughlai food, serving kebabs, biryanis, curries, and more since 1913. Meat lovers - don't miss this</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Aap ki Khatir</h3>
                      <p>Melt in your mouth mutton seekhs and kakoris. You do need to be seated in the car for this one as the food comes to you served up HOT in your car. Good alternative - Azam's Mughlai in Khan Market (no car needed)</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Moti Mahal</h3>
                      <p>Beloved birthplace of butter chicken, dal makhani, and tandoori classics.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Sagar Ratna / Carnatic Cafe</h3>
                      <p>Amazing South Indian food at a very affordable price!</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Lajpat Nagar - Chole Bhature</h3>
                      <p>Every Delhites go-to</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Khan Chacha</h3>
                      <p>Want real chicken tikka instead of UK's "chicken tikka masala" - this old gem in Khan Market is a crowd pleaser.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Bengali Sweet Shop (South Extension)</h3>
                      <p>Gol gappe, aloo tikki, papdi chaat, bhel puri, sev puri - CHAAT galore</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Coast Cafe</h3>
                      <p>Really cute casual dining with amazing coastal South Indian food (no alcohol served here)</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Cafe Lota</h3>
                      <p>Mentioned earlier with the National Crafts Museum</p>
                    </div>
                    
                    <div className="honorary-mentions">
                      <h4>Honorary Mentions</h4>
                      <p>Rajinder da Dhaba, Havemore - Pandora Road Market for butter chicken (on the sweeter side), Nizam's Kathi - Defence Colony, 36 Chowrangee Lane</p>
                    </div>
                    
                    <h3 className="subsection-title">Fine Dining & Popular Picks</h3>
                    
                    <div className="attraction">
                      <h3>Indian Accent</h3>
                      <p>A modern fine-dining standout, often ranked India's top restaurant. Advance bookings recommended.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Royal China</h3>
                      <p>Phenomenal Indo-Chinese cuisine that offers a lot of the Trehan's favourites. Advance bookings recommended.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Comorin</h3>
                      <p>Contemporary Indian food in Gurgaon. Order anything - you'll leave super happy. Advance bookings recommended.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Grammar Room</h3>
                      <p>If you need a break from Indian food, then I would recommend this amazing place for a lovely brunch or even evening vibes with farm-to-table vibes. Great cocktails as well!</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Olive</h3>
                      <p>Similarly, if you need that Indian food break, stop by here for some good Italian.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Other favourites</h3>
                      <p>Bukhara, Dum Pukht, Jamun, and culinary gems in Connaught Place and Qutub areas.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>The China Kitchen</h3>
                      <p>Leaning towards more authentic Chinese food at The Hyatt Regency, Delhi.</p>
                    </div>
                    
                    <h3 className="subsection-title">Drinks & Cocktails</h3>
                    <div className="attraction">
                      <h3>Strangr - GK or Vasant Vihar</h3>
                      <p>Great cocktail spots for evening drinks</p>
                    </div>
                  </div>
                )}
              </section>

              {/* Getting Around */}
              <section className="travel-section">
                <div 
                  className="section-header" 
                  onClick={() => toggleSection('delhi-transport')}
                >
                  <h2 className="travel-section-title">Getting Around</h2>
                  <span className="toggle-icon">{openSections['delhi-transport'] ? '−' : '+'}</span>
                </div>
                
                {openSections['delhi-transport'] && (
                  <div className="section-content">
                    <div className="attraction">
                      <h3>Auto-rickshaws & Ubers</h3>
                      <p>Great for short rides; always confirm fares or use ride-hailing apps before-hand.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Private Tours</h3>
                      <p>Many Airbnb experiences available - A full-day guided rides covering Red Fort, Qutub Minar, Humayun's Tomb, India Gate, Rashtrapati Bhavan, etc., with pickup and convenience included.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Walks & Evenings</h3>
                      <p>Areas like Lodhi Gardens, Sunder Nursery and Hauz Khas Lake and Deer Park are especially lovely for evening promenades.</p>
                    </div>
                  </div>
                )}
              </section>

              {/* Recommended Hotels */}
              <section className="travel-section">
                <div 
                  className="section-header" 
                  onClick={() => toggleSection('delhi-hotels')}
                >
                  <h2 className="travel-section-title">Recommended Hotels</h2>
                  <span className="toggle-icon">{openSections['delhi-hotels'] ? '−' : '+'}</span>
                </div>
                
                {openSections['delhi-hotels'] && (
                  <div className="section-content">
                    <div className="contact-info">
                      <p>For hotel recommendations, please contact: <strong>sidharth.oberoi.22@gmail.com</strong></p>
                    </div>
                  </div>
                )}
              </section>

              {/* Delhi Travel Itinerary */}
              <section className="travel-section itinerary-section">
                <div 
                  className="section-header" 
                  onClick={() => toggleSection('delhi-itinerary')}
                >
                  <h2 className="travel-section-title">Suggested Sample Itinerary (for 2-3 Days)</h2>
                  <span className="toggle-icon">{openSections['delhi-itinerary'] ? '−' : '+'}</span>
                </div>
                
                {openSections['delhi-itinerary'] && (
                  <div className="section-content">
                    <p className="subtitle">Your guide to exploring Delhi in 2-3 days</p>
                    
                    {/* Day Tabs */}
                    <div className="day-tabs">
                      {days.map(day => (
                        <button 
                          key={day.key}
                          className={`day-tab animate-button ${activeDay === day.key ? 'active' : ''}`}
                          onClick={() => setActiveDay(day.key)}
                        >
                          {day.label}
                        </button>
                      ))}
                    </div>
                    
                    {/* Timeline Content */}
                    <div className="timeline-container">
                      <div className="timeline-header">
                        <h3 className="timeline-date">{itineraryData[activeDay].date}</h3>
                        <p className="timeline-theme">{itineraryData[activeDay].theme}</p>
                      </div>
                      
                      <div className="timeline">
                        {itineraryData[activeDay].events.map((event, index) => (
                          <div key={index} className="timeline-item">
                            <div className="timeline-time">
                              <span className="time">{event.time}</span>
                              <span className="period">{event.period}</span>
                            </div>
                            <div className="timeline-content animate-hover-lift">
                              <h4 className="event-title">{event.title}</h4>
                              <p className="event-description">{event.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Gurgaon Alternative */}
                    <div className="alternative-itinerary">
                      <h3 className="alternative-title">{gurgaonItinerary.title}</h3>
                      <p className="alternative-subtitle">{gurgaonItinerary.subtitle}</p>
                      <p className="alternative-description">{gurgaonItinerary.description}</p>
                      
                      <div className="alternative-sections">
                        {gurgaonItinerary.sections.map((section, index) => (
                          <div key={index} className="alternative-section">
                            <h4 className="section-time">{section.time}</h4>
                            <ul className="section-activities">
                              {section.activities.map((activity, actIndex) => (
                                <li key={actIndex}>{activity}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </section>
            </>
          )}
          
          {activeCity === 'jaipur' && (
            <>
              {/* Must-See Attractions & Experiences */}
              <section className="travel-section">
                <div 
                  className="section-header" 
                  onClick={() => toggleSection('jaipur-attractions')}
                >
                  <h2 className="travel-section-title">Must-See Attractions & Experiences</h2>
                  <span className="toggle-icon">{openSections['jaipur-attractions'] ? '−' : '+'}</span>
                </div>
                
                {openSections['jaipur-attractions'] && (
                  <div className="section-content">
                    <div className="attraction">
                      <h3>Hawa Mahal (Palace of Winds)</h3>
                      <p>This iconic five-story masterpiece features 953 small windows and delicate façades that resemble a honeycomb—all crafted in red and pink sandstone in 1799.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>City Palace</h3>
                      <p>A regal complex combining courtyards, pavilions, temples, and museums. Highlights include Chandra Mahal, Mubarak Mahal, and the intricately designed entrance gates.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Jantar Mantar</h3>
                      <p>A historic observatory built between 1728 and 1734, featuring the world's largest stone sundial. It's a UNESCO World Heritage Site and offers a fascinating insight into early astronomical measurement.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Amber Fort (Amer Fort)</h3>
                      <p>This majestic hilltop fort, blending Rajput and Mughal styles, houses the stunning Sheesh Mahal (Palace of Mirrors) and offers sweeping vistas of the city below.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Jaigarh Fort</h3>
                      <p>Known as Victory Fort, this sturdy fortress sits atop the Aravalli hills and features the massive Jaivana cannon. It's connected to Amer Fort by a series of subterranean passages.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Nahargarh Fort</h3>
                      <p>Perched on the ridge overlooking Jaipur, it once formed a defensive triad with Amer and Jaigarh forts. It's ideal for watching the sunset over the city.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Jal Mahal (Water Palace)</h3>
                      <p>A beautiful palace floating on Man Sagar Lake. While entry isn't allowed, the view from the lakeside or nearby Nahargarh Fort is exquisite.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Markets & Local Shopping</h3>
                      <p>Explore <strong>Johri Bazaar</strong> and <strong>Bapu Bazaar</strong> for colorful textiles, jewelry, and local handicrafts—perfect for immersive shopping experiences. <strong>Crowd heavy!</strong></p>
                    </div>
                  </div>
                )}
              </section>

              {/* Dining & Culinary Spots */}
              <section className="travel-section">
                <div 
                  className="section-header" 
                  onClick={() => toggleSection('jaipur-dining')}
                >
                  <h2 className="travel-section-title">Dining & Culinary Spots</h2>
                  <span className="toggle-icon">{openSections['jaipur-dining'] ? '−' : '+'}</span>
                </div>
                
                {openSections['jaipur-dining'] && (
                  <div className="section-content">
                    <div className="attraction">
                      <h3>Rambagh Palace – The Verandah or Suvarna Mahal</h3>
                      <p><strong>(need advanced bookings)</strong>: Elegant outdoor dining at this former royal residence offers a beautiful setting and refined experience.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Royal Fusion & Instagram-worthy Vibes</h3>
                      <p>Check out <strong>Bar Palladio</strong> and <strong>1135 AD</strong>. <strong>Baradari (inside City Palace)</strong>: A convenient lunch option while immersing in regal ambiance.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Modern Dining Options</h3>
                      <p>Other local favorites for a modern twist include <strong>Meraki Kitchen</strong>, <strong>Jaipur Modern</strong>, <strong>Shikar Bagh</strong>, and <strong>The Johri</strong>—great for both meals and evening drinks. For cocktails, <strong>Native Cocktail Room</strong>, <strong>Swinton House</strong>, or <strong>Savannah</strong> are popular picks.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Tapri Cafe</h3>
                      <p>Quick snacks, chai & indian-fav instant noodles - MAGGI!</p>
                    </div>
                  </div>
                )}
              </section>

              {/* Getting Around Jaipur */}
              <section className="travel-section">
                <div 
                  className="section-header" 
                  onClick={() => toggleSection('jaipur-transport')}
                >
                  <h2 className="travel-section-title">Getting Around Jaipur</h2>
                  <span className="toggle-icon">{openSections['jaipur-transport'] ? '−' : '+'}</span>
                </div>
                
                {openSections['jaipur-transport'] && (
                  <div className="section-content">
                    <div className="attraction">
                      <h3>Auto-rickshaws</h3>
                      <p>Ubiquitous and affordable for short distances—some are electric, too.</p>
                    </div>
                    
                    <div className="attraction">
                      <h3>Uber</h3>
                      <p>Uber is available and convenient—especially for longer trips or airport transfers.</p>
                    </div>
                  </div>
                )}
              </section>

              {/* Suggested Sample Itinerary */}
              <section className="travel-section">
                <div 
                  className="section-header" 
                  onClick={() => toggleSection('jaipur-itinerary')}
                >
                  <h2 className="travel-section-title">Suggested Sample Itinerary (2–3 Days)</h2>
                  <span className="toggle-icon">{openSections['jaipur-itinerary'] ? '−' : '+'}</span>
                </div>
                
                {openSections['jaipur-itinerary'] && (
                  <div className="section-content">
                
                <div className="itinerary-day">
                  <h3>Day 1: Royal Heritage & Iconic Landmarks</h3>
                  
                  <div className="time-block">
                    <h4>Morning:</h4>
                    <p>Explore <strong>Hawa Mahal</strong> and <strong>City Palace</strong>; you can likely take a tour on the day as you rock up – there will be dozens of tour guides that will be in your face asking you if you want one. Would recommend to better learn about what you're looking at and most tours are less than an hour long. Tours in English should not be an issue.</p>
                  </div>
                  
                  <div className="time-block">
                    <h4>Afternoon:</h4>
                    <p>Visit <strong>Jantar Mantar</strong> then enjoy lunch at <strong>Baradari</strong></p>
                  </div>
                  
                  <div className="time-block">
                    <h4>Evening:</h4>
                    <p>Shop in the <strong>bazaars</strong> and dine at <strong>Bar Palladio</strong> or <strong>Meraki Kitchen</strong></p>
                  </div>
                </div>
                
                <div className="itinerary-day">
                  <h3>Day 2: Fort Exploration & Sunset Views</h3>
                  
                  <div className="time-block">
                    <h4>Morning:</h4>
                    <p>Tour <strong>Amer Fort</strong> and <strong>Jaigarh Fort</strong></p>
                  </div>
                  
                  <div className="time-block">
                    <h4>Afternoon:</h4>
                    <p>Head to <strong>Nahargarh Fort</strong> for sunset and view <strong>Jal Mahal</strong> by the lake</p>
                  </div>
                  
                  <div className="time-block">
                    <h4>Evening:</h4>
                    <p>Casual dinner at <strong>The Verandah</strong> in Rambagh Palace</p>
                  </div>
                </div>
                
                <div className="itinerary-day">
                  <h3>Day 3: Local Gems & Quieter Spaces</h3>
                  
                  <div className="time-block">
                    <h4>Morning:</h4>
                    <p>Free time for shopping or spa</p>
                  </div>
                  
                  <div className="time-block">
                    <h4>Evening:</h4>
                    <p>Optional evening cocktails at <strong>Native Cocktail Room</strong> or <strong>Savannah</strong></p>
                  </div>
                </div>
                  </div>
                )}
              </section>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TravelRecommendations;