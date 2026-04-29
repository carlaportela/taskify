// Lógica principal de la aplicación: maneja los estados, las funciones para agregar, eliminar y marcar tareas como completadas, el filtrado y la persistencia en localStorage.

import { useState, useEffect } from "react"; // Se importan los hooks o características de React para manejar el estado y los efectos secundarios (side effects).
import TodoForm from "./components/TodoForm"; // Se importa el componente del formulario para agregar nuevas tareas.
import TodoList from "./components/TodoList"; //Se importa el componente que muestra la lista de tareas.
import logo from "./assets/logo.png";

// Función principal de la aplicación que renderiza la interfaz y maneja la lógica de la aplicación.
function App() {

    // Función para inicializar el estado de tareas, que intenta cargar las tareas guardadas en localStorage al iniciar la aplicación. Si no hay tareas guardadas, se inicializa con un array vacío.
    const [todos, setTodos] = useState(() => { 
        const saved = localStorage.getItem("todos");
        return saved ? JSON.parse(saved) : [];
    });

    // Función para manejar el estado del filtro de tareas, que se inicializa con el valor "all" para mostrar todas las tareas por defecto.
    const [filter, setFilter] = useState("all");

    // Función que se ejecuta cada vez que el estado de tareas cambia, guardando las tareas actualizadas en localStroage para mantener la persistencia.
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    // Función para agregar una nueva tarea o lista de tareas. Recibe el texto, crea una nueva instancia con ID único y estado completado en false, y luego actualiza el estado de tareas agregando la nueva tarea a la lista existente.
    const addTodo = (text) => {
        setTodos([
        ...todos,
            { id: Date.now(), text, completed: false },
        ]);
    };

    // Función para marcar una tarea como completada o no completada, que recibe el id de la tarea a modificar y actualiza su estado modificando su valor.
    const toggleTodo = (id) => {
        setTodos(
            todos.map((t) =>
                t.id === id ? { ...t, completed: !t.completed } : t
            )
        );
    };

    // Función para eliminar una tarea, que recibe el id de la tarea a eliminar y actualiza el estado de tareas filtrando para excluir la tarea con id especificado.
    const deleteTodo = (id) => {
        setTodos(todos.filter((t) => t.id !== id));
    };

    // Función para filtrar las tareas según el estado seleccionado (todas, activas o completadas).
    const filteredTodos = todos.filter((t) => {
        if (filter === "active") return !t.completed;
        if (filter === "completed") return t.completed;
        return true;
    });

    // Renderiza la interfaz de la aplicación en html, incluyendo el título, el formulario para agregar tareas, los botones para filtrar tareas y la lista de tareas filtradas.
    return (
        <div className="app">
            <h1 className="title">
                <img src={logo} alt="Taskify logo" className="logo" />
                Taskify
            </h1>

            <TodoForm addTodo={addTodo} />

            <div className="filters">
                <button onClick={() => setFilter("all")}>Todas</button>
                <button onClick={() => setFilter("active")}>Activas</button>
                <button onClick={() => setFilter("completed")}>Completadas</button>
            </div>

            <TodoList
                todos={filteredTodos}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        </div>
    );
}

// Se exporta el componente App para que pueda ser utilizado en otros archivos, como el punto de entrada de la aplicación (main.jsx).
export default App;