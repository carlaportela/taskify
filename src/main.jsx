// Punto de entrada de la aplicación React

//Se importan las dependencias necesarias para renderizar la aplicación, el componente principal App y los estilos.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// Se renderiza el componente App dentro del elemento con id "root" utilizando ReactDOM.createRoot y React.StrictMode para ayudar a detectar problemas potenciales de la aplicación.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);