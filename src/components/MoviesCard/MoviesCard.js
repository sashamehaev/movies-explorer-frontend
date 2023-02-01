import React from 'react';
import './MoviesCard.css';
import moviesImage from '../../images/moviesCard.png';



function MoviesCard() {
    return (
        <>
            <div className="moviesCard">
                <div className="moviesCard__title">
                    <h1 className="moviesCard__name">В погоне за Бенкси</h1>
                    <p className="moviesCard__duration">27 минут</p>
                </div>
                <img src={moviesImage} className="moviesCard__image" />
                <button className="moviesCard__button">Сохранить</button>
            </div>
        </>
    );
}

export default MoviesCard;