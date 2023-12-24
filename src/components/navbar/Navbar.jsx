import React from 'react';
import "./navbar.scss";
import logo from "../../assets/images/logo.png";
import { Link, NavLink } from 'react-router-dom';
import CtaButton from '../buttons/CtaButton';

function Navbar() {
    return (
        <header className='header'>
            <div className="logo-container">
                <div className="logo">
                    <img src={logo} alt="logo-img" />
                    <h1>WeHealthy</h1>
                </div>
            </div>
            <nav className="navbar">
                <ul className="nav-container">
                    <NavLink exact to="/" activeClassName="active-link">
                        Home
                    </NavLink>
                    <NavLink to="/about" activeClassName="active-link">
                        About
                    </NavLink>
                    <NavLink to="/doctors" activeClassName="active-link">
                        Doctors
                    </NavLink>
                    <NavLink to="/appointment" activeClassName="active-link">
                        Appointments
                    </NavLink>
                </ul>
                <div className="button-container">
                    <CtaButton
                        element="/appointment"
                    >
                        Make an Appointment
                    </CtaButton>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
