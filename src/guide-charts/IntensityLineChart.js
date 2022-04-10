import { useState } from 'react'
import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import ScaleListBox from '../components/ScaleListBox'
import { scaleNames } from '../utils/customScales'

const IntensityLineChart = ({ data, enabled }) => {
    const [ selected, setSelected ] = useState()
    const lineData = useLineData(data, enabled)
    const [ ref, dimensions ] = useChartDimensions()

    return (
        <>
            <div ref={ref} className='mb-3'>
                <Chart
                    dimensions={dimensions}
                    lineData={lineData}
                    xAccessor={d => d.x}
                    offsetXAccessor={d => d.y1}
                    offsetYAccessor={d => d.y2}
                />
                
            </div>
            <div className='mb-3 flex justify-evenly items-center'>
                <ScaleListBox scale='x' selected={selected} setSelected={setSelected} />
                <button>reset</button>
                <ScaleListBox scale='y' selected={selected} setSelected={setSelected} />
            </div>
        </>
    )
}

export default IntensityLineChart