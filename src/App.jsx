import React from "react";
import TodoContext from "./context/TodoContext";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <TodoContext>
        <Home />
      </TodoContext>
    </>
  );
};

export default App;