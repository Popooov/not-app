import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

const Chart = ({ children }) => {
    const { ref, dimensions, chartType } = useContext(ChartContext)
    
    return (
        <div ref={ref} className={`${chartType ? 'h-full sm:h-full md:h-full' : 'h-60 sm:h-72 xl:w-full xl:h-full 2xl:w-full 2xl:h-full'}`}>
            <svg className='w-full h-full'>
                <defs>
                    <linearGradient id='linearGradient' gradientTransform='rotate(90)'>
                        <stop offset="0" stopColor="#fde725"></stop>
                        <stop offset="0.25" stopColor="#5ec962"></stop>
                        <stop offset="0.5" stopColor="#21918c"></stop>
                        <stop offset="0.75" stopColor="#3b528b"></stop>
                        <stop offset="1" stopColor="#440154"></stop>
                    </linearGradient>
                    <clipPath id="lines-clip-path"> 
                        <rect 
                            width={dimensions.boundedWidth}
                            height={dimensions.boundedHeight}
                        />
                    </clipPath>
                </defs>
                <g transform={`translate(${dimensions.marginLeft + 7.75}, ${dimensions.marginTop})`}>
                    <line // first horizontal line
                        x2={dimensions.boundedWidth}
                        stroke='#dadada' // green
                        strokeWidth='2'
                    />
                    {children}
                    {
                        chartType 
                        ?
                        <rect
                            x={dimensions.boundedWidth}
                            y='-1'
                            width='6'
                            height={dimensions.boundedHeight + 1.5}
                            fill='url(#linearGradient)'
                        />
                        : 
                        <line // last vertical line
                            x1={dimensions.boundedWidth}
                            x2={dimensions.boundedWidth}
                            y2={dimensions.boundedHeight} 
                            // stroke='#66BB6A' // green
                            stroke='#dadada' // green
                            strokeWidth='1'
                        />
                    }
                </g>
            </svg>
        </div>
    )
}

export default Chart