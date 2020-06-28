import React from 'react';
import '../styles/index.scss';
import { Movie } from '../types';

interface Props {
    setCurrentMovie: (movie: Movie) => void;
    movie: Movie;
}

class MovieListItem extends React.Component<Props> {
    constructor(props: Props) {
        super(props);
        this.onMovieClick = this.onMovieClick.bind(this);
    }

    onMovieClick(): void {
        const { movie, setCurrentMovie } = this.props;
        setCurrentMovie(movie);
    }

    render(): JSX.Element {
        const { movie } = this.props;
        return (
            <li onClick={this.onMovieClick} key={movie.id} className="list__item">
                <img src={movie.images.artwork} alt={movie.title} />
            </li>
        );
    }
}

export default MovieListItem;
