import { RotatorPosDeg, FieldRotationDeg, Wrapper } from './../components/exports'

export const Rotation = ({ r, f }) => {
    return (
        <Wrapper>
            <RotatorPosDeg RotatorPosDeg={r} />
            <FieldRotationDeg FieldRotationDeg={f} />
        </Wrapper>
    )
}