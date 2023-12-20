import { useContext, useEffect, useState } from "react";
import { TodoStore } from "../context/TodoContext";

const UpdateOverlay = () => {
  const {
    setShowreadOverlay,
    handleUpdateTodo,
    updatetodo,
    showupdateoverlay,
    setUpdateTodo,
    setShowupdateOverlay,
  } = useContext(TodoStore);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const todoData = updatetodo;

  const handleSubmit = e => {
    e.preventDefault();
    handleUpdateTodo({
      id: todoData.id,
      title,
      details,
      createdAt: todoData.createdAt,
    });
    setTitle("");
    setDetails("");
  };

  useEffect(() => {
    setShowreadOverlay(false);
    setTitle(todoData.title);
    setDetails(todoData.details);
  }, [showupdateoverlay]);
  return (
    <>
      {showupdateoverlay && (
        <section className="h-[100vh] w-[100vw]  bg-[#000a] fixed top-0 left-0 flex justify-center items-center">
          <span
            className="text-white bg-black px-3  py-2 text-2xl fixed z-[5] top-7 right-7  cursor-pointer"
            onClick={() => setShowupdateOverlay(false)}
          >
            X
          </span>
          <article className=" flex justify-center items-center lg:w-[60vw] w-[90vw] p-12 rounded-xl bg-white flex-col gap-4">
            <h1 className="lg:text-3xl sm:tex-xl font-bold">Update Todo </h1>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 w-[100%]  "
            >
              <input
                type="text"
                placeholder="Title..."
                value={title}
                className="text-2xl py-2 px-3 outline-none border-2 focus:border-b-blue-400"
                onChange={e => setTitle(e.target.value)}
              />
              <textarea
                type="text"
                className="text-2xl py-2 px-3 outline-none border-2 focus:border-b-blue-400 resize-none"
                placeholder="Details..."
                value={details}
                onChange={e => setDetails(e.target.value)}
              />
              <button className="text-2xl py-1 px-3 outline-none border-4 bg-blue-400 text-white hover:border-blue-700 hover:bg-blue-700 ">
                Update
              </button>
            </form>
          </article>
        </section>
      )}
    </>
  );
};

export default UpdateOverlay;