import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css'



function Navigation  ()  {
    return (
        <nav className="navigation">
            <img src="/./src/assets/logo-medium.png" alt="logo" className="navigationLogo"/>
            <ul>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/allePost">
                        Alle Posts
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'}
                        to="/nieuwePost">
                        Nieuwe Post
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;