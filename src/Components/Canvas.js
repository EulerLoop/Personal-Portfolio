import React from 'react'

class Canvas extends React.Component {
  componentWillMount() {
    if(typeof window !== 'undefined') {
      const script = document.createElement("script");
      script.src = "./particles.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <canvas id='canvas'></canvas>
    );
  }
}

export default Canvas
