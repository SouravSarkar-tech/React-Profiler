import React from "react";
import '../App.css';

const Button = ({ clickHandler, children }) => {
  console.log(`Button Rendered ${children}`);

  return <button className='button' onClick={clickHandler}>{children}</button>;
}

export default React.memo(Button);