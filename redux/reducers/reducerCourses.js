import COURSES from "../../Data/testData";
import {
  ADD_TO_CART,
  DELETE_COURSE,
  REMOVE_COURSE_CART,
  EDIT_COURSE,
  CREATE_COURSE,
} from "../constants";
import CourseModel from "../../Data/CourseModel";
import { Image } from "react-native";

const initialState = {
  existingCourses: COURSES,
  loggedInMemberCourses: COURSES.filter(
    (course) => course.instructorId === "1"
  ),
};

const reducerCourses = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const indexCourseModify = state.existingCourses.findIndex(
        (course) => course.id === action.course.id
      );

      const copyExistingCourses = [...state.existingCourses];
      copyExistingCourses[indexCourseModify].selected = true;
      return {
        ...state,
        existingCourses: copyExistingCourses,
        loggedInMemberCourses: state.loggedInMemberCourses,
      };

    case REMOVE_COURSE_CART:
      const indexCourseToDeleteFromCart = state.existingCourses.findIndex(
        (course) => course.id === action.formationId
      );
      const copyExistingCoursesRemoved = [...state.existingCourses];
      copyExistingCoursesRemoved[indexCourseToDeleteFromCart].selected = false;

      return {
        ...state,
        existingCourses: copyExistingCoursesRemoved,
        loggedInMemberCourses: state.loggedInMemberCourses,
      };

    case DELETE_COURSE:
      return {
        ...state,
        existingCourses: state.existingCourses.filter(
          (course) => course.id !== action.courseId
        ),
        loggedInMemberCourses: state.loggedInMemberCourses.filter(
          (course) => course.id !== action.courseId
        ),
      };
    case EDIT_COURSE:
      const idCourse = action.courseId;
      const indexCourseToUpdate = state.loggedInMemberCourses.findIndex(
        (course) => course.id === idCourse
      );

      const updateCourse = new CourseModel(
        idCourse,
        action.updatedCourse.title,
        action.updatedCourse.description,
        action.updatedCourse.image,
        state.loggedInMemberCourses[indexCourseToUpdate].price,
        state.loggedInMemberCourses[indexCourseToUpdate].selected,
        state.loggedInMemberCourses[indexCourseToUpdate].instructorId
      );

      const newloggedInMemberCourses = [...state.loggedInMemberCourses];
      newloggedInMemberCourses[indexCourseToUpdate] = updateCourse;

      const indexExistingCourses = state.existingCourses.findIndex(
        (course) => course.id === idCourse
      );

      const newExistingCourses = [...state.existingCourses];
      newExistingCourses[indexExistingCourses] = updateCourse;

      return {
        ...state,
        existingCourses: newExistingCourses,
        loggedInMemberCourses: newloggedInMemberCourses,
      };

    case CREATE_COURSE:
      const newCourse = new CourseModel(
        Date.now().toString(),
        action.newCourse.title,
        action.newCourse.description,
        action.newCourse.image,
        action.newCourse.price,
        false,
        "1"
      );

      return {
        ...state,
        existingCourses: state.existingCourses.concat(newCourse),
        loggedInMemberCourses: state.loggedInMemberCourses.concat(newCourse),
      };
    default:
      return state;
  }
};

export default reducerCourses;
