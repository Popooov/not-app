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
                sm:basis-40
                lg:grid
                lg:content-center
                pl-4 
                py-3
                mb-3 
                mx-3
                rounded-md 
                bg-zinc-100
                xs:text-sm
                sm:text-base
                font-light
                md:pl-6
                lg:self-stretch
                lg:font-light
                lg:m-0
                lg:pl-5
                lg:w-[13rem]
                lg:min-w-[14rem]
                xl:max-w-[17rem]
                xl:min-w-[15.5rem]
                xl:pl-3
                xl:pr-12
                xl:w-full
            `
        }>
            {children}
        </div>
    )
}