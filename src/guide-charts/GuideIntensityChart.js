import { useState } from 'react'
import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import { ChartControlsContainer } from '../containers/exports'
import { scaleNames } from '../utils/utils'
import { ScaleListBox, Button as ResetButton }  from '../components/exports'

const GuideIntensityChart = ({ data, enabled, xLabel }) => {
    const [ selectedScaleX, setSelectedScaleX ] = useState(scaleNames('x')[1])
    const { intensityLine, resetLines } = useLineData(data, enabled, selectedScaleX)
    const [ ref, dimensions ] = useChartDimensions()

    return (
        <div className='xl:flex'>
            <Chart
                selectedScaleX={selectedScaleX}
                selectedScaleY={'Auto'}
                dimensions={dimensions}
                reference={ref}
                lineData={intensityLine}
                xAccessor={d => d.x}
                y1Accessor={d => d.y}
                xLabel={xLabel}
                dataLabelOne='Contrast'
                x={(data.AutoguiderContrast * 1).toFixed(2)}
            /> 
            <ChartControlsContainer>
                <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                <ResetButton reset={resetLines} />
            </ChartControlsContainer>
        </div>
    )
}

export default GuideIntensityChart