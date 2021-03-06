import { useContext } from 'react'
import ChartContext from '../contexts/ChartContext'

export const ChartControlsContainer = ({ children }) => {

    
    const { chartType } = useContext(ChartContext)

    return (
        <div className={`mb-4 xl:mb-0 flex flex-wrap ${chartType ? 'xl:flex-row xl:justify-end' : 'mx-1.5 xl:flex-col xl:justify-start xl:mt-9'} xl:items-start xl:flex-grow-0 items-center justify-end`}>
            {children}
        </div>
    )
    
}