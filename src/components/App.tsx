import React from 'react';

import Header from './Header';

interface State {
    currentMovie: string;
}

class App extends React.PureComponent<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
            currentMovie: '',
        };
    }

    setCurrentMovie(movie: string): void {
        this.setState({ currentMovie: movie });
    }

    render(): JSX.Element {
        const { currentMovie } = this.state;
        return (
            <>
                <Header currentMovie={currentMovie} />
            </>
        );
    }
}

export default App;
