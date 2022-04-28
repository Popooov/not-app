import { useContext } from 'react'
import EventSourceContext from '../contexts/EventSourceContext'
import useModes from '../hooks/useModes'
import { Header, Toggle, TcsData, Tooltip } from '../components/exports'

export const HeaderContainer = () => {
    const { statusData, enabled, setEnabled } = useContext(EventSourceContext)
    const { telescopeMode, autoguiderMode } = useModes(statusData)

    return (
        <div className='
            bg-opacity-95
            fixed
            w-screen
            z-20
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
            md:text-xs
            md:gap-x-4
            xl:mb-4
            xl:text-sm
            bg-zinc-100
            drop-shadow-md
            md:drop-shadow
            shadow-black
            visible
        '>
            <Header />
            <TcsData name='' time={statusData.DateTimeUT} styles='hidden md:block md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 md:justify-self-start' />
            <TcsData name='Telescope' state={telescopeMode} styles='hidden md:block md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:justify-self-start' />
            <TcsData name='TimeST' time={statusData.TimeST} styles='hidden md:block md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 md:justify-self-start' />
            <TcsData name='Autoguider' state={autoguiderMode} styles='hidden md:block md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:justify-self-start' />
            <Tooltip text={enabled ? 'Turn off the Charts' : 'Turn on the Charts'}>
                <Toggle enabled={enabled} setEnabled={setEnabled} />
            </Tooltip>
        </div>
    )
}