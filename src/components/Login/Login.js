import React from 'react';
import './Login.css';
import loginLogo from '../../images/logo.svg';

function Login() {
    return (
        <>
            <form className="login">
                <img src={loginLogo} className="login__logo" />
                <h2 className="login__header">Рады видеть!</h2>

                <div className="login__input-container">
                    <p className="login__input-label">Email</p>
                    <input type="text" className="login__input" />
                </div>
                <div className="login__input-container">
                    <p className="login__input-label">Пароль</p>
                    <input type="password" className="login__input" />
                </div>

                <button className="login__button">Войти</button>
                <div className="login__link-container">
                    <p className="login__link-text">Еще не зарегистрированы?</p>
                    <p className="login__link">Регистрация</p>
                </div>


            </form>

        </>
    );
}

export default Login;