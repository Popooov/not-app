import { useState } from 'react'
import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import { ChartControlsContainer } from '../containers/exports'
import { scaleNames } from '../utils/customScales'
import {IntensityOffsetXarcsec, IntensityOffsetYarcsec, ScaleListBox, Button as ResetButton }  from '../components/exports'

const GuideErrorsChart = ({ data, enabled, xLabel }) => {
    const [ selectedScaleX, setSelectedScaleX ] = useState(scaleNames('x')[1])
    const [ selectedScaleY, setSelectedScaleY ] = useState(scaleNames('y')[0])
    const { errorsLines, resetLines } = useLineData(data, enabled, selectedScaleX)
    const [ ref, dimensions ] = useChartDimensions()

    return (
        <div className='xl:flex'>
            <div ref={ref} className='mb-1 xl:flex-grow'>
                <Chart
                    selectedScaleX={selectedScaleX}
                    selectedScaleY={selectedScaleY}
                    dimensions={dimensions}
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
                
            </div>
            <ChartControlsContainer>
                {/* <div className='flex mt-1 px-3 py-2 text-xs rounded-lg border-2 sm:w-36 sm:ml-3 sm:mr-auto sm:text-sm md:w-44 md:text-base md:ml-5'>
                    <span className='mr-1 sm:mr-3 md:mr-5 text-red-500'>
                        <IntensityOffsetXarcsec name='X' data={data.IntensityOffsetXarcsec} />
                    </span>
                    <span className='ml-1 text-blue-500'>
                        <IntensityOffsetYarcsec name='Y' data={data.IntensityOffsetYarcsec} />
                    </span>
                </div> */}
                    <div className='z-10'>
                        <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                    </div>
                    <ScaleListBox scale={scaleNames('y')} selected={selectedScaleY} setSelected={setSelectedScaleY} />
                    <ResetButton reset={resetLines} />
            </ChartControlsContainer>
        </div>
    )
}

export default GuideErrorsChart