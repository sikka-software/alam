import React from 'react';

type RUFlagProps = {
  className?: string;
};

export const RU: React.FC<RUFlagProps> = (props) => (
  <div>
    <svg
      width="21px"
      height="15px"
      viewBox="0 0 21 15"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <title>RU</title>
      <desc>Flag of Russia</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stop-color="#FFFFFF" offset="0%"></stop>
          <stop stop-color="#F0F0F0" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-2"
        >
          <stop stop-color="#0C47B7" offset="0%"></stop>
          <stop stop-color="#073DA4" offset="100%"></stop>
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-3"
        >
          <stop stop-color="#E53B35" offset="0%"></stop>
          <stop stop-color="#D32E28" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g
        id="Symbols"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g id="RU">
          <rect
            id="FlagBackground"
            fill="url(#linearGradient-1)"
            x="0"
            y="0"
            width="21"
            height="15"
          ></rect>
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-2)"
            x="0"
            y="5"
            width="21"
            height="5"
          ></rect>
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-3)"
            x="0"
            y="10"
            width="21"
            height="5"
          ></rect>
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-1)"
            x="0"
            y="0"
            width="21"
            height="5"
          ></rect>
        </g>
      </g>
    </svg>
  </div>
);
