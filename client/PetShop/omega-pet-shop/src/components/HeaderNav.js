import React from 'react'
import { NavLink } from 'react-router-dom';
import logoNav from '../assets/img/nav.png';

const HeaderNav = () => {
    return (
        <div>
            <div className='navbar navbar-expand-lg bg-light heigth-7'>
                <div>
                    <NavLink to='/'><img src={logoNav} className='img-nav' /></NavLink>
                    <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNavAltMarkup' aria-controls='navbarNavAltMarkup' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>
                </div>
                <div className='navbar-nav justify-content-end'>
                    <NavLink to='/login' className='nav-link navbar'>Iniciar Sesión</NavLink>
                    <NavLink to='/register' className='nav-link navbar'>Registrarse</NavLink>
                    <NavLink to='/' className='nav-link navbar'>Inicio</NavLink>
                    <NavLink to='/us' className='nav-link navbar'>Nosotros</NavLink>
                    <NavLink to='/login' className='nav-link navbar'>Cerrar Sesión</NavLink>
                </div>
            </div>
        </div>
    )
}

export default HeaderNav