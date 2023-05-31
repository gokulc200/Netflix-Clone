import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

import './NavbarManager.css';

function NavbarManager() {
    const [show, handleShow] = useState(false);

    const navigate = useNavigate();

    const navigateToProfile = () => {
        // 👇️ navigate to /contacts
        navigate('/browse');
    };


    const navigateToLogin = () => {
        // 👇️ navigate to /contacts
        navigate('/signin');
    };


    const NavBarVisibility = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", NavBarVisibility);
        return () => {
            window.removeEventListener("scroll", NavBarVisibility);
        }

    }, [])

    return (
        <div className={`navbar ${show && "nav__black"}`}>
            <div className='d-flex'>
                <img
                    className="nav__logo"
                    src="http://www.freepnglogos.com/uploads/netflix-logo-0.png"
                    alt="NETFLIX" />
                <div className='d-none d-md-block pt-1'>
                    <ul className='d-flex'>
                        <li className='categories-description' type="home">Home</li>
                        <li className='categories-description' type="tvshows">TV Shows</li>
                        <li className='categories-description' type="movies">Movies</li>
                        <li className='categories-description' type="newpopular">New & Popular</li>
                        <li className='categories-description' type="mylist">My List</li>
                    </ul>
                </div>
            </div>
            <div className='right-container'>
                <img
                    className="nav__avatar"
                    src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg"
                    alt="AVATAR"
                    onClick={navigateToProfile}
                />
                <button className='logout-btn' onClick={navigateToLogin}>Logout</button>
            </div>
        </div>
    )
}

export default NavbarManager;