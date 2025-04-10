import { useState } from "react";
import { Todo } from "./interface";
import FormElement from "./components/FormElement";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center lg:flex-row justify-center gap-10 flex-col m-10">
      <FormElement setTodos={setTodos} />

      <div className="mt-4 w-full max-w-md space-y-4 ">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="p-4 rounded-xl shadow-md bg-base-100 border border-neutral"
          >
            <h2 className="text-xl font-bold">{todo.title}</h2>
            <p className="text-sm text-gray-500 italic">
              {todo.description.toString()}
            </p>
            <div className="flex items-center justify-between mt-2">
              <span
                className={`badge ${
                  todo.completed ? "badge-success" : "badge-error"
                }`}
              >
                {todo.completed ? "Completed" : "Not completed"}
              </span>
              <span className="badge badge-outline">
                {todo.type.toString()}
              </span>
              <button
                onClick={() => handleDelete(todo.id.toString())}
                className="btn btn-error btn-sm"
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
