import { Link } from 'react-router-dom';
import './Home.css';
import octaedroImg from '../assets/Pantalla_inicio/octaedro.png';
import conciertoImg from '../assets/concierto.png';
import teatroImg from '../assets/teatro.png';
import circoImg from '../assets/circo.png';
import foroImg from '../assets/foro.png';
import veladaImg from '../assets/velada.png';
import fiestaImg from '../assets/fiesta.png';

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
    ];

    return (
        <>
            <header>
                <nav className="menu">
                    <ul>
                        <li><Link to="/">Titulo de pagina</Link></li>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/eventos">Eventos</Link></li>
                        <li><Link to="/tickets">Tickets</Link></li>
                        <li className="usuario"><Link to="/perfil">Usuario</Link></li>
                    </ul>
                </nav>

                <div className="diapositiva"></div>
            </header>

            <main>
                <div className="boton">
                    <Link to="/crear-evento">
                        <button>Crear Evento</button>
                    </Link>
                </div>

                <div className="articulos">
                    <section className="eventos">                        {eventos.map((evento) => (<div key={evento.id}>
                        <img className="event-image" src={evento.imagen} alt={evento.titulo} />
                        <div className="info">
                            <div className="event-details">
                                <p className="event-location">{evento.lugar}</p>
                                <span className="event-date">{evento.fecha}</span>
                            </div>
                            <h3 className="event-title">{evento.titulo}</h3>
                            <p className="event-organizer">{evento.organizador}</p>
                        </div>
                    </div>
                    ))}
                    </section>
                </div>
            </main>

            <footer>
                <img src="" alt="" />
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/about">Sobre Nosotros</Link></li>
                    <li><Link to="/contact">Contacto</Link></li>
                    <li><Link to="/terms">Términos</Link></li>
                </ul>
                <address>
                    {/* Aquí puedes agregar la información de contacto */}
                </address>
            </footer>
        </>
    );
};

export default Home;
