import { useState, useEffect, useCallback, useRef } from "react"
import { multipleLinesData } from '../utils/linesData'
import { singleLineData } from '../utils/linesData'

const rounded = (number) => Math.round(number * 100) / 100 * 0.24

const useLineData = ({ 
    IntensityOffsetXarcsec, 
    IntensityOffsetYarcsec, 
    AutoguiderContrast,
    TimeST,
    Xfilter,
    Yfilter
    }, 
    enabled, selectedScaleX) => {
    const [ intensityLine, setIntensityLine ] = useState(singleLineData)
    const [ errorsLines, setErrorsLines ] = useState(multipleLinesData)
    const [ fiberLines, setFiberLines ] = useState(multipleLinesData)
    const count = useRef(-1)

    const handleResetLines = () => {
        count.current = -1
        setIntensityLine(singleLineData)
        setErrorsLines(multipleLinesData)
        setFiberLines(multipleLinesData)
    }

    const lines = useCallback(() => {
        count.current++
        setErrorsLines((prevState) => {
            let [first, ...rest] = prevState
            
            return [...rest, {
                TimeST,
                x: count.current, 
                y1: IntensityOffsetXarcsec, 
                y2: IntensityOffsetYarcsec
            }]
         })
            
        setIntensityLine((prevState) => {
            let [first, ...rest] = prevState
            
            return [...rest, {
                TimeST,
                x: count.current,
                y: AutoguiderContrast
            }]
        })
       
        setFiberLines((prevState) => {
            let [first, ...rest] = prevState
            
            return [...rest, {
                TimeST,
                x: count.current, 
                y1: rounded(Xfilter), 
                y2: rounded(Yfilter)
            }]
        })
        
    }, [IntensityOffsetXarcsec, IntensityOffsetYarcsec, AutoguiderContrast, Xfilter, Yfilter, TimeST])

    useEffect(() => enabled && lines(), [enabled, lines])

    if(selectedScaleX === '1 min') {
        return {
            errorsLines: errorsLines.slice(3540),
            intensityLine: intensityLine.slice(3540),
            fiberLines: fiberLines.slice(3540),
            resetLines: handleResetLines
        }
    } else if(selectedScaleX === '5 mins') {
        return {
            errorsLines: errorsLines.slice(3300),
            intensityLine: intensityLine.slice(3300),
            fiberLines: fiberLines.slice(3300),
            resetLines: handleResetLines
        }
    } else if(selectedScaleX === '15 mins') {
        return {
            errorsLines: errorsLines.slice(2700),
            intensityLine: intensityLine.slice(2700),
            fiberLines: fiberLines.slice(2700),
            resetLines: handleResetLines
        }
    } else if(selectedScaleX === '30 mins') {
        return {
            errorsLines: errorsLines.slice(1800),
            intensityLine: intensityLine.slice(1800),
            fiberLines: fiberLines.slice(1800),
            resetLines: handleResetLines
        }
    } else {
        return {
            errorsLines,
            intensityLine,
            fiberLines,
            resetLines: handleResetLines
        }
    }
}


export default useLineData