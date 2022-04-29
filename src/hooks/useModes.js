import { useState, useEffect } from "react"
import { floorData, toFixedNum } from "../utils/utils"

const useModes = ({ 
    TelescopeModeNumber, 
    AutoguiderModeNumber, 
    AutoguiderGuideStarLost, 
    AutoguiderContrast 
}) => {
    const [ telescopeMode, setTelescopeMode ] = useState('')
    const [ autoguiderMode, setAutoguiderMode ] = useState('')

    useEffect(() => {
        if(TelescopeModeNumber === 1) {
            setTelescopeMode('Idle')
        } else if (TelescopeModeNumber === 2) {
            setTelescopeMode('Moving')
        } else if (TelescopeModeNumber === 3) {
            setTelescopeMode('Slewing')
        } else if (TelescopeModeNumber === 4) {
            setTelescopeMode('Tracking')
        } else {
            setTelescopeMode('Power Off')
        }
    
        if(AutoguiderModeNumber === 1) {
            setAutoguiderMode('Moving Box')
        } else if (AutoguiderModeNumber === 2) {
            setAutoguiderMode('Center Box')
        } else if (AutoguiderModeNumber === 3) {
            if(AutoguiderGuideStarLost === 1) {
                setAutoguiderMode('Guiding Lost')
            } else {
                return setAutoguiderMode(`Guiding ${toFixedNum(floorData(AutoguiderContrast))}`)
            }
        } else {
            setAutoguiderMode('Not Guiding')
        }
    }, [TelescopeModeNumber, AutoguiderModeNumber, AutoguiderGuideStarLost, AutoguiderContrast])

    return { 
        telescopeMode,
        autoguiderMode
    }
}

export default useModes