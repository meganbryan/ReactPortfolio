import React from "react";

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
                        <a className="nav-link" href="/">About Me<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active mr-1">
                        <a className="nav-link" href="/portfolio">Portfolio<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item active mr-1">
                        <a className="nav-link" href="/contact">Contact<span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;