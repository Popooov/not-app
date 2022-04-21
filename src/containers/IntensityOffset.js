import {
    IntensityOffsetXarcsec,
    IntensityOffsetYarcsec,
    Wrapper
} from './../components/exports'

export const IntensityOffset = ({ intenOffsetX, intenOffsetY }) => {
    return (
        <Wrapper>
            <IntensityOffsetXarcsec
                name='IntensityOffsetXarcsec'
                data={intenOffsetX}
            />
            <IntensityOffsetYarcsec
                name='IntensityOffsetYarcsec'
                data={intenOffsetY}
            />
        </Wrapper>
    )
}