export const IntensityOffsetYarcsec = ({ name, data }) => {
    return (
        <p>
            {name}: {Math.trunc(data * 100) / 100}
        </p>
    )
}