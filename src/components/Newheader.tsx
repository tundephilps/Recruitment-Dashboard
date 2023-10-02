import { FunctionComponent } from "react";
import styles from "../Styles/Newheader.module.css";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsEnvelope } from "react-icons/bs";
import {
  BiPurchaseTag,
  BiUserX,
  BiUserVoice,
  BiUserCheck,
} from "react-icons/bi";

import { Select, ConfigProvider } from "antd";

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const Newheader: FunctionComponent = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Select: {
            optionActiveBg: "#d1ddff",
            optionSelectedColor: "black",
            optionHeight: 30,
          },
        },
        token: {
          colorText: "blue",
          colorIcon: "blue",
          borderRadius: 16,
          boxShadowSecondary: "0px 4px 25px rgba(29, 78, 216, 0.05)",
        },
      }}
    >
      <div className={styles.andkjeanfParent}>
        <div className={styles.andkjeanf}>
          <div className={styles.londonInternshipProgram1}>
            London Internship Program
          </div>
          <div className={styles.london}>London</div>
        </div>
        <div className={styles.cta}>
          {/* Dropdown Select   */}
          <Select
            defaultValue="Oppurtunity Browsing"
            dropdownStyle={{ height: "70%", minHeight: "600px" }}
            style={{
              width: "321px",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              backgroundColor: "#ffffff",
              borderRadius: 16,
              boxShadow: "0px 4px 25px rgba(29, 78, 216, 0.05)",
              color: "blue",
              height: "40px",
            }}
            onChange={handleChange}
            options={[
              {
                value: "shortlisted",
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Applied</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "lightgray",
                        width: "32px",
                        height: "22px",
                      }}
                    >
                      <p>1745</p>
                    </div>
                  </div>
                ),
              },
              {
                value: "Shortlisted",
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Shortlisted</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "lightgray",
                        width: "32px",
                        height: "22px",
                      }}
                    >
                      <p>453</p>
                    </div>
                  </div>
                ),
              },
              {
                value: "Technical interview",
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Technical interview</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "lightgray",
                        width: "32px",
                        height: "22px",
                      }}
                    >
                      <p>123</p>
                    </div>
                  </div>
                ),
              },
              {
                value: "Oppurtunity Browsing",
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Oppurtunity Browing</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "lightgray",
                        width: "32px",
                        height: "22px",
                      }}
                    >
                      <p>453</p>
                    </div>
                  </div>
                ),
              },
              {
                value: "Video Interview I",
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Video Interview I</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "lightgray",
                        width: "32px",
                        height: "22px",
                      }}
                    >
                      <p>453</p>
                    </div>
                  </div>
                ),
              },
              {
                value: "Offer",
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Offer</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "lightgray",
                        width: "32px",
                        height: "22px",
                      }}
                    >
                      <p>453</p>
                    </div>
                  </div>
                ),
              },
              {
                value: "Withdrawn",
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Withdrawn</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "lightgray",
                        width: "32px",
                        height: "22px",
                      }}
                    >
                      <p>453</p>
                    </div>
                  </div>
                ),
              },
              {
                value: "shortlisted",
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Shortlisted</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "lightgray",
                        width: "32px",
                        height: "22px",
                      }}
                    >
                      <p>453</p>
                    </div>
                  </div>
                ),
              },
              {
                value: "shortlisted",
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Shortlisted</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "lightgray",
                        width: "32px",
                        height: "22px",
                      }}
                    >
                      <p>453</p>
                    </div>
                  </div>
                ),
              },
              {
                value: "shortlisted",
                label: (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <p>Shortlisted</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "lightgray",
                        width: "32px",
                        height: "22px",
                      }}
                    >
                      <p>453</p>
                    </div>
                  </div>
                ),
              },
            ]}
          />
          {/* <div className={styles.applicationStagesDropDown1}>
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
        </div> */}
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
                <MdKeyboardArrowDown
                  className={styles.expandMoreIcon1}
                  alt=""
                  src="expand_more.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
};

export default Newheader;
