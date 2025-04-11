import React, { useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { TbXboxX } from "react-icons/tb";
import Dialog from "./Dialog";
import Card from "./Card";
import './style.css'

const Foreground = () => {
  const ref=useRef(null)
  const [IsOpen, setIsOpen] = useState(false);
  const [Data, setData] = useState([{
    title:"Title",
    content:"The docs templated is here for you"
  }]);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleSubmit = (title, content) => {
    const newDoc = { title, content };
    Data.push(newDoc);
  };
  const handleDelete = (item) => {
    console.log(item);
    const newData = Data.filter((obj) => {
      return obj.title === item.title || obj.content === item.content;
    });
    console.log(newData);
    setData(newData);
  };
  return (
    <div ref={ref} className="w-full fore h-full bg-inherit z-10 absolute flex flex-wrap top-0 left-0 p-10">
      <div
        className="w-[50px] h-[50px] rounded-full bg-zinc-600 flex items-center justify-center  bottom-5 right-5 cursor-pointer fixed"
        onClick={() => setIsOpen(!IsOpen)}
      >
        {IsOpen ? (
          <TbXboxX style={{ color: "white", fontSize: "50px" }} />
        ) : (
          <FaPlus style={{ color: "white", fontSize: "20px" }} />
        )}
      </div>
      {IsOpen && <Dialog onDataSubmit={handleSubmit} onclose={handleClose} />}
      {Data.map((item, index) => (
        <Card key={index} data={item} DeleteFunc={handleDelete} ref={ref} />
      ))}
    </div>
  );
};

export default Foreground;
