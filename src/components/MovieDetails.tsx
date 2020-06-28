import React from 'react';
import '../styles/index.scss';
import { Movie } from '../types';

interface Props {
    setCurrentMovie: (movie: Movie) => void;
    currentMovie: Movie | null;
}
interface State {}

class Main extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentMovie: props.currentMovie,
        };
    }

    render(): JSX.Element {
        const { currentMovie, setCurrentMovie } = this.props;

        return (
            <>
                {currentMovie && (
                    <article className="movie-details">
                        <img
                            className="movie-details__snapshot"
                            src={currentMovie.images.snapshot}
                            alt={currentMovie.title}
                        />
                        <img
                            className="movie-details__trailer-button"
                            src="src/assets/play-video.png"
                            alt="play trailer button"
                        />
                    </article>
                )}
            </>
        );
    }
}

export default Main;
