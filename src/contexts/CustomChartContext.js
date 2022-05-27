import { createContext } from "react"

const CustomChartContext = createContext()

export default CustomChartContext

export const CustomChartContextConsumer = CustomChartContext.Consumer
export const CustomChartContextProvider = CustomChartContext.Provider