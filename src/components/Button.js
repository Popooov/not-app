import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

export const Button = () => {

    const { reset } = useContext(ChartContext)

    return (
        <button 
            className={`mt-1 py-2 px-4 mr-1.5 sm:py-[.35rem] sm:text-base rounded-lg text-center text-xs bg-zinc-100 border-2 border-zinc-400 cursor-pointer`}
            onClick={reset}>
                Reset
        </button>
    )
}