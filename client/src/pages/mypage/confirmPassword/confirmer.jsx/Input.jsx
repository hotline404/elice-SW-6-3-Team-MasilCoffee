import React from "react";

const Input = React.forwardRef((props, ref) => {
  return <div>
      <input ref={ref} {...props.input}/>
  </div>
});

export default Input;
  