import { useContext } from "react";
import { TodoStore } from "../context/TodoContext";
import { MdDeleteForever } from "react-icons/md";
import { BiSolidEdit } from "react-icons/bi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { BsArrowsFullscreen } from "react-icons/bs";

const ShowAllTodos = () => {
  const {
    todolist,
    handleReadOverlay,
    setShowdeleteOverlay,
    handleStatus,
    setShowreadOverlay,
    setDeleteTodo,
    setUpdateTodo,
    showAddTodo,
    setShowupdateOverlay,
    search,
  } = useContext(TodoStore);
  //   console.log("from show todos : ", todolist);
  if (showAddTodo == true)
    return (
      <section className=" w-[100%] flex justify-center items-center p-8">
        <article className="flex flex-wrap gap-6 w-[100%]  justify-center">
          {todolist.length == 0 ? (
            <h2 className="text-2xl text-slate-400  font-semibold">
              No Todo Available!!!!
            </h2>
          ) : (
            todolist.map(value => {
              // Destructuring from individual Todo object
              const {
                status,
                id,
                title,
                details,
                n_characters,
                n_words,
                n_sentences,
                createdAt,
              } = value;
              return (
                <div
                  className={`flex flex-col w-[90%] lg:w-[25%]  gap-6 p-4 rounded-md ${
                    status == "done" ? "border-emerald-300" : "border-slate-300"
                  } border-2 shadow-lg hover:shadow-2xl group hover:border-blue-600`}
                >
                  <div className="flex justify-between items-center">
                    <button
                      className={`w-9 h-9 px-1 border-4   border-slate-300 ${
                        status == "done"
                          ? "border-emerald-300"
                          : "border - slate - 300"
                      } rounded-full `}
                      onClick={() => handleStatus(id)}
                    >
                      {status == "done" ? (
                        <IoCheckmarkDoneSharp className="text-xl text-emerald-300" />
                      ) : (
                        ""
                      )}
                    </button>{" "}
                    <button className=" " onClick={() => handleReadOverlay(id)}>
                      <BsArrowsFullscreen className="text-xl text-slate-400" />
                    </button>
                  </div>
                  <h3 className="text-3xl bg-slate-200 rounded-md p-2 font-semibold text-center">
                    {title}
                  </h3>
                  <p className="text-base bg-slate-200 p-2 text-ellipsis whitespace-nowrap overflow-hidden">
                    {details}
                  </p>
                  <p className="text-slate-400 text-xs text-center">
                    {createdAt}
                  </p>
                  <div className="group-hover:flex hidden flex-col gap-8 justify-center items-center">
                    <div className="text-sm flex gap-3  ">
                      <span className="text-center">
                        Characters : {n_characters}
                      </span>
                      <span className="text-center">Words : {n_words}</span>
                      <span className="text-center">
                        Sentences : {n_sentences}
                      </span>
                    </div>
                    <div className="flex justify-around  w-[100%]">
                      <button
                        className="bg-red-500 p-2 rounded-lg hover:bg-red-700 "
                        onClick={() => {
                          setShowdeleteOverlay(true);
                          setDeleteTodo(id);
                        }}
                      >
                        <MdDeleteForever className="text-2xl text-white" />
                      </button>
                      <button
                        className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-700 "
                        onClick={() => {
                          setShowupdateOverlay(true);
                          setUpdateTodo({ id, title, details, createdAt });
                        }}
                      >
                        <BiSolidEdit className="text-2xl text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </article>
      </section>
    );
  else {
    return (
      <section className=" w-[100%] flex justify-center items-center p-8">
        <article className="flex flex-wrap gap-6 w-[100%]  justify-center">
          {search.length == 0 ? (
            <h2 className="lg:text-3xl text-2xl  text-slate-400  font-semibold">
              No Search Todo Available!!
            </h2>
          ) : (
            search.map(value => {
              // Destructuring from individual Todo object
              const {
                status,
                id,
                title,
                details,
                n_characters,
                n_words,
                n_sentences,
                createdAt,
              } = value;
              return (
                <div
                  className={`flex flex-col w-[90%] lg:w-[25%]  gap-6 p-4 rounded-md ${
                    status == "done" ? "border-emerald-300" : "border-slate-300"
                  } border-2 shadow-lg hover:shadow-2xl group hover:border-blue-600`}
                >
                  <div className="flex justify-between items-center">
                    <button
                      className={`w-9 h-9 px-1 border-4   border-slate-300 ${
                        status == "done"
                          ? "border-emerald-300"
                          : "border - slate - 300"
                      } rounded-full `}
                      onClick={() => handleStatus(id)}
                    >
                      {status == "done" ? (
                        <IoCheckmarkDoneSharp className="text-xl text-emerald-300" />
                      ) : (
                        ""
                      )}
                    </button>{" "}
                    <button className=" " onClick={() => handleReadOverlay(id)}>
                      <BsArrowsFullscreen className="text-xl text-slate-400" />
                    </button>
                  </div>
                  <h3 className="titel text-3xl bg-slate-200 rounded-md p-2 font-semibold text-center">
                    {title}
                  </h3>
                  <p className="text-base bg-slate-200 p-2 text-ellipsis whitespace-nowrap overflow-hidden">
                    {details}
                  </p>{" "}
                  <p className="text-slate-400  text-center">{createdAt}</p>
                  <div className="group-hover:flex hidden flex-col gap-8 justify-center items-center">
                    <div className="text-sm flex gap-3  ">
                      <span className="text-center">
                        Characters : {n_characters}
                      </span>
                      <span className="text-center">Words : {n_words}</span>
                      <span className="text-center">
                        Sentences : {n_sentences}
                      </span>
                    </div>
                    <div className="flex justify-around  w-[100%]">
                      <button
                        className="bg-red-500 p-2 rounded-lg hover:bg-red-700 "
                        onClick={() => {
                          setShowdeleteOverlay(true);
                          setDeleteTodo(id);
                        }}
                      >
                        <MdDeleteForever className="text-2xl text-white" />
                      </button>
                      <button
                        className="bg-yellow-500 p-2 rounded-lg hover:bg-yellow-700 "
                        onClick={() => {
                          setShowupdateOverlay(true);
                          setUpdateTodo({ id, title, details, createdAt });
                        }}
                      >
                        <BiSolidEdit className="text-2xl text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </article>
      </section>
    );
  }
};

export default ShowAllTodos;