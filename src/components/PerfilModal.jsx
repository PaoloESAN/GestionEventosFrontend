import React, { useState, useEffect, useRef } from 'react';
import fotoPerfil from '../assets/fotoPerfil.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)
import chaufaIcono from '../assets/chaufaIcono.png';
import chaufaImagen from '../assets/arrozChaufa.png';
export default function PerfilModal() {
    const [userData, setUserData] = useState({
        nombres: '',
        apellidos: '',
        email: ''
    }); const [isLoading, setIsLoading] = useState(false);
    const lluviaContainerRef = useRef(null);
    const lluviaActivaRef = useRef(false);
    const intervalRef = useRef(null);

    useEffect(() => {
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
    }; const { contextSafe } = useGSAP();

    const girar = contextSafe(({ currentTarget }) => {
        gsap.to(currentTarget, { rotation: "+=360" });
    }); const iniciarLluvia = contextSafe(() => {
        if (lluviaActivaRef.current) return;
        lluviaActivaRef.current = true;

        // Limpiar intervalo anterior si existe
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        // Limpiar contenedor anterior si existe
        if (lluviaContainerRef.current) {
            lluviaContainerRef.current.remove();
            lluviaContainerRef.current = null;
        }

        // Crear contenedor para la lluvia
        const container = document.createElement('div');
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            pointer-events: none;
            z-index: 9999;
            overflow: hidden;
        `;
        document.body.appendChild(container);
        lluviaContainerRef.current = container;

        // Función que crea una imagen que cae
        const crearImagenCayendo = () => {
            if (!lluviaActivaRef.current || !lluviaContainerRef.current) return;

            const imagen = document.createElement('img');
            imagen.src = chaufaImagen; imagen.style.cssText = `
                position: absolute;
                width: ${Math.random() * 60 + 50}px;
                height: ${Math.random() * 60 + 50}px;
                top: -100px;
                left: ${Math.random() * 100}vw;
                opacity: 0.9;
                pointer-events: none;
                border-radius: 25%;
            `; lluviaContainerRef.current.appendChild(imagen);

            // Animar solo la caída, sin escalado ni rotación
            gsap.to(imagen, {
                y: window.innerHeight + 100,
                x: `+=${Math.random() * 150 - 75}`,
                duration: Math.random() * 2.5 + 2,
                ease: "power2.in",
                onComplete: () => {
                    if (imagen.parentNode) {
                        imagen.remove();
                    }
                }
            });

            // Efecto de fade out
            gsap.to(imagen, {
                opacity: 0,
                duration: 0.8,
                delay: Math.random() * 2 + 1
            });
        };

        // Crear imágenes continuamente mientras esté activa la lluvia
        intervalRef.current = setInterval(() => {
            if (lluviaActivaRef.current) {
                crearImagenCayendo();
            } else {
                if (intervalRef.current) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                }
            }
        }, 200);
    });

    const detenerLluvia = contextSafe(() => {
        lluviaActivaRef.current = false;

        // Limpiar el contenedor después de un tiempo
        setTimeout(() => {
            if (lluviaContainerRef.current) {
                lluviaContainerRef.current.remove();
                lluviaContainerRef.current = null;
            }
        }, 3000);
    });

    return (
        <dialog id="perfil" className="modal">
            <div className="modal-box max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-xl mb-6 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                        </svg>
                        Mi Perfil
                    </h3>                    <div className='mb-auto'>
                        <a
                            href='https://www.facebook.com/chifalaunionbarranca/?locale=es_LA'
                            target='_blank'
                            rel='noopener noreferrer'
                            onMouseEnter={iniciarLluvia}
                            onMouseLeave={detenerLluvia}
                        >
                            <img
                                src={chaufaIcono}
                                alt="Perfil Icono"
                                className="w-10 h-10 transition-transform hover:scale-110"
                            />
                        </a>
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex justify-center items-center py-8">
                        <span className="loading loading-spinner loading-lg"></span>
                    </div>
                ) : (
                    <div className="space-y-6">
                        <div className="flex justify-center mb-6">
                            <div className="avatar" onClick={girar}>
                                <div className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        src={fotoPerfil}
                                        alt="Foto de perfil"
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                        </div>

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
