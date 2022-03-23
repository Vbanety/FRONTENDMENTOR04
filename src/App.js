import React from 'react'
import qrCode from './assets/image-qr-code.png'

function App() {
  return (
    <>
      <div className="container">
        <img src={qrCode} alt="qr-code" />
        <div>
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
      <br />
        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Vinicius Batista</a>.
        </div>
    </>
  );
}

export default App;
