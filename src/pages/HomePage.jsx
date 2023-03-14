import React from 'react';
import Menu from '../components/Menu';
import Timer from '../components/Timer';

function HomePage() {
  return (
    <div className='bg-gray-400 h-screen w-screen'>
      <Menu />
      <Timer start={0} ms={1000}/>;
    </div>
  );
}

export default HomePage;