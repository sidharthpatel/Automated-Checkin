import React from 'react';
import WebCam from 'react-webcam';

const videoConstraints = {
  width: 500,
  height: 500,
  facingMode: "user"
};

function App() {

  const webcamRef = React.useRef(null);
  
  return(
    <div>
      <WebCam
        audio={false}
        height={200}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={220}
        videoConstraints={videoConstraints}
      />
    </div>
  )
}

export default App;