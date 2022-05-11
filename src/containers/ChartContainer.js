import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

export const ChartContainer = ({ children }) => {

    const { chartType } = useContext(ChartContext)

    //"xl:flex xl:w-full xl:h-[16rem] 2xl:h-[19rem] ml-3 sm:ml-6 xl:ml-7 sm:mb-8 xl:mb-0"
    return (
    <div className={`${chartType === 'ScatterPlot' ? null : 'xl:flex'} xl:w-full xl:h-full 2xl:h-full ml-1 sm:mr-5 sm:ml-6 xl:ml-0 lg:mr-3.5 sm:mb-8 xl:mb-0`}>
        {children}
    </div>
    )
}