import { scaleNames } from "../utils/utils"
import { ChartContextProvider } from '../context/ChartContext'
import useChartLogic from '../hooks/useChartLogic'
import { TcsData } from '../components/TcsData'
import { TcsDataContainer, ChartContainer, ChartControlsContainer } from '../containers/exports'
import { decdegToHms, decTimeToHms, floorData, useWhenEmpty } from '../utils/utils'
import Chart from '../guide-charts/Chart'
import Line from '../guide-charts/Line'
import Axis from '../guide-charts/Axis'
import { ScaleListBox, Button as ResetButton } from '../components/exports'

export const Dashboard = ({ statusData, enabled }) => {
    
    
    return (
        <div className='xl:flex xl:justify-evenly'>
            <div className='xl:w-[60%] xl:flex-grow sm:ml-5 xl:ml-7'>
                <ChartContextProvider value={useChartLogic(statusData, enabled, 'IntensityOffsetXarcsec', 'IntensityOffsetYarcsec')}>
                    <ChartContainer>
                        <Chart>
                            <Line
                                accessor='y1'
                                color='#D32F2F' // red
                            />
                            <Line
                                accessor='y2'
                                color='#1976D2' // blue
                            />
                            <Axis // Horizontal
                                dimension='x'
                                xLabel='Guide Errors'
                                dataLabelOne='X'
                                dataLabelTwo='Y'
                                x={floorData(statusData.IntensityOffsetXarcsec)}
                                y={floorData(statusData.IntensityOffsetYarcsec)}
                            />
                            <Axis // Vertical
                                dimension='y'
                            />
                        </Chart>
                        <ChartControlsContainer>
                            <ScaleListBox scale={scaleNames('x')} selected='scaleX' />
                            <ScaleListBox scale={scaleNames('y')} selected='scaleY' />
                            <ResetButton />
                        </ChartControlsContainer>
                    </ChartContainer>
                </ChartContextProvider>
                
                <ChartContextProvider value={useChartLogic(statusData, enabled, 'AutoguiderContrast')}>
                    <ChartContainer>
                        <Chart>
                            <Line
                                accessor='y1'
                                color='#D32F2F' // red
                            />
                            <Axis // Horizontal
                                dimension='x'
                                xLabel='Guide Intensity'
                                dataLabelOne='Contrast'
                                x={floorData(statusData.AutoguiderContrast)}
                            />
                            <Axis // Vertical
                                dimension='y'
                            />
                        </Chart>
                        <ChartControlsContainer>
                            <ScaleListBox scale={scaleNames('x')} selected='scaleX' />
                            <ResetButton />
                        </ChartControlsContainer>
                    </ChartContainer>
                </ChartContextProvider>
                
                <ChartContextProvider value={useChartLogic(statusData, enabled, 'Xfilter', 'Yfilter')}>
                    <ChartContainer>
                        <Chart>
                            <Line
                                accessor='y1'
                                color='#D32F2F' // red
                            />
                            <Line
                                accessor='y2'
                                color='#1976D2' // red
                            />
                            <Axis // Horizontal
                                dimension='x'
                                xLabel='Fiber Guider'
                                dataLabelOne='X'
                                dataLabelTwo='Y'
                                x={floorData(statusData.Xfilter)  * 0.24}
                                y={floorData(statusData.Yfilter)  * 0.24}
                            />
                            <Axis // Vertical
                                dimension='y'
                            />
                        </Chart>
                        <ChartControlsContainer>
                            <ScaleListBox scale={scaleNames('x')} selected='scaleX' />
                            <ScaleListBox scale={scaleNames('y')} selected='scaleY' />
                            <ResetButton />
                        </ChartControlsContainer>
                    </ChartContainer>
                </ChartContextProvider>
            </div>
            <div className='flex flex-col sm:flex-row flex-wrap sm:justify-between sm:mx-5 xl:mx-0 xl:w-[30%] xl:justify-center xl:items-center'>
                <TcsDataContainer>
                    <TcsData name='DateTimeUT' data={statusData.DateTimeUT} />
                    <TcsData name='TimeST' data={statusData.TimeST} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='CameraProbeInSplitPos' data={statusData.CameraProbeInSplitPos} />
                    <TcsData name='CameraProbeInCCDpos' data={statusData.CameraProbeInCCDpos} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='ActualRAhours' data={decTimeToHms(statusData.ActualRAhours)} />
                    <TcsData name='ActualDECdeg' data={decdegToHms(statusData.ActualDECdeg)} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='AirMass' data={floorData(statusData.AirMass)} />
                    <TcsData name='ObjectPointedToObjectName' data={useWhenEmpty(statusData.ObjectPointedToObjectName, 'Zenith')} />
                    <TcsData name='TelescopeModeNumber' data={statusData.TelescopeModeNumber} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='RotatorPosDeg' data={statusData.RotatorPosDeg} />
                    <TcsData name='FieldRotationDeg' data={statusData.FieldRotationDeg} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='FocusMainPos' data={statusData.FocusMainPos} />
                    <TcsData name='FocusDeltaPos' data={statusData.FocusDeltaPos} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='CCDfiltName' data={statusData.CCDfiltName} />
                    <TcsData name='CCDfilterNumber' data={statusData.CCDfilterNumber} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='GuideProbeX' data={statusData.GuideProbeX} />
                    <TcsData name='GuideProbeY' data={statusData.GuideProbeY} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='AutoguiderModeNumber' data={statusData.AutoguiderModeNumber} />
                    <TcsData name='AutoguiderGuideStarLost' data={statusData.AutoguiderGuideStarLost} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='CtrXdist' data={statusData.CtrXdist} />
                    <TcsData name='CtrYdist' data={statusData.CtrYdist} />
                </TcsDataContainer>
            </div>
        </div>
    )
}