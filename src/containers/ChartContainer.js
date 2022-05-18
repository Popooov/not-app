import { useContext } from "react"
import ChartContext from "../contexts/ChartContext"


export const ChartContainer = ({ styles, children }) => {

    const { chartType } = useContext(ChartContext)

    return (
        // lg:pl-6 lg:pr-12
        <div className={styles}>
            <div className={`${chartType ? 
                    'mb-16 ml-auto mr-1.5 sm:mx-auto lg:ml-5 lg:mr-auto xl:mr-5 w-[19rem] h-[21.15rem] 2xs:w-[22.7rem] 2xs:h-[24.85rem] xs:w-[26rem] xs:h-[28.15rem] md:w-[27rem] md:h-[29.15rem] lg:w-[28rem] lg:h-[30.15rem] xl:w-[22rem] xl:h-[24.15rem] 2xl:w-[30rem] 2xl:h-[32.15rem] 3xl:w-[36rem] 3xl:h-[38.15rem]'
                    :
                    'xl:flex lg:w-[46vw] lg:h-64 xl:w-[45vw] xl:h-72 2xl:h-[19rem] ml-1 sm:mr-5 sm:ml-6 sm:mb-8 lg:mx-0 xl:mb-0 xl:mx-0'}`}>
                {children}
            </div>
        </div>
    )
}