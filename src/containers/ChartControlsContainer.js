import { useContext } from 'react'
import ChartContext from '../contexts/ChartContext'

export const ChartControlsContainer = ({ children }) => {

    
    const { chartType } = useContext(ChartContext)

    return (
        <div className={`mb-4 mx-3 sm:mx-3 xl:mb-0 xl:mt-9 flex ${chartType ? 'xl:flex-row xl:justify-end mt-4' : 'xl:flex-col xl:justify-start'} xl:items-start xl:flex-grow-0 items-center justify-end`}>
            {children}
        </div>
    )
    
}