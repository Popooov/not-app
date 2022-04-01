import { useState, useEffect, useRef, useCallback } from "react"

export const useFetch = () => {
    const [ statusData, setStatusData ] = useState([])
    const [ enabled, setEnabled ] = useState(false)
    const id = useRef()

    const start = useCallback(
        () => {
            id.current = setInterval(async () => {

                const res = await fetch('http://www.not.iac.es/observing/dyn/hiresdata.php')
                const data = await res.json()
                setStatusData(data)
            }, 1000)
        }, []
    )

    const stop = () => clearInterval(id.current)

    useEffect(() => {
        enabled && start()

        return () => stop()
    }, [enabled, start])
    
    return { 
        enabled,
        setEnabled,
        statusData,
    }
}