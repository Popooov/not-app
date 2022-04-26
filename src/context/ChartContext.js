import { createContext } from "react"

const ChartContext = createContext()

export default ChartContext

export const ChartContextConsumer = ChartContext.Consumer
export const ChartContextProvider = ChartContext.Provider