import { useContext } from 'react'
import EventSourceContext from '../contexts/EventSourceContext'
import useModes from '../hooks/useModes'
import { Header, Toggle, TcsData } from '../components/exports'

export const HeaderContainer = () => {
    const { statusData, enabled, setEnabled } = useContext(EventSourceContext)
    const { telescopeMode, autoguiderMode } = useModes(statusData)
    
    return (
        <div className='
            grid
            grid-rows-1
            md:grid-cols-[5fr_2fr_2fr_1fr]
            lg:grid-cols-[7fr_2fr_2fr_0.45fr]
            gap-0.5
            content-evenly
            items-center
            p-3
            mb-2
            py-4
            sm:py-4
            sm:px-7
            sm:mb-6
            xl:mb-9
            bg-zinc-50
            drop-shadow-md
            md:drop-shadow
            shadow-black
            visible
        '>
            <Header />
            <TcsData name='' data={statusData.DateTimeUT} styles='invisible md:visible md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 md:justify-self-start' />
            <TcsData name='Telescope' data={telescopeMode} styles='invisible md:visible md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:justify-self-start' />
            <TcsData name='TimeST' data={statusData.TimeST} styles='invisible md:visible md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 md:justify-self-start' />
            <TcsData name='Autoguider' data={autoguiderMode} styles='invisible md:visible md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:justify-self-start' />
            <Toggle enabled={enabled} setEnabled={setEnabled} />
        </div>
    )
}