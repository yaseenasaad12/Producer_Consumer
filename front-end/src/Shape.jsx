import React from 'react';

const Shape = ({ type }) => {
  return (
    <div className={`shape ${type}`}>
      {type === 'machine' && <div>Machine</div>}
      {type === 'queue' && <div>Queue</div>}
      {type === 'link' && <div>Link</div>}
    </div>
  );
};

export default Shape;