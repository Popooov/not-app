import { EventSourceContextProvider } from './contexts/EventSourceContext'
import useEventSource from './hooks/useEventSource'
import { HeaderContainer } from './containers/exports'
import { Dashboard } from './pages/Dashboard'

function App() {
  const { enabled, setEnabled, statusData } = useEventSource()

  return (
    <div className='flex flex-col mx-auto xl:w-auto md:mb-6'>
      <EventSourceContextProvider value={{enabled, setEnabled, statusData}}>
        <HeaderContainer />
        <Dashboard />
      </EventSourceContextProvider>
    </div>
  )
}

export default App