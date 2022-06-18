import React from 'react';
import fish from "../images/tuna.jpeg";

function ImageBar() {
  return (
    <div>
     <img src={fish} alt="fish" width= "100%" height="300"/>
    </div>
  )
}
export default ImageBar;