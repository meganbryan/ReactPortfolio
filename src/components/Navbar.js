import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark text-light mb-5 opaque-navbar">
            <a className="navbar-brand" href="/"><h1>Megan Bryan</h1></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active mr-1">
                        <Link to = '/' className="nav-link">About Me<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active mr-1">
                        <Link to = '/portfolio' className="nav-link">Portfolio<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active mr-1">
                        <Link to = '/contact' className="nav-link">Contact<span className="sr-only">(current)</span></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;