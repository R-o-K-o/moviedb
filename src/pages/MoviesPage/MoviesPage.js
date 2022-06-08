import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {usePagination} from "../../hooks";
import {movieActions} from "../../redux";

import './MoviesPage.css'
import {Genres, Loader, MoviesCards, Pagination, SiteDesc} from "../../components";

export const MoviesPage = () => {
    const {movies, loading, totalPages} = useSelector(state => state.movies);
    const [currentPage, prevPage, nextPage] = usePagination(totalPages);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll({page: currentPage.get('page')}));
    }, [currentPage]);

    return (
        <div className="container" style={{minHeight: '100vh'}}>
            {
                loading
                    ? <Loader/>
                    : <>
                        <Genres/>
                        <MoviesCards movies={movies}/>
                        <Pagination prevPage={prevPage} nextPage={nextPage}/>
                        <SiteDesc/>
                      </>
            }
        </div>
    );
};