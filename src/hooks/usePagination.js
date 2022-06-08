import {useSearchParams} from "react-router-dom";

export const usePagination = (totalPages) => {
    const [currentPage, setCurrentPage] = useSearchParams({page: '1'});

    const prevPage = () => {
        const prev = +currentPage.get('page') - 1;
        if (prev !== 0) {
            setCurrentPage({page: `${prev}`})
        }
    };

    const nextPage = () => {
        const next = +currentPage.get('page') + 1;
        if (next <= totalPages) {
            setCurrentPage({page: `${next}`});
        }
    };

    return [currentPage, prevPage, nextPage];
};