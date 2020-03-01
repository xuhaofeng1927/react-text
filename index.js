import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
var h1 = (
  <div>
    <h1>这是我的女朋友</h1>
    <div className = "box">
      <img src="./img/9b7010d75cf6df3573c291d7bd2e337e5bd5b82a.jpg" alt=""/>
    </div>
    <div className = "box">
      <img src="./img/1578933508726.jpg" alt=""/>
    </div>
    <div className = "box">
      <img src="" alt="./img/1578933508726.png"/>
    </div>
  </div>
)
render(h1, document.getElementById('root'));
