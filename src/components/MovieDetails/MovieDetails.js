import {StarsRating} from "../StarsRating/StarsRating";

import './MovieDetails.css';
import {MovieTrailer} from "../MovieTrailer/MovieTrailer";
import {Genres} from "../Genres/Genres";
import {MovieCast} from "../MovieCast/MovieCast";
import {SiteDesc} from "../SiteDesc/SiteDesc";

export const MovieDetails = ({movie}) => {
    const {
        id,
        genres,
        overview,
        release_date,
        runtime,
        budget,
        revenue,
        vote_average,
        backdrop_path,
        title
    } = movie;

    return (
        <div className="movie-details">
            <MovieTrailer movieId={id} moviePoster={backdrop_path} movieTitle={title}/>

            <div className="row mt-3">
                <div className="col">
                    <p className="det-subtitle">GENRE</p>
                </div>
                <Genres movieGenres={genres}/>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <StarsRating vote_average={vote_average}/>
                    <div className="mt-3">
                        <p className="det-subtitle">OVERVIEW</p>
                        <p className="overview">{overview}</p>
                    </div>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-3">
                    <p className="det-subtitle">RELEASE DATA</p>
                    <p className="det-text">{release_date}</p>
                </div>

                <div className="col-md-3">
                    <p className="det-subtitle">RUN TIME</p>
                    <p className="det-text">{runtime}</p>
                </div>

                <div className="col-md-3">
                    <p className="det-subtitle">BUDGET</p>
                    <p className="det-text">{budget}</p>
                </div>

                <div className="col-md-3">
                    <p className="det-subtitle">REVENUE</p>
                    <p className="det-text">{revenue} $</p>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <p className="det-subtitle">CAST</p>
                </div>
                <MovieCast movieId={id}/>
            </div>

            <SiteDesc/>
        </div>
    );
};