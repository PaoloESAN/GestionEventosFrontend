import { Link, useNavigate } from 'react-router-dom';
import conciertoImg from '../assets/concierto.png';
import teatroImg from '../assets/teatro.png';
import circoImg from '../assets/circo.png';
import foroImg from '../assets/foro.png';
import veladaImg from '../assets/velada.png';
import fiestaImg from '../assets/fiesta.png';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React, { useEffect } from 'react';

const Home = () => {

    const navigate = useNavigate();

    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (!userId) {
            navigate('/login');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [eventoSeleccionado, setEventoSeleccionado] = React.useState(null); const eventos = [
        {
            id: 1,
            imagen: conciertoImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Grupo 5 2025 \"Gira Mundial\"",
            fecha: "5 noviembre 2025",
            organizador: "Master Music Entertainment",
            categoria: "Concierto",
            descripcion: "Gira mundial del Grupo 5 celebrando sus 50 años de trayectoria musical.",
            estado: "activo",
            fechaInicio: "2025-11-05T20:00",
            fechaFin: "2025-11-06T02:00",
            locacion: "Estadio Nacional - Lima"
        },
        {
            id: 2, imagen: fiestaImg,
            lugar: "Estadio San Marcos - Lima",
            titulo: "Bad Bunny - Most Wanted Tour",
            fecha: "14 DIC 2025",
            organizador: "Live Nation Perú",
            categoria: "Concierto",
            descripcion: "El artista más escuchado del momento llega a Lima con su nueva gira mundial.",
            estado: "activo",
            fechaInicio: "2025-12-14T21:00",
            fechaFin: "2025-12-15T02:00",
            locacion: "Estadio San Marcos - Lima"
        },
        {
            id: 3,
            imagen: foroImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Tool - Fear Inoculum Tour",
            fecha: "22 AGO 2025",
            organizador: "Move Concerts",
        },
        {
            id: 4,
            imagen: teatroImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Rosalía - MOTOMAMI World Tour",
            fecha: "30 SEP 2025",
            organizador: "Bizarro Live Entertainment",
        },
        {
            id: 5,
            imagen: veladaImg,
            lugar: "Estadio San Marcos - Lima",
            titulo: "The Weeknd - After Hours Tour",
            fecha: "15 OCT 2025",
            organizador: "One Entertainment",
        },
        {
            id: 6,
            imagen: circoImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Karol G - Mañana Será Bonito Tour",
            fecha: "28 JUL 2025",
            organizador: "Masterlive Perú",
        }
    ]; return (
        <>
            <header className="fixed w-full z-50">
                <NavBar tabAct={1} />
            </header>
            <main className="flex flex-col flex-1 min-h-[calc(100vh-60px)]">
                <div className="hero h-35">
                    <h1 className="text-5xl font-bold text-center self-end">Mis eventos</h1>
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
                <div className="container mx-auto px-4 pt-10 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {eventos.map((evento) => (
                            <div key={evento.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                <figure><img src={evento.imagen} alt={evento.titulo} className="h-48 w-full object-cover" /></figure>
                                <div className="card-body p-4">
                                    <div className="flex justify-between items-center">
                                        <div className="badge badge-primary">{evento.fecha}</div>
                                        <div className="badge badge-ghost">{evento.lugar}</div>
                                    </div>
                                    <h2 className="card-title mt-2">{evento.titulo}</h2>
                                    <p className="text-sm text-base-content/70">{evento.organizador}</p>                                    <div className="card-actions justify-end mt-4">
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

            {/* Modal de Detalles */}
            {eventoSeleccionado && (
                <dialog className="modal modal-bottom sm:modal-middle" open>
                    <div className="modal-box">
                        <h3 className="font-bold text-2xl mb-6">{eventoSeleccionado.titulo}</h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="font-semibold">Categoría</p>
                                <p className="text-base-content/70">{eventoSeleccionado.categoria || 'No especificado'}</p>
                            </div>

                            <div>
                                <p className="font-semibold">Estado</p>
                                <p className="text-base-content/70">{eventoSeleccionado.estado || 'No especificado'}</p>
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
