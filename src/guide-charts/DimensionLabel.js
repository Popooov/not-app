import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

const DimensionLabel = ({ name, coordinateX = 50, coordinateY = 10 }) => {
    const { dimensions } = useContext(ChartContext)
    
    return (
        <text
            textAnchor="middle"
            transform={`translate(${coordinateX}, ${-dimensions.boundedHeight - coordinateY})`}
            className='text-sm sm:text-base'
        >
            {name}
        </text>
    )
}

export default DimensionLabel