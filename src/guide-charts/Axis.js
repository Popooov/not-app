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
        scatterScaleX,
        scatterScaleY,
        dynamicScaleY,
        chartType
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
            scatterScaleX={scatterScaleX}
            scatterScaleY={scatterScaleY}
            xLabel={xLabel}
            chartType={chartType}
            {...restProps}
        />
    )
} 

function HorizontalAxis({ dimension, dimensions, scaleX, scatterScaleX, selectedScale, chartType, children }) {
    const ticks = chartType === 'ScatterPlot' ? scatterScaleX.ticks() : scaleTypes(dimension, selectedScale)

    return (
        <g transform={`translate(0, ${dimensions.boundedHeight})`}>            
                {children}
            <line 
                x2={dimensions.boundedWidth}
                x1='0.5'
                stroke="black"
                strokeWidth='1'
            />
            {ticks.map(tick => (
                <g key={tick}>
                    {
                    chartType === 'ScatterPlot' ? null :
                    <line // vertical dashed lines
                        y2={-dimensions.boundedHeight - 6}
                        transform={`translate(${scaleX(tick)})`} 
                        stroke='#dadada' // lightgray
                        strokeWidth='1'
                        pathLength='20'
                        style={{'strokeDasharray': '0.4, 0.6'}}
                    />}
                    <line // vertical tick lines
                        y2='4'
                        transform={`translate(${chartType === 'ScatterPlot' ? scatterScaleX(tick) : scaleX(tick)})`}
                        stroke='black'
                    />
                    <text // tick numbers
                        className={`${ticks.length === 13 ? 'text-[7px] sm:text-xs lg:text-[10px]' : 'text-[9px] sm:text-xs'}`}
                        textAnchor="middle"
                        key={tick}
                        transform={`translate(${chartType === 'ScatterPlot' ? scatterScaleX(tick) : scaleX(tick)}, 20)`}
                    >
                        {tick}
                    </text>
                </g>
            ))}
        </g>
    )
}

function VerticalAxis({ dimensions, scaleY, scatterScaleY, selectedScale, chartType, scaleTicks }) {
    
    const ticks = chartType === 'ScatterPlot' ? scatterScaleY.ticks() : scaleTicks ? scaleY.ticks(scaleTicks) : scaleY.ticks()

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
                        transform={`translate(0, ${chartType === 'ScatterPlot' ? scatterScaleY(tick) : scaleY(tick)})`}
                        stroke='black'
                    />
                    <text
                        className='text-[8px] sm:text-xs'
                        key={tick}
                        transform={`translate(-9, ${chartType === 'ScatterPlot' ? scatterScaleY(tick) : scaleY(tick)})`}
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