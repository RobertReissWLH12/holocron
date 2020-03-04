import React from 'react';
import { Link } from 'react-router-dom'
import './SideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <Link to="/">
                    <button id="mobile-home-button"></button>
                </Link>
                <div id="sideDrawer-line"></div>
                <Link to="/search">
                    <button id="mobile-search-button"></button>
                </Link>
                <div id="sideDrawer-line"></div>
                <Link to="/archives">
                    <button id="mobile-archives-button"></button>
                </Link>
                <div id="sideDrawer-line"></div>
                <Link to="/hideout">
                    <button id="mobile-hideout-button"></button>
                </Link>
            </ul>
        </nav>
    );
};

export default sideDrawer;