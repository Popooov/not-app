import { linesData } from "../utils/linesData"
import useChartsData from "../hooks/useChartsData" 

export const ChartsResetButton = ({ reset }) => {

    // const { reset } = useChartsData()

    return (
        <button 
            className={`mt-1 py-2 px-4 mr-1.5 sm:py-[.35rem] sm:text-base rounded-lg text-center text-xs bg-zinc-100 border-2 border-zinc-400 cursor-pointer`}
            onClick={reset}>
                Reset
        </button> 
    )
}