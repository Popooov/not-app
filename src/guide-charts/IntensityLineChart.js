import { useState } from 'react'
import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import ScaleButtons from './ScaleButtons'
import { scaleNames } from '../utils/customScales'

const IntensityLineChart = ({ data, enabled, ...restProps }) => {
    const [ selectedScaleX, setSelectedScaleX ] = useState(scaleNames('x')[0])
    const [ selectedScaleY, setSelectedScaleY ] = useState(scaleNames('y')[0])
    const { lineData, resetLines } = useLineData(data, enabled, selectedScaleX)
    const [ ref, dimensions ] = useChartDimensions()

    return (
        <>
            <div ref={ref} className='mb-1'>
                <Chart
                    selectedScaleX={selectedScaleX}
                    selectedScaleY={selectedScaleY}
                    dimensions={dimensions}
                    lineData={lineData}
                    xAccessor={d => d.x}
                    offsetXAccessor={d => d.y1}
                    offsetYAccessor={d => d.y2}
                    {...restProps}
                />
                
            </div>
            <ScaleButtons 
                selected={{selectedScaleX, selectedScaleY}}
                setSelected={{setSelectedScaleX, setSelectedScaleY}}
                resetLines={resetLines}
            />
        </>
    )
}

export default IntensityLineChart