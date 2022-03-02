// REducer form via useReducer (like redux by usaste)
export const formReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_VALIDATION":
      const updatedInputValues = {
        ...state.inputValues,
        [action.input]: action.value,
      };

      const updatedIsValidInput = {
        ...state.isValidInput,
        [action.input]: action.isValid,
      };

      let updatedFormIsValid = true;
      for (const key in updatedIsValidInput) {
        updatedFormIsValid = updatedFormIsValid && updatedIsValidInput[key];
      }

      return {
        ...state,
        inputValues: updatedInputValues,
        isValidInput: updatedIsValidInput,
        isValidForm: updatedFormIsValid,
      };

    default:
      return state;
  }
};
