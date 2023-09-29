import { Input, Tooltip } from "antd";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Search from "./Search";

//const {  InfoCircleOutlined, UserOutlined  } = icons;

const SearchFilter = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "385px",
        // backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          position: "relative",
          borderRadius: "8px",
          backgroundColor: "#fff",
          border: "1px solid #f3f3f3",
          boxSizing: "border-box",
          height: "48px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          textAlign: "left",
          fontSize: "14px",
          color: "#9aa6ac",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: "10px",
          }}
        >
          <Input
            placeholder="Search by name, edu, exp or #tag"
            style={{ width: "385px", border: "none" }}
            prefix={
              <CiSearch
                style={{
                  position: "relative",
                  width: "20px",
                  height: "20px",
                  overflow: "hidden",
                }}
              />
            }
            suffix={
              <Tooltip title="Extra information">
                <AiOutlineInfoCircle
                  style={{
                    color: "rgba(0,0,0,.45)",
                    lineHeight: "22px",
                    width: "100%",
                  }}
                />
              </Tooltip>
            }
          />
        </div>
      </div>

      <Search />

      {/* <div
        style={{
          width: "100%",
          position: "relative",
          borderRadius: "8px",
          backgroundColor: "#fff",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          textAlign: "left",
          fontSize: "14px",
          color: "#0b0b0b",
        }}
      >
        <div
          style={{
            height: "58px",
            width: "100%",
            position: "relative",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "18px 16px",
            boxSizing: "border-box",
            textAlign: "left",
            fontSize: "12px",
            color: "#0b0b0b",
          }}
        >
          <div>
            <p
              style={{
                position: "relative",
                lineHeight: "22px",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Filters
            </p>
          </div>
          <div>
            {" "}
            <p
              style={{
                position: "relative",
                lineHeight: "22px",
                fontWeight: 300,
              }}
            >
              0 selected
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SearchFilter;
