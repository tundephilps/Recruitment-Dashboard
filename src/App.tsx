import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import NewSideBar from "./components/NewSideBar";
import OpportunityDetailsPage from "./Task2/OpportunityDetailsPage";
import OpportunityViewPage from "./Task2/OpportunityViewPage";
//import Newheader from "./components/Newheader";

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
      <BrowserRouter>
        <div style={{ display: "flex", backgroundColor: "#F9FAFF" }}>
          <div style={siderStyle}>
            {/* <Siderbar /> */}
            <NewSideBar />
          </div>
          <div>
            <div style={contentStyle}>
              {/* <Newheader /> */}

              <Routes>
                <Route path="/" element={<Body />} />
                {/* <Route path="/opportunity" element={<OpportunityViewPage />} />

                <Route
                  path="/opportunity/details:id"
                  element={<OpportunityDetailsPage />}
                /> */}

                <Route path="/opportunity" element={<OpportunityViewPage />} />
                <Route
                  path="/opportunity/detail/:id"
                  element={<OpportunityDetailsPage />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
