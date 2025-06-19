import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Anware from './pages/Anware';
import Eventos from './pages/Eventos';
import Tickets from './pages/Tickets';
import CrearEvento from './pages/CrearEvento';
import ChatBot from './pages/ChatBot';
import Balatro from './pages/Balatro';
import './App.css';

function App() {
  const isAuthenticated = true;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/anware" element={<Anware />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/crear-evento" element={<CrearEvento />} />
        <Route path="/admin" element={<ChatBot />} />
        <Route path="/balatro" element={<Balatro />} />
        <Route
          path="/home"
          element={
            isAuthenticated ? <Home /> : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </Router>
  )
}

export default App
