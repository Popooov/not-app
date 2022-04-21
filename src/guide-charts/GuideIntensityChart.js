import { useState } from 'react'
import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import { ChartControlsContainer } from '../containers/exports'
import { scaleNames } from '../utils/customScales'
import { ScaleListBox, Button as ResetButton }  from '../components/exports'

const GuideIntensityChart = ({ data, enabled, ...restProps }) => {
    const [ selectedScaleX, setSelectedScaleX ] = useState(scaleNames('x')[1])
    const { intensityLine, resetLines } = useLineData(data, enabled, selectedScaleX)
    const [ ref, dimensions ] = useChartDimensions()

    return (
        <>
            <div ref={ref} className='mb-1'>
                <Chart
                    selectedScaleX={selectedScaleX}
                    selectedScaleY={'Auto'}
                    dimensions={dimensions}
                    lineData={intensityLine}
                    xAccessor={d => d.x}
                    y1Accessor={d => d.y}
                    {...restProps}
                /> 
            </div>
            <ChartControlsContainer>
                <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                <ResetButton reset={resetLines} />
            </ChartControlsContainer>
        </>
    )
}

export default GuideIntensityChart