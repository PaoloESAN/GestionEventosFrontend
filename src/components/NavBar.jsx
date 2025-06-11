import React from 'react'
import { Link } from 'react-router-dom'
import BotonTemas from './BotonTemas'
import PerfilModal from './PerfilModal'
import fotoPerfil from '../assets/fotoPerfil.png';

function NavBar({ tabAct }) {
    let homeAct = 'tab text-xl';
    let eventosAct = 'tab text-xl';
    let ticketsAct = 'tab text-xl';
    if (tabAct == 1) {
        homeAct += ' tab-active';
    } else if (tabAct == 2) {
        eventosAct += ' tab-active';
    } else if (tabAct == 3) {
        ticketsAct += ' tab-active';
    }

    return (
        <>
            <div className="navbar shadow-sm backdrop-blur">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">EventoFix</a>
                </div>
                <div className="tabs tabs-border navbar-center">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/home" className={homeAct}>Inicio</Link></li>
                        <li>
                            <Link to="/eventos" className={eventosAct}>Eventos</Link>
                        </li>
                        <li><Link to="/tickets" className={ticketsAct}>Tickets</Link></li>
                    </ul>
                </div>
                <div className="flex gap-2 navbar-end mt-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src={fotoPerfil} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-56 p-3 shadow-lg">                            <li>
                                <a className="justify-between py-2 px-3 rounded-md hover:bg-base-200" onClick={() => document.getElementById('perfil').showModal()}>
                                    <span className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                        </svg>
                                        Perfil
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a className="justify-between py-2 px-3 rounded-md hover:bg-base-200" onClick={() => document.getElementById('temas').showModal()}>
                                    <span className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                                        </svg>
                                        Temas
                                    </span>
                                    <span className="badge badge-primary badge-xs">New</span>
                                </a>
                            </li>
                            <div className="divider my-1"></div>
                            <li>
                                <Link
                                    onClick={() => {
                                        localStorage.removeItem('userId');
                                        localStorage.removeItem('theme');
                                        document.documentElement.setAttribute('data-theme', 'default');
                                    }}
                                    to="/login"
                                    className="py-2 px-3 rounded-md hover:bg-error hover:text-error-content">
                                    <span className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                                        </svg>
                                        Cerrar sesión
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>            </div >
            <PerfilModal />
            <dialog id="temas" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Temas</h3>
                    <p className="py-4">Elige un tema a continuacion para la web:</p>
                    <BotonTemas />
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Cerrar</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default NavBar