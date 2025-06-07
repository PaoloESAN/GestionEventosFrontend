import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí irá la lógica de autenticación
        console.log('Login attempt with:', { email, password });
        // Por ahora, simplemente redirigimos a home
        navigate('/home');
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
                <h1>Sign in to your account</h1>

                <label htmlFor="correo">Email Address</label>
                <input
                    id="correo"
                    type="email"
                    placeholder="Ingrese su email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <div className="contraseña">
                    <label className="password" htmlFor="contraseña">Password</label>
                    <Link to="/forgot-password">Forgot password?</Link>
                </div>

                <input
                    id="contraseña"
                    type="password"
                    placeholder="Ingrese su contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" title="login">
                    <p className="sign-in">Sign in</p>
                </button>

                <p className="register">
                    Don't have an account? <Link to="/register">Register now</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
