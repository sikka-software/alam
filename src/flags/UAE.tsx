import React from 'react';

type UAEFlagProps = {
  className?: string;
};

export const UAE: React.FC<UAEFlagProps> = (props) => (
  <div>
    <svg
      width="21px"
      height="15px"
      viewBox="0 0 21 15"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <title>AE</title>
      <desc>Flag of UAE</desc>
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
          <stop stopColor="#12833B" offset="0%" />
          <stop stopColor="#0D7332" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-3"
        >
          <stop stopColor="#262626" offset="0%" />
          <stop stopColor="#0D0D0D" offset="100%" />
        </linearGradient>
        <linearGradient
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
          id="linearGradient-4"
        >
          <stop stopColor="#FF323E" offset="0%" />
          <stop stopColor="#FD0D1B" offset="100%" />
        </linearGradient>
      </defs>
      <g
        id="Symbols"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g id="AE">
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
            x="6"
            y="0"
            width="15"
            height="5"
          />
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-3)"
            x="6"
            y="10"
            width="15"
            height="5"
          />
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-1)"
            x="6"
            y="5"
            width="15"
            height="5"
          />
          <rect
            id="Rectangle-2"
            fill="url(#linearGradient-4)"
            x="0"
            y="0"
            width="6"
            height="15"
          />
        </g>
      </g>
    </svg>
  </div>
);
