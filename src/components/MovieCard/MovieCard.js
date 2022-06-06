import {Link} from "react-router-dom";

import {IMG_PATH_W200} from "../../constants";

export const MovieCard = ({movie: {id, title, poster_path}}) => {
    return (
        <div className="card table-hover mb-4 mx-lg-2" style={{backgroundColor: '#181818'}}>
            <Link to={`movie/:${id}`}>
                <img className="card-img-top" src={IMG_PATH_W200 + poster_path} alt=""/>
                <p className="card-footer text-center mb-2 mt-1">{title}</p>
            </Link>
        </div>
    );
};