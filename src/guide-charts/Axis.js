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
    // const ticks = [-300, -250, -200, -150, -100, -50, 0]
    const ticks = [-3600, -3300, -3000, -2700, -2400, -2100, -1800, -1500, -1200, -900, -600, -300, 0]

    return (
        <g transform={`translate(0, ${dimensions.boundedHeight})`}>
            <line 
                x2={dimensions.boundedWidth}
                stroke="black"
                strokeWidth='0.5'
            />
            {ticks.map(tick => (
                <g key={tick}>
                    {
                        tick === 0 
                        ? 
                            <rect
                                x='-1'
                                y='-2.95'
                                rx='3.5'
                                ry='3.5'
                                fill="#dadada"
                                width='12'
                                height='11'
                                transform={`translate(${scale(tick) - 5}, 9.25)`}
                            /> 
                        :
                            <rect
                                x='-7.25'
                                y='-2.95'
                                rx='3.5'
                                ry='3.5'
                                fill="#dadada"
                                width='25'
                                height='11'
                                transform={`translate(${scale(tick) - 5}, 9.25)`}
                            />
                    }
                    <text
                        className={`${ticks.length === 13 ? 'text-[7px]' : 'text-[9px]'}`}
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
    const ticks = scale.ticks()
    // const ticks =  [-3, -2.5, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 2.5, 3]

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