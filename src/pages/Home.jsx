import { Link, useNavigate } from 'react-router-dom';
import conciertoImg from '../assets/concierto.png';
import teatroImg from '../assets/teatro.png';
import circoImg from '../assets/circo.png';
import foroImg from '../assets/foro.png';
import charlaImg from '../assets/charla.png';
import veladaImg from '../assets/velada.png';
import bodaImg from '../assets/boda.png';
import fiestaImg from '../assets/fiesta.png';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from "gsap/SplitText";
import { SinMisEventos } from '../components/SinElementos';
gsap.registerPlugin(useGSAP, SplitText);


const Home = () => {

    const textoAnimadoRef = useRef(null);
    const { contextSafe } = useGSAP(() => {
        if (textoAnimadoRef.current) {
            textoAnimado();
        }
    });

    const textoAnimado = contextSafe(() => {
        const split = new SplitText(textoAnimadoRef.current, { type: "chars" });
        gsap.from(split.chars, {
            duration: 0.5,
            y: 25,
            stagger: 0.05,
            autoAlpha: 0,
            filter: "blur(10px)",
            ease: "back.out(1.7)",
        });
    });

    const navigate = useNavigate();

    const userId = localStorage.getItem('userId');
    console.log('userId obtenido:', userId); useEffect(() => {
        if (!userId) {
            navigate('/login');
        }
    }, [userId, navigate]);

    const [eventoSeleccionado, setEventoSeleccionado] = React.useState(null);
    const [eventos, setEventos] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const getImagenPorCategoria = (categoria) => {
        switch (categoria?.toLowerCase()) {
            case 'boda':
                return bodaImg;
            case 'concierto':
                return conciertoImg;
            case 'charla':
                return charlaImg;
            case 'teatro':
                return teatroImg;
            case 'circo':
                return circoImg;
            case 'foro':
                return foroImg;
            case 'velada':
                return veladaImg;
            case 'fiesta':
                return fiestaImg;
            default:
                return conciertoImg;
        }
    }; useEffect(() => {
        const cargarEventos = async () => {
            if (!userId) {
                console.log('No hay userId, redirigiendo a login...');
                setIsLoading(false);
                navigate('/login');
                return;
            }

            try {
                console.log('Intentando cargar eventos para el userId:', userId);
                const respuesta = await fetch('http://localhost:8080/api/v1/eventos/organizador/' + userId);
                console.log('Estado de la respuesta:', respuesta.status);
                if (respuesta.ok) {
                    const data = await respuesta.json();
                    console.log('Eventos cargados (respuesta completa):', data);
                    console.log('Tipo de data:', typeof data);
                    console.log('¿Es un array?', Array.isArray(data));
                    if (Array.isArray(data)) {
                        setEventos(data);
                    }
                    else if (data.eventos && Array.isArray(data.eventos)) {
                        setEventos(data.eventos);
                    }
                    else {
                        console.log('No se encontraron eventos en el formato esperado');
                        setEventos([]);
                    }
                } else {
                    console.error('Error al cargar eventos:', respuesta.status);
                    setEventos([]);
                }
            } catch (error) {
                console.error('Error de conexión:', error);
                setEventos([]);
            } finally {
                setIsLoading(false);
            }
        };

        cargarEventos();
    }, [userId, navigate]); return (
        <>
            <header className="fixed w-full z-50">
                <NavBar tabAct={1} />
            </header>
            <main className="flex flex-col flex-1 min-h-[calc(100vh-60px)]">
                <div className="hero h-35">
                    <h1 ref={textoAnimadoRef} className="text-5xl font-bold text-center self-end">Mis eventos</h1>
                </div>
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
                    <Link to="/crear-evento">
                        <button className="btn btn-primary btn-lg gap-2 normal-case">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Crear Evento
                        </button>
                    </Link>
                </div>
                <div className="container mx-auto px-4 pt-10 pb-20">                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {isLoading ? (
                        <div className="col-span-3 flex justify-center items-center p-8">
                            <span className="loading loading-spinner loading-lg"></span>
                        </div>
                    ) : eventos.length === 0 ? (
                        <SinMisEventos />
                    ) : eventos.map((evento) => (
                        <div key={evento.eventoId} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                            <figure>
                                <img
                                    src={getImagenPorCategoria(evento.categoria)}
                                    alt={evento.nombre}
                                    className="h-48 w-full object-cover"
                                />
                            </figure>
                            <div className="card-body p-4">
                                <div className="flex justify-between items-center">
                                    <div className="badge badge-primary">
                                        {new Date(evento.fechaInicio).toLocaleDateString('es-PE', {
                                            day: 'numeric',
                                            month: 'long',
                                            year: 'numeric'
                                        })}
                                    </div>
                                    <div className="badge badge-ghost">{evento.locacion}</div>
                                </div>                                <h2 className="card-title mt-2">{evento.nombre}</h2>
                                <p className="text-sm text-base-content/70">
                                    {evento.organizador?.nombres
                                        ? `${evento.organizador.nombres} ${evento.organizador.apellidos}`
                                        : 'Organizador no especificado'}
                                </p>
                                <div className="card-actions justify-end mt-4">
                                    <button
                                        onClick={() => setEventoSeleccionado(evento)}
                                        className="btn btn-primary btn-sm">
                                        Ver detalles
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </main>

            {eventoSeleccionado && (
                <dialog className="modal modal-bottom sm:modal-middle" open>
                    <div className="modal-box">                        <h3 className="font-bold text-2xl mb-6">{eventoSeleccionado.nombre}</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold">Categoría</p>
                                <p className="text-base-content/70">{eventoSeleccionado.categoria || 'No especificado'}</p>
                            </div>

                            <div>
                                <p className="font-semibold">Estado</p>
                                <p className="text-base-content/70">{eventoSeleccionado.estado || 'Planificado'}</p>
                            </div>


                            <div>
                                <p className="font-semibold">Fecha de Inicio</p>
                                <p className="text-base-content/70">
                                    {eventoSeleccionado.fechaInicio
                                        ? new Date(eventoSeleccionado.fechaInicio).toLocaleString()
                                        : 'No especificado'
                                    }
                                </p>
                            </div>

                            <div>
                                <p className="font-semibold">Fecha de Fin</p>
                                <p className="text-base-content/70">
                                    {eventoSeleccionado.fechaFin
                                        ? new Date(eventoSeleccionado.fechaFin).toLocaleString()
                                        : 'No especificado'
                                    }
                                </p>
                            </div>

                            <div className="md:col-span-2">
                                <p className="font-semibold">Locación</p>
                                <p className="text-base-content/70">{eventoSeleccionado.locacion || 'No especificado'}</p>
                            </div>
                            <div className="md:col-span-2">
                                <p className="font-semibold">Descripción</p>
                                <p className="text-base-content/70">{eventoSeleccionado.descripcion || 'Sin descripción'}</p>
                            </div>
                        </div>

                        <div className="modal-action">
                            <button
                                onClick={() => setEventoSeleccionado(null)}
                                className="btn">
                                Cerrar
                            </button>
                        </div>
                    </div>
                    <form method="dialog" className="modal-backdrop">
                        <button onClick={() => setEventoSeleccionado(null)}>cerrar</button>
                    </form>
                </dialog>
            )}

            <footer className="">
                <Footer />
            </footer>
        </>
    );
};

export default Home;
