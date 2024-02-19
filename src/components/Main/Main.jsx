import React from 'react'
import Services from './Services/Services'
import Slider from '../Slider/Slider'
import News from '../News/News'
import './main.css'

export default function Main() {
  return (
    <main className='main'>
      <div className='main-field'> 
        <div>
          <Slider/>
        </div>
        <div>
          <Services/>
        </div>
        <div>
          <News/>
        </div>
      </div>
    </main>
  )
}

