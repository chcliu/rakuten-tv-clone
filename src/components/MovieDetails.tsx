/* eslint-disable @typescript-eslint/camelcase */
import React from 'react';
import '../styles/index.scss';
import { Movie } from '../types';

import axios from 'axios';

interface Props {
    currentMovie: Movie | null;
    setIsLoading: (isLoading: boolean) => void;
}
interface State {
    isVideoOpen: boolean;
    trailerUrl: string;
}

class MovieDetails extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            isVideoOpen: false,
            trailerUrl: '',
        };

        this.onTrailerButtonClick = this.onTrailerButtonClick.bind(this);
    }

    componentDidMount(): void {
        const { setIsLoading } = this.props;
        this.fetchTrailer()
            .then((trailerUrl) => this.setState({ trailerUrl }))
            .finally(() => setIsLoading(false));
    }

    fetchTrailer(): Promise<string> {
        const { currentMovie } = this.props;

        const payload = {
            audio_language: 'SPA',
            audio_quality: '2.0',
            content_id: currentMovie?.id,
            content_type: 'movies',
            device_serial: 'device_serial_1',
            device_stream_video_quality: 'FHD',
            player: 'web:PD-NONE',
            subtitle_language: 'MIS',
            video_type: 'trailer',
        };

        return axios
            .post(
                'https://cors-anywhere.herokuapp.com/https://gizmo.rakuten.tv/v3/me/streamings?classification_id=5&device_identifier=web&locale=es&market_code=es',
                payload,
            )
            .then(({ data }) => data.data.stream_infos[0].url);
    }

    onTrailerButtonClick(): void {
        const { trailerUrl } = this.state;
        const { setIsLoading } = this.props;

        if (!trailerUrl) setIsLoading(true);

        this.setState({ isVideoOpen: true });
    }

    render(): JSX.Element {
        const { currentMovie } = this.props;
        const { isVideoOpen, trailerUrl } = this.state;

        return (
            <>
                {currentMovie && !isVideoOpen && (
                    <article className="movie-details">
                        <img
                            className="movie-details__snapshot"
                            src={currentMovie.images.snapshot}
                            alt={currentMovie.title}
                        />
                        <img
                            onClick={this.onTrailerButtonClick}
                            className="movie-details__trailer-button"
                            src="src/assets/play-video.png"
                            alt="play trailer button"
                        />
                    </article>
                )}
                {currentMovie && isVideoOpen && (
                    <article className="video-player">
                        <video controls>
                            <source src={trailerUrl} type="video/mp4" />
                        </video>
                    </article>
                )}
            </>
        );
    }
}

export default MovieDetails;
