import { useState, useEffect, useRef } from "react"

const eventSource = new EventSource('http://www.not.iac.es/observing/dyn/hiresdata.php')

export const useEventSource = () => {
    const [ statusData, setStatusData ] = useState([])
    const [ enabled, setEnabled ] = useState(false)
    // const [ eventSource, setEventSource ] = useState(new EventSource('http://www.not.iac.es/observing/dyn/hiresdata.php'))
    const eventSourceRef = useRef(eventSource)

    // console.log(eventSourceRef.current)

    useEffect(() => {
        const sse = eventSourceRef.current
        eventSourceRef.current.onmessage = (e) => setStatusData(JSON.parse(e.data))

        return () => sse.close()
    }, [])
    // console.log(statusData)

    return { 
        enabled,
        setEnabled,
        statusData
    }
}