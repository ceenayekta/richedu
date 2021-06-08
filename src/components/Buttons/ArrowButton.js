import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import "./ArrowButton.css";

const ArrowButton = ({ id, parentId, move }) => {
  const [isPressed, setIsPressed] = useState(false);

  const scrollPage = () => {
    window.scroll({
      top: 0,
      left: window.scrollX + move,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (isPressed) {
      const timer = setInterval(scrollPage, 1);
      return () => clearInterval(timer);
    }
  }, [isPressed]);

  return (
    <div
      className="arrowCon"
      id={parentId}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
    >
      <BsArrowLeft id={id} className="icons" />
    </div>
  );
};

export default ArrowButton;
