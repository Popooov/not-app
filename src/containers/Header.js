import { Header, Toggle } from './../components/exports'

export const HeaderContainer = ({ toggle }) => {

    return (
        <div className='
            flex
            justify-between 
            items-center 
            p-3
            mb-0 
            sm:mx-5 
            sm:my-2 
            xl:mt-4
            2xl:mx-20
            2xl:mr-36
            
            '>
            <Header />
            <Toggle enabled={toggle.enabled} setEnabled={toggle.setEnabled} />
        </div>
    )
}