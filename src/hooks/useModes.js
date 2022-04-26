import { useState, useEffect } from "react"
import { floorData } from "../utils/utils"

const useModes = ({ 
    TelescopeModeNumber, 
    AutoguiderModeNumber, 
    AutoguiderGuideStarLost, 
    AutoguiderContrast 
}) => {
    const [ telescopeMode, setTelescopeMode ] = useState('')
    const [ autoguiderModeMode, setAutoguiderModeMode ] = useState('')

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
            setAutoguiderModeMode('Moving Box')
        } else if (AutoguiderModeNumber === 2) {
            setAutoguiderModeMode('Center Box')
        } else if (AutoguiderModeNumber === 3) {
            if(AutoguiderGuideStarLost === 1) {
                setAutoguiderModeMode('Guiding Lost')
            } else {
                return setAutoguiderModeMode(`Guiding: ${floorData(AutoguiderContrast)}`)
            }
        } else {
            setAutoguiderModeMode('Not Guiding')
        }
    }, [TelescopeModeNumber, AutoguiderModeNumber, AutoguiderGuideStarLost, AutoguiderContrast])

    return { 
        telescopeMode,
        autoguiderModeMode
    }
}

export default useModes