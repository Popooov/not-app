export const HeaderContainer = ({children}) => {

    return (
        <div className='
            bg-opacity-95
            fixed
            w-screen
            z-20
            grid
            grid-rows-1
            md:grid-cols-[5fr_2.5fr_2fr_1fr]
            lg:grid-cols-[7fr_2.5fr_2fr_0.45fr]
            gap-0.5
            content-evenly
            items-center
            p-3
            mb-2
            py-4
            sm:py-4
            lg:py-2
            sm:px-7
            sm:mb-6
            md:text-xs
            md:gap-x-4
            xl:mb-4
            xl:text-sm
            bg-zinc-50
            drop-shadow-md
            md:drop-shadow
            shadow-black
            visible
        '>
            {children}
        </div>
    )
}