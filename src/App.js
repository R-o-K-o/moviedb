import {Routes, Route, Navigate} from "react-router-dom";

import './App.css';
import {MainLayout} from "./layouts";
import {MoviesPage, NotFoundPage, SingleMoviePage} from "./pages";

export const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movie/:id'} element={<SingleMoviePage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};
