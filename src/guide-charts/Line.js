import * as d3 from 'd3'
import { useContext } from 'react'
import ChartContext from '../contexts/ChartContext'

const Line = ({ color, accessor }) => {
  const { lineData, xAccessorScaled, y1AccessorScaled, y2AccessorScaled, dimensions } = useContext(ChartContext)
  
  const path = d3.line()
    .x(xAccessorScaled)
    .y(accessor === 'y1' ? y1AccessorScaled : y2AccessorScaled)
    (lineData)

  return (
    <g>
      <path
        id='lines'
        d={path}
        stroke={color}
        strokeWidth='1'
        clipPath='url(#lines-clip-path)'
        fill='none'
      />
    </g>
  )
}

export default Line