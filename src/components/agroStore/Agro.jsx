import React from 'react'
import Header from '../Header/Header'
import HeadeLogoField from '../Header-logo-field/HeaderLogoField'
import SubAgro from '../subAgro/subAgro'
import Footer from '../Footer/Footer'

import './agro.css'

export default function Agro() {
  return (
    <div className="header-logo">
        <div className="header-logo-field">
            <HeadeLogoField/>
        </div>

        <div className="container">
            <Header/>


            <div className='main-field-agro'>
                <div className="field-agro-slider">
                    <div className="agro-slider-btn">
                        <img className='agro-slider-btn-left' src="img/LeftBtnSliderArgo.svg" alt="" />
                    </div>
                    <div className="agro-slider-wrapper">
                        <div className="agro-slider-wrapper-card agro-slider-card1">
                            <h3>Название</h3>
                        </div>
                        <div className="agro-slider-wrapper-card agro-slider-card2">
                            <h3>Название</h3>
                        </div>
                        <div className="agro-slider-wrapper-card agro-slider-card3">
                            <h3>Название</h3>
                        </div>
                    </div>
                    <div className="agro-slider-btn">
                        <img className='agro-slider-btn-right' src="img/RightBtnSliderArgo.svg" alt="" />
                    </div>
                </div>
                <div className="agro-seasonal">
                    <h3 className="agro-seasonal-title">Сезонное</h3>
                    <div className="agro-seasonal-flex">
                        <div className="agro-seasonal-card">
                            <div className="agro-seasonal-card-container">
                                <img src="img/seasonal-carrot.png" alt="" />
                                <p className="seasonal-card-name">Морковь</p>
                                <p className="seasonal-card-weight">1кг</p>
                                <p className="seasonal-card-price">129р</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </div>
  )
}
