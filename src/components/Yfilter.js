export const Yfilter = ({ name, data }) => {
    return (
        <p>{name}: {(data * .24).toFixed(2)}</p>
    )
}