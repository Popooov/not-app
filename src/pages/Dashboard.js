// import { useEventSource } from '../hooks/useEventSource'
import IntensityLineChart from '../guide-charts/IntensityLineChart'
import {
    Actual,
    AutoGuider,
    CameraProbe,
    CCDFilt,
    DateTime,
    Fies,
    FocusPos,
    GuideProbe,
    IntensityOffset,
    Others,
    Rotation } from '../containers/exports'

export const Dashboard = ({ statusData, enabled }) => {
    // console.log(statusData)
    return (
        <>
            <IntensityLineChart
                data={statusData}
                enabled={enabled}
            />
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
            <IntensityOffset
                intenOffsetX={statusData.IntensityOffsetXarcsec}
                intenOffsetY={statusData.IntensityOffsetYarcsec}
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
        </>
    )
}