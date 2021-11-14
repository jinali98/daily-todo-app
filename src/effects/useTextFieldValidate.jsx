import { useState } from "react";

const useTextFieldValidate = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const valueChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };
  const onBlur = () => {
    setIsFocused(true);
  };
  const reset = () => {
    setEnteredValue("");
    setIsFocused(false);
  };
  const isValid = enteredValue.toString().trim() !== "" && enteredValue !== 0;
  return {
    valueChangeHandler,
    reset,
    hasError: !isValid && isFocused,
    value: enteredValue,
    isValid,
    onBlur,
  };
};

export default useTextFieldValidate;
