import {Link} from "react-router-dom";

import './MovieCard.css';
import {Poster} from "../Poster/Poster";

export const MovieCard = ({movie: {id, title, poster_path}}) => {
    return (
        <>
            {
                poster_path
                    ? <div className="card table-hover mb-4 mx-lg-2">
                        <Link to={`/movie/${id}`}>
                            <Poster poster_path={poster_path}
                                    title={title}
                                    css={"card-img-top"}
                            />
                            <div className="card-footer text-center mb-2">
                                <div className="movie-title">{title}</div>
                            </div>
                        </Link>
                    </div>
                    : null
            }
        </>
    );
};