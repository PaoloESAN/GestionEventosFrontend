import React from 'react';
import FormularioTicket from './FormularioTicket';

export default function AgregarTicketForm({ eventosExistentes, eventoSeleccionado, setEventoSeleccionado, formData, handleChange, tiposTicket }) {
    return (
        <div className="flex flex-col gap-8">
            <div className="card bg-base-200 shadow-lg p-6">
                <h3 className="text-2xl font-semibold mb-6">Seleccionar Evento</h3>
                <div className="grid grid-cols-1 gap-6">
                    {eventosExistentes.map(evento => (
                        <div
                            key={evento.id}
                            className={`card bg-base-100 shadow-md transform transition-all duration-200 ease-in-out cursor-pointer 
                                ${eventoSeleccionado === evento.id
                                    ? 'border-2 border-primary scale-[1.02] shadow-lg'
                                    : 'hover:scale-[1.01] hover:shadow-lg border-2 border-transparent'
                                }`}
                            onClick={() => setEventoSeleccionado(evento.id)}
                        >
                            <div className="card-body">
                                <h3 className="card-title text-xl">{evento.nombre}</h3>
                                <p className="text-base-content/70">{evento.lugar}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {eventoSeleccionado && (
                <>
                    <div className="card bg-base-200 shadow-lg p-6">
                        <h3 className="text-2xl font-semibold mb-6">Información del Nuevo Ticket</h3>
                        <FormularioTicket
                            formData={formData}
                            handleChange={handleChange}
                            tiposTicket={tiposTicket}
                        />
                    </div>

                    <div className="form-control flex-row justify-end gap-4 text-center">
                        <button
                            type="submit"
                            className="btn btn-primary text-lg px-8 py-3 h-14 min-w-[200px] transition-all hover:-translate-y-0.5 shadow-lg">
                            Agregar Ticket
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
