import {IMG_PATH_W200} from "../../constants";

export const Poster = ({poster_path, title, css}) => {
    return (
        <img className={css} src={IMG_PATH_W200 + poster_path} alt={title}/>
    );
};