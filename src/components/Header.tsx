import React from 'react';
import '../styles/index.scss';
import { Movie } from '../types';

interface Props {
    currentMovie: Movie | null;
    setCurrentMovie: (movie: null) => void;
}

const Header = ({ currentMovie, setCurrentMovie }: Props): JSX.Element => (
    <header>
        {currentMovie ? (
            <>
                <img
                    onClick={(): void => setCurrentMovie(null)}
                    className="header__back-btn"
                    src="src/assets/back.png"
                />
                <h1>{currentMovie.title}</h1>
            </>
        ) : (
            <img className="header__logo" src="src/assets/rakuten-logo.png" />
        )}
    </header>
);

export default Header;
