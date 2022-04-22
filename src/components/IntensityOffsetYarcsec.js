export const IntensityOffsetYarcsec = ({ name, data }) => {
    return (
        <p>
            {name}: {(data * 1).toFixed(2)}
        </p>
    )
}