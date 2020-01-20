import React from 'react';

import './Degrees.scss';

function Degrees({ temp }) {
  return (
    <div className="Degrees">
      {temp}&#176;
    </div>
  );
}

export default Degrees;
 