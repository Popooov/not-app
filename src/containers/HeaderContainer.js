export const HeaderContainer = ({ children }) => {

    return (
            <div className="row-start-1 row-end-2">
                <div className='
                    bg-opacity-95
                    fixed
                    w-screen
                    z-20
                    grid
                    grid-rows-1
                    md:grid-cols-[repeat(12, minmax(10px, _1fr))]
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
                    4xl:py-3
                    4xl:max-w-[1794px]
                    bg-zinc-50
                    drop-shadow-md
                    md:drop-shadow
                    shadow-black
                    visible
                '>
                        {children}
                </div>
            </div>
    )
}


// md:grid-cols-[1fr_1fr_1fr]
// lg:grid-cols-[2.3fr_1fr_1fr]
// xl:grid-cols-[3fr_1fr_1fr]
// 2xl:grid-cols-[4fr_1fr_1.1fr]