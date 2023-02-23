import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <>
            <div className="footer">
                <p className="footer__authors">Учебный проект Яндекс.Практикум х BeatFilm.</p>
                <div className="footer__copyright-container">
                    <p className="footer__copyright">@ 2023</p>
                    <div className="footer__copyright-container">
                        <a className="footer__link">Яндекс.Практикум</a>
                        <a className="footer__link">Github</a>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Footer;