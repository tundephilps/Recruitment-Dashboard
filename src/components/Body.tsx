import Candidates from "./Candidates";
import { NewSearch } from "./NewSearch";

const Body = () => {
  return (
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
  );
};

export default Body;
