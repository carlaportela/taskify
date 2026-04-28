// Componente para el formulario de agregar nuevas tareas, que incluye un campo de texto y un botón para enviar la nueva tarea.

// Se importa el hook de React para manejar el estado del texto ingresado en el formulario
import { useState } from "react";

// Función que recibe la función addTodo como un prop o argumento, que se usará para agregar una nueva tarea en el componente principal (App.jsx).
export default function TodoForm({ addTodo }) {

    // Estado local para manejar el texto ingresado que se inicializa con cadena vacía.
    const [text, setText] = useState("");

    // Función que se ejecuta al enviar el formulario, que verifica que el texto no este vacío, llama a la función addTodo para agregar a la nueva tarea y luego limpia el campo de texto.
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        addTodo(text);
        setText("");
    };

    // Renderiza el formulario con campo de texto y botón para enviar la nueva tarea.
    return (
        <form onSubmit={handleSubmit}>
        <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nueva tarea..."
        />
        <button type="submit">Añadir</button>
        </form>
    );
}