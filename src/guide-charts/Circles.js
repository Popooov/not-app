import { useContext } from 'react'
import ChartContext from '../contexts/ChartContext'

const Circles = () => {
  const { circleData, scatterAccessorScaledX, scatterAccessorScaledY, colorAccessorScaled} = useContext(ChartContext)

  return (
      <g>
        {circleData.map((d, i) => (
              <circle
                key={i}
                cx={scatterAccessorScaledX(d)}
                cy={scatterAccessorScaledY(d)}
                r={i === circleData.length - 1 ? 4 : 6}
                fill={i === circleData.length - 1 ? '#D32F2F' : colorAccessorScaled(d)}
              />
          ))}
      </g>
  )
}

export default Circles