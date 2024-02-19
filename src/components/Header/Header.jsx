import React from 'react'
import './header.css'

export default function Header() {
  return (
    <header>
            <div className='header-field'>
                <form className='header__form'>
                    <input className='header__form-input' type='text' placeholder='Поиск'/>
                    <a className='header__form-btn' type='submit'>
                        <img src='img/icons/Vector.svg' className='header__img-search'/>
                    </a>
                </form>
                <div className='header__account'>
                    <img src='img/icons/people_account.svg' className='header__account_img'/>
                    <p>Учетная <br/> <strong>Запись</strong> </p>
                </div>
                <div className='header__favorite'>
                    <img  className='header__favorite_img' src='img/icons/favorite.svg'/>
                </div>
                <div className='header_cart'>
                    <img className='header__favorite_cart' src='img/icons/cart.svg'/>
                </div>
                <div></div>
            </div>
    </header>
  )
}



