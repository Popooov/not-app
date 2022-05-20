import { useState } from 'react'
import { scaleTypes, scaleNames } from '../utils/utils'

const useChartNames = () => {
    const [ chartName, setChartName ] = useState(scaleNames('chartNames')[0])

    return {
        chartName,
        setChartName,
    }
}

export default useChartNames