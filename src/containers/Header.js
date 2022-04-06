import { Header, Toggle } from './../components/exports'

export const HeaderContainer = ({ toggle }) => {

    return (
        <div className='flex justify-between items-center py-4 px-3 mb-0'>
            <Header />
            <Toggle enabled={toggle.enabled} setEnabled={toggle.setEnabled} />
        </div>
    )
}