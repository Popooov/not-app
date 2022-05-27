import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

const ChartLabel = ({ label }) => {
    const { dimensions } = useContext(ChartContext)
    
    return (
        <>
            <text
                textAnchor="middle"
                transform={`translate(${dimensions.boundedWidth / 2}, ${-dimensions.boundedHeight - 10})`}
                className='text-sm sm:text-base lg:text-lg xl:text-base 4xl:text-lg'
            >
                {label}
            </text>
        </>

    )
}

export default ChartLabel