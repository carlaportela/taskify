// Componente para renderizar cada tarea individualmente

// Función que recibe una tarea y sus funciones y las renderiza.
export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div className="todo-item">
        <span
            className={`todo-text ${todo.completed ? "completed" : ""}`}
            onClick={() => toggleTodo(todo.id)}
        >
            {todo.text}
        </span>

        <button
            className="delete-btn"
            onClick={() => deleteTodo(todo.id)}
        >
            ✕
        </button>
    </div>
  );
}