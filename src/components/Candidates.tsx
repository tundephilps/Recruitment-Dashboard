import { FunctionComponent, useState } from "react";
import styles from "../Styles/Candidates.module.css";
import { Checkbox, Divider } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { CheckboxValueType } from "antd/es/checkbox/Group";
import { GrNotes } from "react-icons/gr";
import { AiOutlinePlayCircle } from "react-icons/ai";

const plainOptions = ["Apple", "Pear", "Orange"];
const defaultCheckedList = ["Apple", "Orange"];

const Candidates: FunctionComponent = () => {
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  // const onChange = (list: CheckboxValueType[]) => {
  //   setCheckedList(list);
  // };

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  return (
    <div className={styles.frameParent}>
      <div className={styles.frameGroup}>
        <div className={styles.checkboxParent}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          ></Checkbox>
          <div className={styles.candidates}>247 Candidates</div>
        </div>
        <div className={styles.candidateStatusBar1}>
          <div className={styles.sdfs}>
            <div className={styles.qualified}>Qualified</div>
            <div className={styles.wrapper}>
              <div className={styles.qualified}>247</div>
            </div>
          </div>
          <div className={styles.div1}>|</div>
          <div className={styles.sdfs1}>
            <div className={styles.task}>Task</div>
            <div className={styles.container}>
              <div className={styles.task}>25</div>
            </div>
          </div>
          <div className={styles.div1}>|</div>
          <div className={styles.sdfs1}>
            <div className={styles.task}>Disqualified</div>
            <div className={styles.container}>
              <div className={styles.task}>78</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.tabNParent}>
            <div className={styles.tabN}>Incomplete Profiles</div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.switchBasic2}>
            <div className={styles.plate10} />
            <div className={styles.handle}>
              <div className={styles.handleChild} />
            </div>
          </div>
          <div className={styles.switchBasic3}>
            <div className={styles.plate11} />
            <div className={styles.handle1}>
              <div className={styles.handleItem} />
            </div>
          </div>
        </div>
      </div>
      <Divider className={styles.frameItem} />
      <div className={styles.applicationProgramCandidate5}>
        <Checkbox />

        <div className={styles.candidateSearchCard7}>
          <div className={styles.frame2}>
            <div className={styles.asWrapper}>
              <div className={styles.as}>AS</div>
            </div>
            <div className={styles.aaliyahSandersonParent}>
              <div className={styles.aaliyahSanderson}>Aaliyah Sanderson</div>
              <div className={styles.tabN}>Riyadh, Saudi Arabia</div>
              <div className={styles.bachelorCambridge6}>
                Bachelor - Cambridge University (2023 - 2023)
              </div>
              <div className={styles.topCandidateParent}>
                <div className={styles.topCandidate}>#top_candidate</div>
                <div className={styles.topCandidate}>#top_candidate</div>
              </div>
              <div className={styles.efres}>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>New York</div>
                </div>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>Marketing</div>
                </div>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>London</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider className={styles.frameItem} />
      <div className={styles.applicationProgramCandidate5}>
        <Checkbox />
        <div className={styles.candidateSearchCard7}>
          <div className={styles.frame2}>
            <div className={styles.asWrapper}>
              <div className={styles.as}>AS</div>
            </div>
            <div className={styles.aaliyahSandersonParent}>
              <div className={styles.aaliyahSanderson}>John Doe</div>
              <div className={styles.tabN}>Bostom, USA</div>
              <div className={styles.bachelorCambridge6}>
                Bachelor - MIT (2023 - 2023)
              </div>
              <div className={styles.topCandidateParent}>
                <div className={styles.topCandidate}>#top_candidate</div>
                <div className={styles.topCandidate}>#top_candidate</div>
              </div>
              <div className={styles.efres}>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>New York</div>
                </div>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>Marketing</div>
                </div>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>London</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider className={styles.frameItem} />
      <div className={styles.applicationProgramCandidate5}>
        <Checkbox />
        <div className={styles.candidateSearchCard7}>
          <div className={styles.frame2}>
            <div className={styles.asWrapper}>
              <div className={styles.as}>AS</div>
            </div>
            <div className={styles.aaliyahSandersonParent}>
              <div className={styles.aaliyahSanderson}>Thomas Matt</div>
              <div className={styles.tabN}>Edinburgh, UK</div>
              <div className={styles.bachelorCambridge6}>
                Bachelor - Harvard University (2023 - 2023)
              </div>
              <div className={styles.topCandidateParent}>
                <div className={styles.topCandidate}>#top_candidate</div>
                <div className={styles.topCandidate}>#top_candidate</div>
              </div>
              <div className={styles.efres}>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>New York</div>
                </div>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>Marketing</div>
                </div>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>London</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider className={styles.frameItem} />
      <div className={styles.applicationProgramCandidate5}>
        <Checkbox />
        <div className={styles.candidateSearchCard7}>
          <div className={styles.frame2}>
            <div className={styles.asWrapper}>
              <div className={styles.as}>AS</div>
            </div>
            <div className={styles.aaliyahSandersonParent}>
              <div className={styles.aaliyahSanderson}>Kamilia Smith</div>
              <div className={styles.tabN}>London, UK</div>
              <div className={styles.bachelorCambridge6}>
                Bachelor - Boston University (2023 - 2023)
              </div>
              <div className={styles.topCandidateParent}>
                <div className={styles.topCandidate}>#top_candidate</div>
                <div className={styles.topCandidate}>#top_candidate</div>
              </div>
              <div className={styles.efres}>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>New York</div>
                </div>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>Marketing</div>
                </div>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>London</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Divider className={styles.frameItem} />
      <div className={styles.applicationProgramCandidate5}>
        <Checkbox />
        <div className={styles.candidateSearchCard7}>
          <div className={styles.frame2}>
            <div className={styles.asWrapper}>
              <div className={styles.as}>AS</div>
            </div>
            <div className={styles.aaliyahSandersonParent}>
              <div className={styles.aaliyahSanderson}>Roy Jade</div>
              <div className={styles.tabN}>Cambridge, UK</div>
              <div className={styles.bachelorCambridge6}>
                Bachelor - Yale (2023 - 2023)
              </div>
              <div className={styles.topCandidateParent}>
                <div className={styles.topCandidate}>#top_candidate</div>
                <div className={styles.topCandidate}>#top_candidate</div>
              </div>
              <div className={styles.efres}>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>New York</div>
                </div>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>Marketing</div>
                </div>
                <div className={styles.placementTag}>
                  <div className={styles.tabN}>London</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider className={styles.frameItem} />
      <div className={styles.candidateSearchCard12}>
        <Checkbox />
        <div className={styles.candidateSearchCard13}>
          <div className={styles.frame7}>
            <div className={styles.asWrapper}>
              <div className={styles.as}>AS</div>
            </div>
            <div className={styles.aaliyahSandersonParent}>
              <div className={styles.aaliyahSanderson}>Ahmed Salman</div>
              <div className={styles.tabN}>New York, USA</div>
              <div className={styles.bachelorCambridge6}>
                Bachelor - Cambridge University (2023 - 2023)
              </div>
              <div
                className={styles.bachelorCambridge6}
              >{`Marketing and Business Development Intern - Disney (2023 - 2023) `}</div>
              <div className={styles.topCandidateParent}>
                <div className={styles.topCandidate}>#top_candidate</div>
                <div className={styles.topCandidate}>#top_candidate</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.checkbox}>
                <div className={styles.mediaPlayCircleParent}>
                  <AiOutlinePlayCircle className={styles.mediaPlayCircle1} />
                  <div className={styles.topCandidate}>4</div>
                </div>
              </div>
              <div className={styles.fileNotebookParent}>
                <GrNotes
                  className={styles.mediaPlayCircle1}
                  style={{ color: "blue", fontSize: "14px" }}
                />
                <div
                  style={{
                    width: "100px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  4 Programs
                </div>
              </div>
            </div>
            <div />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
