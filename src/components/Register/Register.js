import React from 'react';
import './Register.css';
import registerLogo from '../../images/logo.svg';

function Register() {
    return (
        <>
            <form className="register">
                <img src={registerLogo} className="register__logo" />
                <h2 className="register__header">Добро пожаловать!</h2>

                <div className="register__input-container">
                    <p className="register__input-label">Имя</p>
                    <input type="text" className="register__input" />
                </div>
                <div className="register__input-container">
                    <p className="register__input-label">Email</p>
                    <input type="text" className="register__input" />
                </div>
                <div className="register__input-container">
                    <p className="register__input-label">Пароль</p>
                    <input type="password" className="register__input" />
                </div>
                <button className="register__button">Зарегистрироваться</button>
                <div className="register__link-container">
                    <p className="register__link-text">Уже зарегистрированы?</p>
                    <p className="register__link">Войти</p>
                </div>


            </form>

        </>
    );
}

export default Register;