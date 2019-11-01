import * as React from 'react';

import './style.scss';

const getRandomInt = (max) =>
  Math.floor(Math.random() * Math.floor(max));

const images = [...Array(10)].map(() => `https://picsum.photos/id/${getRandomInt(100)}/600/420`);

const slides = images.map((image, idx) =>
  <div key={image + idx}>
  <input type='radio' name='radio-btn' id={`img-${idx}`} defaultChecked={idx === 0}/>
  <li className='slide-container'>
    <div className='slide'>
      <img src={image}/>
    </div>
    <div className='nav'>
      <label htmlFor={`img-${ (idx - 1) < 0 ? images.length : idx - 1}`} className='prev'>&#x2039;</label>
      <label htmlFor={`img-${(idx + 1) > images.length ? 0 : idx + 1}`} className='next'>&#x203a;</label>
    </div>
  </li>
</div>)

const labels  = images.map((image, idx) => (
      <label key={image + idx} htmlFor={`img-${idx}`} className='nav-dot' id={`img-dot-${idx}`}/>
  ));

export const Slider= () => (
  <ul className='slides'>
    {slides}

    <li className='nav-dots'>
      {labels}
    </li>
  </ul>
)