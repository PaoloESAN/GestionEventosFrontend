import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import bodaImg from '../assets/boda.png';
import charlaImg from '../assets/charla.png';
import defaultImg from '../assets/default.png';
import foroImg from '../assets/foro.png';
import teatroImg from '../assets/teatro.png';
import conciertoImg from '../assets/concierto.png';

export default function Eventos() {
    const eventos = [
        {
            id: 1,
            imagen: bodaImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Grupo 5 2025 \"Gira Mundial\"",
            fecha: "5 noviembre 2025",
            organizador: "Master Music Entertainment"
        },
        {
            id: 2,
            imagen: charlaImg,
            lugar: "Estadio San Marcos - Lima",
            titulo: "Bad Bunny - Most Wanted Tour",
            fecha: "14 DIC 2025",
            organizador: "Live Nation Perú",
        },
        {
            id: 3,
            imagen: defaultImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Tool - Fear Inoculum Tour",
            fecha: "22 AGO 2025",
            organizador: "Move Concerts",
        },
        {
            id: 4,
            imagen: foroImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Rosalía - MOTOMAMI World Tour",
            fecha: "30 SEP 2025",
            organizador: "Bizarro Live Entertainment",
        },
        {
            id: 5,
            imagen: teatroImg,
            lugar: "Estadio San Marcos - Lima",
            titulo: "The Weeknd - After Hours Tour",
            fecha: "15 OCT 2025",
            organizador: "One Entertainment",
        },
        {
            id: 6,
            imagen: conciertoImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Karol G - Mañana Será Bonito Tour",
            fecha: "28 JUL 2025",
            organizador: "Masterlive Perú",
        }
    ];
    return (
        <>
            <header className="fixed w-full z-50">
                <NavBar tabAct={2} />
            </header>
            <main className="flex flex-col flex-1 min-h-[calc(100vh-60px)]">
                <div className="hero h-35">
                    <h1 className="text-5xl font-bold text-center self-end">Asiste a otros eventos</h1>
                </div>
                <div className="container mx-auto px-4 pt-10 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {eventos.map((evento) => (
                            <div key={evento.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
                                <figure><img src={evento.imagen} alt={evento.titulo} className="h-48 w-full object-cover" /></figure>
                                <div className="card-body p-4">
                                    <div className="flex justify-between items-center">
                                        <div className="badge badge-primary">{evento.fecha}</div>
                                        <div className="badge badge-ghost">{evento.lugar}</div>
                                    </div>
                                    <h2 className="card-title mt-2">{evento.titulo}</h2>
                                    <p className="text-sm text-base-content/70">{evento.organizador}</p>
                                    <div className="card-actions justify-end mt-4">
                                        <button className="btn btn-primary btn-sm">Ver detalles</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
