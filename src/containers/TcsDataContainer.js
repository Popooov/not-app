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
                md:pl-6
                lg:font-light
                xl:pl-6
                xl:pr-12
                xl:w-full
                2xl:text-xl
            `
        }>
            {children}
        </div>
    )
}