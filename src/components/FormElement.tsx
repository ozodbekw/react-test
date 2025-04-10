import { FormEvent } from "react";
import { Todo } from "../interface";
import { v4 as uuidv4 } from "uuid";

interface FormElementProps {
  setTodos: (todos: (prev: Todo[]) => Todo[]) => void;
}

function FormElement({ setTodos }: FormElementProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const titleEntry = formData.get("title");
    const descriptionEntry = formData.get("description");
    const completedEntry = formData.get("completed");
    const typeEntry = formData.get("type");

    if (
      typeof titleEntry === "string" &&
      typeof descriptionEntry === "string" &&
      typeof typeEntry === "string"
    ) {
      const completed = completedEntry === "on";

      const todo: Todo = {
        id: uuidv4(),
        title: titleEntry,
        description: descriptionEntry,
        completed,
        type: typeEntry as "easy" | "normal" | "hard",
      };

      setTodos((prev) => [...prev, todo]);

      e.currentTarget.reset();
    } else {
      console.error("Form data is invalid");
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-[600px] flex flex-col gap-10 p-5"
      >
        <div className="w-full">
          <label className="text-3xl font-semibold " htmlFor="title">
            Title:
          </label>
          <br />
          <input
            name="title"
            type="text"
            id="title"
            className="input input-neutral w-full"
            required
          />
        </div>
        <div className="w-full">
          <label className="text-3xl font-semibold " htmlFor="description">
            Description:
          </label>
          <br />
          <textarea
            name="description"
            id="description"
            className="input input-neutral w-full"
            required
          />
        </div>
        <div>
          <label className="ml-10 mr-5" htmlFor="completed">
            Completed:
          </label>
          <input
            name="completed"
            type="checkbox"
            id="completed"
            defaultChecked
            className="checkbox"
          />
        </div>
        <div>
          <label htmlFor="type" className="text-2xl font-medium">
            Level up:
          </label>
          <br />
          <select
            name="type"
            defaultValue="normal"
            className="select select-info"
          >
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FormElement;
