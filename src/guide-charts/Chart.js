import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

const Chart = ({ children }) => {
    const { ref, dimensions } = useContext(ChartContext)

    return (
        <div ref={ref} className='mb-1 h-60 sm:h-72 xl:w-full xl:h-full'>
            <svg className='w-full h-full'>
                <g transform={`translate(${dimensions.marginLeft + 7.75}, ${dimensions.marginTop})`}>
                    <line // first horizontal line
                        x2={dimensions.boundedWidth}
                        stroke='#dadada' // green
                        strokeWidth='2'
                    />
                    {children}
                    <line // last vertical line
                        x1={dimensions.boundedWidth}
                        x2={dimensions.boundedWidth}
                        y2={dimensions.boundedHeight} 
                        // stroke='#66BB6A' // green
                        stroke='#dadada' // green
                        strokeWidth='1'
                    />
                </g>
            </svg>
        </div>
    )
}

export default Chart