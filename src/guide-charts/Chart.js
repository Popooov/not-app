import Axis from "./Axis"
import Line from './Line'
import * as d3 from 'd3'
import { scaleTypes } from "../utils/customScales"

const Chart = ({ 
    lineData, 
    xAccessor, 
    offsetXAccessor, 
    offsetYAccessor,
    selectedScaleX,
    selectedScaleY, 
    dimensions }) => {

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
                d3.min(lineData, offsetXAccessor), d3.max(lineData, offsetXAccessor),
                d3.min(lineData, offsetYAccessor), d3.max(lineData, offsetYAccessor),
            ]
        ))
        .range([dimensions.boundedHeight, 0])

    const offsetXScale = selectedScaleY !== 'auto'
        ? d3.scaleLinear()
            .domain(d3.extent(scaleTypes('y', selectedScaleY)))
            .range([dimensions.boundedHeight, 0])
        : d3.scaleLinear()
            .domain(d3.extent(lineData, offsetXAccessor))
            .range([dimensions.boundedHeight, 0])
        
    const offsetYScale = selectedScaleY !== 'auto'
        ? d3.scaleLinear()
            .domain(d3.extent(scaleTypes('y', selectedScaleY)))
            .range([dimensions.boundedHeight, 0])
        : d3.scaleLinear()
            .domain(d3.extent(lineData, offsetYAccessor))
            .range([dimensions.boundedHeight, 0])
    
    return (
        // viewBox="0 5 370 210"
        <svg className="w-[99vw] h-60 sm:h-80">
            <g className='translate-x-10 translate-y-10'>
                <line // first horizontal line
                    x2={dimensions.boundedWidth} 
                    stroke='#dadada' // green
                    strokeWidth='0.5'
                    style={{'strokeDasharray': '0, 0'}}
                />
                <line // middle horizontal line
                    y1={selectedScaleY === 'auto' ? dynamicScaleY(0) : (dimensions.boundedHeight / 2)}
                    x2={dimensions.boundedWidth} 
                    y2={selectedScaleY === 'auto' ? dynamicScaleY(0) : (dimensions.boundedHeight / 2)} 
                    // stroke='#66BB6A' // green
                    stroke='#dadada' // green
                    strokeWidth='0.5'
                />
                <Line // IntensityOffsetXarcsec
                    data={lineData}
                    xAccessor={d => dynamicScaleX(xAccessor(d))}
                    yAccessor={d => offsetXScale(offsetXAccessor(d))}
                    color='#D32F2F' // red
                    strokeWidth='0.5'
                />
                <Line // IntensityOffsetYarcsec
                    data={lineData}
                    xAccessor={d => dynamicScaleX(xAccessor(d))}
                    yAccessor={d => offsetYScale(offsetYAccessor(d))}
                    color='#1976D2' // blue
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
                <Axis // Horizontal
                    selectedScale={selectedScaleX}
                    dimensions={dimensions}
                    dimension='x'
                    scale={staticScaleX}
                />
                <Axis // Vertical
                    selectedScale={selectedScaleY}
                    dimensions={dimensions}
                    dimension='y'
                    scale={selectedScaleY === 'auto' ? dynamicScaleY : staticScaleY}
                />
            </g>
        </svg>
    )
}

export default Chart