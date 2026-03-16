import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubscriptionBanner from './SubscriptionBanner';
import Commercials from './Commercials';
import LandingHero from './LandingHero';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscriptionBanner />} />
        <Route path="/commercials" element={<Commercials />} />
        <Route path="/landinghero" element={<LandingHero />} />
      </Routes>
    </BrowserRouter>
  );
}
