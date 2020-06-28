import React from 'react';
import '../styles/index.scss';

interface Props {
    isLoading?: boolean;
}

const LoadingScreen = ({ isLoading }: Props): JSX.Element => (
    <>
        {isLoading && (
            <>
                <figure className="loading-screen">
                    <h1>Fetching Movies...</h1>
                    <div className="loading-wheel">
                        <div className="loading-wheel1 loading-child"></div>
                        <div className="loading-wheel2 loading-child"></div>
                        <div className="loading-wheel3 loading-child"></div>
                        <div className="loading-wheel4 loading-child"></div>
                        <div className="loading-wheel5 loading-child"></div>
                        <div className="loading-wheel6 loading-child"></div>
                        <div className="loading-wheel7 loading-child"></div>
                        <div className="loading-wheel8 loading-child"></div>
                        <div className="loading-wheel9 loading-child"></div>
                        <div className="loading-wheel10 loading-child"></div>
                        <div className="loading-wheel11 loading-child"></div>
                        <div className="loading-wheel12 loading-child"></div>
                    </div>
                </figure>
            </>
        )}
    </>
);

export default LoadingScreen;
