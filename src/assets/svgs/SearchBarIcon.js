import * as React from "react";

function SearchBarIcon(props) {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        // eslint-disable-next-line max-len
        d="M13.225 13.225c-.29.29-.76.29-1.05 0l-3.15-3.15c-.598-.598-1.549-.623-2.344-.337A4.571 4.571 0 015.125 10c-1.362 0-2.516-.472-3.46-1.416C.723 7.641.25 6.488.25 5.125c0-1.362.472-2.516 1.416-3.46C2.609.723 3.762.25 5.125.25c1.362 0 2.516.472 3.46 1.416C9.527 2.609 10 3.762 10 5.125c0 .55-.088 1.069-.262 1.556-.286.795-.261 1.746.336 2.343l3.151 3.151c.29.29.29.76 0 1.05zM5.125 8.5c.938 0 1.734-.328 2.39-.984.657-.657.985-1.454.985-2.391 0-.938-.328-1.734-.984-2.39-.657-.657-1.454-.985-2.391-.985-.938 0-1.734.328-2.39.984-.657.657-.985 1.454-.985 2.391 0 .938.328 1.734.984 2.39.657.657 1.454.985 2.391.985z"
        fill="#6F7683"
      />
    </svg>
  );
}

export default  SearchBarIcon;
