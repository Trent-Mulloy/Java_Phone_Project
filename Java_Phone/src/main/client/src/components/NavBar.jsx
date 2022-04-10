import React from  'react';
import { Link } from 'react-router-dom';

const NavBar = props => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand mx-2" href="/">Java Phone</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/plans">Plans</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/devices">Devices</Link>
                    </li>
                    </ul>
                </div>
                <Link className="nav-link text-success" to="/view/cart">Shopping Cart</Link>
            </nav>
        </div>
    )
}
export default NavBar;