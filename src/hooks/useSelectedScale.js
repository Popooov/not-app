import { useState } from "react"
import { xScales, yScales } from '../utils/customScales'

const useSelectedScale = (scaleName, scaleType) => {
    const [ selected, setSelected ] = useState(scaleName)

    return {
        selected,
        setSelected,
        // type: scaleType[selected]
    }
    
}

export default useSelectedScale