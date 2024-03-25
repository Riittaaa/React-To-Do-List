import { useState } from "react";
import ToDOInput from "./components/ToDOInput";
import ToDoList from "./components/ToDoList";

function App() {
  const [listToDo, setListToDo] = useState([]);
  let addList = (inputText) => {
    if (inputText !== "") setListToDo([...listToDo, inputText]);
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listToDo];
    newListTodo.splice(key, 1);
    setListToDo([...newListTodo]);
  };

  return (
    <div className="flex justify-center items-center ">
      <div className="max-w-screen-lg w-full md:w-3/4 lg:w-1/2 text-center rounded-3xl border shadow px-8 py-4  bg-zinc-500">
        {/* <div className="font-bold text-3xl">To Do List</div> */}
        <ToDOInput addList={addList} />
        <h1 className="font-bold text-4xl text-white">TO DO</h1>
        <hr />
        {listToDo.map((listItem, i) => {
          return (
            <ToDoList
              key={i}
              item={listItem}
              index={i}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
