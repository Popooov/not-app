import { DateTimeUT, TimeST, Wrapper } from './../components/exports'

export const DateTime = ({ date, time }) => {
    return (
        <Wrapper>
            <DateTimeUT DateTimeUT={date}  />
            <TimeST TimeST={time} />
        </Wrapper>
    )
}