import React, { useContext } from "react";
import AddTodo from "../components/AddTodo";
import { TodoStore } from "../context/TodoContext";
import ShowAllTodos from "../components/ShowAllTodos";
import ReadOverlay from "./ReadOverlay";
import DeleteOverlay from "./DeleteOverlay";
import UpdateOverlay from "./UpdateOverlay";
import { BiAddToQueue } from "react-icons/bi";
import { TbFileSearch } from "react-icons/tb";
import SearchTodo from "../components/SearchTodo";

const Home = () => {
  const { todolist, showAddTodo, setShowaddtodo } = useContext(TodoStore);
  return (
    <section className="  flex justify-center ">
      <article className="flex flex-col items-center gap-8 w-full py-9">
        <nav className=" w-full flex items-center justify-between px-3 lg:px-8 ">
          <h1 className="text-lg lg:text-2xl py-5 font-bold">
            Advanced Todo App
          </h1>
          <div className=" flex gap-6 ">
            <button
              className="bg-blue-600 text-white font-semibold py-1 px-3 rounded-lg flex items-center gap-3 justify-center hover:bg-blue-500 lg:text-xl"
              onClick={() => setShowaddtodo(true)}
            >
              <span>Create</span>{" "}
              <BiAddToQueue className="text-white lg:text-2xl text-xl" />
            </button>

            <button
              className="bg-slate-600 text-white font-semibold py-1 px-3 rounded-lg flex items-center gap-3 justify-center hover:bg-slate-500 lg:text-xl"
              onClick={() => setShowaddtodo(false)}
            >
              <span> Search</span>{" "}
              <TbFileSearch className="lg:text-2xl text-xl" />
            </button>
          </div>
        </nav>
        {showAddTodo == true ? <AddTodo /> : <SearchTodo />}

        <ReadOverlay />
        <ShowAllTodos />

        <DeleteOverlay />
        <UpdateOverlay />
      </article>
    </section>
  );
};

export default Home;