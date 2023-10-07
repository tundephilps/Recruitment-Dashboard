import Candidates from "./Candidates";
import Header from "./Header";
import { NewSearch } from "./NewSearch";

const Body = () => {
  return (
    <>
      {" "}
      <div>
        <Header />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "32px",
        }}
      >
        {/* <SearchFilter /> */}
        <NewSearch />
        <Candidates />
      </div>
    </>
  );
};

export default Body;
