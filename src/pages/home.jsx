import React from 'react'
import { Body } from '../components/body'
import { Body2 } from '../components/body2'
import { Footer } from '../components/footer'
import '../components/body.css'

export const Home = () => {
  return (
    <div className='homepage'>
        <Body />
        <Body2 />
        <Footer />
    </div>
  )
}


