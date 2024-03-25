import React, { useState } from "react";

function ToDOInput(props) {
  const [inputText, setInputText] = useState("");

  const handleEnterpress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };

  return (
    <div className="flex justify-center items-center py-6">
      <input
        type="text"
        placeholder="Enter your to do"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterpress}
        className="border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-blue-500 shadow-md w-80"
      />
      <button
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
        className="border rounded-full w-10 h-10 mx-4 bg-blue-400  text-white text-3xl "
      >
        +
      </button>
    </div>
  );
}

export default ToDOInput;
