export const TcsDataContainer = ({ children }) => {

    // sm:last-of-type:shrink-1
    // sm:last-of-type:grow-0
    // sm:last-of-type:basis-2/5
    // xs:last-of-type:basis-2/5

    return (
        <div className={
            `   
                xs:flex-auto
                xs:basis-32
                lg:grid
                lg:content-center
                lg:last:grow-0
                lg:last:basis-[32.5%]
                xl:last:basis-[48.7%]
                4xl:last:basis-[48.85%]
                px-4
                py-3 
                mx-3
                sm:mx-0
                bg-zinc-100
                xs:text-sm
                sm:text-base
                font-light
                md:px-6
                lg:self-stretch
                lg:font-light
                lg:px-5
                lg:w-full
                xl:px-3
                xl:m-0
                md:border-zinc-500
                xl:border-0
                sm:flex-[1_1_40%]
                md:flex-[1_1_45%]
                lg:flex-[1_1_30%]
                xl:flex-[1_1_40%]
                4xl:flex-[1_1_10%]
            `
        }>
            {children}
        </div>
    )
}