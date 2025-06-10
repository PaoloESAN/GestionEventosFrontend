import React from 'react';

export default function CrearEventoForm({ formData, handleChange, categorias, renderFormularioTicket }) {

    return (
        <>
            <div className="flex flex-col gap-8">
                <div className="card bg-base-200 shadow-lg p-6">
                    <h3 className="text-2xl font-semibold mb-6">Información del Evento</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Nombre del Evento</span>
                            </label>
                            <input
                                type="text"
                                name="evento.nombre"
                                value={formData.evento.nombre}
                                onChange={handleChange}
                                className="input input-bordered text-lg"
                                placeholder="Nombre del evento"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Categoría</span>
                            </label>
                            <select
                                name="evento.categoria"
                                value={formData.evento.categoria}
                                onChange={handleChange}
                                className="select select-bordered text-lg"
                                required
                            >
                                <option value="">Seleccione una categoría</option>
                                {categorias.map(cat => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-control flex flex-col md:col-span-2">
                            <label className="label">
                                <span className="label-text text-lg">Descripción</span>
                            </label>
                            <textarea
                                name="evento.descripcion"
                                value={formData.evento.descripcion}
                                onChange={handleChange}
                                className="textarea textarea-bordered h-24 w-182 text-lg"
                                placeholder="Describe el evento..."
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Locación</span>
                            </label>
                            <input
                                type="text"
                                name="evento.locacion"
                                value={formData.evento.locacion}
                                onChange={handleChange}
                                className="input input-bordered text-lg w-183"
                                placeholder="Lugar del evento"
                                required
                            />
                        </div>

                        <div></div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Fecha de Inicio</span>
                            </label>
                            <input
                                type="datetime-local"
                                name="evento.fechaInicio"
                                value={formData.evento.fechaInicio}
                                onChange={handleChange}
                                className="input input-bordered text-lg"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-lg">Fecha de Fin</span>
                            </label>
                            <input
                                type="datetime-local"
                                name="evento.fechaFin"
                                value={formData.evento.fechaFin}
                                onChange={handleChange}
                                className="input input-bordered text-lg"
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="card bg-base-200 shadow-lg p-6">
                    <h3 className="text-2xl font-semibold mb-6">Información del Ticket</h3>
                    {renderFormularioTicket()}
                </div>
            </div>
        </>
    );
}
