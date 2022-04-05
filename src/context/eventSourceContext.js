import { createContext } from "react"

const EventSourceContext = createContext()

export default EventSourceContext

export const EventSourceConsumer = EventSourceContext.Consumer
export const EventSourceProvider = EventSourceContext.Provider