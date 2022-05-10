import { useState, useEffect, useCallback, useRef } from "react"
import { linesData } from '../utils/linesData'
import { floorData } from "../utils/utils"

const useChartsData = (statusData, enabled, selectedScaleX, multiplier, propertyNameY1 = '', propertyNameY2 = '') => {
    const [ lineData, setLineData ] = useState(linesData)
    const [ circleData, setCircleData ] = useState([])
    const count = useRef(-1)

    const handleReset = () => {
        count.current = -1
        setLineData(linesData)
        setCircleData([])
    }

    const chartsData = useCallback(() => {
        enabled && count.current++
        enabled && setLineData((prevState) => {
            let [first, ...rest] = prevState
            
            return [...rest, {
                TimeST: statusData.TimeST,
                x: count.current, 
                y1: floorData(statusData[propertyNameY1] * multiplier),
                y2: propertyNameY2 ? floorData(statusData[propertyNameY2] * multiplier) : null
            }]
        })

        enabled && setCircleData((prevState) => {

            return [...prevState, {
                TimeST: statusData.TimeST,
                x: propertyNameY1 ? statusData[propertyNameY1] : -(Math.random() * 0.5) + Math.random() * 0.5,
                y: propertyNameY2 ? statusData[propertyNameY2] : -(Math.random() * 0.5) + Math.random() * 0.5,
                color: count.current / 1000
            }]
        })
    }, [statusData, propertyNameY1, propertyNameY2, multiplier, enabled])

    useEffect(() => chartsData(), [chartsData])

    if(selectedScaleX === '1 min') {
        return {
            lineData: lineData.slice(3540),
            circleData,
            reset: handleReset
        }
    } else if(selectedScaleX === '5 mins') {
        return {
            lineData: lineData.slice(3300),
            circleData,
            reset: handleReset
        }
    } else if(selectedScaleX === '15 mins') {
        return {
            lineData: lineData.slice(2700),
            circleData,
            reset: handleReset
        }
    } else if(selectedScaleX === '30 mins') {
        return {
            lineData: lineData.slice(1800),
            circleData,
            reset: handleReset
        }
    } else {
        return {
            lineData,
            circleData,
            reset: handleReset
        }
    }
}


export default useChartsData