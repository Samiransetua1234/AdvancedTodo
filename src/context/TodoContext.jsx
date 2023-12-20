import { createContext, useEffect, useState } from "react";
import { BiLogIn } from "react-icons/bi";

export const TodoStore = createContext([]);

const TodoContext = ({ children }) => {
  //! Basic requirements
  const [todolist, setTodolist] = useState(
    JSON.parse(localStorage.getItem("todolist"))
  );

  //! Let's maintain state to store searched text
  const [search, setSearch] = useState([]);

  //! Let's maintain state to show and hide AddTodo Component
  const [showAddTodo, setShowaddtodo] = useState(true);

  //! Overlay States
  //? States to handle Read overlay
  const [showreadoverlay, setShowreadOverlay] = useState(false);
  const [showTodoData, setShowTodoData] = useState({});

  //? States to handle Delete overlay
  const [showdeleteoverlay, setShowdeleteOverlay] = useState(false);
  // we will use deletetodo state to store id of todo that we want to delete!
  const [deletetodo, setDeleteTodo] = useState(false);

  //? States to handle Update overlay
  const [showupdateoverlay, setShowupdateOverlay] = useState(false);
  // we will use updatetodo state to store data of todo that we want to update!
  const [updatetodo, setUpdateTodo] = useState(false);

  // if we need changes , we will do while working on project
  const handleAddTodo = ({
    title,
    details,
    n_characters,
    n_sentences,
    n_words,
  }) => {
    console.log(title, details, n_characters, n_words, n_sentences);
    setTodolist([
      ...todolist,
      {
        id: `${new Date()}`,
        title,
        status: "pending",
        details,
        n_characters,
        n_words,
        n_sentences,
        createdAt: `Date : ${new Date().toLocaleDateString()} Time : ${new Date().toLocaleTimeString()}`,
      },
    ]);
  };
  const handleReadTodo = () => {};

  const handleDeleteTodo = id => {
    console.log("handleDeleteTodo id : ", id);
    setTodolist(
      todolist.filter(value => {
        if (value.id != id) console.log("delete ", value.title);

        return value.id != id;
      })
    );
    setShowdeleteOverlay(false);
    setShowreadOverlay(false);
  };

  const handleUpdateTodo = ({ id, title, details, createdAt }) => {
    // console.log("updating....");
    // console.log(title);
    // console.log(details);
    console.log(todolist);
    const words = details.split(" ").length;
    const characters = details.split("").length;
    const sentences = details.split(".").length - 1;
    console.log(
      todolist.filter(value => {
        if (value.id == id) {
          value.title = title;
          value.details = details;
          value.updateAt = `Date : ${new Date().toLocaleDateString()} Time : ${new Date().toLocaleTimeString()}`;
          value.n_words = words;
          value.n_sentences = sentences;
          value.n_characters = characters;
        }
      })
    );
    setTodolist(todolist);
    setShowupdateOverlay(false);
    console.log(todolist);
  };
  // control extra screen

  const handleReadOverlay = id => {
    // console.log(id);

    const data = todolist.filter(value => value.id === id);
    setShowTodoData({ ...data[0] });
    setShowreadOverlay(true);
  };

  const handleSearch = searchdata => {
    // console.log(searchdata);
    if (searchdata == "/:/done") {
      console.log("searching todo with done status...");
      setSearch(
        todolist.filter(value => {
          if (value.status == "done") return true;
        })
      );
    } else if (searchdata == "/:/pending") {
      setSearch(
        todolist.filter(value => {
          if (value.status == "pending") return true;
        })
      );
    } else
      setSearch(
        todolist.filter(value => {
          if (
            value.title.toLowerCase().includes(searchdata.toLowerCase()) ||
            value.details.toLowerCase().includes(searchdata.toLowerCase())
          )
            return true;
        })
      );
  };

  // this methods will used to update status of todo
  const handleStatus = id => {
    setTodolist(
      todolist.map(value => {
        if (value.id == id) {
          if (value.status != "done") value.status = "done";
          else if (value.status == "done") value.status = "pending";
        }
        return value;
      })
    );
  };

  useEffect(() => {
    // Storing data in JSON format
    localStorage.setItem("todolist", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <TodoStore.Provider
      value={{
        todolist,
        handleAddTodo,
        handleDeleteTodo,
        handleReadTodo,
        handleUpdateTodo,
        handleReadOverlay,
        showTodoData,
        showreadoverlay,
        setShowreadOverlay,
        deletetodo,
        showdeleteoverlay,
        setShowdeleteOverlay,
        setDeleteTodo,
        updatetodo,
        showupdateoverlay,
        setUpdateTodo,
        setShowupdateOverlay,
        showAddTodo,
        setShowaddtodo,
        search,
        setSearch,
        handleSearch,
        handleStatus,
      }}
    >
      {children}
    </TodoStore.Provider>
  );
};

export default TodoContext;