import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const Register = () => {
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if (e.target.username.value.trim() === '' || e.target.password.value.trim() === '' ||
            e.target.password.value.trim() === '' || e.target.confirmPassword.value.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Todos los campos son obligatorios'
            });
            return;
        }        
        console.log(e.target.username.value);
    }
    return (
        <>
            <form
                className='form-login-register d-flex flex-column align-items-center justify-content-center'
                onSubmit={handleSubmitRegister}
            >
                <h2>Registrarse</h2>
                <input type='text' name='fullname' placeholder='Nombre completo' />
                <div>
                    <i className='fa fa-circle-user'></i>
                    <input type='text' name='username' placeholder='Usuario' />
                </div>
                <input type='password' name='password' placeholder='Contraseña' />
                <input type='password' name='confirmPassword' placeholder='Repita la contraseña' />
                <button type='submit'>Registrarse</button>
                <p>Ya tienes una cuenta? <Link to='/login'>Inicia Sesión</Link></p>
            </form>
        </>
    );
};

export default Register;

