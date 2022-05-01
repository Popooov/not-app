import { useState, useEffect, useCallback, useRef } from "react"
import { linesData } from '../utils/linesData'
import { floorData, toFixedNum } from "../utils/utils"

const useLineData = (statusData, enabled, selectedScaleX, multiplier, propertyNameY1 = '', propertyNameY2 = '') => {
    const [ lineData, setLineData ] = useState(linesData)
    const count = useRef(-1)

    const handleResetLines = () => {
        count.current = -1
        setLineData(linesData)
    }

    const lines = useCallback(() => {
        count.current++
        setLineData((prevState) => {
            let [first, ...rest] = prevState
            
            return [...rest, {
                TimeST: statusData.TimeST,
                x: count.current, 
                y1: floorData(statusData[propertyNameY1] * multiplier),
                y2: propertyNameY2 ? floorData(statusData[propertyNameY2] * multiplier) : null
            }]
         })
    }, [statusData, propertyNameY1, propertyNameY2, multiplier])

    useEffect(() => enabled && lines(), [enabled, lines])

    if(selectedScaleX === '1 min') {
        return {
            lineData: lineData.slice(3540),
            resetLines: handleResetLines
        }
    } else if(selectedScaleX === '5 mins') {
        return {
            lineData: lineData.slice(3300),
            resetLines: handleResetLines
        }
    } else if(selectedScaleX === '15 mins') {
        return {
            lineData: lineData.slice(2700),
            resetLines: handleResetLines
        }
    } else if(selectedScaleX === '30 mins') {
        return {
            lineData: lineData.slice(1800),
            resetLines: handleResetLines
        }
    } else {
        return {
            lineData,
            resetLines: handleResetLines
        }
    }
}


export default useLineData