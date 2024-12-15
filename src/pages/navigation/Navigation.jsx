import React from 'react';
import { NavLink } from 'react-router-dom';




function Navigation  ()  {


    return (
        <nav>


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