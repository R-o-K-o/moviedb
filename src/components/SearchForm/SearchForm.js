import {Button, Form, FormControl} from "react-bootstrap";

import {UserInfo} from "../UserInfo/UserInfo";

export const SearchForm = ({query, searchMovie, changeHandler}) => {
    return (
        <Form className="d-flex" onSubmit={searchMovie}>
            <FormControl
                type="search"
                placeholder="Search . . ."
                className="me-2"
                aria-label="search"
                name="query"
                value={query}
                onChange={changeHandler}
            >
            </FormControl>
            <Button className="btn-sm" variant="secondary" type="submit">Search</Button>
            <UserInfo/>
        </Form>
    );
};