import React from "react";
import '../App.css';

const Counter = ({ thecount, titleofthecount }) => {
  console.log(`Render ${titleofthecount}`);
  return (
    <div>
      <p>
        {titleofthecount}: <span  className="countstyle">{thecount}</span>
      </p>
    </div>
  );
}

export default React.memo(Counter);