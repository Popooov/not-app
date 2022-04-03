import { useState, useEffect, useCallback, useRef } from "react"
// import linesData from '../utils/linesData'

const linesData = []

for (let i = -299; i <= 0; i++) {
    linesData.push(
        {
            x: i,
            y1: 0,
            y2: 0
        }
    )
}

const useLineData = ({ IntensityOffsetXarcsec, IntensityOffsetYarcsec }, enabled) => {
    // const [ lineData, setLineData ] = useState(linesData) ActualRAhours ActualDECdeg
    const lineData = useRef(linesData)

    const id = useRef()
    console.log(lineData.current)
    const start = useCallback(() => {
        let count = 0
        id.current = setInterval(() => {
            const [first, ...rest] = lineData.current
            if (IntensityOffsetXarcsec === undefined && IntensityOffsetYarcsec === undefined) {
                return lineData.current = [...rest, {
                    x: count++, 
                    y1: 0, 
                    y2: 0
                }]
            }

            return lineData.current = [...rest, {
                x: count++, 
                y1: IntensityOffsetXarcsec, 
                y2: IntensityOffsetYarcsec
            }]
        }, 1000)
    }, [IntensityOffsetXarcsec, IntensityOffsetYarcsec])

    // const start = useCallback(() => {
    //     let count = 0
    //     id.current = setInterval(() => {
    //         setLineData(prevState => {
    //             const [first, ...rest] = prevState
    //             if (IntensityOffsetXarcsec === undefined && IntensityOffsetYarcsec === undefined) {
    //                 return [...rest, {
    //                     x: count++, 
    //                     y1: 0, 
    //                     y2: 0
    //                 }]
    //             }

    //             return [...rest, {
    //                 x: count++, 
    //                 y1: IntensityOffsetXarcsec, 
    //                 y2: IntensityOffsetYarcsec
    //             }]
    //         })
    //     }, 1000)
    // }, [IntensityOffsetXarcsec, IntensityOffsetYarcsec])

    const stop = () => clearInterval(id.current)

    useEffect(() => {
        enabled && start()

        return () => stop()
    }, [enabled, start])

    return lineData.current
}


export default useLineData

// {
//     x: count++, 
//     y1: Math.trunc(intensity.IntensityOffsetXarcsec * 10) / 10, 
//     y2: Math.trunc(intensity.IntensityOffsetYarcsec * 10) / 10
// }
