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
        console.log('Register attempt with:', formData);
    }; return (<div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
        <div className="card w-full max-w-[500px] bg-base-100 shadow-2xl">
            <form onSubmit={handleSubmit} className="card-body p-8">
                <div className="flex justify-center mb-8">
                    <img
                        src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        alt="logo de el login"
                        className="w-20 h-20"
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
                            value={formData.firstName}
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
                            value={formData.lastName}
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
                        id="correo"
                        type="email"
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
                        value={formData.password}
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
                        id="Repeat-contraseña"
                        type="password"
                        placeholder="Repita su contraseña"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                        className="input input-bordered input-lg w-full text-lg"
                        autoComplete="new-password"
                    />
                </div>
                <div className="form-control mt-8 text-center">
                    <button type="submit" className="btn btn-primary text-lg px-8 py-3 h-14 min-w-[200px] transition-all hover:-translate-y-0.5">Registrarse</button>
                </div>

                <p className="text-center mt-6 text-base">
                    ¿Ya tienes una cuenta?
                    <Link to="/login" className="link link-primary ml-1">Inicia sesión</Link>
                </p>
            </form>
        </div>
    </div>
    );
};

export default Register;
