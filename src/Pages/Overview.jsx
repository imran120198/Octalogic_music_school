import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../Redux/AppReducer/action";
import styles from "../Styles/Overview.module.css";
import person from "../assets/person.svg";
import person1 from "../assets/person1.svg";
import person2 from "../assets/person2.svg";
import person3 from "../assets/person3.svg";
import person4 from "../assets/person4.svg";
import EnrollmentTable from "../Components/EnrollmentTable";

const Overview = () => {
  const dispatch = useDispatch();
  const course = useSelector((store) => store.AppReducer.courses);
  // console.log(course);

  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    dispatch(getCourse(course));
  }, []);
  return (
    <div>
      <div className={styles.Overview}>
        <h2>Overview</h2>
      </div>
      <div className={styles.category}>
        <div>
          <div>
            <img src={person} alt="person" />
          </div>
        </div>
        <div>
          <div>
            <img src={person1} alt="person" />
          </div>
        </div>
        <div>
          <div>
            <img src={person2} alt="person" />
          </div>
        </div>
        <div>
          <div>
            <img src={person3} alt="person" />
          </div>
        </div>
        <div>
          <div>
            <img src={person4} alt="person" />
          </div>
        </div>
      </div>

      {/* Enrollment table */}
      <div className="flex flex-col gap-2">
        <div className="flex flex-row items-center justify-between">
          <h1 className="font-sanss font-bold text-light text-sm tracking-[0.4px]">
            LATEST ENROLMENTS
          </h1>
          <div
            onClick={() => setShowAll(!showAll)}
            className=" text-sm text-secondary cursor-pointer"
          >
            View All Courses
          </div>
        </div>
        <EnrollmentTable showAll={showAll} />
      </div>
    </div>
  );
};

export default Overview;
