import styles from "../Styles/Frame.module.css";

import { LuStickyNote } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const NewSearch = () => {
  return (
    <div className={styles.searchParent}>
      <div className={styles.search}>
        <div className={styles.interfaceSearchMagnifyingParent}>
          <img
            className={styles.interfaceSearchMagnifying1}
            alt=""
            src="Interface / Search_Magnifying_Glass.svg"
          />
          <div className={styles.personalInformation}>
            Serach by name, edu, exp or #tag
          </div>
        </div>
        <img
          className={styles.interfaceSearchMagnifying1}
          alt=""
          src="Warning / Circle_Warning.svg"
        />
      </div>
      <div className={styles.filters}>
        <div className={styles.filtersParent}>
          <div className={styles.filters1}>Filters</div>
          <div className={styles.text2} />
          <div className={styles.selected}>0 Selected</div>
        </div>
        <img className={styles.filtersChild} alt="" src="Line 1.svg" />
        <div className={styles.frameParent}>
          <div className={styles.fileFileDocumentParent}>
            <LuStickyNote className={styles.fileFileDocument5} />
            <div className={styles.personalInformation}>
              Personal Information
            </div>
          </div>

          <MdOutlineKeyboardArrowDown className={styles.arrowCaretDownMd} />
        </div>
        <img className={styles.filtersChild} alt="" src="Line 2.svg" />
        <div className={styles.frameParent}>
          <div className={styles.fileFileDocumentParent}>
            <LuStickyNote className={styles.fileFileDocument5} />
            <div className={styles.personalInformation}>Education</div>
          </div>

          <MdOutlineKeyboardArrowDown className={styles.arrowCaretDownMd} />
        </div>
        <img className={styles.filtersChild} alt="" src="Line 4.svg" />
        <div className={styles.frameParent}>
          <div className={styles.fileFileDocumentParent}>
            <LuStickyNote className={styles.fileFileDocument5} />
            <div className={styles.personalInformation}>Work Experience</div>
          </div>

          <MdOutlineKeyboardArrowDown className={styles.arrowCaretDownMd} />
        </div>
        <img className={styles.filtersChild} alt="" src="Line 3.svg" />
        <img className={styles.filtersChild} alt="" src="Line 5.svg" />
        <div className={styles.frameParent}>
          <div className={styles.fileFileDocumentParent}>
            <LuStickyNote className={styles.fileFileDocument5} />
            <div className={styles.personalInformation}>Activity Filter</div>
          </div>

          <MdOutlineKeyboardArrowDown className={styles.arrowCaretDownMd} />
        </div>
        <img className={styles.filtersChild} alt="" src="Line 6.svg" />
        <div className={styles.frameParent}>
          <div className={styles.fileFileDocumentParent}>
            <LuStickyNote className={styles.fileFileDocument5} />
            <div className={styles.personalInformation}>Advanced Filter</div>
          </div>
          <div className={styles.arrowCaretDownMd} />
        </div>
      </div>
      <div className={styles.frameParent3}>
        <div className={styles.inputBasicParent}>
          <div className={styles.inputBasic3}>
            <div className={styles.locationRiyadh1}>
              Location : Riyadh, Saudi Arabia
            </div>
            <img className={styles.closeIcon3} alt="" src="close.svg" />
          </div>
          <div className={styles.inputBasic3}>
            <div className={styles.locationRiyadh1}>Gender : Female</div>
            <img className={styles.closeIcon3} alt="" src="close.svg" />
          </div>
        </div>
        <div className={styles.inputBasicGroup}>
          <div className={styles.inputBasic5}>
            <div className={styles.locationRiyadh1}>
              Program : Misk Internship Program
            </div>
            <img className={styles.closeIcon3} alt="" src="close.svg" />
          </div>
          <div className={styles.div}>|</div>
          <div className={styles.clearFilters}>Clear Filters</div>
        </div>
      </div>
    </div>
  );
};
