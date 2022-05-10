import { EventSourceContextProvider } from './contexts/EventSourceContext'
import useEventSource from './hooks/useEventSource'
import useModes from './hooks/useModes'
import { HeaderContainer, FooterContainer } from './containers/exports'
import { TcsData, Logo, Tooltip, Toggle } from './components/exports'
import { Dashboard } from './pages/Dashboard'

function App() {
  const { enabled, setEnabled, statusData } = useEventSource()
  const { telescopeMode, autoguiderMode } = useModes(statusData)

  return (
    <div className='flex flex-col mx-auto xl:w-auto md:mb-6 xl:mb-0'>
      <EventSourceContextProvider value={{enabled, setEnabled, statusData}}>
        <HeaderContainer>
          <Logo />
          <TcsData name='' data={statusData.DateTimeUT} styles='hidden md:block md:col-start-3 md:col-end-4 md:row-start-1 md:row-end-2 md:justify-self-start' />
          <TcsData name='Telescope' data={telescopeMode} styles='hidden md:block md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:justify-self-start' />
          <TcsData name='TimeST' data={statusData.TimeST} styles='hidden md:block md:col-start-3 md:col-end-4 md:row-start-2 md:row-end-3 md:justify-self-start' />
          <TcsData name='Autoguider' data={autoguiderMode} styles='hidden md:block md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 md:justify-self-start' />
          <Tooltip text={enabled ? 'Turn off the Charts' : 'Turn on the Charts'}>
              <Toggle enabled={enabled} setEnabled={setEnabled} />
          </Tooltip>
        </HeaderContainer>
        <Dashboard />
        <FooterContainer>
          <TcsData name='' data={statusData.DateTimeUT} styles='col-start-1 col-end-2 justify-self-start' />
          <TcsData name='Telescope' data={telescopeMode} styles='col-start-2 col-end-3 justify-self-start' />
          <TcsData name='TimeST' data={statusData.TimeST} styles='col-start-1 col-end-2 justify-self-start' />
          <TcsData name='Autoguider' data={autoguiderMode} styles='col-start-2 col-end-3 justify-self-start' />
        </FooterContainer>
      </EventSourceContextProvider>
    </div>
  )
}

export default App