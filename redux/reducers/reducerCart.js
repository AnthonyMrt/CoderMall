import CartCourse from "../../Data/CartCourseModel";
import {
  ADD_TO_CART,
  REMOVE_COURSE_CART,
  ADD_PAYMENT,
  DELETE_COURSE,
} from "../constants";

const initialState = {
  cartCourses: [],
  total: 0,
};

const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const course = action.course;
      const idCourse = course.id;
      const price = course.price;
      const title = course.title;

      const newCourse = new CartCourse(idCourse, price, title);

      return {
        ...state,
        cartCourses: state.cartCourses.concat(newCourse),
        total: state.total + price,
      };

    case REMOVE_COURSE_CART:
      const indexResult = state.cartCourses.findIndex(
        (course) => course.id === action.formationId
      );
      const newCartCoursesArray = [...state.cartCourses];
      newCartCoursesArray.splice(indexResult, 1);

      const coursePrice = state.cartCourses[indexResult].price;

      return {
        ...state,
        cartCourses: newCartCoursesArray,
        total: state.total - coursePrice,
      };

    case ADD_PAYMENT:
      return initialState;

    case DELETE_COURSE:
      const indexCourseResult = state.cartCourses.findIndex(
        (course) => course.id === action.courseId
      );

      const courseInfo = state.cartCourses[indexCourseResult];

      if (indexCourseResult >= 0) {
        const newCartCourses = [...state.cartCourses];
        newCartCourses.splice(indexCourseResult, 1);

        return {
          ...state,
          cartCourses: newCartCourses,
          total: state.total - courseInfo.price,
        };
      }

    default:
      return state;
  }
};

export default reducerCart;
