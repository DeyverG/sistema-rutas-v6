import React from 'react'
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes/routes';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav>
            <div className='navbar-container'>
                {routes.map(({ to, name }) => (

                    <NavLink to={to} className="navbar">
                        {name}
                    </NavLink>
                ))}
            </div>
        </nav>
    )
}
