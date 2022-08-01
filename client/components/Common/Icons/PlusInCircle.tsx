import React from 'react'

export const PlusInCircle = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <g transform="translate(-419 -430)">
          <g transform="translate(419 430)">
            <circle
              fillOpacity="0.7"
              fill="#FFF"
              cx="25"
              cy="25"
              r="25"></circle>
            <g
              transform="rotate(90 6 25)"
              stroke="#1F2A30"
              strokeLinecap="square"
              strokeWidth="2">
              <path
                d="M9.78947368,2.21052632 L2.32840204,9.67159796"
                transform="rotate(-45 6 6)"></path>
              <path
                d="M9.78947368,2.21052632 L2.32840204,9.67159796"
                transform="scale(1 -1) rotate(45 20.485 0)"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  )
}
