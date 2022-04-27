import { useContext } from 'react'
import EventSourceContext from '../contexts/EventSourceContext'
import { ChartContextProvider } from '../contexts/ChartContext'
import useChartLogic from '../hooks/useChartLogic'
import { Axis, Line, Chart, DimensionLabel, DataLabel } from '../guide-charts/exports'
import { TcsDataContainer, ChartContainer, ChartControlsContainer } from '../containers/exports'
import { scaleNames, decdegToHms, decTimeToHms, toFixedNum, useWhenEmpty } from '../utils/utils'
import { ScaleListBox, Button as ResetButton, TcsData } from '../components/exports'
import useModes from "../hooks/useModes"

export const Dashboard = () => {
    const { statusData } = useContext(EventSourceContext)
    const { telescopeMode, autoguiderMode } = useModes(statusData)
    
    return (
        <div className='xl:flex xl:justify-evenly'>
            <div className='xl:w-[60%] xl:flex-grow sm:ml-5 xl:ml-7'>
                <ChartContextProvider value={useChartLogic('IntensityOffsetXarcsec', 'IntensityOffsetYarcsec')}>
                    <ChartContainer>
                        <Chart>
                            <Line accessor='y1' color='#D32F2F' />
                            <Line accessor='y2' color='#1976D2' />
                            <Axis dimension='x'>
                                <DimensionLabel name='Guide Errors' />
                                <DataLabel coordinateX='115' color='red'>
                                    <TcsData type='label' name='X' data={toFixedNum(statusData.IntensityOffsetXarcsec)} />
                                </DataLabel>
                                <DataLabel coordinateX='30' color='blue'>
                                    <TcsData type='label' name='Y' data={toFixedNum(statusData.IntensityOffsetYarcsec)} />
                                </DataLabel>
                            </Axis>
                            <Axis dimension='y' />
                        </Chart>
                        <ChartControlsContainer>
                            <ScaleListBox scale={scaleNames('x')} selected='scaleX' />
                            <ScaleListBox scale={scaleNames('y')} selected='scaleY' />
                            <ResetButton />
                        </ChartControlsContainer>
                    </ChartContainer>
                </ChartContextProvider>
                
                <ChartContextProvider value={useChartLogic('AutoguiderContrast')}>
                    <ChartContainer>
                        <Chart>
                            <Line accessor='y1' color='#D32F2F' />
                            <Axis dimension='x'>
                            <DimensionLabel name='Guide Intensity' />
                            <DataLabel coordinateX='65' color='red'>
                                <TcsData type='label' name='Intensity' data={toFixedNum(statusData.AutoguiderContrast)} />
                            </DataLabel>
                        </Axis>
                            <Axis dimension='y' />
                        </Chart>
                        <ChartControlsContainer>
                            <ScaleListBox scale={scaleNames('x')} selected='scaleX' />
                            <ResetButton />
                        </ChartControlsContainer>
                    </ChartContainer>
                </ChartContextProvider>
                
                <ChartContextProvider value={useChartLogic('Xfilter', 'Yfilter')}>
                    <ChartContainer>
                        <Chart>
                            <Line accessor='y1' color='#D32F2F' />
                            <Line accessor='y2' color='#1976D2' />
                            <Axis dimension='x'>
                                <DimensionLabel name='Fiber Guider' />
                                <DataLabel coordinateX='115' color='red'>
                                    <TcsData type='label' name='X' data={toFixedNum(statusData.Xfilter)  * 0.24} />
                                </DataLabel>
                                <DataLabel coordinateX='30' color='blue'>
                                    <TcsData type='label' name='Y' data={toFixedNum(statusData.Yfilter)  * 0.24} />
                                </DataLabel>
                            </Axis>
                            <Axis dimension='y' />
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
                    <TcsData name='Telescope' data={telescopeMode} />
                    <TcsData name='Autoguider' data={autoguiderMode} />
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
                    <TcsData name='AirMass' data={toFixedNum(statusData.AirMass)} />
                    <TcsData name='ObjectPointedToObjectName' data={useWhenEmpty(statusData.ObjectPointedToObjectName, 'Zenith')} />
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
                    <TcsData name='CtrXdist' data={statusData.CtrXdist} />
                    <TcsData name='CtrYdist' data={statusData.CtrYdist} />
                </TcsDataContainer>
            </div>
        </div>
    )
}