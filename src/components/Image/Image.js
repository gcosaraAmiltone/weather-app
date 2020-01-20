import React from 'react';

import './Image.scss';

function Image({ icon }) {
  return (
    <div className="Image">
      <img 
        src={`https://www.weatherbit.io/static/img/icons/${icon}.png`}
        alt="weatherIco"

/>
    </div>
  );
}

export default Image;
