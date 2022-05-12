import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"

export const ChartContainer = ({ lgRowStart, lgRowEnd, lgColStart, lgColEnd, lgColSpan, lgRowSpan, xlRowStart, xlRowEnd, xlColStart, xlColEnd, xlColSpan, xlRowSpan, center, stretch, children }) => {

    const { chartType } = useContext(ChartContext)

    //"xl:flex xl:w-full xl:h-[16rem] 2xl:h-[19rem] ml-3 sm:ml-6 xl:ml-7 sm:mb-8 xl:mb-0"
    return (
        <div className={`lg:justify-self-${stretch} lg:place-self-${center} lg:row-start-${lgRowStart} lg:row-end-${lgRowEnd} lg:col-start-${lgColStart} lg:col-end-${lgColEnd} lg:col-span-${lgColSpan} lg:row-span-${lgRowSpan} xl:place-self-auto xl:row-start-${xlRowStart} xl:row-end-${xlRowEnd} xl:col-start-${xlColStart} xl:col-end-${xlColEnd} xl:col-span-${xlColSpan} xl:row-span-${xlRowSpan}`}>
            <div className={`${chartType ? 'mb-24 mx-auto lg:mr-3.5 w-[20rem] h-[22.15rem] sm:w-[24rem] sm:h-[26.15rem] md:w-[27rem] md:h-[29.15rem] lg:w-[26rem] lg:h-[28.15rem] xl:w-[24rem] xl:h-[26.15rem] 2xl:w-[36rem] 2xl:h-[38.15rem]' : 'xl:flex lg:mx-auto xl:w-[250%] xl:h-72 2xl:h-[19rem] ml-1 sm:mr-5 sm:ml-6 xl:ml-0 lg:mr-3.5 sm:mb-8 xl:mb-0'}`}>
                {children}
            </div>
        </div>
    )
}