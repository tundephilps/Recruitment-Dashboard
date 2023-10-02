import { Select } from "antd";
import { BsEnvelope } from "react-icons/bs";
import {
  BiPurchaseTag,
  BiUserX,
  BiUserVoice,
  BiUserCheck,
} from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import { BsChevronCompactDown } from "react-icons/bs";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div style={{ width: "385px", height: "56px", lineHeight: "1px" }}>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: "600",
            fontFamily: "sans-serif",
            color: "#1d4ed8",
            textAlign: "left",
            position: "relative",
          }}
        >
          London Internship Program
        </h1>
        <p
          style={{
            fontSize: "12px",
            fontWeight: 300,
            color: "#0b0b0b",
            textAlign: "left",
            position: "relative",
          }}
        >
          London
        </p>
      </div>

      {/* Dropdown Select   */}
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
        options={[
          { value: "jack", label: "Jack" },
          { value: "lucy", label: "Lucy" },
          { value: "Yiminghe", label: "yiminghe" },
          { value: "disabled", label: "Disabled", disabled: true },
        ]}
      />
      {/* <div
        style={{
          width: "321px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#ffffff",
          borderRadius: "50px",
          paddingInline: 16,
        }}
      >
        <p
          style={{
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: 500,
            color: "#1d4ed8",
            textAlign: "left",
          }}
        >
          Opportunity Browsing
        </p>
        <div style={{ color: "#1d4ed8", height: 24, width: 24 }}>
          <BsChevronDown />
        </div>
      </div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 8,
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "40px",
            width: 40,
            backgroundColor: "white",
            color: "#444444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BiPurchaseTag />
        </div>
        <div
          style={{
            height: "40px",
            width: 40,
            backgroundColor: "white",
            color: "#A80000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BiUserX />
        </div>
        <div
          style={{
            height: "40px",
            width: 40,
            backgroundColor: "white",
            color: "#444444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BiUserCheck />
        </div>
        <div
          style={{
            height: "40px",
            width: 40,
            backgroundColor: "white",
            color: "#444444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BiUserVoice />
        </div>
        <div
          style={{
            height: "40px",
            width: 40,
            backgroundColor: "white",
            color: "#444444",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BsEnvelope />
        </div>
        <div
          style={{
            backgroundColor: "#1d5ecd",
            display: "flex",
            alignItems: "center",
            width: 230,
            height: 40,
            justifyContent: "space-between",
            padding: "0px 16px ",
            borderRadius: "10px",
          }}
        >
          <p style={{ fontSize: 13, lineHeight: "22px" }}>
            Move to Video Interview
          </p>
          <RxDividerVertical sytle={{ fontSixe: "40px" }} />
          <BsChevronCompactDown />
        </div>
      </div>
    </div>
  );
};

export default Header;
