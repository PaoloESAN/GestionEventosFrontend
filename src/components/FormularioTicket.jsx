import React from 'react';

export default function FormularioTicket({ formData, handleChange, tiposTicket }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="form-control md:col-span-2">
                <label className="label flex">
                    <span className="label-text text-lg">Tipo de Ticket:</span>
                </label>
                <select
                    name="ticket.tipoTicket"
                    value={formData.ticket.tipoTicket}
                    onChange={handleChange}
                    className="select select-bordered text-lg"
                    required
                >
                    <option value="">Seleccione un tipo de ticket</option>
                    {tiposTicket.map(tipo => (
                        <option key={tipo} value={tipo}>{tipo}</option>
                    ))}
                </select>
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg">Cantidad de Tickets</span>
                </label>
                <input
                    type="number"
                    name="ticket.cantidadTotal"
                    value={formData.ticket.cantidadTotal}
                    onChange={handleChange}
                    className="input input-bordered text-lg"
                    placeholder="0"
                    min="1"
                    required
                />
            </div>

            <div className="form-control flex flex-col">
                <label className="label">
                    <span className="label-text text-lg">Precio</span>
                </label>
                <input
                    type="number"
                    name="ticket.precio"
                    value={formData.ticket.precio}
                    onChange={handleChange}
                    className="input input-bordered text-lg"
                    placeholder="0.00"
                    min="0"
                    step="0.01"
                    required
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg">Inicio de Venta</span>
                </label>
                <input
                    type="datetime-local"
                    name="ticket.fechaInicioVenta"
                    value={formData.ticket.fechaInicioVenta}
                    onChange={handleChange}
                    className="input input-bordered text-lg"
                    required
                />
            </div>

            <div className="form-control">
                <label className="label">
                    <span className="label-text text-lg">Fin de Venta</span>
                </label>
                <input
                    type="datetime-local"
                    name="ticket.fechaFinVenta"
                    value={formData.ticket.fechaFinVenta}
                    onChange={handleChange}
                    className="input input-bordered text-lg"
                    required
                />
            </div>
        </div>
    );
}
