import ScaleListBox from "../components/ScaleListBox"
import ResetButton from "../components/Button"
import { scaleNames } from "../utils/customScales"

const ScaleButtons = ({ selected, setSelected, resetLines }) => {
    const { selectedScaleX, selectedScaleY } = selected
    const { setSelectedScaleX, setSelectedScaleY } = setSelected

    return (
        <div className='mb-9 flex justify-evenly items-center sm:justify-end sm:mr-8'>
            <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
            <ScaleListBox scale={scaleNames('y')} selected={selectedScaleY} setSelected={setSelectedScaleY} />
            <ResetButton reset={resetLines} />
        </div>
    )
    
}

export default ScaleButtons