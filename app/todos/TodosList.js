import Link from "next/link";

const fetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const todos = await res.json();
    return todos
}

async function TodosList() {
  const todos = await fetchTodos()

    return (
    <>
    {todos.map(todo => (
        <p key={todo.id} className="text-md hover:bg-blue-100 active:scale-105">
        <Link href={`todos/${todo.id}`}>Todo: {todo.id}</Link></p>
    ))}
    </>
  )
}

export default TodosList