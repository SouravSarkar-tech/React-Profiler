import React from "react";
import '../App.css';

const Thetitle = () => {
  console.log("Title Rendered");

  return (
    <div>
      <h2 className='header'>React Profiler </h2>
    </div>
  );
}

export default React.memo(Thetitle);