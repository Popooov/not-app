import Axis from "./Axis"
import Line from './Line'
import * as d3 from 'd3'
import { scaleTypes } from "../utils/customScales"

const Chart = ({ 
    lineData, 
    xAccessor,
    y1Accessor,
    y2Accessor,
    selectedScaleX,
    selectedScaleY, 
    dimensions,
    ...restProps }) => {

    const staticScaleX = d3.scaleLinear()
        .domain([-lineData.length, 0])
        .range([0, dimensions.boundedWidth])

    const dynamicScaleX = d3.scaleLinear()
        .domain(d3.extent(lineData, xAccessor))
        .range([0, dimensions.boundedWidth])

    const staticScaleY = d3.scaleLinear()
        .domain(d3.extent(scaleTypes('y', selectedScaleY)))
        .range([dimensions.boundedHeight, 0])
        
    const dynamicScaleY = d3.scaleLinear()
        .domain(d3.extent(
            [
                d3.min(lineData, y1Accessor), d3.max(lineData, y1Accessor),
                d3.min(lineData, y2Accessor), d3.max(lineData, y2Accessor),
            ]
        ))
        .range([dimensions.boundedHeight, 0])
        .nice()
    
    return (
        <svg className="w-full h-60 sm:h-72 md:h-80 2xl:h-96">
            <g transform={`translate(${dimensions.marginLeft + 7.75}, ${dimensions.marginTop})`}>
                <line // first horizontal line
                    x2={dimensions.boundedWidth} 
                    stroke='#dadada' // green
                    strokeWidth='0.5'
                    style={{'strokeDasharray': '0, 0'}}
                />
                {y2Accessor
                    && 
                <line // middle horizontal line
                    y1={selectedScaleY === 'Auto' ? dynamicScaleY(0) : (dimensions.boundedHeight / 2)}
                    x2={dimensions.boundedWidth} 
                    y2={selectedScaleY === 'Auto' ? dynamicScaleY(0) : (dimensions.boundedHeight / 2)} 
                    // stroke='#66BB6A' // green
                    stroke='#dadada' // green
                    strokeWidth='0.5'
                />}
                <Line
                    data={lineData}
                    xAccessor={d => dynamicScaleX(xAccessor(d))}
                    yAccessor={d => selectedScaleY === 'Auto' ?  dynamicScaleY(y1Accessor(d)) : staticScaleY(y1Accessor(d))}
                    color='#D32F2F' // red
                    strokeWidth='0.5'
                />
                {y2Accessor 
                    &&
                <Line
                    data={lineData}
                    xAccessor={d => dynamicScaleX(xAccessor(d))}
                    yAccessor={d => selectedScaleY === 'Auto' ?  dynamicScaleY(y2Accessor(d)) : staticScaleY(y2Accessor(d))}
                    color='#1976D2' // blue
                    strokeWidth='0.5'
                />}
                <line // last vertical line
                    x1={dimensions.boundedWidth}
                    x2={dimensions.boundedWidth}
                    y2={dimensions.boundedHeight} 
                    // stroke='#66BB6A' // green
                    stroke='#dadada' // green
                    strokeWidth='0.5'
                    style={{'strokeDasharray': '0, 0'}}
                />
                <Axis // Horizontal
                    selectedScale={selectedScaleX}
                    dimensions={dimensions}
                    dimension='x'
                    scale={staticScaleX}
                    {...restProps}
                />

                <Axis // Vertical
                    selectedScale={selectedScaleY}
                    dimensions={dimensions}
                    dimension='y'
                    scale={selectedScaleY === 'Auto' ? dynamicScaleY : staticScaleY}
                />
            </g>
        </svg>
    )
}

export default Chart