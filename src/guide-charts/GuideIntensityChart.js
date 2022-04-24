import { useState } from 'react'
import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import { ChartControlsContainer } from '../containers/exports'
import { scaleNames } from '../utils/customScales'
import { ScaleListBox, Button as ResetButton, AutoguiderContrast }  from '../components/exports'

const GuideIntensityChart = ({ data, enabled, xLabel }) => {
    const [ selectedScaleX, setSelectedScaleX ] = useState(scaleNames('x')[1])
    const { intensityLine, resetLines } = useLineData(data, enabled, selectedScaleX)
    const [ ref, dimensions ] = useChartDimensions()

    return (
        <div className='xl:flex'>
            <div ref={ref} className='mb-1 flex-grow'>
                <Chart
                    selectedScaleX={selectedScaleX}
                    selectedScaleY={'Auto'}
                    dimensions={dimensions}
                    lineData={intensityLine}
                    xAccessor={d => d.x}
                    y1Accessor={d => d.y}
                    xLabel={xLabel}
                    dataLabelOne='Contrast'
                    x={(data.AutoguiderContrast * 1).toFixed(2)}
                /> 
            </div>
            <ChartControlsContainer>
                {/* <div className='flex mt-1 px-3 py-2 text-xs rounded-lg border-2 sm:w-36 sm:ml-3 sm:mr-auto sm:text-sm md:w-44 md:text-base md:ml-5'>
                    <span className='text-red-500'>
                        <AutoguiderContrast name='AutoContrast' data={data.AutoguiderContrast} />
                    </span>
                </div> */}
                <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                <ResetButton reset={resetLines} />
            </ChartControlsContainer>
        </div>
    )
}

export default GuideIntensityChart