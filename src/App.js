// import { TCCStatusNow } from "./containers/tccContainer/TccStatusNow"
// import { useFetch } from './hooks/useFetch'
import { useEventSource } from './hooks/useEventSource'
import { HeaderContainer } from './containers/exports'
import { Dashboard } from './pages/Dashboard'
import { EventSourceProvider } from './context/eventSourceContext'

function App() {
  const { enabled, setEnabled, statusData } = useEventSource()

  return (
    <div className='flex flex-col flex-wrap'>
      <EventSourceProvider value={{enabled, setEnabled, statusData}}>
        <HeaderContainer />
        <Dashboard />
      </EventSourceProvider>
    </div>
  )
}

export default App
