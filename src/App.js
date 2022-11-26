import React from 'react';

import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

const App = () => {
  return (
    <section className='page'>
      <div className='countdown'>
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        />
      </div>
    </section>
  );
};

export default App;
