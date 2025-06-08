import React from 'react'
import { Link } from 'react-router-dom'
import BotonTemas from './BotonTemas'

function NavBar() {
    return (
        <>
            <div className="navbar shadow-sm backdrop-blur">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">EventoFix</a>
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to="/home" className="tab tab-active">Inicio</Link></li>
                        <li>
                            <Link to="/eventos" className="tab">Eventos</Link>
                        </li>
                        <li><Link to="/tickets" className="tab">Tickets</Link></li>
                    </ul>
                </div>
                <div className="flex gap-2 navbar-end mt-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Perfil
                                </a>
                            </li>
                            <li>
                                <a className="justify-between" onClick={() => document.getElementById('temas').showModal()}>
                                    Temas
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><Link to="/login">Cerrar sesión</Link></li>
                        </ul>
                    </div>
                </div>
            </div >
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