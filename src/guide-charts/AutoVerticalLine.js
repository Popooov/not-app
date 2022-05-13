import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

const AutoVerticalLine = ({ stroke, strokeWidth }) => {

    const { dimensions } = useContext(ChartContext)

    return (
        <line // middle vertical line
            x1={dimensions.boundedWidth / 2}
            y2={dimensions.boundedHeight} 
            x2={dimensions.boundedWidth / 2} 
            // stroke='#66BB6A' // green
            stroke={stroke} // green
            strokeWidth={strokeWidth}
        />
    )
}

export default AutoVerticalLine