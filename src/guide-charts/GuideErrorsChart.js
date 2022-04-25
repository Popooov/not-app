import { useState } from 'react'
import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import { ChartControlsContainer } from '../containers/exports'
import { ScaleListBox, Button as ResetButton }  from '../components/exports'
import { scaleNames } from '../utils/utils'

const GuideErrorsChart = ({ data, enabled, xLabel }) => {
    const [ selectedScaleX, setSelectedScaleX ] = useState(scaleNames('x')[1])
    const [ selectedScaleY, setSelectedScaleY ] = useState(scaleNames('y')[0])
    const { errorsLines, resetLines } = useLineData(data, enabled, selectedScaleX)
    const [ ref, dimensions ] = useChartDimensions()

    return (
        <div className='xl:flex'>
            <Chart
                selectedScaleX={selectedScaleX}
                selectedScaleY={selectedScaleY}
                dimensions={dimensions}
                reference={ref}
                lineData={errorsLines}
                xAccessor={d => d.x}
                y1Accessor={d => d.y1}
                y2Accessor={d => d.y2}
                xLabel={xLabel}
                dataLabelOne='X'
                dataLabelTwo='Y'
                x={(data.IntensityOffsetXarcsec * 1).toFixed(2)}
                y={(data.IntensityOffsetYarcsec * 1).toFixed(2)}
            />
            <ChartControlsContainer>
                <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                <ScaleListBox scale={scaleNames('y')} selected={selectedScaleY} setSelected={setSelectedScaleY} />
                <ResetButton reset={resetLines} />
            </ChartControlsContainer>
        </div>
    )
}

export default GuideErrorsChart