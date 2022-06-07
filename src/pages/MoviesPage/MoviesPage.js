import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux";

import './MoviesPage.css'
import {Genres, Loader, MoviesCards, SiteDesc} from "../../components";

export const MoviesPage = () => {
    const {movies, loading} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({}));
    }, []);

    return (
        <div className="container">
            {
                loading
                    ? <Loader/>
                    : <>
                        <Genres/>
                        <MoviesCards movies={movies}/>
                        <SiteDesc/>
                      </>
            }
        </div>
    );
};