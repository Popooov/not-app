import GuideErrorsChart from '../guide-charts/GuideErrorsChart'
import GuideIntensityChart from '../guide-charts/GuideIntensityChart'
import FiberGuiderChart from '../guide-charts/FiberGuiderChart'
import {
    Actual,
    AutoGuider,
    CameraProbe,
    CCDFilt,
    DateTime,
    Fies,
    FocusPos,
    GuideProbe,
    Others,
    Rotation } from '../containers/exports'

export const Dashboard = ({ statusData, enabled }) => {

    return (
        <div className='xl:flex xl:justify-evenly'>
            <div className='xl:w-[60%]'>
                <GuideErrorsChart
                    data={statusData}
                    enabled={enabled}
                    xLabel='Guide Errors'
                />
                <GuideIntensityChart
                    data={statusData}
                    enabled={enabled}
                    xLabel='Guide Intensity'
                />
                <FiberGuiderChart
                    data={statusData}
                    enabled={enabled}
                    xLabel='Fiber Guider'
                />
            </div>
            <div className='flex flex-col sm:flex-row flex-wrap sm:justify-between sm:mx-5 xl:w-[30%] xl:justify-evenly xl:items-end'>    
                <DateTime
                    date={statusData.DateTimeUT}
                    time={statusData.TimeST}
                />
                <CameraProbe
                    inSplit={statusData.CameraProbeInSplitPos}
                    inCCD={statusData.CameraProbeInCCDpos}
                />
                <Actual
                    ra={statusData.ActualRAhours}
                    dec={statusData.ActualDECdeg}
                />
                <Others
                    air={statusData.AirMass}
                    objPointed={statusData.ObjectPointedToObjectName}
                    tsModeNum={statusData.TelescopeModeNumber}
                />
                <Rotation
                    r={statusData.RotatorPosDeg}
                    f={statusData.FieldRotationDeg}
                />
                <FocusPos
                    focMainP={statusData.FocusMainPos}
                    focDeltaP={statusData.FocusDeltaPos}
                />
                <CCDFilt
                    ccdFiltName={statusData.CCDfiltName}
                    ccdFilterNum={statusData.CCDfilterNumber}
                />
                <GuideProbe
                    gProbeX={statusData.GuideProbeX}
                    gProbeY={statusData.GuideProbeY}
                />
                <AutoGuider
                    modeNum={statusData.AutoguiderModeNumber}
                    starLost={statusData.AutoguiderGuideStarLost}
                    contrast={statusData.AutoguiderContrast}
                />
                <Fies
                    ctrX={statusData.CtrXdist}
                    ctrY={statusData.CtrYdist}
                    xFilt={statusData.Xfilter}
                    yFilt={statusData.Yfilter}
                />
            </div>
        </div>
    )
}