import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CrearEventoForm from '../components/CrearEventoForm'
import AgregarTicketForm from '../components/AgregarTicketForm'
import FormularioTicket from '../components/FormularioTicket'

export default function CrearEvento() {
    const [modo, setModo] = useState('nuevo');
    const [eventoSeleccionado, setEventoSeleccionado] = useState('');

    const userId = localStorage.getItem('userId');
    const eventosExistentes = [
        { id: 1, nombre: "Grupo 5 2025 \"Gira Mundial\"", lugar: "Estadio Nacional - Lima" },
        { id: 2, nombre: "Rosalía - MOTOMAMI World Tour", lugar: "Estadio Nacional - Lima" },
        { id: 3, nombre: "Karol G - Mañana Será Bonito Tour", lugar: "Estadio Nacional - Lima" }
    ];

    const [formData, setFormData] = useState({
        evento: {
            nombre: '',
            categoria: '',
            descripcion: '',
            fechaInicio: '',
            fechaFin: '',
            locacion: ''
        },
        ticket: {
            tipoTicket: '',
            cantidadTotal: '',
            fechaInicioVenta: '',
            fechaFinVenta: '',
            precio: ''
        }
    });

    const categorias = [
        'Boda',
        'Charla',
        'Circo',
        'Concierto',
        'Fiesta',
        'Foro',
        'Teatro',
        'Velada',
        'Otro'
    ];

    const tiposTicket = [
        'General',
        'VIP',
        'Platinum',
        'Meet & Greet',
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        const [section, field] = name.split('.');

        setFormData(prev => ({
            ...prev,
            [section]: {
                ...prev[section],
                [field]: value
            }
        }));
    };

    /*{
  "nombre": "Boda nose",
  "descripcion": "Una boda increible",
  "fechaInicio": "2025-07-15T09:00",
  "fechaFin": "2025-07-15T18:00",
  "organizadorId": 1,
  "locacion":"la casa de alberto",
  "categoria": "Boda",
  "estado": "planificado"
} */

    /* 
    {
      "eventoId": 1,
      "tipoTicket": "VIP",
      "precio": 99.99,
      "cantidadDisponible": 100,
      "fechaInicioVenta": "2025-06-09T10:00:00",
      "fechaFinVenta": "2025-06-30T23:59:59",
      "cantidadTotal": 100
  }
    */
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (modo === 'nuevo') {
            const respuesta = await fetch('http://localhost:8080/api/v1/eventos/crear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData.evento,
                    organizadorId: userId,
                    ticket: formData.ticket
                })
            });
            const data = await respuesta.json();
            const eventoId = data.eventoId;
            if (respuesta.ok) {
                const ticketRespuesta = await fetch('http://localhost:8080/api/v1/tickets/crear', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ...formData.ticket,
                        eventoId: eventoId,
                        cantidadDisponible: formData.ticket.cantidadTotal
                    })
                });
                if (ticketRespuesta.ok) {
                    //document.getElementById('modalEventoCreado').showModal();
                    alert('Evento y ticket creados exitosamente');
                } else {
                    const ticketData = await ticketRespuesta.json();
                    console.error('Error al crear el ticket:', ticketData.mensaje);
                    alert('Error al crear el ticket');
                    //document.getElementById('modalErrorCrearTicket').showModal();
                }
            } else {
                console.error('Error al crear el evento:', data.mensaje);
                alert('Error al crear el evento');
                //document.getElementById('modalErrorCrearEvento').showModal();
            }
        } else {
            const respuesta = await fetch(`http://localhost:8080/api/v1/tickets/crear`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    ...formData.ticket,
                    eventoId: eventoSeleccionado,
                    cantidadDisponible: formData.ticket.cantidadTotal
                })
            });
            if (respuesta.ok) {
                alert('Ticket creado exitosamente');
                //document.getElementById('modalTicketCreado').showModal();
            } else {
                alert('Error al crear el ticket:');
                //document.getElementById('modalErrorCrearTicket').showModal();
            }
        }
    };

    const renderFormularioTicket = () => (
        <FormularioTicket
            formData={formData}
            handleChange={handleChange}
            tiposTicket={tiposTicket}
        />
    );

    const renderSeleccionModo = () => (
        <div className="flex flex-col items-center">
            <h2 className="card-title text-3xl font-bold mb-8 text-center">¿Qué deseas hacer?</h2>

            <div className="flex gap-8 mb-8">
                <label className="flex items-center gap-4 p-6 bg-base-200 rounded-lg cursor-pointer hover:bg-base-300 transition-all">
                    <input
                        type="radio"
                        name="modo"
                        className="radio radio-primary"
                        checked={modo === 'nuevo'}
                        onChange={() => setModo('nuevo')}
                    />
                    <div>
                        <h3 className="text-xl font-semibold">Crear nuevo evento con tickets</h3>
                        <p className="text-base-content/70">Registra un nuevo evento y configura su primer tipo de ticket</p>
                    </div>
                </label>

                <label className="flex items-center gap-4 p-6 bg-base-200 rounded-lg cursor-pointer hover:bg-base-300 transition-all">
                    <input
                        type="radio"
                        name="modo"
                        className="radio radio-primary"
                        checked={modo === 'agregarTicket'}
                        onChange={() => setModo('agregarTicket')}
                    />
                    <div>
                        <h3 className="text-xl font-semibold">Agregar tickets a evento existente</h3>
                        <p className="text-base-content/70">Añade un nuevo tipo de ticket a uno de tus eventos</p>
                    </div>
                </label>
            </div>

            <div className="w-full animate-fadeIn">
                {modo === 'nuevo' ? (
                    <>
                        <CrearEventoForm
                            formData={formData}
                            handleChange={handleChange}
                            categorias={categorias}
                            tiposTicket={tiposTicket}
                            renderFormularioTicket={renderFormularioTicket}
                        />
                        <div className="flex-row justify-end gap-4 text-center mt-8">
                            <button
                                className="btn btn-primary text-lg px-8 py-3 h-14 min-w-[200px] transition-all hover:-translate-y-0.5 shadow-lg">
                                Crear Evento
                            </button>
                        </div>
                    </>
                ) : (<AgregarTicketForm
                    eventosExistentes={eventosExistentes}
                    eventoSeleccionado={eventoSeleccionado}
                    setEventoSeleccionado={setEventoSeleccionado}
                    formData={formData}
                    handleChange={handleChange}
                    tiposTicket={tiposTicket}
                />
                )}
            </div>
        </div>
    );

    return (
        <>
            <header className="fixed w-full z-50">
                <NavBar tabAct={4} />
            </header>
            <main className="min-h-screen bg-base-200 pt-16 pb-8 px-4">
                <div className="max-w-4xl mx-auto bg-base-100 shadow-xl rounded-lg mt-8">
                    <form onSubmit={handleSubmit} className="card-body p-8">
                        {renderSeleccionModo()}
                    </form>
                </div>
            </main>
            <Footer />
        </>
    );
}
