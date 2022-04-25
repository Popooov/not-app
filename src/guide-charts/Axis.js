import { scaleTypes } from "../utils/utils"

const axisComponentsByDimension = {
    x: HorizontalAxis,
    y: VerticalAxis
}

const Axis = ({ dimensions, dimension, selectedScale, scale, xLabel, ...restProps }) => {
    const Component = axisComponentsByDimension[dimension]
    if(!Component) return null

    return (
        <Component
            dimension={dimension}
            dimensions={dimensions}
            selectedScale={selectedScale}
            scale={scale}
            xLabel={xLabel}
            {...restProps}
        />
    )
} 

function HorizontalAxis({ dimension, dimensions, scale, selectedScale, xLabel, x, y, dataLabelOne, dataLabelTwo }) {
    const ticks = scaleTypes(dimension, selectedScale)
    // console.log(dimensions)

    return (
        <g transform={`translate(0, ${dimensions.boundedHeight})`}>
            <rect y={-dimensions.boundedHeight - dimensions.marginTop} width={dimensions.boundedWidth} height={dimensions.marginBottom} fill="white" />
            <rect width={dimensions.boundedWidth} height={dimensions.marginBottom} fill="white" />
            <text
                textAnchor="middle"
                transform={`translate(50, ${-dimensions.boundedHeight - 10})`}
                className='text-sm sm:text-base'
            >
                {xLabel}
            </text>
            <text
                fill="red"
                fillOpacity='.75'
                textAnchor="middle"
                transform={`translate(${dataLabelTwo ? dimensions.boundedWidth - 105 : dimensions.boundedWidth - 49}, ${-dimensions.boundedHeight - 10})`}
                className='text-xs sm:text-base'
            >
                {dataLabelOne}: {x}
            </text>
            {dataLabelTwo && <text
                fill="blue"
                fillOpacity='.75'
                textAnchor="middle"
                transform={`translate(${dimensions.boundedWidth - 25}, ${-dimensions.boundedHeight - 10})`}
                className='text-xs sm:text-base'
            >
                {dataLabelTwo}: {y}
            </text>}
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

function VerticalAxis({ dimensions, scale, selectedScale }) {
    const ticks = selectedScale === 'Auto' ? scale.ticks(12) : scale.ticks()

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