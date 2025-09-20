import { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (sectionId) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const faqSections = [
    {
      id: 'travel',
      icon: '✈️',
      title: 'Travel & Arrival',
      questions: [
        {
          question: 'What is the nearest airport?',
          answer: 'The closest major airports are Delhi (2.5 hour drive) & Jaipur (3.5 hour drive). There are regular domestic flights from Delhi and Mumbai, which are the main international hubs.'
        },
        {
          question: 'Do I need a visa to travel to India?',
          answer: 'For those that are not Indian nationals, you will most likely need a visa. India offers an e-Visa system for UK, US, and most international travelers. We recommend applying at least 4-6 weeks in advance (although turnaround time is usually less than a week).'
        },
        {
          question: 'How do I get from the airport to the hotel/venue?',
          answer: 'Our wedding planner will help facilitate arranging group transfers on the morning of the 18th February to Tijara. Our planner can also recommend taxi and private car hire companies for you to arrange travel for the rest of your trip. More details will be shared closer to the wedding as the hospitality team will be in touch to gather your travel details.'
        },
        {
          question: 'What if I need to get back to Delhi or want to travel onwards from the wedding?',
          answer: 'When the planning team gets in touch with you, they can help you book a car for your onward travels to whatever destination you need.'
        },
        {
          question: 'What time do I need to arrive at the event?',
          answer: 'Our first event (Haldi / Mehendi) kicks off at 12.00pm. Room check-ins are not guaranteed to be available until 2pm. If your room is not available upon arrival, the hotel staff will hold your bags and take them to your rooms when they are ready to allow for you to immerse yourself in the festivities and lunch. As such, we recommend that you are dressed and ready to go prior to arrival at the property. We will of course have areas to freshen up as needed.'
        }
      ]
    },
    {
      id: 'accommodation',
      icon: '🏨',
      title: 'Accommodation',
      questions: [
        {
          question: 'Where should I stay?',
          answer: 'We have arranged a block of rooms at Tijara Fort Palace for everyone on 18th & 19th February. We cannot wait to see you there :) For early arrivals, we have also arranged accommodation in Delhi for 14 - 18 Feb if you are arriving early. Please book early as it is peak season. Alternative options nearby are available too; see the Travel recs tab for more information.'
        },
        {
          question: 'Is accommodation included?',
          answer: 'We are so happy that you are coming from wide and far to attend our special day(s). As such, we are happily covering our guest list at our accommodation at Tijara Fort Palace for everyone on 18th & 19th February. We cannot wait to see you there :)'
        }
      ]
    },
    {
      id: 'culture',
      icon: '👗',
      title: 'Culture & Attire',
      questions: [
        {
          question: 'What should I wear?',
          answer: 'Indian weddings are vibrant! We\'ll share a dress code guide for each event – see the Wardrobe Planner tab for more information.'
        }
      ]
    },
    {
      id: 'food',
      icon: '🍽️',
      title: 'Food & Drink',
      questions: [
        {
          question: 'What kind of food will be served?',
          answer: 'Expect delicious Rajasthani and North Indian cuisine with vegetarian and non-vegetarian options. We\'ll also have international dishes for variety. Please let us know about dietary restrictions in advance when you RSVP.'
        },
        {
          question: 'Is the water safe to drink?',
          answer: 'We recommend only drinking bottled or filtered water. Bottled water will be provided at all events.'
        }
      ]
    },
    {
      id: 'weather',
      icon: '☀️',
      title: 'Weather & Packing',
      questions: [
        {
          question: 'What will the weather be like?',
          answer: 'In February, we are anticipating fairly warm days (20 - 25 degrees C / 68 - 77 degrees F) and cooler evenings (12 to 16 degrees C / 50 - 55 degrees F). We recommend packing an additional layer (sweater / jacket) for the evening events. For women - you could consider carrying a stole or shawl that will keep you warm as it will complement your traditional Indian outfit.'
        },
        {
          question: 'Anything special I should pack?',
          answer: 'Comfortable shoes (for dancing and sightseeing!), Sunscreen & sunglasses, Traditional/Indian outfits for celebrations, A light scarf/shawl (helpful for cool evenings)'
        }
      ]
    },
    {
      id: 'events',
      icon: '🎉',
      title: 'Wedding Events',
      questions: [
        {
          question: 'How many days should I plan to stay?',
          answer: 'Our celebrations will last 2 days.'
        },
        {
          question: 'Will there be time for sightseeing?',
          answer: 'Yes! Rajasthan is full of palaces, forts, and markets. We\'ll share recommended tours and activities for guests.'
        }
      ]
    },
    {
      id: 'money',
      icon: '💰',
      title: 'Money & Connectivity',
      questions: [
        {
          question: 'What currency is used in India?',
          answer: 'The Indian Rupee (INR). ATMs are widely available, and most hotels/shops accept credit cards. If you are planning to do street shopping in India, then we highly recommend taking out cash.'
        },
        {
          question: 'Will my phone work in India?',
          answer: 'Yes, but international roaming charges may apply. You can also buy a local SIM card or use hotel Wi-Fi.'
        }
      ]
    },
    {
      id: 'notes',
      icon: '❤️',
      title: 'Final Notes',
      questions: [
        {
          question: 'Is there a gift registry?',
          answer: 'No, we are not doing a gift registry. We are simply happy that you all will be joining us for this momentous occasion in our lives.'
        },
        {
          question: 'Who do I contact if I have more questions?',
          answer: 'Please reach out to our wedding planning team at Happy Trio at +91 7508450610 (Abhishek) and they will happily answer any additional questions you may have'
        }
      ]
    }
  ];

  return (
    <div className="faq">
      <div className="container">
        <div className="faq-header">
          <h1 className="section-title">FAQ</h1>
          <p className="subtitle">Everything you need to know about our celebration</p>
        </div>

        <div className="faq-sections">
          {faqSections.map((section) => (
            <div key={section.id} className="faq-section">
              <button 
                className={`faq-section-header ${openSections[section.id] ? 'open' : ''}`}
                onClick={() => toggleSection(section.id)}
              >
                <span className="section-icon">{section.icon}</span>
                <span className="section-title-text">{section.title}</span>
                <span className="toggle-icon">{openSections[section.id] ? '−' : '+'}</span>
              </button>
              
              {openSections[section.id] && (
                <div className="faq-section-content">
                  {section.questions.length > 0 ? (
                    section.questions.map((qa, index) => (
                      <div key={index} className="faq-item">
                        <h3 className="faq-question">Q: {qa.question}</h3>
                        <div className="faq-answer">
                          <p>{qa.answer}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="faq-item">
                      <p className="coming-soon">Details coming soon...</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;