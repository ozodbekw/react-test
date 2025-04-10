import { useState } from "react";
import { Todo } from "./interface";
import FormElement from "./components/FormElement";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center md:flex-row justify-center gap-10 flex-col m-10">
      <FormElement setTodos={setTodos} />

      <div className="mt-4 w-full max-w-md space-y-4">
        {todos.map((todo) => (
          <div
            key={todo.id?.toString()}
            className="p-4 rounded-xl shadow-md bg-base-100 border border-neutral"
          >
            <h2 className="text-xl font-bold">{todo.title}</h2>
            <p className="text-sm text-gray-500 italic">{todo.describtion}</p>
            <div className="flex items-center justify-between mt-2">
              <span
                className={`badge ${
                  todo.complated ? "badge-success" : "badge-error"
                }`}
              >
                {todo.complated ? "Completed" : "Not completed"}
              </span>
              <span className="badge badge-outline">{todo.type}</span>

              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
