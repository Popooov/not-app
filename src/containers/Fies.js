import { CtrXdist, CtrYdist, Xfilter, Yfilter, Wrapper } from './../components/exports'

export const Fies = ({ ctrX, ctrY, xFilt, yFilt }) => {
    return (
        <Wrapper>
            <CtrXdist CtrXdist={ctrX} />
            <CtrYdist CtrYdist={ctrY} />
            <Xfilter Xfilter={xFilt} />
            <Yfilter Yfilter={yFilt} />
        </Wrapper>
    )
}