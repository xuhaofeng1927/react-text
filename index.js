import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
var h1 = (
  <div>
    <h1>这是欣小萌</h1>
    <div className = "box">
      <img src="https://cdn.jsdelivr.net/gh/xuhaofeng1927/react-text@master/img/1578933508726.jpg" alt=""/>
    </div>
    <div className = "box">
      <img src="https://cdn.jsdelivr.net/gh/xuhaofeng1927/react-text@master/img/9b7010d75cf6df3573c291d7bd2e337e5bd5b82a.jpg" alt=""/>
    </div>
    <div className = "box">
      <img src="https://cdn.jsdelivr.net/gh/xuhaofeng1927/react-text@master/img/f9b631954bf2ac3f551dae898cc2e8b028e2cf6e.png" alt=""/>
    </div>
  </div>
)
render(h1, document.getElementById('root'));
