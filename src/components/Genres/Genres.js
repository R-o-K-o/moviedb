import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {genreActions, movieActions} from "../../redux";

import './Genres.css';
import {Genre} from "../Genre/Genre";

export const Genres = ({movieGenres}) => {
    const {genres} = useSelector(state => state.genres);
    const dispatch = useDispatch();
    const genresList = !movieGenres ? genres : movieGenres;

    useEffect(() => {
        dispatch(genreActions.getAll());
    }, []);

    const moviesByGenre = (genreId) => dispatch(movieActions.getAll({genreId}));

    return (
        <div className="mb-4 row mt-3">
            <div className="col">
                <ul className="list-inline">
                    {genresList.map(genre =>
                        <Genre key={genre.id}
                               genre={genre}
                               moviesByGenre={moviesByGenre}
                        />
                    )}
                </ul>
            </div>
        </div>
    );
};