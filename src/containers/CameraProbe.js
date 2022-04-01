import { 
    CameraProbeInSplitPos, 
    CameraProbeInCCDpos,
    Wrapper
} from './../components/exports'

export const CameraProbe = ({ inSplit, inCCD }) => {
    return (
        <Wrapper>
            <CameraProbeInSplitPos CameraProbeInSplitPos={inSplit} />
            <CameraProbeInCCDpos CameraProbeInCCDpos={inCCD} />
        </Wrapper>
    )
}