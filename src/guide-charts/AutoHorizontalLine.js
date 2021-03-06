import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

const AutoHorizontalLine = ({ stroke, strokeWidth }) => {

    const { selectedScaleY, dynamicScaleY, dimensions, chartType } = useContext(ChartContext)

    return (
            chartType ? 
            <line // middle horizontal line
                y1={dimensions.boundedHeight / 2}
                x2={dimensions.boundedWidth} 
                y2={dimensions.boundedHeight / 2} 
                // stroke='#66BB6A' // green
                stroke={stroke} // green
                strokeWidth={strokeWidth}
            />
            :
            <line // middle horizontal line
                y1={selectedScaleY === 'Auto' ? dynamicScaleY(0) : (dimensions.boundedHeight / 2)}
                x2={dimensions.boundedWidth} 
                y2={selectedScaleY === 'Auto' ? dynamicScaleY(0) : (dimensions.boundedHeight / 2)} 
                // stroke='#66BB6A' // green
                stroke={stroke} // green
                strokeWidth={strokeWidth}
            />
    )
}

export default AutoHorizontalLine