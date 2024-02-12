import React from 'react'
import logo from '../img/agrarniyLogo.png'

export const StyledHeader = () => {
  return (
    <header className='header__styled'>
        <div className="header__logo">
            <img src={logo} alt="" className="logo__img" />
        </div>
        <div className="header__content">
            <img src="" alt="" className='header__more'/>
            <input type="text" name="" id="" className='header__search'/>
            <img src="" alt="" className='header__search_btn'/>
            <div className="links">\
            <div className="header_account">
                <img src="" alt="" className="header__account_img"/>
                <span className='header__account_desc'></span>
            </div>
            <div className="header__likes">
                <img src="" alt="" />
                <div><span>1</span></div>
            </div>
            <div className="header__cart">
                <img src="" alt="" />
                <div><span>1</span></div>
            </div>
            </div>
        </div>
    </header>
  )
}
