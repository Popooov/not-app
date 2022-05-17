import { useContext } from 'react'
import ChartContext from '../contexts/ChartContext'

export const ChartControlsContainer = ({ children }) => {

    
    const { chartType } = useContext(ChartContext)

    return (
        <div className={`mb-4 mx-3 sm:mx-3 xl:mb-0 flex ${chartType ? 'xl:flex-row xl:justify-end mr-1.5 sm:mr-1 xl:mt-0' : 'xl:flex-col xl:justify-start xl:mt-9 '} xl:items-start xl:flex-grow-0 items-center justify-end`}>
            {children}
        </div>
    )
    
}