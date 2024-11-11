import React from 'react';
import Livehouse from './Livehouse/Livehouse';
import "./LivehouseList.css";

function LivehouseList({ livehouses }) {
  return (
    <div className="livehouse-list">
      {livehouses.map(livehouse => (
        <Livehouse livehouse={livehouse} key={livehouse.id} />
      ))}
    </div>
  );
}

export default LivehouseList;
