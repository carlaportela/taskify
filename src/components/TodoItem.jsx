// Componente para renderizar cada tarea individualmente

// Función que recibe una tarea y sus funciones y las renderiza.
export default function TodoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <div style={{ display: "flex", gap: 10 }}>
        <span
            onClick={() => toggleTodo(todo.id)}
            style={{
            textDecoration: todo.completed ? "line-through" : "none",
            cursor: "pointer",
            }}
        >
            {todo.text}
        </span>
      <button onClick={() => deleteTodo(todo.id)}>❌</button>
    </div>
  );
}