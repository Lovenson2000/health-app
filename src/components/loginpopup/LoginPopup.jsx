import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import './loginPopup.scss';

function LoginPopup() {
  const [popupVisible, setPopupVisible] = useState(true);

  return (
    <div className={popupVisible ? "login-popup-container": "login-popup-container close"}>
      <span onClick={() => setPopupVisible(false)}>
        <IoCloseSharp />
      </span>
      <p>You're now logged in and can make appointments</p>
    </div>
  );
}

export default LoginPopup;
