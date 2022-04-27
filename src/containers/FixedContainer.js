export const FixedContainer = ({ children }) => {
    return (
        <div className='
            fixed
            grid
            grid-row-2
            grid-col-2
            px-5
            py-2.5
            gap-y-0.5
            w-screen
            bottom-0
            bg-zinc-50
            shadow-md
            shadow-black
            md:hidden
            text-sm
            sm:text-sm
        '>
            {children}
        </div>
    )
}