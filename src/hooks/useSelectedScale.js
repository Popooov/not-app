import { useState } from "react"
import { scaleTypes } from '../utils/customScales'

const useSelectedScale = (scaleName, scaleType) => {
    const [ selectedScale, setSelectedScale ] = useState(scaleName)
    console.log('hook', scaleTypes(scaleType, selectedScale))


    return {
        selectedScale,
        setSelectedScale,
        type: scaleTypes(scaleType, selectedScale)
    }
    
}

export default useSelectedScale