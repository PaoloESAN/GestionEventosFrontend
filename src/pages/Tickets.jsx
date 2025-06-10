import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Modal from '../components/Modal'
import conciertoImg from '../assets/concierto.png'
import teatroImg from '../assets/teatro.png'
import circoImg from '../assets/circo.png'
import bodaImg from '../assets/boda.png'
import charlaImg from '../assets/charla.png'
import veladaImg from '../assets/velada.png'
import fiestaImg from '../assets/fiesta.png'
import foroImg from '../assets/foro.png'
import defaultImg from '../assets/default.png'

export default function Tickets() {
    const [ticketSeleccionado, setTicketSeleccionado] = React.useState(null);
    const [misTickets, setMisTickets] = React.useState([]);
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
                return defaultImg;
        }
    };

    useEffect(() => {
        const cargarTicketsUsuario = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) return;

            try {
                console.log('Cargando tickets del usuario:', userId);
                const respuesta = await fetch(`http://localhost:8080/api/v1/asistentes-evento/usuario/${userId}`);
                if (respuesta.ok) {
                    const data = await respuesta.json();
                    console.log('Tickets cargados:', data);
                    setMisTickets(Array.isArray(data) ? data : []);
                } else {
                    console.error('Error al cargar tickets:', respuesta.status);
                    setMisTickets([]);
                }
            } catch (error) {
                console.error('Error de conexión:', error);
                setMisTickets([]);
            } finally {
                setIsLoading(false);
            }
        }; cargarTicketsUsuario();
    }, []);

    return (
        <>
            <header className="fixed w-full z-50">
                <NavBar tabAct={3} />
            </header>
            <main className="flex flex-col flex-1 min-h-[calc(100vh-60px)]">
                <div className="hero h-35">
                    <h1 className="text-5xl font-bold text-center self-end">Mis tickets</h1>
                </div>                <div className="container mx-auto px-4 pt-10 pb-20">
                    <div className="flex flex-col gap-6">
                        {isLoading ? (
                            <div className="flex justify-center items-center p-8">
                                <span className="loading loading-spinner loading-lg"></span>
                            </div>) : misTickets.length === 0 ? (
                                <div className="flex flex-col justify-center items-center p-12">
                                    <div className="text-center">
                                        <svg className="mx-auto h-24 w-24 text-base-content/30 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"></path>
                                        </svg>
                                        <h3 className="text-2xl font-semibold text-base-content/70 mb-2">No tienes tickets</h3>
                                        <p className="text-base-content/50">Aún no has comprado ningún ticket.</p>
                                        <p className="text-base-content/50 text-sm mt-2">Ve a la sección de Eventos para comprar tickets.</p>
                                    </div>
                                </div>
                            ) : misTickets.map((ticket) => (
                                <div key={ticket.asistenteEventoId || ticket.ticketId} className="card h-50 card-side bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-x-1">
                                    <figure className="w-1/4">
                                        <img
                                            src={getImagenPorCategoria(ticket.evento?.categoria)}
                                            alt={ticket.evento?.nombre}
                                            className="h-full w-full object-cover"
                                        />
                                    </figure>
                                    <div className="card-body flex-row items-center justify-between p-6 w-3/4">
                                        <div className="flex flex-col flex-1">
                                            <div className="flex gap-2 mb-2">
                                                <div className="badge badge-primary">
                                                    {ticket.evento?.fechaInicio
                                                        ? new Date(ticket.evento.fechaInicio).toLocaleDateString('es-PE', {
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric'
                                                        }).toUpperCase()
                                                        : 'Fecha no disponible'
                                                    }
                                                </div>
                                                <div className="badge badge-ghost">{ticket.evento?.locacion || 'Ubicación no disponible'}</div>
                                                <div className="badge badge-info">
                                                    {ticket.evento?.estado || 'Estado no disponible'}
                                                </div>
                                            </div>
                                            <h2 className="card-title text-2xl">{ticket.evento?.nombre || 'Evento no disponible'}</h2>
                                            <p className="text-base text-base-content/70">
                                                {ticket.evento?.organizador?.nombres
                                                    ? `${ticket.evento.organizador.nombres} ${ticket.evento.organizador.apellidos}`
                                                    : 'Organizador no especificado'}
                                            </p>
                                            <div className="mt-2">
                                                <span className="font-semibold">Tipo: </span>
                                                {ticket.ticket?.tipo || ticket.ticket?.tipoTicket || 'No especificado'}
                                            </div>
                                            <div className="text-sm opacity-75">
                                                <span className="font-semibold">Cantidad de tickets: </span>
                                                {ticket.cantidadTickets || 'No especificado'}
                                            </div>
                                        </div>
                                        <div className="card-actions justify-end">
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
                >
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Imagen y detalles principales */}
                            <div>                                <div className="relative h-64 mb-4">
                                <img
                                    src={getImagenPorCategoria(ticketSeleccionado.evento?.categoria)}
                                    alt={ticketSeleccionado.evento?.nombre}
                                    className="w-full h-full object-cover rounded-lg"
                                />
                            </div>

                                {/* Ubicación y organizador */}
                                <div className="bg-base-200 rounded-lg p-4">
                                    <h4 className="font-bold text-lg mb-3">Información del Evento</h4>
                                    <div className="space-y-2">
                                        <div>
                                            <p className="text-sm font-semibold">Ubicación:</p>
                                            <p className="text-base-content/70">{ticketSeleccionado.evento?.locacion || 'No especificado'}</p>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold">Organizador:</p>
                                            <p className="text-base-content/70">
                                                {ticketSeleccionado.evento?.organizador?.nombres
                                                    ? `${ticketSeleccionado.evento.organizador.nombres} ${ticketSeleccionado.evento.organizador.apellidos}`
                                                    : 'Organizador no especificado'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Detalles del evento y ticket */}
                            <div className="space-y-6">                                {/* Información del Evento */}
                                <div className="bg-base-200 rounded-lg p-4">
                                    <h3 className="text-2xl font-bold mb-2">{ticketSeleccionado.evento?.nombre || 'Evento no disponible'}</h3>
                                    <p className="text-base-content/70 mb-4">{ticketSeleccionado.evento?.descripcion || 'Sin descripción'}</p>

                                    <div className="flex gap-2 flex-wrap mb-4">
                                        <div className="badge badge-primary">{ticketSeleccionado.evento?.categoria || 'Sin categoría'}</div>
                                        <div className="badge badge-info">
                                            {ticketSeleccionado.evento?.estado || 'Estado no disponible'}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <p className="font-semibold">Inicio:</p>
                                            <p>
                                                {ticketSeleccionado.evento?.fechaInicio
                                                    ? new Date(ticketSeleccionado.evento.fechaInicio).toLocaleString('es-PE')
                                                    : 'No especificado'
                                                }
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-semibold">Fin:</p>
                                            <p>
                                                {ticketSeleccionado.evento?.fechaFin
                                                    ? new Date(ticketSeleccionado.evento.fechaFin).toLocaleString('es-PE')
                                                    : 'No especificado'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>                                {/* Detalles del ticket */}
                                <div className="bg-base-200 rounded-lg p-4">
                                    <h4 className="font-bold text-lg mb-3">Detalles del Ticket</h4>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-sm font-semibold">Tipo de Ticket:</p>
                                                <p className="text-base-content/70">
                                                    {ticketSeleccionado.ticket?.tipo ||
                                                        ticketSeleccionado.ticket?.tipoTicket ||
                                                        'No especificado'}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="border-t border-base-300 pt-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-sm">Precio por ticket:</span>
                                                <span className="font-semibold">
                                                    S/ {(ticketSeleccionado.ticket?.precio ||
                                                        ticketSeleccionado.ticket?.precioTicket || 0).toFixed(2)}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="font-bold">Total ({ticketSeleccionado.cantidadTickets || 0} tickets):</span>
                                                <span className="font-bold text-lg">
                                                    S/ {((ticketSeleccionado.ticket?.precio ||
                                                        ticketSeleccionado.ticket?.precioTicket || 0) *
                                                        (ticketSeleccionado.cantidadTickets || 0)).toFixed(2)}
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
