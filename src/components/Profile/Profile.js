import React from 'react';
import './Profile.css';
import Header from '../Header/Header';

function Profile() {
    return (
        <>
            <Header />
            <h2 className="profile__header">Привет, Виталий!</h2>
            <form className="profile__form">
                <label className="profile__label">
                    Имя
                    <input className="profile__input" />
                </label>
                <label className="profile__label">
                    Email
                    <input className="profile__input" />
                </label>
                <button className="profile__button">Редактировать</button>
                <button className="profile__button">Выйти из аккаунта</button>
                
            </form>

        </>
    );
}

export default Profile;