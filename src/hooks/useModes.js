import { useState, useEffect } from "react"
import { floorData, toFixedNum } from "../utils/utils"

const useModes = ({ 
    TelescopeModeNumber, 
    AutoguiderModeNumber, 
    AutoguiderGuideStarLost, 
    AutoguiderContrast,
    CameraProbeInSplitPos,
    CameraProbeInCCDpos
}) => {
    const [ telescopeMode, setTelescopeMode ] = useState('')
    const [ autoguiderMode, setAutoguiderMode ] = useState('')
    const [ cameraProbe, setCameraProbe ] = useState('')

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

        if (CameraProbeInSplitPos === 1 && CameraProbeInCCDpos === 0) {
             setCameraProbe('FIES')
        } else if (CameraProbeInSplitPos === 0 && CameraProbeInCCDpos === 1) {
            setCameraProbe('STANCAM')
        } else if (CameraProbeInSplitPos === 0 && CameraProbeInCCDpos === 0) {
            setCameraProbe('Cass')
        } else {
            setCameraProbe('Undefined')
        }

    }, [TelescopeModeNumber, AutoguiderModeNumber, AutoguiderGuideStarLost, AutoguiderContrast, CameraProbeInCCDpos, CameraProbeInSplitPos])

    return { 
        telescopeMode,
        autoguiderMode,
        cameraProbe
    }
}

export default useModes