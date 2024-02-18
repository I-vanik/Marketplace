import React from 'react'
import { StyledHeader } from './StyledHeader'
import arrow from '../img/Arrow - Left.svg'
import carrot from '../img/image 2.png'
import trash from '../img/trash.svg'

export const BasketList = () => {
  return (
    <>
        <StyledHeader />
        <div className="basket__container">
            <div className="basket">
                <div className="basket__head">
                    <h2><img src={arrow} alt="" />Корзина</h2>
                    <h5>3 товара</h5>
                </div>
                <div className="basket__item">
                    <img src={carrot} alt="" className='basket__item_logo'/>
                    <div className="basket__item__desc">
                        <h6>Морковь</h6>
                        <span>129 ₽</span>
                        <div className="basket__item__count">
                            <button>-</button>
                            <span>1 кг</span>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="basket__item__control">
                        <button><img src={trash} alt="" /></button>
                        <h3>129 ₽</h3>
                    </div>
                 </div>
                 <div className="basket__item">
                    <img src={carrot} alt="" className='basket__item_logo'/>
                    <div className="basket__item__desc">
                        <h6>Морковь</h6>
                        <span>129 ₽</span>
                        <div className="basket__item__count">
                            <button>-</button>
                            <span>1 кг</span>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="basket__item__control">
                        <button><img src={trash} alt="" /></button>
                        <h3>129 ₽</h3>
                    </div>
                 </div>
                 <div className="basket__item">
                    <img src={carrot} alt="" className='basket__item_logo'/>
                    <div className="basket__item__desc">
                        <h6>Морковь</h6>
                        <span>129 ₽</span>
                        <div className="basket__item__count">
                            <button>-</button>
                            <span>1 кг</span>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="basket__item__control">
                        <button><img src={trash} alt="" /></button>
                        <h3>129 ₽</h3>
                    </div>
                 </div>
                 <div className="basket__submit">
                    <div className="basket__submit__price">
                        <span>Итого</span>
                        <h3>129 ₽</h3>
                    </div>
                    <button>Оформить заказ</button>
                 </div>
            </div>
        </div>
    </>
  )
}
