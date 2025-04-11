import React, { useEffect, useState } from "react";
import "./style.css";
import { FaEdit, FaRegFileAlt } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { motion } from "motion/react";
import { useDragControls } from "motion/react";
import { TbXboxX } from "react-icons/tb";
const Card = ({ data, DeleteFunc,ref }) => {
  const [status, setStatus] = useState(false);
  const [text, settext] = useState("");
  const [color, setColor] = useState("");
  const [IsEdit, setIsEdit] = useState(false);
  const [Title, setTitle] = useState(data.title);
  const [Content, setContent] = useState(data.content);
  const controls = useDragControls();
  useEffect(() => {
    settext(status ? "Done" : "Pending..");
    setColor(status ? "green" : "red");
  });
  const handleStatusClick = () => {
    setStatus(!status);
  };
  const handleDelete = () => {
    DeleteFunc(data);
  };
  const handleEdit = () => {
    setIsEdit(!IsEdit);
  };

  return (
    <motion.div
      drag
      dragControls={controls}
      dragConstraints={ref}
      className=" hover:scale-101 w-[20vw] h-[40vh] rounded-4xl bg-zinc-800 card relative"
    >
      <div className="title text-2xl text-white font-extrabold flex items-center ">
        <span className="hover:scale-100 mt-1">
          <FaRegFileAlt size={20} />
        </span>
        {IsEdit ? (
          <input
            type="text"
            value={Title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="bg-zinc-700 w-40"
          />
        ) : (
          Title
        )}
      </div>
      <div className="desc text-white">
        {IsEdit ? (
          <textarea
            type="text"
            value={Content}
            required
            onChange={(e) => setContent(e.target.value)}
            className="bg-zinc-700 w-55 h-50"
          />
        ) : (
          Content
        )}
      </div>
      <div className="s3 absolute bottom-0 w-full">
        <div className="feature absolute right-2 flex bottom-8 items-center">
          <span className="cursor-pointer hover:scale-110" onClick={handleEdit}>
            {IsEdit ? (
              <TbXboxX title="close" color="white" size={24} />
            ) : (
              <FaEdit title="Edit" color="white" size={24} />
            )}
          </span>
          <span
            title="Delete"
            className="cursor-pointer hover:scale-110"
            onClick={handleDelete}
          >
            <RiDeleteBinLine color="white" size={28} />
          </span>
        </div>
        <div
          title="toggle progress"
          className={`status  cursor-pointer w-full ${
            color === "red" ? "bg-red-400" : "bg-green-500"
          } text-xl text-white font-bold`}
          onClick={handleStatusClick}
        >
          {text}
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
