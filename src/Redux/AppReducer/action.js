import axios from "axios";
import {
  ADD_COURSE_FAILURE,
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  COURSE_FAILURE,
  COURSE_REQUEST,
  COURSE_SUCCESS,
} from "./actionTypes";

export const courseRequest = () => ({
  type: COURSE_REQUEST,
});

export const courseSuccess = (courses) => ({
  type: COURSE_SUCCESS,
  payload: courses,
});

export const courseFailure = () => ({
  type: COURSE_FAILURE,
});

export const addCourseRequest = () => ({
  type: ADD_COURSE_REQUEST,
});

export const addCourseSuccess = (enrollments) => ({
  type: ADD_COURSE_SUCCESS,
  payload: enrollments,
});

export const addCourseFailure = () => ({
  type: ADD_COURSE_FAILURE,
});

export const getCourse = () => async (dispatch) => {
  dispatch(courseRequest());
  await axios("http://localhost:8080/courses")
    .then((res) => {
      dispatch(courseSuccess(res.data));
    })
    .catch((err) => {
      dispatch(courseFailure(err));
    });
};

export const postCourse = (newCourse) => async (dispatch) => {
  dispatch(courseRequest());
  await axios
    .post("http://localhost:8080/courses", newCourse)
    .then((res) => {
      dispatch(courseSuccess(res.data));
    })
    .catch((err) => {
      dispatch(courseFailure(err));
    });
};

export const getEnrollment = () => async (dispatch) => {
  dispatch(addCourseRequest());
  await axios("http://localhost:8080/enrollments")
    .then((res) => {
      dispatch(addCourseSuccess(res.data));
    })
    .catch((err) => {
      dispatch(addCourseFailure(err));
    });
};
