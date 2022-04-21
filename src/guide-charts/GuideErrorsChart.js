import { useState } from 'react'
import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import { ChartControlsContainer } from '../containers/exports'
import { scaleNames } from '../utils/customScales'
import {IntensityOffsetXarcsec, IntensityOffsetYarcsec, ScaleListBox, Button as ResetButton }  from '../components/exports'

const GuideErrorsChart = ({ data, enabled, ...restProps }) => {
    const [ selectedScaleX, setSelectedScaleX ] = useState(scaleNames('x')[1])
    const [ selectedScaleY, setSelectedScaleY ] = useState(scaleNames('y')[0])
    const { errorsLines, resetLines } = useLineData(data, enabled, selectedScaleX)
    const [ ref, dimensions ] = useChartDimensions()

    return (
        <>
            <div ref={ref} className='mb-1'>
                <Chart
                    selectedScaleX={selectedScaleX}
                    selectedScaleY={selectedScaleY}
                    dimensions={dimensions}
                    lineData={errorsLines}
                    xAccessor={d => d.x}
                    y1Accessor={d => d.y1}
                    y2Accessor={d => d.y2}
                    {...restProps}
                />
                
            </div>
            <ChartControlsContainer>
                <div className='flex mt-1 ml-12 mr-auto px-3 py-2 text-base rounded-lg bg-zinc-100'>
                    <span className='mr-5 w-14 text-red-500'>
                        <IntensityOffsetXarcsec name='X' data={data.IntensityOffsetXarcsec} />
                    </span>
                    <span className='w-14 text-blue-400'>
                        <IntensityOffsetYarcsec name='Y' data={data.IntensityOffsetYarcsec} />
                    </span>
                </div>
                <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                <ScaleListBox scale={scaleNames('y')} selected={selectedScaleY} setSelected={setSelectedScaleY} />
                <ResetButton reset={resetLines} />
            </ChartControlsContainer>
        </>
    )
}

export default GuideErrorsChart