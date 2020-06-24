import React from 'react';
import '../styles/index.scss';

import { Link } from 'react-router-dom';

interface Props {
    currentMovie?: string;
}

const Header = ({ currentMovie }: Props): JSX.Element => (
    <header>
        {currentMovie ? (
            <h1>{currentMovie}</h1>
        ) : (
            <Link to="/">
                <h1>Rakuten TV</h1>
            </Link>
        )}
    </header>
);

export default Header;
