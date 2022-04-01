import {
    AirMass, 
    ObjectPointedToObjectName, 
    TelescopeModeNumber,
    Wrapper
} from './../components/exports'

export const Others = ({ air, objPointed, tsModeNum }) => {
    return (
        <Wrapper>
            <AirMass AirMass={air} />
            <ObjectPointedToObjectName 
                ObjectPointedToObjectName={objPointed}
            />
            <TelescopeModeNumber
                TelescopeModeNumber={tsModeNum}
            />
        </Wrapper>
    )
}