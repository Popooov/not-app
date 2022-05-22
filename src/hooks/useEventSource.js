import { useState, useEffect } from "react"

const sse = new EventSource('http://www.not.iac.es/observing/dyn/hiresdata.php')

const useEventSource = () => {
    const [ statusData, setStatusData ] = useState([])
    const [ eventSource ] = useState(sse)

    useEffect(() => {
        eventSource.onmessage = (e) => setStatusData(JSON.parse(e.data))

        eventSource.onerror = (e) => console.error(`Error message: ${e}`)

        return () => eventSource.close()
    }, [eventSource])

    return { 
        statusData
    }
}

export default useEventSource