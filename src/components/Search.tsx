import React from "react";
import styles from "./Filters.module.css";
import { LuStickyNote } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Search = () => {
  return (
    <div className={styles.filters}>
      <div className={styles.filtersParent}>
        <div className={styles.filters1}>Filters</div>
        <div className={styles.text1} />
        <div className={styles.selected}>0 Selected</div>
      </div>

      <img className={styles.filtersChild} alt="" src="Line 2.svg" />
      <div className={styles.frameParent}>
        <div className={styles.fileFileDocumentParent}>
          <LuStickyNote className={styles.fileFileDocument5} />
          <div className={styles.personalInformation}>Personal Information</div>
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
  );
};

export default Search;
