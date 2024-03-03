import React from 'react'
import logo from "../assests/live-chat_logo.png"
import "./MainStyles.css";

function WelcomePage() {
  return (
    <div className='welcome-container'>
      <img src={logo} alt="logo" className='welcome-logo' />
      <p>View and text directly to people present in online using chat rooms.</p>
    </div>
  );
}

export default WelcomePage
