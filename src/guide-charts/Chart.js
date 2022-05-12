import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

const Chart = ({ children }) => {
    const { ref, dimensions, chartType } = useContext(ChartContext)

    return (
        <div ref={ref} className={`mb-1 h-60 sm:h-72 ${chartType ? 'h-full sm:h-full' : null} xl:w-full xl:h-full`}>
            <svg className='w-full h-full'>
                <defs>
                    <linearGradient id='linearGradient'>
                        <stop offset="0" stopColor="#440154"></stop>
                        <stop offset="0.25" stopColor="#3b528b"></stop>
                        <stop offset="0.5" stopColor="#21918c"></stop>
                        <stop offset="0.75" stopColor="#5ec962"></stop>
                        <stop offset="1" stopColor="#fde725"></stop>
                    </linearGradient>
                </defs>
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
                    {
                        chartType 
                        && 
                        <g>
                            <rect 
                                rx='5' 
                                y='5' 
                                transform={`translate(0, ${dimensions.boundedHeight + 25})`} width={dimensions.boundedWidth} 
                                height='10' 
                                fill='url(#linearGradient)'
                            />
                            {/* <text transform={`translate(100, ${dimensions.boundedHeight + 45})`} stroke='black' style={{'fontSize': 10}}>Time (s)</text> */}
                        </g>
                    }
                </g>
            </svg>
        </div>
    )
}

export default Chart