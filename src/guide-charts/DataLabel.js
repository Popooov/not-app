import { useContext } from "react"
import  ChartContext from "../contexts/ChartContext"

const DataLabel = ({ children, coordinateX = 49, coordinateY = 10, color, opacity = '.75' }) => {
    const { dimensions } = useContext(ChartContext)
    
    return (
        <g
            fill={color}
            fillOpacity={opacity}
            textAnchor="start"
            transform={`translate(${dimensions.boundedWidth - coordinateX}, ${-dimensions.boundedHeight - coordinateY})`}
            // transform={`translate(${name ? dimensions.boundedWidth - 105 : dimensions.boundedWidth - 49}, ${-dimensions.boundedHeight - 10})`}
            className='text-xs sm:text-base'
        >
            {children}
        </g>
    )
}

export default DataLabel