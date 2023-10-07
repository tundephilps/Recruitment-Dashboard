import { FunctionComponent } from "react";
import { useState } from "react";
import styles from "../Styles/NewSideBar.module.css";
import { GoHome } from "react-icons/go";
import { BsCalendarCheck, BsShare } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { AiOutlineLeft } from "react-icons/ai";
import { RiSettings4Line } from "react-icons/ri";

import { FaUsers } from "react-icons/fa";
import { PiNotebookLight } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewSideBar: FunctionComponent = () => {
  const [activeIcon, setActiveIcon] = useState<string>("");

  const handleIconClick = (iconName: string) => {
    setActiveIcon(iconName);
  };

  const isIconActive = (iconName: string) => {
    return iconName === activeIcon ? "#F9FAFF" : "#eeeeee";
  };

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
            <Link to="/">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  color: "#1D4Ed8",
                  backgroundColor:
                    isIconActive("home") === "#F9FAFF" ? "#eeeeee" : "",

                  //  backgroundColor: "#b1cdfd",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                onClick={() => handleIconClick("home")}
              >
                <GoHome style={{ height: "24px", width: "24px" }} />
              </div>
            </Link>
            <div
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#444444",

                backgroundColor:
                  isIconActive("users") === "#F9FAFF" ? "#eeeeee" : "",
              }}
              onClick={() => handleIconClick("users")}
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
            <Link to="/opportunity">
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#444444",

                  backgroundColor:
                    isIconActive("Charts") === "#F9FAFF" ? "#eeeeee" : "",
                }}
                onClick={() => handleIconClick("Charts")}
              >
                <FaRegFileAlt
                  style={{ height: "24px", width: "24px", color: "#1D4Ed8" }}
                />
              </div>
            </Link>
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
              <PiNotebookLight style={{ height: "24px", width: "24px" }} />
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
