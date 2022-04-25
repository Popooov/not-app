import { Header, Toggle } from '../components/exports'

export const HeaderContainer = ({ toggle }) => {

    return (
        <div className='
            flex
            justify-between 
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
            <Toggle enabled={toggle.enabled} setEnabled={toggle.setEnabled} />
        </div>
    )
}