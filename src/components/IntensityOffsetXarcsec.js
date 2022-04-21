export const IntensityOffsetXarcsec = ({ name, data }) => {
    return (
        <p>
            {name}: {Math.trunc(data * 100) / 100}
        </p>
    )
}