import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Home from './pages/Home';
import './App.css';

function App() {
  // Aquí podrías agregar la lógica para verificar si el usuario está autenticado
  const isAuthenticated = true; // Por ahora lo dejamos en false

  return (
    <Router>
      <Routes>
        {/* Ruta principal redirige a login */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Rutas de autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Ruta protegida de Home */}
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
