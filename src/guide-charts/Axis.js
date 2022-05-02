import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"
import { scaleTypes, floorData } from "../utils/utils"

const axisComponentsByDimension = {
    x: HorizontalAxis,
    y: VerticalAxis
}

const Axis = ({ dimension, xLabel, ...restProps }) => {
    const { 
        selectedScaleX,
        selectedScaleY,
        dimensions, 
        staticScaleX,
        staticScaleY,
        dynamicScaleY
    } = useContext(ChartContext)
    const Component = axisComponentsByDimension[dimension]
    if(!Component) return null

    return (
        <Component
            dimension={dimension}
            dimensions={dimensions}
            selectedScale={selectedScaleX}
            scaleX={staticScaleX}
            scaleY={selectedScaleY === 'Auto' ? dynamicScaleY : staticScaleY}
            xLabel={xLabel}
            {...restProps}
        />
    )
} 

function HorizontalAxis({ dimension, dimensions, scaleX, selectedScale, children }) {
    const ticks = scaleTypes(dimension, selectedScale)
    // console.log(dimensions)

    return (
        <g transform={`translate(0, ${dimensions.boundedHeight})`}>
            <rect y={-dimensions.boundedHeight - dimensions.marginTop} width={dimensions.boundedWidth} height={dimensions.marginBottom} fill="white" />
            <rect width={dimensions.boundedWidth} height={dimensions.marginBottom} fill="white" />
            
                {children}

            <line 
                x2={dimensions.boundedWidth}
                x1='0.5'
                stroke="black"
                strokeWidth='1'
            />
            {ticks.map(tick => (
                <g key={tick}>
                    <line // vertical dashed lines
                        y2={-dimensions.boundedHeight - 6}
                        transform={`translate(${scaleX(tick)})`} 
                        stroke='#dadada' // lightgray
                        strokeWidth='1'
                        pathLength='20'
                        style={{'strokeDasharray': '0.4, 0.6'}}
                    />
                    <line // vertical tick lines
                        y2='4'
                        transform={`translate(${scaleX(tick)})`}
                        stroke='black'
                    />
                    <text // tick numbers
                        className={`${ticks.length === 13 ? 'text-[7px] sm:text-xs' : 'text-[9px] sm:text-xs'}`}
                        textAnchor="middle"
                        key={tick}
                        transform={`translate(${scaleX(tick)}, 20)`}
                    >
                        {tick}
                    </text>
                </g>
            ))}
        </g>
    )
}

function VerticalAxis({ dimensions, scaleY, selectedScale, scaleTicks }) {
    const ticks = scaleTicks ? scaleY.ticks(scaleTicks) : scaleY.ticks()

    return (
        <g>
            <line 
                y2={dimensions.boundedHeight}
                y1='-0.5'
                stroke="black"
                strokeWidth='1'
            />
            {ticks.map(tick => (
                <g key={tick}>
                    <line 
                        x2='-4'
                        transform={`translate(0, ${scaleY(tick)})`}
                        stroke='black'
                    />
                    <text
                        className='text-[8px] sm:text-xs'
                        key={tick}
                        transform={`translate(-9, ${scaleY(tick)})`}
                        dominantBaseline='middle'
                        textAnchor="end"
                        >
                        {tick}
                    </text>
                </g>
            ))}
        </g>
    )
}

export default Axis