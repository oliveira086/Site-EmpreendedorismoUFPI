import React from 'react';
import { Link } from 'react-router-dom'

import Header from '../../components/Header'
import Sectors from '../../components/Sectors';
import EventsCarousel from '../../components/EventsCarousel';
import OurTeam from '../../components/OurTeam';

function HomePage() {
  return (
    <div>

      <Header/>
      <Sectors />

      <EventsCarousel />

      <OurTeam />
    </div>
  );
}

export default HomePage;