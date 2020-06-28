import React from 'react';
import '../styles/index.scss';
import { Movie } from '../types';

interface Props {
    currentMovie: Movie | null;
}

const Header = ({ currentMovie }: Props): JSX.Element => (
    <header>{currentMovie ? <h1>{currentMovie.title}</h1> : <img className="logo" src="src/assets/logo.png" />}</header>
);

export default Header;
