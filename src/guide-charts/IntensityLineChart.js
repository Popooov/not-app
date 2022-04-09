import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import ScaleListBox from '../components/ScaleListBox'

const IntensityLineChart = ({ data, enabled }) => {
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
                <ScaleListBox scale='x' />
                <button>reset</button>
                <ScaleListBox scale='y' />
            </div>
        </>
    )
}

export default IntensityLineChart