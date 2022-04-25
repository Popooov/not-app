export const TcsDataContainer = ({ children }) => {
    return (
        <div className={
            `
                pl-4 
                py-3
                mb-3 
                mx-3
                rounded-md 
                bg-zinc-100
                text-base
                font-light
                sm:flex 
                sm:flex-col 
                sm:w-[45%] 
                sm:justify-center 
                sm:items-start
                md:pl-6
                lg:font-light
                lg:w-[45%]
                lg:h-fit
                xl:w-[80%]
                2xl:text-xl
            `
        }>
            {children}
        </div>
    )
}