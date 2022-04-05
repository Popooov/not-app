import { line } from "d3"
import { useState, useEffect, useCallback, useRef, useContext } from "react"
import EventSourceContext from '../context/eventSourceContext'
import linesData from '../utils/linesData'

// { IntensityOffsetXarcsec, IntensityOffsetYarcsec }

const useLineData = ({Xfilter, Yfilter}, enabled) => {
    // const { statusData, enabled } = useContext(EventSourceContext)
    const [ lineData, setLineData ] = useState(linesData)
    const count = useRef(0)
    const id = useRef()

    const start = useCallback(() => {
        id.current = setInterval(() => {
            setLineData(prevState => {
                let [first, ...rest] = prevState
                if (Xfilter === undefined && Yfilter === undefined) {
                    return [...rest, {
                        x: count.current++, 
                        y1: 0, 
                        y2: 0
                    }]
                }

                return [...rest, {
                    x1: count.current++, 
                    y1: Xfilter, 
                    y2: Yfilter
                }]
            })
        }, 1000)
    }, [Xfilter, Yfilter])

    const stop = () => clearInterval(id.current)

    useEffect(() => {
        enabled && start()

        return () => stop()
    }, [enabled, start])

    console.log(lineData)


    return lineData
}


export default useLineData

// {
//     x: count++, 
//     y1: Math.trunc(intensity.IntensityOffsetXarcsec * 10) / 10, 
//     y2: Math.trunc(intensity.IntensityOffsetYarcsec * 10) / 10
// }
