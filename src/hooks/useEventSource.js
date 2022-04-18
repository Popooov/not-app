import { useState, useEffect, useRef } from "react"

const sse = new EventSource('http://www.not.iac.es/observing/dyn/hiresdata.php')

export const useEventSource = () => {
    const [ statusData, setStatusData ] = useState([])
    const [ enabled, setEnabled ] = useState(false)
    const [ eventSource ] = useState(sse)
    // const eventSourceRef = useRef(eventSource)

    // console.log(eventSourceRef.current)

    useEffect(() => {
        // const sse = eventSourceRef.current
        // eventSourceRef.current.onmessage = (e) => setStatusData(JSON.parse(e.data))
        eventSource.onmessage = (e) => setStatusData(JSON.parse(e.data))
        return () => sse.close()
    }, [eventSource])
    // console.log(statusData)

    return { 
        enabled,
        setEnabled,
        statusData
    }
}