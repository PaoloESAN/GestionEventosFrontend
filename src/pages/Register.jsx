import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ModalErrorConexion, ModalRegistroEmail, ModalRegistroError, ModalRegistroExitoso, ModalRegistroErrorCampos, ModalRegistroErrorContra } from '../components/ModalesConexion';
import logoEventos from '../assets/logoEventos.svg';
import Squares from '../components/BgSquares';
const Register = () => {
    const [formData, setFormData] = useState({
        nombres: '',
        apellidos: '',
        email: '',
        contraseña: '',
        repetirContraseña: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    /*
    {
        "nombres": "Jose",
        "apellidos": "Manuel",
        "email": "josemanuel123@email.com",
        "contrasena": "nose123"
    }

    */
    const navigate = useNavigate();

    const registrarse = async () => {
        if (formData.nombres.trim() === '' || formData.apellidos.trim() === '' || formData.email.trim() === '' || formData.contraseña.trim() === '' || formData.repetirContraseña.trim() === '') {
            document.getElementById('modalRegistroErrorCampos').showModal();
            return;
        }
        if (formData.contraseña !== formData.repetirContraseña) {
            document.getElementById('modalRegistroErrorContra').showModal();
            return;
        }
        try {
            const respuesta = await fetch('http://localhost:8080/api/v1/usuarios/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({
                    nombres: formData.nombres,
                    apellidos: formData.apellidos,
                    email: formData.email,
                    contrasena: formData.contraseña
                })
            });

            if (respuesta.ok) {
                document.getElementById('modalRegistroExitoso').showModal();
            } else if (respuesta.status === 409) {
                document.getElementById('modalRegistroEmail').showModal();
            } else {
                document.getElementById('modalRegistroError').showModal();
            }
        } catch (error) {
            console.error('Error de conexión:', error);
            document.getElementById('modalErrorConexion').showModal();
        }

    }; return (
        <>
            <ModalErrorConexion />
            <ModalRegistroEmail />
            <ModalRegistroError />
            <ModalRegistroExitoso onContinue={() => navigate('/login')} />
            <ModalRegistroErrorContra />
            <ModalRegistroErrorCampos />
            <div>
                <div className="absolute top-0 left-0 w-full h-full bg-black">
                    <Squares
                        speed={0.2}
                        squareSize={40}
                        direction='diagonal'
                        borderColor='#5f45e7'
                        hoverFillColor='#fff'
                    />
                </div>
            </div>
            <div className="min-h-screen bg-base-200 flex items-center justify-center">
                <div className="card max-w-[500px] bg-base-100 shadow-2xl">
                    <div className="card-body p-8">
                        <div className="flex justify-center">
                            <img
                                src={logoEventos}
                                alt="logo de el login"
                                className="w-30 h-30"
                            />
                        </div>
                        <h2 className="card-title justify-center text-3xl font-bold mb-8">Crear una cuenta nueva</h2>

                        <div className="grid grid-cols-2 gap-4 mb-2">
                            <div className="form-control w-full">
                                <label className="label" htmlFor="nombres">
                                    <span className="label-text text-lg mb-2">Nombres</span>
                                </label>
                                <input
                                    id="nombres"
                                    type="text"
                                    placeholder="Ingrese sus nombres"
                                    value={formData.nombres}
                                    onChange={handleChange}
                                    className="input input-bordered input-lg w-full text-lg"
                                    autoComplete="given-name"
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label" htmlFor="apellidos">
                                    <span className="label-text text-lg mb-2">Apellidos</span>
                                </label>
                                <input
                                    id="apellidos"
                                    type="text"
                                    placeholder="Ingrese sus apellidos"
                                    value={formData.apellidos}
                                    onChange={handleChange}
                                    className="input input-bordered input-lg w-full text-lg"
                                    autoComplete="family-name"
                                />
                            </div>
                        </div>

                        <div className="form-control w-full mb-2">
                            <label className="label" htmlFor="correo">
                                <span className="label-text text-lg mb-2">Correo electrónico</span>
                            </label>
                            <input
                                id="email"
                                placeholder="ejemplo@correo.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="input input-bordered input-lg w-full text-lg"
                                autoComplete="email"
                            />
                        </div>

                        <div className="form-control w-full mb-2">
                            <label className="label" htmlFor="contraseña">
                                <span className="label-text text-lg mb-2">Contraseña</span>
                            </label>
                            <input
                                id="contraseña"
                                type="password"
                                placeholder="Ingrese su contraseña"
                                value={formData.contraseña}
                                onChange={handleChange}
                                className="input input-bordered input-lg w-full text-lg"
                                autoComplete="new-password"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label" htmlFor="Repeat-contraseña">
                                <span className="label-text text-lg mb-2">Confirmar contraseña</span>
                            </label>
                            <input
                                id="repetirContraseña"
                                type="password"
                                placeholder="Repita su contraseña"
                                value={formData.repetirContraseña}
                                onChange={handleChange}
                                className="input input-bordered input-lg w-full text-lg"
                                autoComplete="new-password"
                            />
                        </div>
                        <div className="form-control mt-8 text-center">
                            <button onClick={() => registrarse()} type="submit" className="btn btn-primary text-lg px-8 py-3 h-14 min-w-[200px] transition-all hover:-translate-y-0.5">Registrarse</button>
                        </div>

                        <p className="text-center mt-6 text-base">
                            ¿Ya tienes una cuenta?
                            <Link to="/login" className="link link-primary ml-1">Inicia sesión</Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
