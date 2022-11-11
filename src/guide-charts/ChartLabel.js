import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

const ChartLabel = ({ label }) => {
    const { dimensions, chartType } = useContext(ChartContext)
    const regex = /([A-z- A-z]*)?\S?([A-z0-9, A-z0-9]*)?/
    const [ labelComposed, title, parameters ] = label.match(regex)
    const [ parameter1, parameter2 ] = parameters ? parameters.split(", ") : ''

    return (
        <>
            {
            chartType === 'ScatterPlot' ?
                <text
                    textAnchor="middle"
                    transform={`translate(${dimensions.boundedWidth / 2}, ${-dimensions.boundedHeight - 10})`}
                    className='text-sm sm:text-base lg:text-lg xl:text-base 4xl:text-lg'
                >
                    {label}
                </text>
            :
                <text
                    textAnchor="middle"
                    transform={`translate(${dimensions.boundedWidth / 2}, ${-dimensions.boundedHeight - 10})`}
                    className='text-sm sm:text-base lg:text-lg xl:text-base 4xl:text-lg'
                >
                    {title}
                    {parameters && '('}
                    <tspan fill="red">
                        {parameter1}
                    </tspan>
                    {parameters && ', '} 
                    <tspan fill="blue">
                        {parameter2}
                    </tspan>
                    {parameters && ')'}
                </text>
            }
        </>

    )
}

export default ChartLabel