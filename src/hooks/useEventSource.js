import { useState, useEffect } from "react"

const sse = new EventSource('http://www.not.iac.es/observing/dyn/hiresdata.php')

const useEventSource = () => {
    const [ statusData, setStatusData ] = useState([])
    const [ enabled, setEnabled ] = useState(false)
    const [ eventSource ] = useState(sse)

    useEffect(() => {
        eventSource.onmessage = (e) => setStatusData(JSON.parse(e.data))
        return () => eventSource.close()
    }, [eventSource])

    return { 
        enabled,
        setEnabled,
        statusData
    }
}

export default useEventSource