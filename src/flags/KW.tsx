import React from 'react';

type KWFlagProps = {
  className?: string;
};

export const KW: React.FC<KWFlagProps> = (props) => (
  <div>
    <svg
      width="21px"
      height="15px"
      viewBox="0 0 21 15"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <title>KW</title>
      <desc>Flag of Kuwait</desc>
      <defs>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-1"
        >
          <stop stopColor="#FFFFFF" offset="0%" />
          <stop stopColor="#F0F0F0" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-2"
        >
          <stop stopColor="#D72238" offset="0%" />
          <stop stopColor="#CC162C" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-3"
        >
          <stop stopColor="#169A53" offset="0%" />
          <stop stopColor="#0F7A40" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-4"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="KW">
          <rect
            id="FlagBackground"
            fill="url(#linearGradient-1)"
            x="0"
            y="0"
            width="21"
            height="15"
          />
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-2)"
            x="0"
            y="10"
            width="21"
            height="5"
          />
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-3)"
            x="0"
            y="0"
            width="21"
            height="5"
          />
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-1)"
            x="0"
            y="5"
            width="21"
            height="5"
          />
          <polygon
            id="Rectangle-83"
            fill="url(#linearGradient-4)"
            points="0 0 7 5 7 10 0 15"
          />
        </g>
      </g>
    </svg>
  </div>
);
