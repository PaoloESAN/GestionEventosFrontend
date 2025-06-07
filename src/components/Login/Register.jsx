import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        repeatPassword: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irá la lógica de registro
        console.log('Register attempt with:', formData);
    };

    return (
        <div className="formulario-login">
            <form onSubmit={handleSubmit}>
                <div className="logo">
                    <img
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        alt="logo de el login"
                    />
                </div>
                <h1>Register</h1>

                <label htmlFor="nombres">First name</label>
                <input
                    id="nombres"
                    type="text"
                    placeholder="Ingrese su nombre"
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="off"
                />

                <label htmlFor="apellidos">Last name</label>
                <input
                    id="apellidos"
                    type="text"
                    placeholder="Ingrese sus apellidos"
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="off"
                />

                <label htmlFor="correo">Email Address</label>
                <input
                    id="correo"
                    type="email"
                    placeholder="Ingrese su email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="off"
                />

                <label htmlFor="contraseña">Password</label>
                <input
                    id="contraseña"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="off"
                />

                <label className="Repeat-contraseña" htmlFor="Repeat-contraseña">
                    Repeat Password
                </label>
                <input
                    id="Repeat-contraseña"
                    type="password"
                    placeholder="Repita su contraseña"
                    value={formData.repeatPassword}
                    onChange={handleChange}
                    autoComplete="off"
                />

                <button type="submit" title="register">Register</button>
            </form>
        </div>
    );
};

export default Register;
