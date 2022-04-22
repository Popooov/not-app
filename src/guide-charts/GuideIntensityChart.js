import { useState } from 'react'
import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import { ChartControlsContainer } from '../containers/exports'
import { scaleNames } from '../utils/customScales'
import { ScaleListBox, Button as ResetButton, AutoguiderContrast }  from '../components/exports'

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
                <div className='flex md:w-1/4 lg:w-1/5 xl:w-1/4 2xl:w-[13%] mt-1 md:ml-8 sm:ml-3 sm:mr-auto px-3 py-2 text-xs sm:text-sm md:text-base rounded-lg border-2'>
                    <span className='text-red-500'>
                        <AutoguiderContrast name='AutoContrast' data={data.AutoguiderContrast} />
                    </span>
                </div>
                <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                <ResetButton reset={resetLines} />
            </ChartControlsContainer>
        </>
    )
}

export default GuideIntensityChart