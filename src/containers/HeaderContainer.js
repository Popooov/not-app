import useModes from '../hooks/useModes'
import { Header, Toggle } from '../components/exports'
import { TcsData } from '../components/TcsData'

export const HeaderContainer = ({ toggle, data }) => {
    const { telescopeMode, autoguiderModeMode } = useModes(data)
    
    return (
        <div className='
            grid
            grid-rows-1
            md:grid-cols-[5fr_2fr_1fr]
            lg:grid-cols-[7fr_2fr_0.5fr]
            gap-x-4
            content-between
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
            <TcsData name='Telescope' data={telescopeMode} styles='col-start-2 col-end-3 row-start-1 row-end-2 justify-self-center sm:justify-self-start text-xs sm:text-sm lg:text-base' />
            <TcsData name='Autoguider' data={autoguiderModeMode} styles='col-start-2 col-end-3 row-start-2 row-end-3 justify-self-center sm:justify-self-start text-xs sm:text-sm lg:text-base' />
            <Toggle enabled={toggle.enabled} setEnabled={toggle.setEnabled} />
        </div>
    )
}