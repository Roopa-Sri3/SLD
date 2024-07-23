import React from "react";

const CheckCircle = ({
  color,
}) => (
  <>
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="mask0_1328_429" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="60" height="60">
        <rect width="60" height="60" fill="#46C569"/>
      </mask>
      <g mask="url(#mask0_1328_429)">
        <path d="M26.5 41.5L44.125 23.875L40.625 20.375L26.5 34.5L19.375 27.375L15.875 30.875L26.5 41.5ZM30 55C26.5417 55 23.2917 54.3438 20.25 53.0312C17.2083 51.7188 14.5625 49.9375 12.3125 47.6875C10.0625 45.4375 8.28125 42.7917 6.96875 39.75C5.65625 36.7083 5 33.4583 5 30C5 26.5417 5.65625 23.2917 6.96875 20.25C8.28125 17.2083 10.0625 14.5625 12.3125 12.3125C14.5625 10.0625 17.2083 8.28125 20.25 6.96875C23.2917 5.65625 26.5417 5 30 5C33.4583 5 36.7083 5.65625 39.75 6.96875C42.7917 8.28125 45.4375 10.0625 47.6875 12.3125C49.9375 14.5625 51.7188 17.2083 53.0312 20.25C54.3438 23.2917 55 26.5417 55 30C55 33.4583 54.3438 36.7083 53.0312 39.75C51.7188 42.7917 49.9375 45.4375 47.6875 47.6875C45.4375 49.9375 42.7917 51.7188 39.75 53.0312C36.7083 54.3438 33.4583 55 30 55Z" fill="#46C569"/>
      </g>
    </svg>
  </>
);

export default CheckCircle;