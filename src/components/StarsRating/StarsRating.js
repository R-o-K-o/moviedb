import ReactStars from "react-rating-stars-component/dist/react-stars";

export const StarsRating = ({vote_average}) => {
    return (
        <div className="text-center">
            <ReactStars
                count={vote_average}
                size={20}
                color={'#f4c10f'}
            >
            </ReactStars>
        </div>

    );
};