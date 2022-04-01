import {
    IntensityOffsetXarcsec,
    IntensityOffsetYarcsec,
    Wrapper
} from './../components/exports'

export const IntensityOffset = ({ intenOffsetX, intenOffsetY }) => {
    return (
        <Wrapper>
            <IntensityOffsetXarcsec
                IntensityOffsetXarcsec={intenOffsetX}
            />
            <IntensityOffsetYarcsec
                IntensityOffsetYarcsec={intenOffsetY}
            />
        </Wrapper>
    )
}