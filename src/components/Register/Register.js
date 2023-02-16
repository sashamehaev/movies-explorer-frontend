import React from 'react';
import './Register.css';
import registerLogo from '../../images/logo.svg';

function Register() {
    return (
        <>
            <div className="register">
                <img src={registerLogo} className="register__logo" />
                <h2 className="register__header">Добро пожаловать!</h2>

                <div>
                    <p className="register__inputLabel">Имя</p>
                    <input type="text" className="register__input" />
                </div>


            </div>

        </>
    );
}

export default Register;