import './Pagination.css';

export const Pagination = ({prevPage, nextPage}) => {
    return (
        <div className="pagination-block">
            <div className="buttons">
                <button onClick={prevPage}>prev</button>
                <button onClick={nextPage}>next</button>
            </div>
        </div>
    );
};