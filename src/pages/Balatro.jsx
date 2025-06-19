import React from 'react'
import BalatroFondo from '../components/BalatroFondo.jsx'
import DecryptedText from '../components/DecryptedText.jsx'
import balatroJoker from '../assets/balatroJoker.png'
export default function Balatro() {
    return (
        <>
            <div className='h-screen w-full relative overflow-hidden'>
                <BalatroFondo
                    isRotate={false}
                    mouseInteraction={true}
                    pixelFilter={700}
                />
            </div>
            {/*boton para salir del balatro*/}
            <div className='absolute top-4 left-4 z-10'>
                <button
                    className='btn btn-error'
                    onClick={() => window.location.href = '/home'}
                >
                    Volver al Inicio
                </button>
            </div>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white'>
                <img src={balatroJoker} alt="Balatro" className='h-80 rounded-2xl mx-auto' />
                <div className='h-16 w-150 flex items-center justify-center text-4xl font-bold'>
                    <DecryptedText
                        text="Haz sido Balatreado"
                        animateOn="view"
                        sequential={true}
                        revealDirection="start"
                        speed={60}
                    />
                </div>
            </div>
        </>
    )
}
