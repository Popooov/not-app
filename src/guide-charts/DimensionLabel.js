import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

const DimensionLabel = ({ name }) => {
    const { dimensions, chartLabel } = useContext(ChartContext)
    
    return (
        <>
            <text
                textAnchor="middle"
                transform={`translate(${dimensions.boundedWidth / 2}, ${-dimensions.boundedHeight - 10})`}
                className='text-sm sm:text-base lg:text-lg xl:text-base 2xl:text-lg'
            >
                {name? name : chartLabel}
            </text>
        </>

    )
}

export default DimensionLabel