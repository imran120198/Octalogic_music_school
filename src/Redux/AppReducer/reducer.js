import {
  ADD_COURSE_FAILURE,
  ADD_COURSE_REQUEST,
  ADD_COURSE_SUCCESS,
  COURSE_FAILURE,
  COURSE_REQUEST,
  COURSE_SUCCESS,
} from "./actionTypes";

const initState = {
  enrollments: [],
  courses: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case COURSE_SUCCESS:
      return {
        ...state,
        courses: payload,
        isLoading: false,
        isError: false,
      };
    case COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADD_COURSE_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADD_COURSE_SUCCESS:
      return {
        ...state,
        enrollments: payload,
        isLoading: false,
        isError: false,
      };
    case ADD_COURSE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};
