import React from 'react';
import './App.css';
import Profile from './Profile/Profile';

function App() {
  return (
    <div className="App">
     <Profile  bio="coach" proffession="gomycode">
      <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" />
      </Profile>
    </div>
  );
}

export default App;
