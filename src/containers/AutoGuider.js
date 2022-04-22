import {
    AutoguiderModeNumber,
    AutoguiderGuideStarLost,
    Wrapper
} from './../components/exports'

export const AutoGuider = ({ modeNum, starLost }) => {
    return (
        <Wrapper>
            <AutoguiderModeNumber
                AutoguiderModeNumber={modeNum}
            />
            <AutoguiderGuideStarLost
                AutoguiderGuideStarLost={starLost}
            />
        </Wrapper>
    )
}