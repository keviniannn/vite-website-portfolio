import React from 'react';

import Header from '../components/Header';

const Noted = ({ }) => {
  return (
    <div className='body'>
      <div className="fake-window">
        <Header />
        <div className='container'>
          <div className='top'>
            <h2>Noted</h2>
          </div>
          <div className='projects'>
            <h3>A Chromium extension created with the use of HTML, CSS, JavaScript. This program is a simple to use note application, that allows users to add notes, delete them, and search for key words.</h3>
            <img className='photo' src='/noted/noted1.png' />
            <img className='photo' src='/noted/noted2.png' />
            <img className='photo' src='/noted/noted3.png' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noted;
