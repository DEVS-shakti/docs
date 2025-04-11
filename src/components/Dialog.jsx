import React, { useState } from "react";
import { TbXboxX } from "react-icons/tb";
import './style.css'
const Dialog = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleCancel=()=>{
    props.onclose();
  }
  const handleSubmit=()=>{
    props.onDataSubmit(title,content);
    props.onclose();
  }
  return (
    <div className="w-[40vw] h-[80vh] bg-zinc-800 rounded-lg p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center justify-around  box">
      <h2 className="text-white text-2xl font-bold flex align-center justify-between text-center py-4">
        <span>Add Docs.</span>
        <span className="text-center absolute top-1 right-1 cursor-pointer" onClick={handleCancel}><TbXboxX/></span>
      </h2>
      <form onSubmit={handleSubmit} className="w-full h-full flex flex-col items-center justify-around">
        <input
          type="text"
          required
          placeholder="Enter your document title (in short)"
          className="w-[90%] h-[50px] bg-zinc-700 rounded-lg p-2 text-white outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          required
          placeholder="Enter your document content (in short)"
          className="w-[90%] h-[200px] bg-zinc-700 rounded-lg p-2 text-white outline-none py-3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          type="submit"
          className="w-[90%] cursor-pointer h-[50px] bg-zinc-600 rounded-lg text-white font-bold"
        >
          Add Document
        </button>
      </form>
    </div>
  );
};
export default Dialog;