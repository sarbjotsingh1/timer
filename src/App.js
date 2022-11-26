import React from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import './styles.css';

const App = () => {
  return (
    <section className='page'>
      <FlipClockCountdown
        className='flip-clock'
        to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
      />
    </section>
  );
};

export default App;
