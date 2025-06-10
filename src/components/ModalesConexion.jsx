import React from 'react'

export function ModalErrorConexion() {
    return (
        <dialog id="modalErrorConexion" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-2xl text-red-600">Error</h3>
                <p className="py-4">No se pudo conectar a la base de datos.</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export function ModalRegistroError() {
    return (
        <dialog id="modalRegistroError" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-2xl text-red-600">Error</h3>
                <p className="py-4">No se pudo registrar al usuario.</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export function ModalRegistroErrorContra() {
    return (
        <dialog id="modalRegistroErrorContra" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-2xl text-red-600">Error</h3>
                <p className="py-4">Las contraseñas no coinciden.</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export function ModalRegistroErrorCampos() {
    return (
        <dialog id="modalRegistroErrorCampos" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-2xl text-red-600">Error</h3>
                <p className="py-4">Rellene todos los campos.</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export function ModalRegistroEmail() {
    return (
        <dialog id="modalRegistroEmail" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-2xl text-red-600">Error</h3>
                <p className="py-4">Correo ya registrado.</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export function ModalRegistroExitoso({ onContinue }) {
    return (
        <dialog id="modalRegistroExitoso" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-2xl text-green-600">¡Registro Exitoso!</h3>
                <p className="py-4">Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión.</p>
                <div className="modal-action">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            document.getElementById('modalRegistroExitoso').close();
                            if (onContinue) onContinue();
                        }}
                    >
                        Ir al Login
                    </button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export function ModalLoginExitoso() {
    return (
        <dialog id="modalLoginExitoso" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-2xl text-green-600">Login Exitoso</h3>
                <p className="py-4">Se ha logueado correctamente.</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}

export function ModalLoginError() {
    return (
        <dialog id="modalLoginError" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-2xl text-red-600">Error</h3>
                <p className="py-4">Email o contraseña incorrectos.</p>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    )
}