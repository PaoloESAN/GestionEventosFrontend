import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import bodaImg from '../assets/boda.png';
import charlaImg from '../assets/charla.png';
import defaultImg from '../assets/default.png';
import foroImg from '../assets/foro.png';
import teatroImg from '../assets/teatro.png';
import conciertoImg from '../assets/concierto.png';

export default function Eventos() {
    const [eventoSeleccionado, setEventoSeleccionado] = React.useState(null);
    const [ticketSeleccionado, setTicketSeleccionado] = React.useState(null);
    const [cantidad, setCantidad] = React.useState(1);

    const tiposTicket = [
        {
            tipo: "General",
            precio: 150,
            disponibles: 1000
        },
        {
            tipo: "VIP",
            precio: 300,
            disponibles: 500
        },
        {
            tipo: "Platinum",
            precio: 500,
            disponibles: 100
        }
    ];

    const eventos = [
        {
            id: 1,
            imagen: bodaImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Grupo 5 2025 \"Gira Mundial\"",
            fecha: "5 noviembre 2025",
            organizador: "Master Music Entertainment",
            categoria: "Concierto",
            descripcion: "¡El grupo más importante de la cumbia peruana celebra sus 50 años de trayectoria musical! Una noche mágica llena de éxitos y sorpresas que no te puedes perder.",
            estado: "activo",
            fechaInicio: "2025-11-05T20:00",
            fechaFin: "2025-11-06T02:00",
            ticketsDisponibles: true
        },
        {
            id: 2,
            imagen: charlaImg,
            lugar: "Estadio San Marcos - Lima",
            titulo: "Bad Bunny - Most Wanted Tour",
            fecha: "14 DIC 2025",
            organizador: "Live Nation Perú",
        },
        {
            id: 3,
            imagen: defaultImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Tool - Fear Inoculum Tour",
            fecha: "22 AGO 2025",
            organizador: "Move Concerts",
        },
        {
            id: 4,
            imagen: foroImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Rosalía - MOTOMAMI World Tour",
            fecha: "30 SEP 2025",
            organizador: "Bizarro Live Entertainment",
        },
        {
            id: 5,
            imagen: teatroImg,
            lugar: "Estadio San Marcos - Lima",
            titulo: "The Weeknd - After Hours Tour",
            fecha: "15 OCT 2025",
            organizador: "One Entertainment",
        },
        {
            id: 6,
            imagen: conciertoImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Karol G - Mañana Será Bonito Tour",
            fecha: "28 JUL 2025",
            organizador: "Masterlive Perú",
        }
    ];
    return (
        <>
            <header className="fixed w-full z-50">
                <NavBar tabAct={2} />
            </header>
            <main className="flex flex-col flex-1 min-h-[calc(100vh-60px)]">
                <div className="hero h-35">
                    <h1 className="text-5xl font-bold text-center self-end">Asiste a otros eventos</h1>
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
                                            Comprar Tickets
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Modal de Compra de Tickets */}
            {eventoSeleccionado && (
                <dialog className="modal modal-bottom sm:modal-middle" open>
                    <div className="modal-box max-w-3xl">
                        <h3 className="font-bold text-2xl mb-6">{eventoSeleccionado.titulo}</h3>

                        {/* Información del Evento */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                            <div>
                                <p className="font-semibold">Categoría</p>
                                <p className="text-base-content/70">{eventoSeleccionado.categoria || 'No especificado'}</p>
                            </div>

                            <div>
                                <p className="font-semibold">Organizador</p>
                                <p className="text-base-content/70">{eventoSeleccionado.organizador}</p>
                            </div>

                            <div className="md:col-span-2">
                                <p className="font-semibold">Descripción</p>
                                <p className="text-base-content/70">{eventoSeleccionado.descripcion || 'Sin descripción'}</p>
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
                                <p className="text-base-content/70">{eventoSeleccionado.lugar}</p>
                            </div>
                        </div>

                        {/* Sección de Tickets */}
                        <div className="divider">Tickets Disponibles</div>                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {tiposTicket.map((ticket, index) => (
                                <div key={index}
                                    className={`card ${ticketSeleccionado === index
                                        ? 'bg-primary/10 border-2 border-primary'
                                        : 'bg-base-200'
                                        }`}>
                                    <div className="card-body p-4">
                                        <h3 className="card-title text-lg">{ticket.tipo}</h3>
                                        <p className="text-2xl font-bold">S/ {ticket.precio}</p>
                                        <p className="text-sm text-base-content/70">{ticket.disponibles} disponibles</p>
                                        <div className="card-actions justify-end mt-2 flex flex-col">
                                            <button
                                                onClick={() => {
                                                    setTicketSeleccionado(ticketSeleccionado === index ? null : index);
                                                    setCantidad(1);
                                                }}
                                                className={`btn ${ticketSeleccionado === index
                                                    ? 'btn-primary'
                                                    : 'btn-neutral'
                                                    } btn-sm`}>
                                                {ticketSeleccionado === index ? 'Seleccionado' : 'Seleccionar'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Selección de Cantidad */}
                        {ticketSeleccionado !== null && (
                            <div className="bg-base-200 p-6 rounded-lg mb-6">
                                <h4 className="font-semibold text-lg mb-4">Selecciona la cantidad</h4>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setCantidad(prev => Math.max(1, prev - 1))}
                                        className="btn btn-circle btn-sm btn-neutral">
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={cantidad}
                                        onChange={(e) => setCantidad(Math.min(
                                            tiposTicket[ticketSeleccionado].disponibles,
                                            Math.max(1, parseInt(e.target.value) || 1)
                                        ))}
                                        className="input input-bordered w-20 text-center"
                                        min="1"
                                        max={tiposTicket[ticketSeleccionado].disponibles}
                                    />
                                    <button
                                        onClick={() => setCantidad(prev => Math.min(
                                            tiposTicket[ticketSeleccionado].disponibles,
                                            prev + 1
                                        ))}
                                        className="btn btn-circle btn-sm btn-neutral">
                                        +
                                    </button>
                                </div>

                                {/* Resumen de la compra */}
                                <div className="mt-6 p-4 bg-base-100 rounded-lg">
                                    <div className="flex justify-between items-center text-sm mb-2">
                                        <span>{tiposTicket[ticketSeleccionado].tipo} x {cantidad}</span>
                                        <span>S/ {tiposTicket[ticketSeleccionado].precio} c/u</span>
                                    </div>
                                    <div className="divider my-2"></div>
                                    <div className="flex justify-between items-center font-bold">
                                        <span>Total</span>
                                        <span className="text-xl">
                                            S/ {(tiposTicket[ticketSeleccionado].precio * cantidad).toFixed(2)}
                                        </span>
                                    </div>
                                    <button className="btn btn-primary w-full mt-4">
                                        Confirmar compra
                                    </button>
                                </div>
                            </div>
                        )}

                        <div className="modal-action">
                            <button
                                onClick={() => setEventoSeleccionado(null)}
                                className="btn btn-primary">
                                Cerrar
                            </button>
                        </div>
                    </div>
                </dialog>
            )}

            <Footer />
        </>
    )
}
