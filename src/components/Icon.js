import React from "react";
import "../../public/images/icons.svg";

const Icon = (props) => (
  <svg
    className={`die__icon icon-${props.name}`}
    onMouseDown={props.onMouseDown}
    onMouseUp={props.onMouseUp}
    onMouseOut={props.onMouseOut}
  >
    <use xlinkHref={`#icons_${props.name}`} />
  </svg>
);

export default Icon;
