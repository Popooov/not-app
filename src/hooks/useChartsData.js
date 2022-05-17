import { useState, useEffect, useCallback, useRef } from "react"
import { linesData } from '../utils/linesData'
import { floorData } from "../utils/utils"

const useChartsData = (statusData, selectedScaleX, multiplier, propertyNameY1 = '', propertyNameY2 = '') => {
    const [ lineData, setLineData ] = useState(linesData)
    const [ circleData, setCircleData ] = useState([])
    const count = useRef(-1)
    const colorCount = useRef(0)
    const [ freezeLines, setFreezeLines ] = useState(true)
    const [ freezeScatter, setFreezeScatter ] = useState(true)

    const handleReset = () => {
        count.current = -1
        setLineData(linesData)
        setCircleData([])
    }

    const chartsData = useCallback(() => {
        if (statusData.TelescopeModeNumber) {
            count.current++
            if (freezeLines) {
                setFreezeLines(false)
                setLineData(linesData)
                count.current = -1
            } else if (!freezeLines) {
                setLineData((prevState) => {
                    // let [first, ...rest] = prevState
                    
                    return [...prevState.slice(1), {
                        TimeST: statusData.TimeST,
                        x: count.current, 
                        y1: floorData(statusData[propertyNameY1] * multiplier),
                        y2: propertyNameY2 ? floorData(statusData[propertyNameY2] * multiplier) : null
                    }]
                })
            }
        } else {
            setFreezeLines(true)
        }
        
        if (statusData.AutoguiderModeNumber === 3) {
            colorCount.current++
            if (freezeScatter) {
                setFreezeScatter(false)
                setCircleData([])
                colorCount.current = 0
            } else if (!freezeScatter) {

                setCircleData((prevState) => {
            
                    return [...prevState, {
                        TimeST: statusData.TimeST,
                        x: statusData[propertyNameY1],
                        y: statusData[propertyNameY2],
                        color: colorCount.current
                    }]
                })
            }
        } else {
            setFreezeScatter(true)
        }

    }, [statusData, propertyNameY1, propertyNameY2, multiplier, freezeLines, freezeScatter])

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