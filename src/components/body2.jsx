import React from 'react'
import image1 from '../assets/model.jpg'
import image2 from '../assets/model3.jpg'

export const Body2 = () => {
  return (
    <div className='body2'>
      <div className="first">
        <div>
            <p>
            "What makes a well dressed woman? If you're trying to be elegant, start
            by wearing classic styles of clothing, like knee-length skirts and
            tailored button-down shirts, and choosing clothes made from
            high-quality fabrics, like silk and satin. Never too baggy, never too
            tight; the clothing of an elegant woman looks like it was made to fit
            just her."
            </p>
        </div>
        <div>
            <img src={image1} alt='frame 1' />
        </div>
      </div>
      <div className="second">
        <div>
            <img src={image2} alt='frame 2' />
        </div>
        <div>
            <p>
            It’s almost impossible to be classy without being stylish. A classy
            man uses fashion as a tool when it comes to finding specific wardrobe
            pieces that would highlight his personal style while ensuring they are
            appropriate. He understands the exact kind of clothes that are more
            appropriate for him in terms of shape, size, and colors.
            </p>
        </div>
      </div>
    </div>
  )
}
