import { useContext } from "react";
import { TodoStore } from "../context/TodoContext";

const DeleteOverlay = () => {
  const {
    deletetodo,
    showdeleteoverlay,
    setShowdeleteOverlay,
    handleDeleteTodo,
    setShowreadOverlay,
  } = useContext(TodoStore);

  return (
    <>
      {showdeleteoverlay && (
        <section className="h-[100vh] w-[100vw]  bg-[#000a] fixed top-0 left-0 ">
          <article className="w-[100%] flex justify-center items-center h-[90%]">
            <div className="bg-white w-[80%] p-5 rounded-lg flex flex-col">
              <p className="text-lg font-semibold">
                It will be Permanently Deleted.Do you want to continue?
              </p>
              <div className="flex justify-end gap-5">
                <button
                  className="text-lg bg-red-600 text-white py-1 px-3 rounded-lg hover:bg-red-800"
                  onClick={() => handleDeleteTodo(deletetodo)}
                >
                  Delete
                </button>
                <button
                  className="text-lg bg-emerald-500 text-white py-1 px-3 rounded-lg hover:bg-emerald-800"
                  onClick={() => {
                    setShowdeleteOverlay(false);

                    setShowreadOverlay(false);
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </article>
        </section>
      )}
    </>
  );
};

export default DeleteOverlay;