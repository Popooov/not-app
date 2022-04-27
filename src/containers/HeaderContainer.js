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
            md:grid-cols-[5fr_2fr_1fr]
            lg:grid-cols-[7fr_2fr_0.45fr]
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
          bg-zinc-100
        '>
            <Header />
            <TcsData name='Telescope' data={telescopeMode} styles='col-start-2 col-end-3 row-start-1 row-end-2 justify-self-start text-xs sm:text-sm lg:text-base' />
            <TcsData name='Autoguider' data={autoguiderMode} styles='col-start-2 col-end-3 row-start-2 row-end-3 justify-self-start text-xs sm:text-sm lg:text-base' />
            <Toggle enabled={enabled} setEnabled={setEnabled} />
        </div>
    )
}