import React, { useEffect, useRef } from "react";
import './App.css';

function App() {
  const videoRef = useRef(null);

  const getVideo = () => {
    navigator.mediaDevices
	.getUserMedia({
	  video: {width: 1280, height: 720}
	})
	.then(stream => {
	  let video = videoRef.current;
	  video.srcObject = stream;
	  video.play();
	})
	.catch(err => {
	  console.error(err);
	})
  }
  useEffect(() => {
    getVideo();
  }, [videoRef])
  
  return (
    <div className="App">
	<div className="camera">
	  <video ref={videoRef}></video>
	  <button>SNAP!</button>
	</div>
    </div>
  );
}

export default App;
