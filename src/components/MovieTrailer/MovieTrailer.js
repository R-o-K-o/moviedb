import {useEffect, useState} from "react";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import {movieService} from "../../services";
import {IMG_PATH_W_ORIGINAL} from "../../constants";

import './MovieTrailer.css';
import {MoviePlayerModal} from "../MoviePlayerModal/MoviePlayerModal";
import {Loader} from "../UI";

export const MovieTrailer = ({movieId, moviePoster, movieTitle}) => {
    const [video, setVideo] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        movieService.getTrailer(movieId).then(({data: {results}}) => {
            setVideo(results[0]);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {
                loading
                    ? <Loader/>
                    : <>
                        <MoviePlayerModal
                            video={video}
                            movieTitle={movieTitle}
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                        />

                        <div className="row mt-3 mb-5">
                            <div className="col text-center">
                                <img className="img-fluid"
                                     style={{minHeight: 500}}
                                     src={IMG_PATH_W_ORIGINAL + moviePoster}
                                     alt={movieTitle}/>
                                <div className="icon-player carousel-center">
                                    <i onClick={() => setIsOpen(true)}
                                       className="far fa-play-circle"
                                    >
                                    </i>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    );
};