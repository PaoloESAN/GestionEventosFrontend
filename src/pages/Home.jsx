import { Link } from 'react-router-dom';
import conciertoImg from '../assets/concierto.png';
import teatroImg from '../assets/teatro.png';
import circoImg from '../assets/circo.png';
import foroImg from '../assets/foro.png';
import veladaImg from '../assets/velada.png';
import fiestaImg from '../assets/fiesta.png';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
const Home = () => {
    const eventos = [
        {
            id: 1,
            imagen: conciertoImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Grupo 5 2025 \"Gira Mundial\"",
            fecha: "5 noviembre 2025",
            organizador: "Master Music Entertainment"
        },
        {
            id: 2,
            imagen: fiestaImg,
            lugar: "Estadio San Marcos - Lima",
            titulo: "Bad Bunny - Most Wanted Tour",
            fecha: "14 DIC 2025",
            organizador: "Live Nation Perú",
            organizadorImagen: "https://ui-avatars.com/api/?name=Live+Nation&background=6D28D9&color=fff"
        },
        {
            id: 3,
            imagen: foroImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Tool - Fear Inoculum Tour",
            fecha: "22 AGO 2025",
            organizador: "Move Concerts",
            organizadorImagen: "https://ui-avatars.com/api/?name=Move+Concerts&background=059669&color=fff"
        },
        {
            id: 4,
            imagen: teatroImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Rosalía - MOTOMAMI World Tour",
            fecha: "30 SEP 2025",
            organizador: "Bizarro Live Entertainment",
            organizadorImagen: "https://ui-avatars.com/api/?name=Bizarro+Live&background=DC2626&color=fff"
        },
        {
            id: 5,
            imagen: veladaImg,
            lugar: "Estadio San Marcos - Lima",
            titulo: "The Weeknd - After Hours Tour",
            fecha: "15 OCT 2025",
            organizador: "One Entertainment",
            organizadorImagen: "https://ui-avatars.com/api/?name=One+Entertainment&background=0369A1&color=fff"
        },
        {
            id: 6,
            imagen: circoImg,
            lugar: "Estadio Nacional - Lima",
            titulo: "Karol G - Mañana Será Bonito Tour",
            fecha: "28 JUL 2025",
            organizador: "Masterlive Perú",
            organizadorImagen: "https://ui-avatars.com/api/?name=Masterlive+Peru&background=B91C1C&color=fff"
        }
    ]; return (
        <>
            <header className="fixed w-full z-50">
                <NavBar />
                {/* <div className="navbar bg-base-100/90 backdrop-blur shadow-sm">
                    <div className="flex-1">
                        <Link to="/home" className="btn btn-ghost text-xl">Título de página</Link>
                        <div className="tabs tabs-boxed bg-base-200 ml-4">
                            <Link to="/home" className="tab tab-active">Inicio</Link>
                            <Link to="/eventos" className="tab">Eventos</Link>
                            <Link to="/tickets" className="tab">Tickets</Link>
                        </div>
                    </div>
                    <div className="flex-none gap-2">
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full bg-primary/10">
                                    <span className="text-xl">👤</span>
                                </div>
                            </div>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li><Link to="/perfil">Perfil</Link></li>
                                <li><Link to="/settings">Configuración</Link></li>
                                <li><Link to="/logout">Cerrar sesión</Link></li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </header>
            <main className="flex flex-col flex-1 min-h-[calc(100vh-60px)]">
                <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
                    <Link to="/crear-evento">
                        <button className="btn btn-primary btn-lg gap-2 normal-case">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                            Crear Evento
                        </button>
                    </Link>
                </div>
                <div className="container mx-auto px-4 pt-24 pb-20">
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
            <footer className="">
                <Footer />
            </footer>
        </>
    );
};

export default Home;
