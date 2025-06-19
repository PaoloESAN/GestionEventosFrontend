import React, { useState } from 'react'
import Login from '../components/LoginAdmin';
import ChatComponent from '../components/ChatComponent';
export default function ChatBot() {
    const [logueado, setLogueado] = useState(false);
    const loguin = () => {
        setLogueado(true);
    }
    return (
        logueado ? (
            <div>
                <ChatComponent />
            </div>
        ) : (
            <div>
                <Login loguin={loguin} />
            </div>
        )
    )
}
