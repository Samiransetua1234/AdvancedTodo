import React, { useContext, useState } from "react";
import { TodoStore } from "../context/TodoContext";

const AddTodo = () => {
  const { todolist, handleAddTodo } = useContext(TodoStore);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  // console.log(todolist);

  const handleSubmit = e => {
    e.preventDefault();

    if (title.length != "") {
      const n_characters = details.split("").length;
      const n_words = details.split(" ").length;
      const n_sentences = details.split(".").length - 1;
      handleAddTodo({ title, details, n_characters, n_sentences, n_words });
    } else {
      alert("Fields Are Empty!!!!");
    }
    setTitle("");
    setDetails("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-[70%] lg:w-[50%] "
    >
      <input
        type="text"
        placeholder="Title..."
        value={title}
        className="text-2xl py-1 px-3 outline-none border-b-4 focus:border-b-blue-400"
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        className="text-2xl py-1 px-3 outline-none border-b-4 focus:border-b-blue-400 resize-none"
        placeholder="Details..."
        value={details}
        onChange={e => setDetails(e.target.value)}
      />
      <button className="text-2xl py-1 px-3 outline-none border-4 bg-blue-400 text-white hover:border-blue-700 hover:bg-blue-700 ">
        Create
      </button>
    </form>
  );
};

export default AddTodo;