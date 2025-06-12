import React from 'react'

export function SinTickets() {
    return (
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
    )
}
export function SinEventos() {
    return (
        <div className="col-span-3 flex flex-col justify-center items-center p-12">
            <div className="text-center">
                <svg className="mx-auto h-24 w-24 text-base-content/30 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <h3 className="text-2xl font-semibold text-base-content/70 mb-2">No hay eventos disponibles</h3>
                <p className="text-base-content/50">No hay ningún evento aún para asistir.</p>
                <p className="text-base-content/50 text-sm mt-2">Vuelve más tarde para ver nuevos eventos.</p>
            </div>
        </div>
    )
}
export function SinMisEventos() {
    return (
        <div className="col-span-3 flex flex-col justify-center items-center p-12">
            <div className="text-center">
                <svg className="mx-auto h-24 w-24 text-base-content/30 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <h3 className="text-2xl font-semibold text-base-content/70 mb-2">No tienes eventos creados</h3>
                <p className="text-base-content/50">Aún no has creado ningún evento.</p>
                <p className="text-base-content/50 text-sm mt-2">Haz clic en "Crear Evento" para empezar.</p>
            </div>
        </div>
    )
}
