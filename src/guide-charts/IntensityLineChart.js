import Chart from './Chart'
// import * as d3 from 'd3'
import { useChartDimensions } from '../hooks/useChartDimensions'
import useLineData from '../hooks/useLineData'

const IntensityLineChart = ({ data, enabled }) => {
    const lineData = useLineData(data, enabled)
    const [ ref, dimensions ] = useChartDimensions()

    return (
        <>
            <div ref={ref} className='bg-slate-500 mb-3'>
                <Chart
                    dimensions={dimensions}
                    lineData={lineData}
                    xAccessor={d => d.x}
                    offsetXAccessor={d => d.y1}
                    offsetYAccessor={d => d.y2}
                />
                
            </div>
            <div className='mb-3 flex justify-evenly items-center'>
                <button>reset</button>
                <div className='text-center'>
                    <label className='block' htmlFor="xScale">xScale</label>
                    <input  type="range" step='5' name="xScale" id="xScale" />
                </div>
                <div className='text-center'>
                    <label className='block' htmlFor="yScale">yScale</label>
                    <input className='' type="range" name="yScale" id="yScale" />
                </div>
            </div>
        </>
    )
}

export default IntensityLineChart