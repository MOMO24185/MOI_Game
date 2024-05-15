import React, { useEffect, useState } from 'react';

const EyeGather = () => {
  const [isWebGazerReady, setIsWebGazerReady] = useState(false);

  useEffect(() => {
    const initWebGazer = async () => {
      // Load WebGazer script dynamically
      const webgazerScript = document.createElement('script');
      webgazerScript.src = 'https://webgazer.cs.brown.edu/webgazer.js';
      webgazerScript.async = true;
      document.body.appendChild(webgazerScript);

      // Wait for WebGazer to be ready
      await new Promise((resolve, reject) => {
        webgazerScript.onload = resolve;
        webgazerScript.onerror = reject;
      });

      // Start WebGazer
      webgazer.setRegression('ridge'); // Set the regression algorithm
      webgazer.setTracker('clmtrackr', {
        // Set the tracker algorithm and its parameters
        smoothingFactor: 0.8, // Adjust the smoothing factor (0.0 - 1.0)
        minDetectionConfidence: 0.3, // Adjust the minimum detection confidence (0.0 - 1.0)
        maxFaces: 1, // Set the maximum number of faces to track
      });
      webgazer.begin();

      // Set the WebGazer ready state
      setIsWebGazerReady(true);
    };

    initWebGazer();

    return () => {
      // Clean up when component unmounts
      webgazer.end();
    };
  }, []);


  return (
    <div>
    </div>
  );
};

export default EyeGather;