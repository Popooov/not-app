import Chart from './Chart'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'
import ScaleListBox from '../components/ScaleListBox'
import { yScales, xScales } from '../utils/customScales'

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
            <div className='mb-3 flex justify-around items-center'>
                <ScaleListBox xScales={xScales} />
                <button>reset</button>
                <ScaleListBox yScales={yScales}/>
            </div>
        </>
    )
}

export default IntensityLineChart