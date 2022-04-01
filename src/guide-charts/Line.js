import * as d3 from 'd3'

const Line = ({ data, xAccessor, yAccessor, color }) => {
  const path = d3.line()
    .x(xAccessor)
    .y(yAccessor)
    .curve(d3.curveMonotoneY)
    (data)

  return (
    <path
      d={path}
      stroke={color}
      strokeWidth='0.5'
      fill='none'
    />
  )
}

export default Line