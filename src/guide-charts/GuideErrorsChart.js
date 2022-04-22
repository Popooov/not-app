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
                <div className='flex md:w-1/4 lg:w-1/5 xl:w-1/4 2xl:w-[13%] mt-1 md:ml-8 sm:ml-3 sm:mr-auto px-3 py-2 text-xs sm:text-sm md:text-base rounded-lg border-2'>
                    <span className='mr-1 sm:mr-3 md:mr-5 text-red-500'>
                        <IntensityOffsetXarcsec name='X' data={data.IntensityOffsetXarcsec} />
                    </span>
                    <span className='ml-1 text-blue-500'>
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