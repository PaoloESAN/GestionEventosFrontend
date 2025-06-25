import React, { useState } from 'react';
import hackerImage from '../assets/hacker.png';
import { useNavigate } from 'react-router-dom';
import Magnet from './DivMagnet';
export default function LoginAdmin({ loguin }) {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [modalMessage, setModalMessage] = useState('');

    const showModal = (message) => {
        setModalMessage(message);
        document.getElementById('alert_modal').showModal();
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setTimeout(() => {
            if (user === 'ADMIN' && password === '123456') {
                loguin();
                setIsLoading(false);
            } else {
                showModal('Usuario o contraseña incorrectos');
                setIsLoading(false);
            }
        }, 1000);
    };

    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 via-base-200 to-secondary/20 p-4">
            <div className="w-full max-w-md">
                <div className="bg-base-100 rounded-2xl shadow-xl border border-base-300 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-secondary p-8 text-center">
                        <div className="w-20 h-20 bg-base-100 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                            <img src={hackerImage} alt="Logo" className="w-16 h-16 object-cover rounded-full" />
                        </div>
                        <h2 className="text-2xl font-bold text-base-100 mb-2">Bienvenido</h2>
                        <p className="text-base-100/80 text-x1">Panel de admin</p>
                    </div>

                    <form onSubmit={handleLogin} className="p-8 space-y-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Usuario</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-base-content/50">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.32 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </div>
                                <input
                                    type="user"
                                    value={user}
                                    onChange={(e) => setUser(e.target.value)}
                                    className="input input-bordered w-full focus:input-primary transition-all duration-200"
                                    placeholder="Usuario"
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-medium">Contraseña</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-base-content/50">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                                    </svg>
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="input input-bordered w-full pr-10 focus:input-primary transition-all duration-200"
                                    placeholder="••••••••"
                                    required
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
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="btn btn-primary w-full text-lg h-12 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                        >
                            {isLoading ? (
                                <>
                                    <span className="loading loading-spinner loading-sm"></span>
                                    Iniciando sesión...
                                </>
                            ) : (
                                'Iniciar Sesión'
                            )}
                        </button>
                    </form>
                </div>
                <div className='text-center'>
                    <Magnet padding={30} disabled={false} magnetStrength={2}>
                        <button className='btn btn-ghost text-lg mt-4' onClick={() => navigate('/home')}>
                            Volver
                        </button>
                    </Magnet>
                </div>
            </div>

            {/* Modal de Alertas */}
            <dialog id="alert_modal" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-error">¡Atención!</h3>
                    <p className="py-4">{modalMessage}</p>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>cerrar</button>
                </form>
            </dialog>
        </div>
    );
}
