import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/hello'>Hello</Link></li>
        <li><Link to='/world'>World</Link></li>
      </ul>
    </nav>
  </header>
);
export default Home; 
