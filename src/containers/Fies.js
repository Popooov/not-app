import { CtrXdist, CtrYdist, Wrapper } from './../components/exports'

export const Fies = ({ ctrX, ctrY }) => {
    return (
        <Wrapper>
            <CtrXdist CtrXdist={ctrX} />
            <CtrYdist CtrYdist={ctrY} />
        </Wrapper>
    )
}