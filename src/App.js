import { EventSourceContextProvider } from './contexts/EventSourceContext'
import useChartScales from './hooks/useChartScales'
import useEventSource from './hooks/useEventSource'
import useModes from './hooks/useModes'
import { HeaderContainer, FooterContainer } from './containers/exports'
import { TcsData, Logo, ChartsResetButton } from './components/exports'
import { Dashboard } from './pages/Dashboard'

function App() {
  const { statusData } = useEventSource()
  const { telescopeMode, autoguiderMode } = useModes(statusData)
  // const { reset } = useChartScales()

  return (
    <div className='grid grid-cols-1 grid-rows-1 mx-auto xl:w-auto md:mb-6 xl:mb-0 max-w-[1794px]'>
      <EventSourceContextProvider value={{statusData}}>
        <HeaderContainer>
          <Logo />
          <TcsData type='StatusBox' name='TimeUT' data={statusData.DateTimeUT} styles='hidden xl:text-base md:block md:col-start-11 md:col-end-12 md:row-start-1 md:row-end-2 md:justify-self-start' />
          <TcsData type='StatusBox' name='Telescope' data={telescopeMode} styles='hidden xl:text-base md:block md:col-start-10 lg:col-start-6 lg:col-end-8 xl:col-start-10 xl:col-end-11 md:row-start-1 md:row-end-2 md:justify-self-start' />
          <TcsData type='StatusBox' name='TimeST' data={statusData.TimeST} styles='hidden xl:text-base md:block md:col-start-11 md:col-end-12 md:row-start-2 md:row-end-3 md:justify-self-start' />
          <TcsData type='StatusBox' name='Autoguider' data={autoguiderMode} styles='hidden xl:text-base md:block md:col-start-10 lg:col-start-6 lg:col-end-8 xl:col-start-10 xl:col-end-11 md:row-start-2 md:row-end-3 md:justify-self-start' />
          {/* <ChartsResetButton reset={reset} /> */}
        </HeaderContainer>
        <Dashboard />
        <FooterContainer>
          <TcsData type='StatusBox' name='TimeST' data={statusData.TimeST} styles='row-start-1 col-start-1 col-end-2 justify-self-start' />
          <TcsData type='StatusBox' name='Telescope' data={telescopeMode} styles='row-start-2 col-start-1 col-end-2 justify-self-start' />
          <TcsData type='StatusBox' name='TimeUT' data={statusData.DateTimeUT} styles='row-start-1 col-start-2 col-end-3 justify-self-start' />
          <TcsData type='StatusBox' name='Autoguider' data={autoguiderMode} styles='row-start-2 col-start-2 col-end-3 row-start-1 justify-self-start' />
        </FooterContainer>
      </EventSourceContextProvider>
    </div>
  )
}

export default App