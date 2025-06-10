import React, { useState, useEffect } from 'react';
import fotoPerfil from '../assets/fotoPerfil.png';

export default function PerfilModal() {
    const [userData, setUserData] = useState({
        nombres: '',
        apellidos: '',
        email: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        // Cargar datos del usuario cuando se monta el componente
        const userId = localStorage.getItem('userId');
        if (userId) {
            cargarDatosUsuario(userId);
        }
    }, []);

    const cargarDatosUsuario = async (userId) => {
        setIsLoading(true);
        try {
            const respuesta = await fetch(`http://localhost:8080/api/v1/usuarios/buscar/${userId}`);
            if (respuesta.ok) {
                const usuario = await respuesta.json();
                setUserData({
                    nombres: usuario.nombres || '',
                    apellidos: usuario.apellidos || '',
                    email: usuario.email || ''
                });
            } else {
                console.error('Error al cargar datos del usuario:', respuesta.status);
            }
        } catch (error) {
            console.error('Error al cargar datos del usuario:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <dialog id="perfil" className="modal">
            <div className="modal-box max-w-md">
                <h3 className="font-bold text-xl mb-6 flex items-center gap-2">                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
                    Mi Perfil
                </h3>

                {isLoading ? (
                    <div className="flex justify-center items-center py-8">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {/* Foto de perfil */}
                        <div className="flex justify-center mb-6">
                            <div className="avatar">
                                <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        src={fotoPerfil}
                                        alt="Foto de perfil"
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Información del usuario */}
                        <div className="space-y-4">
                            <div className="flex flex-col items-center text-center space-y-1">
                                <h4 className="text-lg font-semibold text-base-content">
                                    {userData.nombres && userData.apellidos
                                        ? `${userData.nombres} ${userData.apellidos}`
                                        : 'Nombre no disponible'
                                    }
                                </h4>
                                <p className="text-base-content/70 text-sm">
                                    {userData.email || 'Email no disponible'}
                                </p>
                            </div>

                            <div className="divider"></div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-center py-2">
                                    <span className="text-base-content/70 font-medium">Nombres:</span>
                                    <span className="text-base-content font-semibold">
                                        {userData.nombres || 'No disponible'}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center py-2">
                                    <span className="text-base-content/70 font-medium">Apellidos:</span>
                                    <span className="text-base-content font-semibold">
                                        {userData.apellidos || 'No disponible'}
                                    </span>
                                </div>

                                <div className="flex justify-between items-center py-2">
                                    <span className="text-base-content/70 font-medium">Email:</span>
                                    <span className="text-base-content font-semibold">
                                        {userData.email || 'No disponible'}
                                    </span>
                                </div>

                                <div className='flex justify-center mt-6'>
                                    <button className='btn btn-accent w-70 h-10 transition-all hover:-translate-y-0.5'>
                                        <a href='https://finanfix.wordpress.com/' target='_blank' rel='noopener noreferrer'>
                                            ¿Quieres gestionar mejor tus finanzas?
                                        </a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="modal-action justify-center">
                    <form method="dialog">
                        <button className="btn btn-primary">Cerrar</button>
                    </form>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}
