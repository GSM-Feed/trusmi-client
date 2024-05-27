import { ISvgIconInterface } from "@/app/Interfaces/svgicon.interface";
import React from "react";

const QuoteIcon: React.FC<ISvgIconInterface> = ({ height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width || 40}
      height={width || 32.5}
      viewBox="0 0 40 32.5"
    >
      <path
        id="Vector"
        d="M17.071,2.317,15.621,0C5.579,7.01,0,15.526,0,22.536,0,29.314,4.8,32.5,8.87,32.5c5.132,0,8.759-4.519,8.759-9.269a9.306,9.306,0,0,0-5.746-8.69c-.948-.348-1.841-.637-1.841-2.317C10.042,10.08,11.548,6.894,17.071,2.317Zm22.148,0L37.768,0c-9.93,7.01-15.621,15.526-15.621,22.536,0,6.778,4.909,9.964,8.982,9.964,5.188,0,8.87-4.519,8.87-9.269a9.286,9.286,0,0,0-5.914-8.69c-.948-.348-1.785-.637-1.785-2.317C32.3,10.08,33.863,6.894,39.219,2.317Z"
        transform="translate(0)"
        fill="currentColor"
      />
    </svg>
  );
};

export default QuoteIcon;
