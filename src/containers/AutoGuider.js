import {
    AutoguiderModeNumber,
    AutoguiderGuideStarLost,
    AutoguiderContrast,
    Wrapper
} from './../components/exports'

export const AutoGuider = ({ modeNum, starLost, contrast }) => {
    return (
        <Wrapper>
            <AutoguiderModeNumber
                AutoguiderModeNumber={modeNum}
            />
            <AutoguiderGuideStarLost
                AutoguiderGuideStarLost={starLost}
            />
            <AutoguiderContrast
                AutoguiderContrast={contrast}
            />
        </Wrapper>
    )
}