import { useState } from "react"
import { scaleTypes } from '../utils/customScales'

const useSelectedScale = (scaleName, scaleType) => {
    const [ selected, setSelected ] = useState(scaleName)
    console.log('hook', scaleTypes(scaleType, selected))


    return {
        selected,
        setSelected,
        type: scaleTypes(scaleType, selected)
    }
    
}

export default useSelectedScale