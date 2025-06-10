import React, { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import bodaImg from '../assets/boda.png';
import charlaImg from '../assets/charla.png';
import defaultImg from '../assets/default.png';
import foroImg from '../assets/foro.png';
import teatroImg from '../assets/teatro.png';
import conciertoImg from '../assets/concierto.png';
import circoImg from '../assets/circo.png';
import veladaImg from '../assets/velada.png';
import fiestaImg from '../assets/fiesta.png';

export default function Eventos() {
    const [eventoSeleccionado, setEventoSeleccionado] = React.useState(null);
    const [ticketSeleccionado, setTicketSeleccionado] = React.useState(null);
    const [cantidad, setCantidad] = React.useState(1);
    const [eventos, setEventos] = React.useState([]);
    const [tiposTicket, setTiposTicket] = React.useState([]);
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
        const cargarEventos = async () => {
            const userId = localStorage.getItem('userId');
            if (!userId) return;

            try {
                console.log('Cargando eventos excepto organizador:', userId);
                const respuesta = await fetch(`http://localhost:8080/api/v1/eventos/excepto-organizador/${userId}`);
                if (respuesta.ok) {
                    const data = await respuesta.json();
                    console.log('Eventos cargados:', data);
                    setEventos(Array.isArray(data) ? data : []);
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
    }, []);

    useEffect(() => {
        const cargarTickets = async () => {
            if (!eventoSeleccionado) return;

            // Resetear estados cuando se selecciona un nuevo evento
            setTicketSeleccionado(null);
            setCantidad(1);

            try {
                console.log('Cargando tickets para evento:', eventoSeleccionado.eventoId);
                const respuesta = await fetch(`http://localhost:8080/api/v1/tickets/evento/${eventoSeleccionado.eventoId}`); if (respuesta.ok) {
                    const data = await respuesta.json();
                    console.log('Tickets cargados:', data);
                    console.log('Estructura del primer ticket:', data[0]);
                    console.log('Propiedades disponibles:', data[0] ? Object.keys(data[0]) : 'No hay tickets');
                    setTiposTicket(Array.isArray(data) ? data : []);
                } else {
                    console.error('Error al cargar tickets:', respuesta.status);
                    setTiposTicket([]);
                }
            } catch (error) {
                console.error('Error al cargar tickets:', error);
                setTiposTicket([]);
            }
        }; cargarTickets();
    }, [eventoSeleccionado]);

    return (
        <>
            <header className="fixed w-full z-50">
                <NavBar tabAct={2} />
            </header>
            <main className="flex flex-col flex-1 min-h-[calc(100vh-60px)]">
                <div className="hero h-35">
                    <h1 className="text-5xl font-bold text-center self-end">Asiste a otros eventos</h1>
                </div>                <div className="container mx-auto px-4 pt-10 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {isLoading ? (
                            <div className="col-span-3 flex justify-center items-center p-8">
                                <span className="loading loading-spinner loading-lg"></span>
                            </div>
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
                                    </div>
                                    <h2 className="card-title mt-2">{evento.nombre}</h2>
                                    <p className="text-sm text-base-content/70">
                                        {evento.organizador?.nombres
                                            ? `${evento.organizador.nombres} ${evento.organizador.apellidos}`
                                            : 'Organizador no especificado'}
                                    </p>
                                    <div className="card-actions justify-end mt-4">
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
            {eventoSeleccionado && (<dialog className="modal modal-bottom sm:modal-middle" open>
                <div className="modal-box max-w-3xl">
                    <h3 className="font-bold text-2xl mb-6">{eventoSeleccionado.nombre}</h3>

                    {/* Información del Evento */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div>
                            <p className="font-semibold">Categoría</p>
                            <p className="text-base-content/70">{eventoSeleccionado.categoria || 'No especificado'}</p>
                        </div>

                        <div>
                            <p className="font-semibold">Organizador</p>
                            <p className="text-base-content/70">
                                {eventoSeleccionado.organizador?.nombres
                                    ? `${eventoSeleccionado.organizador.nombres} ${eventoSeleccionado.organizador.apellidos}`
                                    : 'Organizador no especificado'}
                            </p>
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
                            <p className="text-base-content/70">{eventoSeleccionado.locacion || 'No especificado'}</p>
                        </div>
                    </div>                        {/* Sección de Tickets */}
                    <div className="divider">Tickets Disponibles</div>

                    {tiposTicket.length === 0 ? (
                        <div className="text-center p-8">
                            <p className="text-base-content/70">No hay tickets disponibles para este evento</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                            {tiposTicket.map((ticket, index) => (
                                <div key={index}
                                    className={`card ${ticketSeleccionado === index
                                        ? 'bg-primary/10 border-2 border-primary'
                                        : 'bg-base-200'
                                        }`}>                                    <div className="card-body p-4">
                                        <h3 className="card-title text-lg">{ticket.tipo || ticket.tipoTicket || ticket.nombre || 'Ticket'}</h3>
                                        <p className="text-2xl font-bold">S/ {ticket.precio || ticket.precioTicket || 0}</p>
                                        <p className="text-sm text-base-content/70">
                                            {ticket.disponibles || ticket.cantidadDisponible || ticket.stock || 0} disponibles
                                        </p>
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
                    )}                    {/* Selección de Cantidad */}
                    {ticketSeleccionado !== null && tiposTicket[ticketSeleccionado] && (
                        <div className="bg-base-200 p-6 rounded-lg mb-6">
                            <h4 className="font-semibold text-lg mb-4">Selecciona la cantidad</h4>
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setCantidad(prev => Math.max(1, prev - 1))}
                                    className="btn btn-circle btn-sm btn-neutral">
                                    -
                                </button>                                <input
                                    type="number"
                                    value={cantidad}
                                    onChange={(e) => setCantidad(Math.min(
                                        tiposTicket[ticketSeleccionado]?.disponibles ||
                                        tiposTicket[ticketSeleccionado]?.cantidadDisponible ||
                                        tiposTicket[ticketSeleccionado]?.stock || 1,
                                        Math.max(1, parseInt(e.target.value) || 1)
                                    ))}
                                    className="input input-bordered w-20 text-center"
                                    min="1"
                                    max={tiposTicket[ticketSeleccionado]?.disponibles ||
                                        tiposTicket[ticketSeleccionado]?.cantidadDisponible ||
                                        tiposTicket[ticketSeleccionado]?.stock || 1}
                                />                                <button
                                    onClick={() => setCantidad(prev => Math.min(
                                        tiposTicket[ticketSeleccionado]?.disponibles ||
                                        tiposTicket[ticketSeleccionado]?.cantidadDisponible ||
                                        tiposTicket[ticketSeleccionado]?.stock || 1,
                                        prev + 1
                                    ))}
                                    className="btn btn-circle btn-sm btn-neutral">
                                    +
                                </button>
                            </div>                            {/* Resumen de la compra */}
                            <div className="mt-6 p-4 bg-base-100 rounded-lg">
                                <div className="flex justify-between items-center text-sm mb-2">
                                    <span>
                                        {tiposTicket[ticketSeleccionado]?.tipo ||
                                            tiposTicket[ticketSeleccionado]?.tipoTicket ||
                                            tiposTicket[ticketSeleccionado]?.nombre || 'Ticket'} x {cantidad}
                                    </span>
                                    <span>
                                        S/ {tiposTicket[ticketSeleccionado]?.precio ||
                                            tiposTicket[ticketSeleccionado]?.precioTicket || 0} c/u
                                    </span>
                                </div>
                                <div className="divider my-2"></div>
                                <div className="flex justify-between items-center font-bold">
                                    <span>Total</span>
                                    <span className="text-xl">
                                        S/ {((tiposTicket[ticketSeleccionado]?.precio ||
                                            tiposTicket[ticketSeleccionado]?.precioTicket || 0) * cantidad).toFixed(2)}
                                    </span>
                                </div>
                                <button className="btn btn-primary w-full mt-4">
                                    Confirmar compra
                                </button>
                            </div>
                        </div>
                    )}                    <div className="modal-action">
                        <button
                            onClick={() => {
                                setEventoSeleccionado(null);
                                setTicketSeleccionado(null);
                                setCantidad(1);
                            }}
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
