import {MovieCard} from "../MovieCard/MovieCard";

import './MoviesCards.css';

export const MoviesCards = ({movies}) => {
    return (
        <div className="grid">
            {movies.map(movie => <MovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};