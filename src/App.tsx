import { useState } from "react";

import { Layout, Space } from "antd";
import Siderbar from "./components/Siderbar";
import Header from "./components/Header";
import Body from "./components/Body";
import NewSideBar from "./components/NewSideBar";
import Newheader from "./components/Newheader";

//const { Header, Footer, Sider, Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  width: "1440px",
  minHeight: "1024px",

  backgroundColor: "#F9FAFF",
  padding: "32px 42px",
  display: "flex",
  flexDirection: "column",
  gap: "32px",
};

const siderStyle: React.CSSProperties = {
  backgroundColor: "#fff",

  boxShadow: "0px 4px 23px 0px rgba(0, 0 , 0, 0.05)",

  display: "flex",

  flexDirection: "column",
  width: 72,
  alignItems: "center",
  justifyContent: "space-between",

  padding: "24px",
  boxSizing: "border-box",
  fontSize: "10px",
  flexShrink: 0,
  color: "##b1cdfd",
};

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div style={siderStyle}>
          {/* <Siderbar /> */}
          <NewSideBar />
        </div>
        <div>
          <div style={contentStyle}>
            {/* <Header /> */}
            <Newheader />
            <Body />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
