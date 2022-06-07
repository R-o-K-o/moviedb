export const Genre = ({genre: {id, name}, moviesByGenre}) => {
    return (
        <li className="list-inline-item">
            <button onClick={() => moviesByGenre(id)}
                    className="btn btn-outline-info"
            >
                {name}
            </button>
        </li>
    );
};