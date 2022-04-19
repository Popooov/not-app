import { useState, useEffect, useCallback, useRef } from "react"
import linesData from '../utils/linesData'

const useLineData = ({ IntensityOffsetXarcsec, IntensityOffsetYarcsec, Xfilter, Yfilter, TimeST }, enabled, selectedScaleX) => {
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
                TimeST,
                x: count.current, 
                y1: IntensityOffsetXarcsec, 
                y2: IntensityOffsetYarcsec
            }]
        })
    }, [IntensityOffsetXarcsec, IntensityOffsetYarcsec, TimeST])
        
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

// {
//     x: count++, 
//     y1: Math.trunc(intensity.IntensityOffsetXarcsec * 10) / 10, 
//     y2: Math.trunc(intensity.IntensityOffsetYarcsec * 10) / 10
// }