import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourse } from "../Redux/AppReducer/action";

const Course = () => {
  const dispatch = useDispatch()
  const course = useSelector((store) => store.AppReducer.courses)
  console.log(course)

  useEffect(() => {
    dispatch(getCourse(course))
  },[])
  return <div>Course</div>;
};

export default Course;
