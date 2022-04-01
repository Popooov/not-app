import { ActualRAhours, ActualDECdeg, Wrapper } from './../components/exports'

export const Actual = ({ ra, dec }) => {
    return (
        <Wrapper>
            <ActualRAhours ActualRAhours={ra} />
            <ActualDECdeg ActualDECdeg={dec} />
        </Wrapper>
    )
}