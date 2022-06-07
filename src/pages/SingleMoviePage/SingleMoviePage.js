import {useEffect, useState} from "react";
import {useParams} from "react-router";

import {movieService} from "../../services";

import {Loader, MovieDetails} from "../../components";

export const SingleMoviePage = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        movieService.getById(id).then(({data}) => {
            setMovie(data);
            setLoading(false);
        });
    }, [id]);

    return (
        <div className="container" style={{minHeight: '100vh'}}>
            {
                loading
                    ? <Loader/>
                    : <MovieDetails movie={movie}/>
            }
        </div>
    );
};