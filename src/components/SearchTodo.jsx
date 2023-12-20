import { useContext, useState } from "react";
import { TodoStore } from "../context/TodoContext";
const SearchTodo = () => {
  const { search, setSearch, handleSearch } = useContext(TodoStore);
  const [input, setInput] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <section className="w-full flex justify-center items-center">
      <article className="flex  flex-col gap-4 w-full justify-center items-center">
        <h1 className="text-xl lg:text-3xl font-semibold">Search Todos</h1>
        <form onSubmit={handleSubmit} className="w-full flex justify-center">
          <input
            type="text"
            className="border-2 border-slate-300 py-1 px-3 w-[80%] outline-none focus:border-blue-300 lg:text-2xl text-xl"
            placeholder="Search Todo...."
            value={input}
            onChange={e => {
              setInput(e.target.value);
              handleSearch(e.target.value);
            }}
          />
        </form>
      </article>
    </section>
  );
};

export default SearchTodo;