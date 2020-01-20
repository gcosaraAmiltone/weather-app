import React from 'react';

import './Day.scss';

function Day({ dayName }) {
  
  return (
    <div className="Day">
      {dayName}
    </div>
  );
}

export default Day;
