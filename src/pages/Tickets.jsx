import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import conciertoImg from '../assets/concierto.png'
import teatroImg from '../assets/teatro.png'
import circoImg from '../assets/circo.png'

export default function Tickets() {
    const tickets = [
        {
            id: 1,
            imagen: conciertoImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Grupo 5 2025 \"Gira Mundial\"",
            fecha: "5 NOV 2025",
            organizador: "Master Music Entertainment", tipo: "VIP", estado: "Planificado",
            numeroTicket: "001"
        },
        {
            id: 2,
            imagen: teatroImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Rosalía - MOTOMAMI World Tour",
            fecha: "30 SEP 2025",
            organizador: "Bizarro Live Entertainment", tipo: "General", estado: "En curso",
            numeroTicket: "002"
        },
        {
            id: 3,
            imagen: circoImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Karol G - Mañana Será Bonito Tour",
            fecha: "28 JUL 2025",
            organizador: "Masterlive Perú", tipo: "Platinum", estado: "Finalizado",
            numeroTicket: "003"
        }
    ];

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
                        {tickets.map((ticket) => (
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
                                            <span className="font-semibold">Número de ticket: </span>{ticket.numeroTicket}
                                        </div>
                                    </div>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Ver detalles</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}
