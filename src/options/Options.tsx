import React from 'react';
import './Options.css';
 
const Options: React.FC = () => {
  return (
    <div className="Options">
      <h1>Options Page</h1>
      <div>
        <label> 
          Option:
          <input
            type="text"
          />
        </label>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Options;
