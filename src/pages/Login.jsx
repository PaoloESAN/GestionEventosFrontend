import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ModalLoginError, ModalErrorConexion, ModalLoginExitoso } from '../components/ModalesConexion';
import logoEventos from '../assets/logoEventos.svg';
import Squares from '../components/BgSquares'
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState('');
    const navigate = useNavigate();

    const iniciarSesion = async () => {
        if (email.trim().toUpperCase() === "' OR 1=1 --") {
            navigate('/anware')
            return;
        }

        try {
            const respuesta = await fetch(`http://localhost:8080/api/v1/usuarios/login/${email}/${password}`);
            const data = await respuesta.json();
            if (data.respuesta === true) {
                localStorage.setItem('userId', data.userId);
                navigate('/home');
            } else {
                document.getElementById('modalLoginError').showModal();
            }
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
            document.getElementById('modalErrorConexion').showModal();
        }

    }; return (
        <>
            <ModalLoginError />
            <ModalErrorConexion />
            <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
                <div className="absolute top-0 left-0 w-full h-full bg-black">
                    <Squares
                        speed={0.2}
                        squareSize={40}
                        direction='diagonal'
                        borderColor='#5f45e7'
                        hoverFillColor='#fff'
                    />
                </div>
                <div className="card w-full max-w-[500px] bg-base-100 shadow-2xl">
                    <div className="card-body p-8">
                        <div className="flex justify-center">
                            <img
                                src={logoEventos}
                                alt="logo de el login"
                                className="w-30 h-30"
                            />
                        </div>
                        <h2 className="card-title justify-center text-3xl font-bold mb-8">Iniciar Sesion</h2>

                        <div className="form-control w-full">
                            <label className="label" htmlFor="correo">
                                <span className="label-text text-lg mb-2">Email</span>
                            </label>
                            <input
                                id="correo"
                                placeholder="Ingrese su email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input input-bordered input-lg w-full text-lg"
                            />
                        </div>

                        <div className="form-control w-full mt-4">
                            <div className="flex justify-between">
                                <label className="label mb-2" htmlFor="contraseña">
                                    <span className="label-text text-lg">Contraseña</span>
                                </label>
                            </div>
                            <div className='relative'>
                                <input
                                    id="contraseña"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Ingrese su contraseña"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input input-bordered input-lg w-full text-lg"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute z-10 inset-y-0 right-0 pr-3 flex items-center hover:text-primary transition-colors"
                                >
                                    {showPassword ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 11-4.243-4.243m4.242 4.242L9.88 9.88" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.639 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.639 0-8.573-3.007-9.963-7.178z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        <div className="form-control mt-8 text-center">
                            <button onClick={() => iniciarSesion()} type="submit" className="btn btn-primary text-lg px-8 py-3 h-14 min-w-[200px] transition-all hover:-translate-y-0.5">Iniciar Sesion</button>
                        </div>

                        <p className="text-center mt-6 text-base">
                            No tienes una cuenta?
                            <Link to="/register" className="link link-primary ml-2 text-base">Regístrate ahora</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
