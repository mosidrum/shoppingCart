import React from 'react'

export const Footer = () => {
  return (
    <div className='footer'>
    <div className='text-footer'>
      <div className='left-footer'>
        <p>About Us</p>
          <small>
          We deal with beautiful and afordable wears,
          <br /> made specially just to fit and make you look very classy
          </small>
      </div>
      <div className='right-footer'>
        <p>Subscribe to our newsletter</p>
        <label>Email</label>
        <input type='text' name='text' placeholder='enter email' />
        <button>Subscribe</button>
      </div>
    </div>

    <div className='socials'>
      <i class='fa-brands fa-facebook'></i>
      <i class='fa-brands fa-instagram'></i>
      <i class='fa-brands fa-twitter'></i>
      <i class='fa-brands fa-google'></i>
    </div>
  </div>
);
}

