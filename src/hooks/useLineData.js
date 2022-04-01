import { useState, useEffect, useCallback, useRef } from "react"
import linesData from '../utils/linesData'

const useLineData = ({ IntensityOffsetXarcsec, IntensityOffsetYarcsec }, enabled) => {

    const [ lineData, setLineData ] = useState(linesData)
    const id = useRef()


    // console.log('useLineData', lineData, enabled)
    
    const start = useCallback(() => {
        let count = 0
        id.current = setInterval(() => {
            setLineData(prevState => {
                const [first, ...rest] = prevState
                if (!IntensityOffsetXarcsec && !IntensityOffsetYarcsec) {
                    return [...rest, {
                        x: count++, 
                        y1: 0, 
                        y2: 0
                    }]
                }

                return [...rest, {
                    x: count++, 
                    y1: IntensityOffsetXarcsec, 
                    y2: IntensityOffsetYarcsec
                }]
            })
        }, 1000)
    }, [IntensityOffsetXarcsec, IntensityOffsetYarcsec])
    const stop = () => clearInterval(id.current)
    
    useEffect(() => {
        enabled && start()

        return () => stop()
    }, [enabled, start])

    return lineData
}


export default useLineData

// {
//     x: count++, 
//     y1: Math.trunc(intensity.IntensityOffsetXarcsec * 10) / 10, 
//     y2: Math.trunc(intensity.IntensityOffsetYarcsec * 10) / 10
// }
