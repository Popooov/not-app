import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"
// import useChartScales from "../hooks/useChartScales"

const Circles = () => {
  const {
    circleData,
    scatterAccessorScaledX,
    scatterAccessorScaledY,
    colorAccessorScaled,
    dimensions,
  } = useContext(ChartContext)
  
  return (
    <g>
      <defs>
        <clipPath id="circle-clip-path">
          <rect
            width={dimensions.boundedWidth}
            height={dimensions.boundedHeight}
          />
        </clipPath>
      </defs>
      {circleData.map((d, i) => (
        <circle
          key={i}
          cx={scatterAccessorScaledX(d)}
          cy={scatterAccessorScaledY(d)}
          r={i === circleData.length - 1 ? 3.5 : 4.5}
          fill={
            i === circleData.length - 1 ? "#D32F2F" : colorAccessorScaled(d)
          }
          clipPath="url(#circle-clip-path)"
        />
      ))}
    </g>
  )
}

export default Circles
