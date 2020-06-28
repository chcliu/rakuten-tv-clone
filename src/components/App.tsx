import React from 'react';

import { Movie } from '../types';

import Header from './Header';
import Main from './Main';
import LoadingScreen from './LoadingScreen';

interface State {
    currentMovie: Movie | null;
    isLoading: boolean;
}

class App extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            currentMovie: null,
            isLoading: false,
        };

        this.setCurrentMovie = this.setCurrentMovie.bind(this);
        this.setIsLoading = this.setIsLoading.bind(this);
    }

    setCurrentMovie(movie: Movie): void {
        this.setState({ currentMovie: movie });
    }

    setIsLoading(isLoading: boolean): void {
        this.setState({ isLoading });
    }

    render(): JSX.Element {
        const { currentMovie, isLoading } = this.state;
        return (
            <>
                <Header currentMovie={currentMovie} />
                <Main
                    currentMovie={currentMovie}
                    setCurrentMovie={this.setCurrentMovie}
                    setIsLoading={this.setIsLoading}
                />
                <LoadingScreen isLoading={isLoading} />
            </>
        );
    }
}

export default App;
