// Componente para renderizar la lista de tareas

// Se importa el componente TodoItem para renderizar cada tarea individualmente
import TodoItem from "./TodoItem";

//Función que recibe la lista de tareas y las funciones para marcar o no como completada y eliminar una tarea y renderiza cada tarea.
export default function TodoList({ todos, toggleTodo, deleteTodo }) {

    // Se mapea la lista de tareas y se renderiza cada tarea utilizando el componente TodoItem, pasando las funciones como props.
    return (
        <div>
        {todos.map((todo) => (
            <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            />
        ))}
        </div>
    );
}