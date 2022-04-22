export const Wrapper = ({ children }) => {
    return (
        <div className={`
                p-2 
                mb-3 
                mx-3
                rounded-md 
                bg-zinc-100
                lg:font-light
                sm:flex 
                sm:flex-col 
                sm:w-[45%] 
                sm:justify-center 
                sm:items-start
                sm:pl-8
                lg:w-[45%]
                lg:h-fit
                xl:w-[80%]
                `}>
            {children}
        </div>
    )
}