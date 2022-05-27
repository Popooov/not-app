export const ChartContainer = ({ styles, children, chartType = '' }) => {

    return (
        // lg:pl-6 lg:pr-12
        <div className={styles}>
            <div className={`${chartType ? 
                    'mb-16 ml-auto mr-1.5 sm:mx-auto lg:ml-5 lg:mr-auto xl:m-0 w-[19rem] h-[21.15rem] 2xs:w-[22.7rem] 2xs:h-[24.85rem] xs:w-[25rem] xs:h-[27.15rem] md:w-[27rem] md:h-[29.15rem] lg:w-[28rem] lg:h-[30.15rem] xl:w-[24rem] xl:h-[26.15rem] 2xl:w-[26rem] 2xl:h-[28.15rem] 3xl:w-[28rem] 3xl:h-[30.15rem] 4xl:w-[30rem] 4xl:h-[32.15rem]'
                    :
                    'xl:flex lg:w-[46vw] lg:h-64 xl:w-[33.5rem] 2xl:w-[40rem] 3xl:w-[45rem] 4xl:w-[55rem] xl:h-72 4xl:h-[19rem] ml-1 sm:mr-5 sm:ml-6 sm:mb-8 lg:mx-0 xl:mb-0 xl:mx-0'}`}>
                {children}
            </div>
        </div>
    )
}