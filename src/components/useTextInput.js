import { useState } from "react";

function useTextInput(defaultValue) {
    const [val, setVal] = useState(defaultValue);
  
    return {
      onChange: evt => setVal(evt.target.value),
      value: val,
      type: "text"
    };
  }
  export default useTextInput;