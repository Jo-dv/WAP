import React from "react";
import propTypes from "prop-types";

function Movie({id, name, year, release, state, nation, genre})
{
return <h4>{name}</h4>
}

Movie.propTypes = {
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    year: propTypes.string.isRequired,
    release: propTypes.string.isRequired,
    state: propTypes.string.isRequired,
    nation: propTypes.string.isRequired,
    genre: propTypes.string.isRequired,
};

export default Movie;