import { EventSourceContextProvider } from './contexts/EventSourceContext'
import useEventSource from './hooks/useEventSource'
import useModes from './hooks/useModes'
import { HeaderContainer, FixedContainer } from './containers/exports'
import { TcsData } from './components/exports'
import { Dashboard } from './pages/Dashboard'

function App() {
  const { enabled, setEnabled, statusData } = useEventSource()
  const { telescopeMode, autoguiderMode } = useModes(statusData)

  return (
    <div className='flex flex-col mx-auto xl:w-auto md:mb-6 xl:mb-0'>
      <EventSourceContextProvider value={{enabled, setEnabled, statusData}}>
        <HeaderContainer />
        <Dashboard />
        <FixedContainer>
          <TcsData name='' time={statusData.DateTimeUT} styles='col-start-1 col-end-2 justify-self-start' />
          <TcsData name='Telescope' state={telescopeMode} styles='col-start-2 col-end-3 justify-self-end' />
          <TcsData name='TimeST' time={statusData.TimeST} styles='col-start-1 col-end-2 justify-self-start' />
          <TcsData name='Autoguider' state={autoguiderMode} styles='col-start-2 col-end-3 justify-self-end' />
        </FixedContainer>
      </EventSourceContextProvider>
    </div>
  )
}

export default App