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
    <div className='flex flex-col mx-auto xl:w-auto md:mb-6'>
      <EventSourceContextProvider value={{enabled, setEnabled, statusData}}>
        <HeaderContainer />
        <Dashboard />
        <FixedContainer>
          <TcsData name='' data={statusData.DateTimeUT} styles='col-start-1 col-end-2 justify-self-start' />
          <TcsData name='Telescope' data={telescopeMode} styles='col-start-2 col-end-3 justify-self-end' />
          <TcsData name='TimeST' data={statusData.TimeST} styles='col-start-1 col-end-2 justify-self-start' />
          <TcsData name='Autoguider' data={autoguiderMode} styles='col-start-2 col-end-3 justify-self-end' />
        </FixedContainer>
      </EventSourceContextProvider>
    </div>
  )
}

export default App