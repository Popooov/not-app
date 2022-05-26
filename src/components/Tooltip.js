import useHover from "../hooks/useHover"

export const Tooltip = ({ text, children }) => {
    const { hovering, mouseOver, mouseOut } = useHover()

    return (
        <div className="relative col-start-4 col-end-5 place-self-center row-span-2" onMouseOver={mouseOver} onMouseOut={mouseOut}>
            {hovering && (
                <div className="
                    absolute 
                    box-border
                    -top-[19%]
                    right-full
                    md:top-full
                    md:-right-1/4
                    4xl:-top-[58%]
                    w-32
                    mr-3
                    md:mt-2
                    md:mr-[10px]
                    4xl:mt-1.5
                    4xl:mr-16
                    p-1.5
                    md:p-2
                    md:px-2
                    rounded-lg
                    bg-zinc-700 
                    bg-opacity-70
                    text-white 
                    text-center 
                    text-xs
                ">
                    {text}
                </div>
            )}
                {children}
        </div>
    )
}