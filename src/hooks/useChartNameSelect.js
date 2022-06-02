import { useState } from 'react'
import { scaleNames, scaleTypes } from '../utils/scales'

const useChartNameSelect = (defaultChartName = 0) => {

    const [chartName, setChartName] = useState(scaleNames('chartNames')[defaultChartName])
    const customChartParamY1 = scaleTypes('dataScales', chartName)[0]
    const customChartParamY2 = scaleTypes('dataScales', chartName)[1]
    const chartLabel = scaleTypes('dataScales', chartName)[2]
    const customChartMultiplier = scaleTypes('dataScales', chartName)[3]

    return {
        chartName,
        setChartName,
        customChartParamY1,
        customChartParamY2,
        chartLabel,
        customChartMultiplier,
    }
}

export default useChartNameSelect