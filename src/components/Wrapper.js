// const styles = `
//     p-2
//     bg-gradient-to-r
//     from-sky-700
//     to-cyan-600 m-2
//     text-gray-100
//     rounded-md
// `

export const Wrapper = ({ children }) => {
    return (
        <div className='p-2 mb-3 mx-3 rounded-md font-thin bg-zinc-100'>
            {children}
        </div>
    )
}