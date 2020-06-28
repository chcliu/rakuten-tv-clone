import React from 'react';
import '../styles/index.scss';
import { List, Movie } from '../types';

import MovieListItem from './MovieListItem';

interface Props {
    setCurrentMovie: (movie: Movie) => void;
    list: List;
}

class MovieList extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
    }

    render(): JSX.Element {
        const { list, setCurrentMovie } = this.props;
        return (
            <section className="list">
                <h1 className="list__title">{list.name}</h1>
                <ul className="list__items">
                    {list.contents.data.map((movie) => (
                        <MovieListItem key={movie.id} setCurrentMovie={setCurrentMovie} movie={movie} />
                    ))}
                </ul>
            </section>
        );
    }
}

export default MovieList;
