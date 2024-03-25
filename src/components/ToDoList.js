// import React from "react";

// function ToDoList(props) {
//   return (
//     <>
//       <li className="max-w-md w-full list-none border border-white rounded py-2 my-4   flex justify-between items-center px-1">
//         {props.item}
//         <span className="cursor-pointer">
//           <i
//             className="fa-solid fa-trash text-white px-1"
//             onClick={(e) => {
//               props.deleteItem(props.index);
//             }}
//           ></i>
//         </span>
//       </li>
//     </>
//   );
// }

// export default ToDoList;

import React from "react";

function ToDoList(props) {
  return (
    <>
      <li className="max-w-md w-full list-none border border-white rounded py-2 my-4 flex justify-between items-center px-1 ">
        <span className="text-white w-1/6">{props.index + 1}</span>{" "}
        {/* Add index + 1 here */}
        <span className="text-white overflow-hidden overflow-ellipsis w-4/6">
          {props.item}
        </span>
        <span className="cursor-pointer">
          <i
            className="fa-solid fa-trash text-white px-1"
            onClick={(e) => {
              props.deleteItem(props.index);
            }}
          ></i>
        </span>
      </li>
    </>
  );
}

export default ToDoList;
