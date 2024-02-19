import React from 'react'
import Services from './Services/Services'
import Slider from '../Slider/Slider'
import News from '../News/News'
import './main.css'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import HeadeLogoField from '../Header-logo-field/HeaderLogoField'

export default function Main() {
  return (
    <>
      <div className="header-logo">
        <div className="header-logo-field">
          <HeadeLogoField />
        </div>

        <Header />
        <main className='main'>
          <div className='main-field'>
            <div>
              <Slider />
            </div>
            <div>
              <Services />
            </div>
            <div>
              <News />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

