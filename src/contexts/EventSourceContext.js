import { createContext } from "react"

const EventSourceContext = createContext()

export default EventSourceContext

export const EventSourceContextConsumer = EventSourceContext.Consumer
export const EventSourceContextProvider = EventSourceContext.Provider