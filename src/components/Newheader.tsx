import { FunctionComponent } from "react";
import styles from "./Newheader.module.css";

import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { BsChevronDown } from "react-icons/bs";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import { BsEnvelope } from "react-icons/bs";
import {
  BiPurchaseTag,
  BiUserX,
  BiUserVoice,
  BiUserCheck,
} from "react-icons/bi";
import { RxDividerVertical } from "react-icons/rx";
import { BsChevronCompactDown } from "react-icons/bs";

const Newheader: FunctionComponent = () => {
  return (
    <div className={styles.andkjeanfParent}>
      <div className={styles.andkjeanf}>
        <div className={styles.londonInternshipProgram1}>
          London Internship Program
        </div>
        <div className={styles.london}>London</div>
      </div>
      <div className={styles.cta}>
        <div className={styles.applicationStagesDropDown1}>
          <div className={styles.opportunityBrowsingWrapper}>
            <div className={styles.opportunityBrowsing}>
              Opportunity Browsing
            </div>
          </div>
          <BsChevronDown
            className={styles.arrowCaretDownMd}
            alt=""
            src="Arrow / Caret_Down_MD.svg"
          />
        </div>
        <div className={styles.programApplicationCta}>
          <div className={styles.tag}>
            <BiPurchaseTag
              style={{ color: "#444444" }}
              className={styles.arrowCaretDownMd}
            />
          </div>
          <div className={styles.tag}>
            <BiUserX
              style={{ color: "#A80000" }}
              className={styles.arrowCaretDownMd}
            />
          </div>
          <div className={styles.tag}>
            <BiUserCheck
              style={{ color: "#444444" }}
              className={styles.arrowCaretDownMd}
            />
          </div>
          <div className={styles.wishlist1}>
            <BiUserVoice
              className={styles.arrowCaretDownMd}
              style={{ color: "#444444" }}
            />
          </div>
          <div className={styles.wishlist1}>
            <BsEnvelope
              style={{ color: "#444444" }}
              className={styles.arrowCaretDownMd}
            />
          </div>
          <img
            className={styles.programApplicationCtaChild}
            alt=""
            src="Line 37.svg"
          />
          <div className={styles.frameParent}>
            <div className={styles.moveToVideoInterviewIWrapper}>
              <div className={styles.moveToVideo1}>
                Move To Video Interview I
              </div>
            </div>
            <div className={styles.frameChild} />
            <div className={styles.expandMoreWrapper}>
              <img
                className={styles.expandMoreIcon1}
                alt=""
                src="expand_more.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newheader;
