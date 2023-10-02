import { FunctionComponent } from "react";
import styles from "../Styles/NewSideBar.module.css";

import { GoHome } from "react-icons/go";
import { BsCalendarCheck, BsShare } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { AiOutlineLeft } from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";

import { FaUsers } from "react-icons/fa";
import { GrNotes } from "react-icons/gr";
import { CgNotes } from "react-icons/cg";

const NewSideBar: FunctionComponent = () => {
  return (
    <div>
      <div className={styles.frameParent}>
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
            display: "flex",
            justifyContent: "space-between",
            height: "1024px",
          }}
        >
          <div className={styles.instanceParent}>
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
              <FaUsers style={{ height: "24px", width: "24px" }} />
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
              <BsCalendarCheck style={{ height: "24px", width: "24px" }} />
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
              <BsShare style={{ height: "24px", width: "24px" }} />
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
              <GrNotes style={{ height: "24px", width: "24px" }} />
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
              <CgNotes style={{ height: "24px", width: "24px" }} />
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
              <FiHeart style={{ height: "24px", width: "24px" }} />
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
              <AiOutlineLeft style={{ height: "24px", width: "24px" }} />
            </div>
          </div>
        </div>
        <div className={styles.instanceGroup}>
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
            <RiSettings4Line style={{ height: "24px", width: "24px" }} />
          </div>
          <div className={styles.frameChild}>
            <div className={styles.asWrapper}>
              <div className={styles.as}>AS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewSideBar;
