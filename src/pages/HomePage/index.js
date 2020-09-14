import React from 'react';
import { Link } from 'react-router-dom'

import Sectors from '../../components/Sectors';
import EventsCarousel from '../../components/EventsCarousel';
import OurTeam from '../../components/OurTeam';

function HomePage() {
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/sobre'>Quem Somos!</Link></li>
        <li><Link to='/contato'>Contato</Link></li>
        <li><Link to='/servicos'>Serviços</Link></li>
        <li><Link to='/eventos'>Eventos</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/cadastro'>Cadastro</Link></li>
        <li><Link to='/admin'>Painel do admin</Link></li>
        <li><Link to='/usuario'>Painel do usuário</Link></li>
      </ul>

      <Sectors />

      <EventsCarousel />

      <OurTeam />
    </div>
  );
}

export default HomePage;