import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SubscriptionBanner from './SubscriptionBanner';
import Commercials from './Commercials';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubscriptionBanner />} />
        <Route path="/commercials" element={<Commercials />} />
      </Routes>
    </BrowserRouter>
  );
}
