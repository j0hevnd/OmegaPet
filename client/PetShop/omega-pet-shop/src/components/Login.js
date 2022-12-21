import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import login  from '../assets/img/login.png';

const Login = () => {
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        if (e.target.username.value.trim() === '' || e.target.password.value.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Llena todos los campos'
            });
            return;
        }
        
        console.log(e.target.username.value);

    }
    return (
        <>
            <form
                className='d-flex flex-column align-items-center justify-content-center'
                onSubmit={ handleSubmitLogin }
            >
                <img src = { login } className="img-login" />
                <h2>Iniciar Sesión</h2>
                <input type='text' name='username' placeholder='Usuario' />
                <input type='password' name='password' placeholder='Contraseña' />
                <button type='submit'>Ingresar </button>
                <p>No estás registrado? <Link to='/register'>Crea una cuenta</Link></p>
            </form>
        </>
    );
};

export default Login;
