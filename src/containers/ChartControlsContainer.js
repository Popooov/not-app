// import ScaleListBox from "../components/ScaleListBox"
// import ResetButton from "../components/Button"
// import { scaleNames } from "../utils/customScales"

const ChartControlsContainer = ({ children }) => {

    return (
        <div className='mb-6 flex justify-evenly items-center sm:justify-end sm:mr-8'>
            {children}
        </div>
    )
    
}

export default ChartControlsContainer

{/* <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
<ScaleListBox scale={scaleNames('y')} selected={selectedScaleY} setSelected={setSelectedScaleY} />
<ResetButton reset={resetLines} /> */}