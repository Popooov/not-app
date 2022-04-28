import useHover from "../hooks/useHover"

export const Tooltip = ({ text, children }) => {
    const { hovering, mouseOver, mouseOut } = useHover()

    return (
        <div className="col-start-4 col-end-5 justify-self-end row-span-2 relative" onMouseOver={mouseOver} onMouseOut={mouseOut}>
            {hovering && (
                <div className="
                    absolute 
                    box-border  
                    -top-[19%]
                    right-full
                    md:top-full
                    md:-right-1/4
                    2xl:-top-[58%]
                    w-32
                    mr-3
                    md:mt-2
                    md:mr-[10px]
                    2xl:mt-1.5
                    2xl:mr-16
                    p-1.5
                    md:p-2
                    md:px-2
                    rounded-lg
                    bg-zinc-600 
                    bg-opacity-90
                    text-white 
                    text-center 
                    text-xs
                ">
                    {text}</div>
            )}
                {children}
        </div>
    )
}