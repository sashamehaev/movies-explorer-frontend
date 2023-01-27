import React from 'react';
import './Header.css';
import headerLogo from '../../images/logo.svg';
import userLogo from '../../images/userLogo.svg';


function Header() {
    return (
        <>
            <div className="header">
                <div className="header__navigation">
                    <img src={headerLogo} className="header__logo" />
                    <a href="#" className="header__link">Фильмы</a>
                    <a href="#" className="header__link header__link_regular">Сохраненные фильмы</a>
                </div>
                <div className="header__profile">
                    <a href="#" className="header__link">Аккаунт</a>
                    <img src={userLogo} className="header__login" />
                </div>
            </div>
        </>
    );
}

export default Header;