import React, { useState } from 'react'
import Login from '../components/LoginAdmin';
import PanelAdmin from '../components/PanelAdmin';
export default function ChatBot() {
    const [logueado, setLogueado] = useState(false);
    const loguin = () => {
        setLogueado(true);
    }
    return (
        logueado ? (
            <div>
                <PanelAdmin />
            </div>
        ) : (
            <div>
                <Login loguin={loguin} />
            </div>
        )
    )
}
