import React from 'react';
import './NotFound.css';

function NotFound() {
    return (
        <>
            <h2 className="not-found__header">404</h2>
            <p className="not-found__text">Страница не найдена</p>
            <p className="not-found__link">Назад</p>

        </>
    );
}

export default NotFound;