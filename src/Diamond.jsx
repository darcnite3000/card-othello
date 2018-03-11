import React from 'react'

const Diamond = ({
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
    <path d="m3.05481,20.76236c3.7795,-7.16059 10.59373,-13.27216 16.39076,-19.33748c6.74361,3.89234 12.56971,12.45541 17.63846,18.4194c-4.52098,6.89842 -11.02885,13.18099 -16.89158,19.36765c-6.32013,-5.66022 -11.72487,-12.12712 -17.13764,-18.44958l0,0z" />
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

export default Diamond
