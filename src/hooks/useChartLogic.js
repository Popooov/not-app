import { useState, useContext } from "react"
import EventSourceContext from '../contexts/EventSourceContext'
import { useChartDimensions } from "./useChartDimensions"
import useLineData from "./useLineData"
import { scaleTypes, scaleNames } from "../utils/utils"
import * as d3 from 'd3'

const useChartLogic = ( propertyNameY1, propertyNameY2) => {
    const { statusData, enabled } = useContext(EventSourceContext)
    const [ ref, dimensions ] = useChartDimensions()
    const [ selectedScaleX, setSelectedScaleX ] = useState(scaleNames('x')[1])
    const [ selectedScaleY, setSelectedScaleY ] = useState(scaleNames('y')[0])
    const { lineData, resetLines } = useLineData(statusData, enabled, selectedScaleX, propertyNameY1, propertyNameY2)

    const xAccessor = d => d.x
    const y1Accessor = d => d.y1
    const y2Accessor = d => d.y2
    
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
        
    const xAccessorScaled = d => dynamicScaleX(xAccessor(d))
    const y1AccessorScaled = d => selectedScaleY === 'Auto' ?  dynamicScaleY(y1Accessor(d)) : staticScaleY(y1Accessor(d))
    const y2AccessorScaled = d => selectedScaleY === 'Auto' ?  dynamicScaleY(y2Accessor(d)) : staticScaleY(y2Accessor(d))
    

    return {
        dimensions,
        resetLines,
        selectedScaleX, 
        setSelectedScaleX,
        selectedScaleY, 
        setSelectedScaleY,
        xAccessorScaled,
        y1AccessorScaled,
        y2AccessorScaled,
        staticScaleX,
        staticScaleY,
        dynamicScaleY,
        statusData,
        lineData,
        ref
    }
}

export default useChartLogic