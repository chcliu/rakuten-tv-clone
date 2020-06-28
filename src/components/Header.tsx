import React from 'react';
import '../styles/index.scss';
import { Movie } from '../types';

import { Link } from 'react-router-dom';

interface Props {
    currentMovie: Movie | null;
}

const Header = ({ currentMovie }: Props): JSX.Element => (
    <header>
        {currentMovie ? (
            <h1>{currentMovie.title}</h1>
        ) : (
            <Link to="/">
                <img className="logo" src="src/assets/logo.png" />
            </Link>
        )}
    </header>
);

export default Header;
