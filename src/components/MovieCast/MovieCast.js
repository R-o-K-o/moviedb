import {useEffect, useState} from "react";

import {movieService} from "../../services";
import {IMG_PATH_W200} from "../../constants";

import './MovieCast.css';

export const MovieCast = ({movieId}) => {
    const [cast, setCast] = useState([]);

    useEffect(() => {
        movieService.getCast(movieId).then(({data: {cast}}) => setCast(cast));
    }, []);

    return (
        <div className="row mt-3">
            {
                cast && cast.slice(0, 4).map(item => {
                    return (
                        <div className="col-md text-center" key={item.id}>
                            <img className="img-fluid rounded-circle mx-auto d-block"
                                 style={{maxHeight: 250}}
                                 src={IMG_PATH_W200 + item.profile_path}
                                 alt={item.character}
                            />
                            <p className="actor-name font-weight-bold text-center mt-2">{item.name}</p>
                            <p className="character-name font-weight-light text-center">{item.character}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};