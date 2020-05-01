import React from 'react';

function Navbar (props) {
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top" {...props}>
        <a className="navbar-brand" href="_blank">OBS Titler Helper</a>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        </nav>    
    )
}

export default Navbar;