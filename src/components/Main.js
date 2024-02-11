import React from 'react'
import Services from './Services'
import Slider from './Slider'

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
      </div>
    </main>
  )
}

