import { FocusMainPos, FocusDeltaPos, Wrapper } from './../components/exports'

export const FocusPos = ({ focMainP, focDeltaP }) => {
    return (
        <Wrapper>
            <FocusMainPos FocusMainPos={focMainP} />
            <FocusDeltaPos FocusDeltaPos={focDeltaP} />
        </Wrapper>
    )
}