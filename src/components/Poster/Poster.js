import {IMG_PATH_W200} from "../../constants";

export const Poster = ({poster_path, title, css}) => {
    if (!poster_path) return <h4 className="text-center mt-2" style={{textTransform: 'uppercase'}}>not found</h4>
    return (
        <img className={css}
             src={IMG_PATH_W200 + poster_path}
             alt={title}
        />
    );
};