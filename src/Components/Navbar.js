import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsPerson, BsCodeSlash } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';



const Nav = () => {
    const [navbarAppear, setNavbarAppear] = useState(true);

    function scrollHandler() {
        if (window.scrollY >= 20 && navbarAppear) {
            setNavbarAppear(false);
        } else if (window.scrollY < 20 && !navbarAppear) {
            setNavbarAppear(true);
        }
    }

    var showMenu = () => {
        var bar = document.getElementsByClassName('bar');
        var ham = document.getElementsByClassName('NavbarLinks');
        bar[0].classList.toggle('barOne');
        bar[1].classList.toggle('barTwo');
        bar[2].classList.toggle('barThree');

        ham[0].classList.toggle('showNavbar');
    };

    var hideMenu = () => {
        var bar = document.getElementsByClassName('bar');
        var ham = document.getElementsByClassName('NavbarLinks');
        bar[0].classList.remove('barOne');
        bar[1].classList.remove('barTwo');
        bar[2].classList.remove('barThree');
        ham[0].classList.remove('showNavbar');
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [navbarAppear]);

    return (
        <nav className={`Navbar ${navbarAppear ? 'appear' : 'hide'}`}>
            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>
                LG
            </h1>
            

            <div className='Hamburger' onClick={showMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <ul className='NavbarLinks'>
                <li onClick={hideMenu}>
                    <Link to='/'>
                        <AiOutlineHome /> Accueil
                    </Link>
                </li>
                <li onClick={hideMenu}>
                    <Link to='/About'>
                        <BsPerson /> À propos 
                    </Link>
                </li>
                <li onClick={hideMenu}>
                    <Link to='/Project'>
                        <BsCodeSlash /> Projet
                    </Link>
                </li>
                <li onClick={hideMenu}>
                    <Link to='/Resume'>
                        <CgFileDocument /> Résumé
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
