import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    }; return (
        <div className="min-h-screen bg-base-200 flex items-center justify-center">
            <div className="card w-[450px] bg-base-100 shadow-xl">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="flex justify-center mb-2">
                        <img
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                            alt="logo de el login"
                            className="w-12 h-12"
                        />
                    </div>
                    <h2 className="card-title justify-center mb-4">Crear una cuenta nueva</h2>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="form-control w-full">
                            <label className="label" htmlFor="nombres">
                                <span className="label-text">Nombre</span>
                            </label>
                            <input
                                id="nombres"
                                type="text"
                                placeholder="Ingrese su nombre"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                autoComplete="given-name"
                            />
                        </div>

                        <div className="form-control w-full">
                            <label className="label" htmlFor="apellidos">
                                <span className="label-text">Apellidos</span>
                            </label>
                            <input
                                id="apellidos"
                                type="text"
                                placeholder="Ingrese sus apellidos"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="input input-bordered w-full"
                                autoComplete="family-name"
                            />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <label className="label" htmlFor="correo">
                            <span className="label-text">Correo electrónico</span>
                        </label>
                        <input
                            id="correo"
                            type="email"
                            placeholder="ejemplo@correo.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label" htmlFor="contraseña">
                            <span className="label-text">Contraseña</span>
                        </label>
                        <input
                            id="contraseña"
                            type="password"
                            placeholder="Ingrese su contraseña"
                            value={formData.password}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            autoComplete="new-password"
                        />
                    </div>

                    <div className="form-control w-full">
                        <label className="label" htmlFor="Repeat-contraseña">
                            <span className="label-text">Confirmar contraseña</span>
                        </label>
                        <input
                            id="Repeat-contraseña"
                            type="password"
                            placeholder="Repita su contraseña"
                            value={formData.repeatPassword}
                            onChange={handleChange}
                            className="input input-bordered w-full"
                            autoComplete="new-password"
                        />
                    </div>

                    <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">Registrarse</button>
                    </div>

                    <p className="text-center mt-4 text-sm">
                        ¿Ya tienes una cuenta?
                        <Link to="/login" className="link link-primary ml-1">Inicia sesión</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;
