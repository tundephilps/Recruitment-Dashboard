import React from "react";
import { GoHome } from "react-icons/go";
import {
  PiUsersThreeBold,
  PiNotebookLight,
  PiNoteDuotone,
} from "react-icons/Pi";
import { BsCalendarCheck, BsShare } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { AiOutlineLeft } from "react-icons/ai";

const Siderbar = () => {
  return (
    <div
      style={{
        fontSize: "24px",
        color: "black",
        display: "flex",
        flexDirection: "column",

        justifyContent: "space-between",

        height: "100%",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              height: 24,
              width: 24,
              borderRadius: "50%",
              backgroundColor: "#d9d9d9",
            }}
          ></div>
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            color: "#1D4Ed8",
            backgroundColor: "#b1cdfd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GoHome style={{ height: "24px", width: "24px" }} />
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#444444",
          }}
        >
          <PiUsersThreeBold />
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#444444",
          }}
        >
          <BsCalendarCheck />
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#444444",
          }}
        >
          <BsShare />
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#444444",
          }}
        >
          <PiNoteDuotone />
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#444444",
          }}
        >
          <PiNotebookLight />
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#444444",
          }}
        >
          <FiHeart />
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#444444",
          }}
        >
          <AiOutlineLeft />
        </div>
      </div>
      {/* Space Between */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#444444",
          }}
        >
          <PiNotebookLight />
        </div>
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#444444",
          }}
        >
          <FiHeart />
        </div>
      </div>
    </div>
  );
};

export default Siderbar;
