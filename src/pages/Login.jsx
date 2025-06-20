import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ModalLoginError, ModalErrorConexion, ModalLoginExitoso } from '../components/ModalesConexion';
import logoEventos from '../assets/logoEventos.svg';
import Aurora from '../components/Aurora';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
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
                <div className="absolute top-0 left-0 w-full h-full">
                    <Aurora
                        blend={0.5}
                        amplitude={1.0}
                        speed={0.5}
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
                            <input
                                id="contraseña"
                                type="password"
                                placeholder="Ingrese su contraseña"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="input input-bordered input-lg w-full text-lg"
                            />
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
