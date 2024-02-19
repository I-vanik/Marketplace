import React from 'react'
import carrot from '../img/carrot.png'

export const ItemDesc = () => {
    return (
        <div className='item__container'>
            <div className="item__img">
                <img src={carrot} alt="" />
            </div>
            <div className="item__desc">
                <div className="item__section_bordered">
                    <h2>Морковь</h2>
                    <span className='item__weight'>1 кг</span>
                </div>
                <div className="item__section_bordered">
                    <h6 className='item__head'>В 100 граммах</h6>
                    <div className="item__ccals">
                        <div className="ccals__item">
                            <h6 className='ccals__count'>43</h6>
                            <span className='ccals__name'>ккал</span>
                        </div>
                        <div className="ccals__item">
                            <h6 className='ccals__count'>1.6г</h6>
                            <span className='ccals__name'>Белки</span>
                        </div>
                        <div className="ccals__item">
                            <h6 className='ccals__count'>0.2г</h6>
                            <span className='ccals__name'>Жиры</span>
                        </div>
                        <div className="ccals__item">
                            <h6 className='ccals__count'>6.8г</h6>
                            <span className='ccals__name'>Углеводы</span>
                        </div>
                    </div>
                    
                </div>
                <div className="item__section">
                    <h6 className='item__head'>Срок хранения</h6>
                    <h3 className='item__safetime'>1 Месяц</h3>
                    <span className='item__safeconditions'>При температуре от +2°С до +10°С</span>
                    <button className='item__buy_btn'>
                        Купить
                        <span>129 за кг</span>
                    </button>
                    <div className="item__controls">
                        <button className='item__btn_default'>-</button>
                        <div className="item__count">
                            1 кг
                        </div>
                        <button className='item__btn_colored'>+</button>
                    </div>
                </div>
            </div>
        </div>
    )
}