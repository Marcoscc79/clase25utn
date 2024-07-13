import logo from './logo.svg'
import './App.css'
import './ComponentePrueba.css'
import React, {useState} from 'react'
import ComponentePrueba from './ComponentePrueba'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Formulario />
        <ComponentePrueba />
      </header>
    </div>
  )
}
const Formulario = () => {
  // Estado inicial del formulario y errores
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [errores, setErrores] = useState({})
  // Handler para manejar los cambios en los inputs
  const manejarCambiosEnNombre = (event) => {
    setNombre(event.target.value)
  }
  const manejarCambiosEnCorreo = (event) => {
    setCorreo(event.target.value)
  }
  // Validar el formulario
  const validarFormulario = () => {
    const nuevosErrores = {}
    if (nombre.trim() === '') {
      nuevosErrores.nombre = 'El nombre es obligatorio'
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(correo)) {
      nuevosErrores.correo = 'El correo no es válido'
    }
    setErrores(nuevosErrores)
    return Object.keys(nuevosErrores).length === 0 // Devuelve true si no hay errores
  }
  // Handler para manejar el envío del formulario
  const manejarEnvioForm = (event) => {
    event.preventDefault()
    if (validarFormulario()) {
      // Aquí puedes manejar lo que quieras hacer con los datos del formulario
      console.log('Datos del formulario:', { nombre, correo })
    }
  }
  return (
    <form onSubmit={manejarEnvioForm}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={manejarCambiosEnNombre}
        />
        {errores.nombre && <span style={{ color: 'red' }}>{errores.nombre}</span>}
      </div>
      <div>
        <label>Correo:</label>
        <input
          type="email"
          value={correo}
          onChange={manejarCambiosEnCorreo}
        />
        {errores.correo && <span style={{ color: 'red' }}>{errores.correo}</span>}
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}
export default App

