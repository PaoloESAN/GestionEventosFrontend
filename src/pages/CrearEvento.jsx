import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CrearEventoForm from '../components/CrearEventoForm'
import AgregarTicketForm from '../components/AgregarTicketForm'
import FormularioTicket from '../components/FormularioTicket'

export default function CrearEvento() {
    const [modo, setModo] = useState('nuevo');
    const [eventoSeleccionado, setEventoSeleccionado] = useState('');

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
            estado: 'activo',
            fechaInicio: '',
            fechaFin: '',
            locacion: ''
        },
        ticket: {
            tipo: '',
            cantidadTotal: '',
            fechaInicioVenta: '',
            fechaFinVenta: '',
            precio: ''
        }
    });

    const categorias = [
        'Concierto',
        'Teatro',
        'Conferencia',
        'Deportivo',
        'Cultural',
        'Fiesta',
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
    }; const handleSubmit = (e) => {
        e.preventDefault();
        if (modo === 'nuevo') {
            console.log('Creando nuevo evento con ticket:', formData);
        } else {
            console.log('Agregando ticket al evento:', eventoSeleccionado, formData.ticket);
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
                    <CrearEventoForm
                        formData={formData}
                        handleChange={handleChange}
                        categorias={categorias}
                        tiposTicket={tiposTicket}
                        renderFormularioTicket={renderFormularioTicket}
                    />
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
