import * as React from "react";

function ClearTextIcon(props) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <mask id="mask0_2566_2527" style={{"maskType": "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
        <rect width="18" height="18" fill="#6F7683"/>
      </mask>
      <g mask="url(#mask0_2566_2527)">
        <path d="M4.8 14.25L3.75 13.2L7.95 9L3.75 4.8L4.8 3.75L9 7.95L13.2 3.75L14.25 4.8L10.05 9L14.25 13.2L13.2 14.25L9 10.05L4.8 14.25Z" fill="#6F7683"/>
      </g>
    </svg>
  );
}

export default ClearTextIcon;