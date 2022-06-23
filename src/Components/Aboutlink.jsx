import React from "react";
import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Aboutlink = () => {
  return (
    <div
      className="about-link"
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "10px",
      }}
    >
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
      <Link to="/">
        {
          <div>
            <AiOutlineArrowLeft /> Back to Main Page
          </div>
        }
      </Link>
    </div>
  );
};

export default Aboutlink;
