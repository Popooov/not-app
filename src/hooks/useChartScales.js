import { useState, useContext } from "react"
import EventSourceContext from '../contexts/EventSourceContext'
import { useChartDimensions } from "./useChartDimensions"
import useChartsData from "./useChartsData"
import { scaleTypes, scaleNames } from "../utils/utils"
import * as d3 from 'd3'

const useChartScales = (propertyNameY1 = '', propertyNameY2 = '', chartType = '', multiplier = 1) => {
    const { statusData } = useContext(EventSourceContext)
    const [ ref, dimensions ] = useChartDimensions()
    const [ selectedScaleX, setSelectedScaleX ] = useState(scaleNames('x')[1])
    const [ selectedScaleY, setSelectedScaleY ] = useState(scaleNames('y')[0])
    const [ selectedScaleXY, setSelectedScaleXY ] = useState(scaleNames('xy')[4])
    const { circleData, lineData, reset } = useChartsData(statusData, selectedScaleX, multiplier, propertyNameY1, propertyNameY2)

    const xAccessor = d => d.x
    const yAccessor = d => d.y
    const y1Accessor = d => d.y1
    const y2Accessor = d => d.y2
    const colorAccessor = d => d.color
    
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
        
    const scatterScaleX = d3.scaleLinear()
        .domain(d3.extent(scaleTypes('xy', selectedScaleXY)))
        .range([0, dimensions.boundedWidth])
    
    const scatterScaleY = d3.scaleLinear()
        .domain(d3.extent(scaleTypes('xy', selectedScaleXY)))
        .range([dimensions.boundedHeight, 0])

    const colorScale = d3.scaleSequential()
        .domain(d3.extent(circleData, colorAccessor))
        .interpolator(d3.interpolateViridis)
    
    const colorAccessorScaled = d => colorScale(colorAccessor(d))
    const scatterAccessorScaledX = d => scatterScaleX(xAccessor(d))
    const scatterAccessorScaledY = d => scatterScaleY(yAccessor(d))
    const xAccessorScaled = d => dynamicScaleX(xAccessor(d))
    const y1AccessorScaled = d => selectedScaleY === 'Auto' ?  dynamicScaleY(y1Accessor(d)) : staticScaleY(y1Accessor(d))
    const y2AccessorScaled = d => selectedScaleY === 'Auto' ?  dynamicScaleY(y2Accessor(d)) : staticScaleY(y2Accessor(d))

    return {
        dimensions,
        reset,
        selectedScaleX, 
        setSelectedScaleX,
        selectedScaleY, 
        setSelectedScaleY,
        selectedScaleXY,
        setSelectedScaleXY,
        colorAccessorScaled,
        scatterAccessorScaledX,
        scatterAccessorScaledY,
        xAccessorScaled,
        y1AccessorScaled,
        y2AccessorScaled,
        staticScaleX,
        staticScaleY,
        scatterScaleX,
        scatterScaleY,
        dynamicScaleY,
        statusData,
        lineData,
        circleData,
        chartType,
        ref
    }
}

export default useChartScales