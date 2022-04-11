import { useState, useEffect, useCallback, useRef } from "react"
import linesData from '../utils/linesData'
import useSelectedScale from "./useSelectedScale"

const useLineData = ({ IntensityOffsetXarcsec, IntensityOffsetYarcsec }, enabled) => {
    const [ lineData, setLineData ] = useState(linesData)
    const count = useRef(0)

    const lines = useCallback(() => {
        count.current++
        setLineData((prevState) => {
            let [first, ...rest] = prevState
            if (IntensityOffsetXarcsec === undefined && IntensityOffsetYarcsec === undefined) {
                return [...rest, {
                    x: count.current, 
                    y1: 0, 
                    y2: 0
                }]
            }
    
            return [...rest, {
                x: count.current, 
                y1: IntensityOffsetXarcsec, 
                y2: IntensityOffsetYarcsec
            }]
        })
    }, [IntensityOffsetXarcsec, IntensityOffsetYarcsec])

    useEffect(() => enabled && lines(), [enabled, lines])

    // console.log(lineData)


    return lineData
}


export default useLineData

// {
//     x: count++, 
//     y1: Math.trunc(intensity.IntensityOffsetXarcsec * 10) / 10, 
//     y2: Math.trunc(intensity.IntensityOffsetYarcsec * 10) / 10
// }
