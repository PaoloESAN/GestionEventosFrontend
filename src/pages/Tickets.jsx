import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import conciertoImg from '../assets/concierto.png'
import teatroImg from '../assets/teatro.png'
import circoImg from '../assets/circo.png'

export default function Tickets() {
    const [ticketSeleccionado, setTicketSeleccionado] = React.useState(null);

    // Array de eventos (simulando datos de la base de datos)
    const eventos = [
        {
            evento_id: 1,
            imagen: conciertoImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Grupo 5 2025 \"Gira Mundial\"",
            fecha: "5 NOV 2025",
            organizador: "Master Music Entertainment",
            estado: "Planificado",
            categoria: "Concierto",
            descripcion: "¡El grupo más importante de la cumbia peruana celebra sus 50 años de trayectoria musical! Una noche mágica llena de éxitos y sorpresas que no te puedes perder.",
            fechaInicio: "2025-11-05T20:00",
            fechaFin: "2025-11-06T02:00"
        },
        {
            evento_id: 2,
            imagen: teatroImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Rosalía - MOTOMAMI World Tour",
            fecha: "30 SEP 2025",
            organizador: "Bizarro Live Entertainment",
            estado: "En curso",
            categoria: "Concierto",
            descripcion: "La artista española más internacional presenta su gira mundial MOTOMAMI. Un espectáculo único que combina flamenco, reggaeton y arte experimental.",
            fechaInicio: "2025-09-30T21:00",
            fechaFin: "2025-10-01T01:00"
        },
        {
            evento_id: 3,
            imagen: circoImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Karol G - Mañana Será Bonito Tour",
            fecha: "28 JUL 2025",
            organizador: "Masterlive Perú",
            estado: "Finalizado",
            categoria: "Concierto",
            descripcion: "La bichota número uno del reggaeton llega a Lima con su gira más exitosa. Un show lleno de energía, empoderamiento y los mayores éxitos del momento.",
            fechaInicio: "2025-07-28T20:00",
            fechaFin: "2025-07-29T01:00"
        }
    ];

    // Array de tickets (simulando datos de la base de datos)
    const misTickets = [
        {
            ticket_id: 1,
            evento_id: 1,
            tipoTicket: "VIP",
            cantidad: 1,
            precio: 300,
            fechaCompra: "2025-06-01T14:30:00"
        },
        {
            ticket_id: 2,
            evento_id: 2,
            tipoTicket: "General",
            cantidad: 2,
            precio: 150,
            fechaCompra: "2025-05-15T10:20:00"
        },
        {
            ticket_id: 3,
            evento_id: 3,
            tipoTicket: "Platinum",
            cantidad: 3,
            precio: 500,
            fechaCompra: "2025-04-28T16:45:00"
        }
    ];

    // Combinar los datos de eventos y tickets
    const ticketsConEventos = misTickets.map(ticket => {
        const evento = eventos.find(e => e.evento_id === ticket.evento_id);
        return {
            ...evento,
            ticket_id: ticket.ticket_id,
            tipo: ticket.tipoTicket,
            cantTickets: ticket.cantidad.toString(),
            precio: ticket.precio,
            fechaCompra: ticket.fechaCompra
        };
    });

    return (
        <>
            <header className="fixed w-full z-50">
                <NavBar tabAct={3} />
            </header>
            <main className="flex flex-col flex-1 min-h-[calc(100vh-60px)]">
                <div className="hero h-35">
                    <h1 className="text-5xl font-bold text-center self-end">Mis tickets</h1>
                </div>
                <div className="container mx-auto px-4 pt-10 pb-20">
                    <div className="flex flex-col gap-6">
                        {ticketsConEventos.map((ticket) => (
                            <div key={ticket.id} className="card h-50 card-side bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-x-1">
                                <figure className="w-1/4">
                                    <img src={ticket.imagen} alt={ticket.titulo} className="h-full w-full object-cover" />
                                </figure>
                                <div className="card-body flex-row items-center justify-between p-6 w-3/4">
                                    <div className="flex flex-col flex-1">
                                        <div className="flex gap-2 mb-2">
                                            <div className="badge badge-primary">{ticket.fecha}</div>
                                            <div className="badge badge-ghost">{ticket.lugar}</div>
                                            <div className={`badge ${ticket.estado === 'Planificado' ? 'badge-success' : ticket.estado === 'En curso' ? 'badge-warning' : 'badge-error'}`}>
                                                {ticket.estado}
                                            </div>
                                        </div>
                                        <h2 className="card-title text-2xl">{ticket.titulo}</h2>
                                        <p className="text-base text-base-content/70">{ticket.organizador}</p>
                                        <div className="mt-2">
                                            <span className="font-semibold">Tipo: </span>{ticket.tipo}
                                        </div>                                        <div className="text-sm opacity-75">
                                            <span className="font-semibold">Cantidad de tickets: </span>{ticket.cantTickets}
                                        </div>
                                    </div>                                    <div className="card-actions justify-end">
                                        <button
                                            onClick={() => setTicketSeleccionado(ticket)}
                                            className="btn btn-primary">
                                            Ver detalles
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>

            {/* Modal de Detalles del Ticket */}
            {ticketSeleccionado && (
                <Modal
                    isOpen={!!ticketSeleccionado}
                    onClose={() => setTicketSeleccionado(null)}
                    title="Detalles del Ticket"
                >                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">                            {/* Imagen y detalles principales */}
                            <div>
                                <div className="relative h-64 mb-4">
                                    <img
                                        src={ticketSeleccionado.imagen}
                                        alt={ticketSeleccionado.titulo}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>

                                {/* Ubicación y organizador */}
                                <div className="bg-base-200 rounded-lg p-4">
                                    <h4 className="font-bold text-lg mb-3">Información del Evento</h4>
                                    <div className="space-y-2">
                                        <div>
                                            <p className="text-sm font-semibold">Ubicación:</p>
                                            <p className="text-base-content/70">{ticketSeleccionado.lugar}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">Organizador:</p>
                                            <p className="text-base-content/70">{ticketSeleccionado.organizador}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Detalles del evento y ticket */}
                            <div className="space-y-6">
                                {/* Información del Evento */}
                                <div className="bg-base-200 rounded-lg p-4">
                                    <h3 className="text-2xl font-bold mb-2">{ticketSeleccionado.titulo}</h3>
                                    <p className="text-base-content/70 mb-4">{ticketSeleccionado.descripcion}</p>

                                    <div className="flex gap-2 flex-wrap mb-4">
                                        <div className="badge badge-primary">{ticketSeleccionado.categoria}</div>
                                        <div className={`badge ${ticketSeleccionado.estado === 'Planificado' ? 'badge-success' :
                                            ticketSeleccionado.estado === 'En curso' ? 'badge-warning' :
                                                'badge-error'
                                            }`}>
                                            {ticketSeleccionado.estado}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="font-semibold">Inicio:</p>
                                            <p>{new Date(ticketSeleccionado.fechaInicio).toLocaleString('es-PE')}</p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Fin:</p>
                                            <p>{new Date(ticketSeleccionado.fechaFin).toLocaleString('es-PE')}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Detalles del ticket */}
                                <div className="bg-base-200 rounded-lg p-4">
                                    <h4 className="font-bold text-lg mb-3">Detalles del Ticket</h4>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm font-semibold">Tipo de Ticket:</p>
                                                <p className="text-base-content/70">{ticketSeleccionado.tipo}</p>
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold">Fecha de Compra:</p>
                                                <p className="text-base-content/70">
                                                    {new Date(ticketSeleccionado.fechaCompra).toLocaleDateString('es-PE')}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="border-t border-base-300 pt-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm">Precio por ticket:</span>
                                                <span className="font-semibold">S/ {ticketSeleccionado.precio.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-bold">Total ({ticketSeleccionado.cantTickets} tickets):</span>
                                                <span className="font-bold text-lg">
                                                    S/ {(ticketSeleccionado.precio * parseInt(ticketSeleccionado.cantTickets)).toFixed(2)}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}

            <footer>
                <Footer />
            </footer>
        </>
    )
}
