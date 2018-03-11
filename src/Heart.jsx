import React from 'react'

const Heart = ({
  value,
  width = 30,
  height = 30,
  stroke = 'red',
  text = 'white',
  strokeWidth = '2',
  ...rest
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 40 40"
    fill={stroke}
    stroke={stroke}
    strokeWidth={strokeWidth}
    {...rest}
  >
    <path d="m14.51917,34.13318c-9.81414,-8.69721 -13.32308,-14.1989 -13.35152,-20.93398c-0.02593,-6.13984 4.30568,-12.0657 8.79463,-12.03152c2.24158,0.0171 7.04992,2.2769 8.75257,4.11355c0.85789,0.92541 1.26424,0.83416 3.17425,-0.71286c5.19824,-4.21033 10.27438,-4.2987 13.56191,-0.23609c5.25417,6.49291 4.29759,14.24662 -2.74984,22.28932c-3.74682,4.27597 -11.92906,11.86177 -12.79439,11.86177c-0.26331,0 -2.68773,-1.95759 -5.3876,-4.35018l0,0z" />
    {value != undefined ? (
      <text
        stroke="none"
        style={{ fontSize: 19 }}
        fill={text}
        textAnchor="middle"
        x="20"
        y="28"
      >
        {value}
      </text>
    ) : null}
  </svg>
)

export default Heart
