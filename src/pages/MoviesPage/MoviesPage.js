import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";

import {Loader, MoviesCards} from "../../components";
import './MoviesPage.css'

export const MoviesPage = () => {
    const {movies, loading} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll());
    }, []);

    return (
        <div className="container">
            {
                loading
                    ? <Loader/>
                    : <MoviesCards movies={movies}/>
            }
        </div>
    );
};