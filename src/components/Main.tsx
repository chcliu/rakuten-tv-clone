import React from 'react';
import '../styles/index.scss';
import { Movie } from '../types';

import Lists from './Lists';
import MoviePage from './MoviePage';

interface Props {
    setCurrentMovie: (movie: Movie) => void;
    setIsLoading: (isLoading: boolean) => void;
    currentMovie: Movie | null;
}
interface State {
    currentMovie: Movie | null;
}

class Main extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            currentMovie: props.currentMovie,
        };
    }

    render(): JSX.Element {
        const { currentMovie, setCurrentMovie, setIsLoading } = this.props;

        return (
            <main>
                <Lists setCurrentMovie={setCurrentMovie} setIsLoading={setIsLoading} />
                {/* <MoviePage currentMovie={currentMovie} setCurrentMovie={setCurrentMovie} /> */}
            </main>
        );
    }
}

export default Main;
