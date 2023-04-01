import { notFound } from 'next/navigation'

const fetchTodo = async (todoId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo = await res.json();
  return todo;
};


async function TodoPage({ params: { todoId } }) {
  const todo = await fetchTodo(todoId);
  
  if (!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id} : {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By user: {todo.userId}
      </p>
    </div>
  );
}

export default TodoPage;
