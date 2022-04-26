import * as d3 from 'd3'
import { useContext } from 'react'
import ChartContext from '../context/ChartContext'

const Line = ({ color, accessor }) => {
  const { lineData, xAccessorScaled, y1AccessorScaled, y2AccessorScaled } = useContext(ChartContext)
  
  const path = d3.line()
    .x(xAccessorScaled)
    .y(accessor === 'y1' ? y1AccessorScaled : y2AccessorScaled)
    (lineData)

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