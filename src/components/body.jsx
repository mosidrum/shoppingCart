import React from 'react'
import mainpics from '../assets/image2.jpg'

export const Body = () => {
  return (
    <div className="mainpage">
      <div>
        <img className='mainpics' src={mainpics} alt='cloth' />
      </div>
      <div className="maintext">
        <h1>WEAR FITS</h1>
        <h4>
          Our styles are just simply amazing; the fabric colours, the
          combination of styles, could turn you around and make you classy,
          trendy and sought after.<p>Choose quality over quantity. Having loads of cheap clothes that wear out and go out of style quickly does not reflect a wealthy lifestyle. Focus on buying quality pieces that are versatile and won’t go out of style.</p>
        </h4>
      </div>
    </div>
  );
}


