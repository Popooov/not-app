import { Header, Toggle } from './../components/exports'
import { useContext } from 'react'
import EventSourceContext from '../context/eventSourceContext'

export const HeaderContainer = () => {
    const { enabled, setEnabled } = useContext(EventSourceContext)

    return (
        <div className='flex justify-between items-center py-4 px-3 mb-0'>
            <Header />
            <Toggle enabled={enabled} setEnabled={setEnabled} />
        </div>
    )
}