import { useState } from 'react'
import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import ScaleListBox from '../components/ScaleListBox'
import { scaleNames } from '../utils/customScales'

const IntensityLineChart = ({ data, enabled }) => {
    const [ selectedScaleX, setSelectedScaleX ] = useState(scaleNames('x')[0])
    const [ selectedScaleY, setSelectedScaleY ] = useState(scaleNames('y')[0])
    const { lineData, resetLines } = useLineData(data, enabled, selectedScaleX)
    const [ ref, dimensions ] = useChartDimensions()

    return (
        <>
            <div ref={ref} className='mb-3'>
                <Chart
                    selectedScaleX={selectedScaleX}
                    selectedScaleY={selectedScaleY}
                    dimensions={dimensions}
                    lineData={lineData}
                    xAccessor={d => d.x}
                    offsetXAccessor={d => d.y1}
                    offsetYAccessor={d => d.y2}
                />
                
            </div>
            <div className='mb-3 flex justify-evenly items-center'>
                <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                <button onClick={resetLines}>reset</button>
                <ScaleListBox scale={scaleNames('y')} selected={selectedScaleY} setSelected={setSelectedScaleY} />
            </div>
        </>
    )
}

export default IntensityLineChart