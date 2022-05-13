import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"


export const ChartContainer = ({ styles, children }) => {

    const { chartType } = useContext(ChartContext)

    return (
        <div className={styles}>
            <div className={`${chartType ? 
                            'mb-24 mx-auto xl:mr-5 w-[20rem] h-[22.15rem] sm:w-[24rem] sm:h-[26.15rem] md:w-[27rem] md:h-[29.15rem] lg:w-[26rem] lg:h-[28.15rem] xl:w-[24rem] xl:h-[26.15rem] 2xl:w-[30rem] 2xl:h-[32.15rem] 3xl:w-[36rem] 3xl:h-[38.15rem]'
                            :
                            'xl:flex lg:mx-auto xl:w-[42vw] xl:h-72 2xl:h-[19rem] ml-1 sm:mr-5 sm:ml-6 lg:ml-0 sm:mb-8 xl:mb-0 xl:mx-0'}`}>
                {children}
            </div>
        </div>
    )
}