import React from 'react';
import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';

function MoviesCardList() {
    return (
        <>
            <div className="movies">
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </div>

        </>
    );
}

export default MoviesCardList;