import Axis from "./Axis"
import Line from './Line'
import * as d3 from 'd3'

const Chart = ({ lineData, xAccessor, offsetXAccessor, offsetYAccessor, dimensions }) => {
    const x1Scale = d3.scaleLinear()
        .domain([-300, 0])
        .range([0, dimensions.boundedWidth])

    const x2Scale = d3.scaleLinear()
        .domain(d3.extent(lineData, xAccessor))
        .range([0, dimensions.boundedWidth])
        

    const yScale = d3.scaleLinear()
        .domain([-3, 3])
        .range([dimensions.boundedHeight, 0])
    
    return (
        <svg className="w-80 h-52">
            <g className='translate-x-10 translate-y-10'>
                <line // first horizontal line
                    x2={dimensions.boundedWidth} 
                    stroke='#dadada' // green
                    strokeWidth='0.5'
                    style={{'strokeDasharray': '0, 0'}}
                />
                <Line
                    data={lineData}
                    xAccessor={d => x2Scale(xAccessor(d))}
                    yAccessor={d => yScale(offsetXAccessor(d))}
                    color='#D32F2F' // red
                />
                <Line
                    data={lineData}
                    xAccessor={d => x2Scale(xAccessor(d))}
                    yAccessor={d => yScale(offsetYAccessor(d))}
                    color='#1976D2' // blue
                />
                <line // middle horizontal line
                    y1={dimensions.boundedHeight / 2}
                    x2={dimensions.boundedWidth} 
                    y2={dimensions.boundedHeight / 2} 
                    // stroke='#66BB6A' // green
                    stroke='#dadada' // green
                    strokeWidth='0.5'
                />
                <line // last vertical line
                    x1={dimensions.boundedWidth}
                    x2={dimensions.boundedWidth}
                    y2={dimensions.boundedHeight} 
                    // stroke='#66BB6A' // green
                    stroke='#dadada' // green
                    strokeWidth='0.5'
                    style={{'strokeDasharray': '0, 0'}}
                />
                <Axis
                    dimensions={dimensions}
                    dimension='x'
                    scale={x1Scale}
                />
                <Axis
                    dimensions={dimensions}
                    dimension='y'
                    scale={yScale}
                />
            </g>
        </svg>
    )
}

export default Chart