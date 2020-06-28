import React from 'react';
import '../styles/index.scss';
import { List, Movie } from '../types';

import axios from 'axios';

import MovieList from './MovieList';

interface Props {
    setCurrentMovie: (movie: Movie) => void;
    setIsLoading: (isLoading: boolean) => void;
}
interface State {
    currentMovie?: string;
    lists: Array<List>;
}

class MovieLists extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { lists: [] };
    }

    fetchLists(): Promise<Array<List>> {
        return axios
            .get(
                'https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/gardens/default?classification_id=5&device_identifier=web&locale=es&market_code=es&user_status=visitor',
            )
            .then(({ data }) => data.data.lists.slice(0, 5));
    }

    componentDidMount(): void {
        const { setIsLoading } = this.props;

        setIsLoading(true);
        this.fetchLists()
            .then((lists) => this.setState({ lists }))
            .catch((err) => console.error(err))
            .finally(() => setIsLoading(false));
    }

    render(): JSX.Element {
        const { lists } = this.state;
        const { setCurrentMovie } = this.props;

        return (
            <article className="movie-lists">
                {Boolean(lists.length) &&
                    lists.map((list) => <MovieList key={list.name} list={list} setCurrentMovie={setCurrentMovie} />)}
            </article>
        );
    }
}

export default MovieLists;
