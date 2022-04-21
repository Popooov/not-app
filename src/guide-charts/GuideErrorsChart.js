import { useState } from 'react'
import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import ChartControlsContainer from '../containers/ChartControlsContainer'
import { scaleNames } from '../utils/customScales'
import ScaleListBox  from '../components/ScaleListBox'
import ResetButton  from '../components/Button'

const GuideErrorsChart = ({ data, enabled, ...restProps }) => {
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
            <ChartControlsContainer>
                <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                <ScaleListBox scale={scaleNames('y')} selected={selectedScaleY} setSelected={setSelectedScaleY} />
                <ResetButton reset={resetLines} />
            </ChartControlsContainer>
        </>
    )
}

export default GuideErrorsChart