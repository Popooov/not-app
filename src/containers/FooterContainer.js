export const FooterContainer = ({ children }) => {
    return (
        <div className="row-start-3 row-end-4">
            <div className='
                bg-opacity-95
                fixed
                grid
                grid-row-2
                grid-col-2
                px-6
                py-3
                gap-y-0.5
                gap-x-8
                w-screen
                bottom-0
                bg-zinc-50
                drop-shadow-2xl
                shadow-sm
                shadow-zinc-900
                md:hidden
                text-xs
                sm:text-sm
                sm:place-content-evenly
            '>
                {children}
            </div>
        </div>
    )
}