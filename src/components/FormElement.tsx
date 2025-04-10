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

    const title = formData.get("title") as string;
    const describtion = formData.get("describtion") as string;
    const complated = formData.get("complated") === "on";
    const type = formData.get("type") as "easy" | "normal" | "hard";

    const todo: Todo = {
      id: uuidv4(),
      title,
      describtion,
      complated,
      type,
    };

    setTodos((prev) => [...prev, todo]);

    e.currentTarget.reset();
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
          <label className="text-3xl font-semibold " htmlFor="describtion">
            Description:
          </label>
          <br />
          <textarea
            name="describtion"
            id="describtion"
            className="input input-neutral w-full"
            required
          />
        </div>
        <div>
          <label className="ml-10 mr-5" htmlFor="complated">
            Completed:
          </label>
          <input
            name="complated"
            type="checkbox"
            id="complated"
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
