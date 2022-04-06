import { useState, useEffect, useCallback, useRef } from "react"
import linesData from '../utils/linesData'

// { IntensityOffsetXarcsec, IntensityOffsetYarcsec }

const useLineData = ({ IntensityOffsetXarcsec, IntensityOffsetYarcsec, Xfilter, Yfilter }, enabled) => {
    // const { statusData, enabled } = useContext(EventSourceContext)
    const lineData = useRef(linesData)
    const count = useRef(0)
    const id = useRef()

    useEffect(() => {
        id.current = enabled && setInterval(() => {
            count.current++
                let [first, ...rest] = lineData.current
                if (Xfilter === undefined && Yfilter === undefined) {
                    return lineData.current = [...rest, {
                        x: count.current, 
                        y1: 0, 
                        y2: 0
                    }]
                }

                return lineData.current = [...rest, {
                    x: count.current, 
                    y1: Xfilter, 
                    y2: Yfilter
                }]
        }, 800)

        return () => clearInterval(id.current)
    }, [enabled, Xfilter, Yfilter])

    console.log(lineData.current)


    return lineData.current
}


export default useLineData

// {
//     x: count++, 
//     y1: Math.trunc(intensity.IntensityOffsetXarcsec * 10) / 10, 
//     y2: Math.trunc(intensity.IntensityOffsetYarcsec * 10) / 10
// }
