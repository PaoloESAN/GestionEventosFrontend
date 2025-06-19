import React from 'react';

export default function ChatComponent() {
    const adminCards = [
        {
            id: 1,
            title: "Ver todos los Eventos",
            description: "Administra y visualiza todos los eventos registrados en el sistema",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5a2.25 2.25 0 002.25-2.25m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5a2.25 2.25 0 002.25 2.25v7.5m-18 0h18" />
                </svg>
            ),
            color: "bg-primary",
            hoverColor: "hover:bg-primary-focus"
        },
        {
            id: 2,
            title: "Ver todos los Usuarios",
            description: "Gestiona la base de datos de usuarios registrados",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            ),
            color: "bg-secondary",
            hoverColor: "hover:bg-secondary-focus"
        },
        {
            id: 3,
            title: "Ver todos los Asistentes a Eventos",
            description: "Consulta la lista de asistentes registrados en cada evento",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
            ),
            color: "bg-accent",
            hoverColor: "hover:bg-accent-focus"
        },
        {
            id: 4,
            title: "Ver todos los Tickets",
            description: "Administra todos los tickets vendidos y su estado",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                </svg>
            ),
            color: "bg-success",
            hoverColor: "hover:bg-success-focus"
        }
    ];

    const handleCardClick = (cardTitle) => {
        console.log(`Clicked on: ${cardTitle}`);
        // Aquí puedes agregar la lógica para navegar o abrir modales
    };

    return (
        <div className="min-h-screen bg-base-200 p-6">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-base-content mb-4">
                        Panel de Administración
                    </h1>
                    <p className="text-lg text-base-content/70">
                        Selecciona una opción para gestionar el sistema
                    </p>
                </div>

                {/* Grid de Cards - Ahora en 3 columnas para incluir las 6 cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Cards originales */}
                    {adminCards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => handleCardClick(card.title)}
                            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 border border-base-300 group"
                        >
                            <div className="card-body p-8">
                                {/* Icono */}
                                <div className={`w-16 h-16 ${card.color} ${card.hoverColor} rounded-xl flex items-center justify-center text-white mb-6 transition-colors duration-300`}>
                                    {card.icon}
                                </div>

                                {/* Contenido */}
                                <h2 className="card-title text-2xl font-bold mb-3 text-base-content">
                                    {card.title}
                                </h2>

                                <p className="text-base-content/70 text-base leading-relaxed mb-6">
                                    {card.description}
                                </p>

                                {/* Botón de acción */}
                                <div className="card-actions justify-end">
                                    <button className={`btn ${card.color.replace('bg-', 'btn-')} text-white hover:scale-105 transition-transform duration-200`}>
                                        Acceder
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            {/* Indicador de hover */}
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className={`w-3 h-3 ${card.color.replace('bg-', 'bg-')} rounded-full animate-pulse`}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="text-center mt-12">
                    <p className="text-base-content/50 text-sm">
                        Sistema de Gestión de Eventos - Panel de Administración
                    </p>
                </div>
            </div>
        </div>
    );
}
