import { useState, useEffect, useCallback, useRef } from "react"

export const useEventSource = () => {
    const [ statusData, setStatusData ] = useState([])
    const [ enabled, setEnabled ] = useState(false)
    // const [eventSource, setEventSource] = useState(new EventSource('http://www.not.iac.es/observing/dyn/hiresdata.php'))
    const eventSourceRef = useRef(new EventSource('http://www.not.iac.es/observing/dyn/hiresdata.php'))

    // console.log(eventSourceRef.current)
    const openConnection = useCallback(
        () => eventSourceRef.current.onmessage = (e) => setStatusData(JSON.parse(e.data)), []
    )

    const closeConnection = useCallback(() => eventSourceRef.current.close(), [])

    useEffect(() => {
        enabled && openConnection()

        // return () => !enabled && closeConnection()
    }, [enabled, openConnection, closeConnection])

    return { 
        enabled,
        setEnabled,
        statusData
    }
}