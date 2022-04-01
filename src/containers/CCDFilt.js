import { CCDfiltName, CCDfilterNumber, Wrapper } from './../components/exports'

export const CCDFilt = ({ ccdFiltName, ccdFilterNum }) => {
    return (
        <Wrapper>
            <CCDfiltName CCDfiltName={ccdFiltName} />
            <CCDfilterNumber CCDfilterNumber={ccdFilterNum} />
        </Wrapper>
    )
}