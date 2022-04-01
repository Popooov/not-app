import { GuideProbeX, GuideProbeY, Wrapper } from './../components/exports'

export const GuideProbe = ({ gProbeX, gProbeY }) => {
    return (
        <Wrapper>
            <GuideProbeX GuideProbeX={gProbeX} />
            <GuideProbeY GuideProbeY={gProbeY} />
        </Wrapper>
    )
}