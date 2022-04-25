const ChartC = ({ reference, dimensions, children }) => {
    
    return (
        <div ref={reference} className='mb-1 xl:flex-grow'>
            <svg className="w-full h-60 sm:h-72 xl:h-[19rem]">
                <g transform={`translate(${dimensions.marginLeft + 7.75}, ${dimensions.marginTop})`}>
                    <line // first horizontal line
                        x2={dimensions.boundedWidth} 
                        stroke='#dadada' // green
                        strokeWidth='0.5'
                        style={{'strokeDasharray': '0, 0'}}
                    />
                    {children}
                    <line // last vertical line
                        x1={dimensions.boundedWidth}
                        x2={dimensions.boundedWidth}
                        y2={dimensions.boundedHeight} 
                        // stroke='#66BB6A' // green
                        stroke='#dadada' // green
                        strokeWidth='0.5'
                        style={{'strokeDasharray': '0, 0'}}
                    />
                </g>
            </svg>
        </div>
    )
}

export default ChartC