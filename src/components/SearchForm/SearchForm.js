import React from 'react';
import './SearchForm.css';
import smalltumb from '../../images/smalltumb.svg';

function SearchForm() {
    return (
        <><div className="searchForm">
            <form className="searchForm__form">
                <input className="searchForm__input" ></input>
                <button className="searchForm__button" type="submit"></button>
                <div className="searchForm_filter">
                    <img src={smalltumb} />
                    <p className="searchForm__text">Короткометражки</p>
                </div>
            </form>
        </div>
        </>
    );
}

export default SearchForm;