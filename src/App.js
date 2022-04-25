import React from 'react';
import './App.css';
import Edu from './Component/Edu';
import Personal from './Component/Personal';
import Ref from './Component/Ref';
import Work from './Component/Work';


function App() {
  return (
    <div className="body">
      <h1 className="header">let us know about you</h1>
      <div className='form'>
        < Personal />
        < Edu />
        < Work />
        < Ref />
      </div>
      <button>SUBMIT</button>
    </div>
  );
}

export default App;
