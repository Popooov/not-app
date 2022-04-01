const axisComponentsByDimension = {
    x: HorizontalAxis,
    y: VerticalAxis
}

const Axis = ({dimensions, dimension, scale }) => {
    const Component = axisComponentsByDimension[dimension]
    if(!Component) return null

    return (
        <Component
            dimensions={dimensions}
            scale={scale}
        />
    )
} 

function HorizontalAxis({ dimensions, scale }) {
    // const ticks = [-3600, -3300, -3000, -2700, -2400, -2100, -1800, -1500, -1200, -900, -600, -300, 0]
    // const ticks = [-60, -55, -50, -45, -40, -35, -30, -25, -20, -15, -10, -5, 0]
    const ticks = [-300, -250, -200, -150, -100, -50, 0]

    return (
        <g transform={`translate(0, ${dimensions.boundedHeight})`}>
            <line 
                x2={dimensions.boundedWidth}
                stroke="black"
                strokeWidth='0.5'
            />
            {ticks.map(tick => (
                <g key={tick}>
                    <text
                        className='text-[9px]'
                        textAnchor="middle"
                        key={tick}
                        transform={`translate(${scale(tick)}, 15)`}
                    >
                        {tick}
                    </text>
                    <line 
                        y2={-dimensions.boundedHeight - 8.5}
                        transform={`translate(${scale(tick)}, 5)`} 
                        stroke='#dadada' // green
                        strokeWidth='0.5'
                        pathLength='10'
                        style={{'strokeDasharray': '.25, .25'}}
                    />
                </g>
            ))}
        </g>
    )
}

function VerticalAxis({ dimensions, scale }) {
    const ticks = scale.ticks(9)

    return (
        <g>
            <line 
                y2={dimensions.boundedHeight}
                // y1='-2'
                stroke="black"
                strokeWidth='0.5'
            />
            {ticks.map(tick => (
                <text
                    className='text-[8px]'
                    key={tick}
                    transform={`translate(-7, ${scale(tick)})`}
                    dominantBaseline='middle'
                    textAnchor="end"
                >
                    {tick}
                </text>
            ))}
        </g>
    )
}

export default Axis