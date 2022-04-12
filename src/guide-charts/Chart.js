import Axis from "./Axis"
import Line from './Line'
import * as d3 from 'd3'

const Chart = ({ 
    lineData, 
    xAccessor, 
    offsetXAccessor, 
    offsetYAccessor,
    selectedScaleX,
    selectedScaleY, 
    dimensions }) => {

    const xStaticScale = d3.scaleLinear()
        .domain([-lineData.length, 0])
        .range([0, dimensions.boundedWidth])

    const xDynamicScale = d3.scaleLinear()
        .domain(d3.extent(lineData, xAccessor))
        .range([0, dimensions.boundedWidth])
        
    const yAutoScale = d3.scaleLinear()
        .domain([d3.max(lineData, offsetXAccessor), d3.min(lineData, offsetYAccessor)])
        // .domain([-3, 3])
        .range([dimensions.boundedHeight, 0])

    const offsetXScale = d3.scaleLinear()
        .domain(d3.extent(lineData, offsetXAccessor))
        // .domain([-3, 3])
        .range([dimensions.boundedHeight, 0])
        
    const offsetYScale = d3.scaleLinear()
        .domain(d3.extent(lineData, offsetYAccessor))
        // .domain([-3, 3])
        .range([dimensions.boundedHeight, 0])
    
    return (
        <svg className="w-84 h-52" viewBox="0 5 370 210">
            <g className='translate-x-10 translate-y-10'>
                <line // first horizontal line
                    x2={dimensions.boundedWidth} 
                    stroke='#dadada' // green
                    strokeWidth='0.5'
                    style={{'strokeDasharray': '0, 0'}}
                />
                <line // middle horizontal line
                    y1={dimensions.boundedHeight / 2}
                    x2={dimensions.boundedWidth} 
                    y2={dimensions.boundedHeight / 2} 
                    // stroke='#66BB6A' // green
                    stroke='#dadada' // green
                    strokeWidth='0.5'
                />
                <Line
                    data={lineData}
                    xAccessor={d => xDynamicScale(xAccessor(d))}
                    yAccessor={d => offsetXScale(offsetXAccessor(d))}
                    color='#D32F2F' // red
                />
                <Line
                    data={lineData}
                    xAccessor={d => xDynamicScale(xAccessor(d))}
                    yAccessor={d => offsetYScale(offsetYAccessor(d))}
                    color='#1976D2' // blue
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
                    selectedScale={selectedScaleX}
                    dimensions={dimensions}
                    dimension='x'
                    scale={xStaticScale}
                />
                <Axis
                    selectedScale={selectedScaleY}
                    dimensions={dimensions}
                    dimension='y'
                    scale={yAutoScale}
                />
            </g>
        </svg>
    )
}

export default Chart