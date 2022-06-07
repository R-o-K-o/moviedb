import {useState} from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

import {movieActions} from "../../../redux";

import './Navigate.css';
import {SearchForm} from "../../SearchForm/SearchForm";

export const Navigate = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();

    const searchMovie = async (e) => {
        e.preventDefault();
        if (query) {
            dispatch(movieActions.search({query}));
        }
    };

    const changeHandler = (e) => setQuery(e.target.value);

    return (
        <Navbar expand="lg" variant="dark" className="navbar">
            <Container fluid>
                <Link to={'/'}>
                    <Navbar.Brand className="logo" style={{color: '#168c8c'}}>TMDB</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" className="burger">
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-3" navbarScroll>
                    </Nav>
                    <SearchForm query={query}
                                searchMovie={searchMovie}
                                changeHandler={changeHandler}
                    />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};