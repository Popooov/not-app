import { useContext } from 'react'
import ChartContext from '../contexts/ChartContext'

const Circles = () => {
  const { circleData, scatterAccessorScaledX, scatterAccessorScaledY, colorAccessorScaled} = useContext(ChartContext)

  return (
      <>
        {
         circleData.map((d, i) => {
                return(
                  <circle
                      key={i}
                      cx={scatterAccessorScaledX(d)}
                      cy={scatterAccessorScaledY(d)}
                      r={i === circleData.length-1 ? 6 : 4}
                      fill={colorAccessorScaled(d)}
                  />
            )})
        }
      </>
  )
}

export default Circles