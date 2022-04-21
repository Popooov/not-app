// import { TCCStatusNow } from "./containers/tccContainer/TccStatusNow"
// import { useFetch } from './hooks/useFetch'
import { useEventSource } from './hooks/useEventSource'
import { HeaderContainer } from './containers/exports'
import { Dashboard } from './pages/Dashboard'

function App() {
  const { enabled, setEnabled, statusData } = useEventSource()

  return (
    <div className='flex flex-col md:mx-auto md:mb-6 lg:max-w-6xl '>
        <HeaderContainer toggle={{enabled, setEnabled}} />
        <Dashboard statusData={statusData} enabled={enabled} />
    </div>
  )
}

export default App