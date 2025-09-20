import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import TravelRecommendations from './components/TravelRecommendations';
import Cards from './components/Cards';
import Wardrobe from './components/Wardrobe';
import RSVP from './components/RSVP';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/travel" element={<TravelRecommendations />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/rsvp" element={<RSVP />} />
      </Routes>
    </Layout>
  );
}

export default App;
