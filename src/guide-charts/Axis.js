import { scaleTypes } from "../utils/customScales"

const axisComponentsByDimension = {
    x: HorizontalAxis,
    y: VerticalAxis
}

const Axis = ({ dimensions, dimension, selectedScale, scale, ...restProps }) => {
    const Component = axisComponentsByDimension[dimension]
    if(!Component) return null

    return (
        <Component
            dimension={dimension}
            dimensions={dimensions}
            selectedScale={selectedScale}
            scale={scale}
            {...restProps}
        />
    )
} 

function HorizontalAxis({ dimension, dimensions, scale, selectedScale, xLabel }) {
    const ticks = scaleTypes(dimension, selectedScale)

    return (
        <g transform={`translate(0, ${dimensions.boundedHeight})`}>
            <text
                textAnchor="middle"
                transform={`translate(${dimensions.boundedWidth / 2}, ${-dimensions.boundedHeight - 10})`}
                className='text-sm sm:text-base'
            >
                {xLabel}
            </text>
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
                        transform={`translate(${scale(tick)})`} 
                        stroke='#dadada' // lightgray
                        strokeWidth='0.5'
                        pathLength='10'
                        style={{'strokeDasharray': '.25, .25'}}
                    />
                    <line // vertical tick lines
                        y2='4'
                        transform={`translate(${scale(tick)})`}
                        stroke='black'
                    />
                    <text // tick numbers
                        className={`${ticks.length === 13 ? 'text-[7px] sm:text-xs' : 'text-[9px] sm:text-xs'}`}
                        textAnchor="middle"
                        key={tick}
                        transform={`translate(${scale(tick)}, 20)`}
                    >
                        {tick}
                    </text>
                </g>
            ))}
        </g>
    )
}

function VerticalAxis({ dimensions, scale, selectedScale, y1Label, y2Label }) {
    const ticks = selectedScale === 'Auto' ? scale.ticks(16) : scale.ticks()

    return (
        <g>
            {/* <g 
                className='text-[7px] sm:text-xs'
                dominantBaseline='middle'
                textAnchor="end"
            >
                <text // X label
                    stroke='#D32F2F'
                    transform={`translate(-32, ${dimensions.boundedHeight / 4})`}
                >
                    {y1Label}
                </text>
                <text // Y label
                    stroke='#1976D2'
                    transform={`translate(-32, ${dimensions.boundedHeight / 1.33})`}
                >
                    {y2Label}
                </text>
            </g> */}
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
                        transform={`translate(0, ${scale(tick)})`}
                        stroke='black'
                    />
                    <text
                        className='text-[8px] sm:text-xs'
                        key={tick}
                        transform={`translate(-9, ${scale(tick)})`}
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