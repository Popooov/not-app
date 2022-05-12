import { useContext } from 'react'
import EventSourceContext from '../contexts/EventSourceContext'
import { ChartContextProvider } from '../contexts/ChartContext'
import useChartScales from '../hooks/useChartScales'
import { Axis, Line, Chart, Circles, DimensionLabel, DataLabel, AutoHorizontalLine, AutoVerticalLine } from '../guide-charts/exports'
import { TcsDataContainer, ChartContainer, ChartControlsContainer } from '../containers/exports'
import { scaleNames, decdegToHms, decTimeToHms, toFixedNum, floorData, useWhenEmpty } from '../utils/utils'
import { ScaleListBox, Button as ResetButton, TcsData } from '../components/exports'

export const Dashboard = () => {
    const { statusData } = useContext(EventSourceContext)
    
    // xl:flex xl:justify-evenly mt-16 sm:mt-20 lg:mt-24
    //grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr]
    //grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr]
    //xl:grid xl:auto-cols-fr xl:auto-rows-fr
    return (
        <div className='lg:grid lg:grid-cols-2 lg:auto-rows-[.5fr] xl:grid-flow-col xl:auto-cols-[minmax(1fr,_42vw)] xl:auto-rows-[minmax(1fr,_20rem)] mt-16 sm:mt-20 lg:mt-24 xl:mx-8 2xl:mx-16 xl:max-w-fit'>
                <ChartContextProvider value={useChartScales('IntensityOffsetXarcsec', 'IntensityOffsetYarcsec')}>
                    <ChartContainer lgRowStart='1' lgRowEnd='2' lgColStart='1' xlRowStart='1' xlColStart='1' xlColEnd='3'>
                        <Chart>
                            <AutoHorizontalLine stroke='#dadada' strokeWidth='1' />
                            <Line accessor='y1' color='#D32F2F' />
                            <Line accessor='y2' color='#1976D2' />
                            <Axis dimension='x'>
                                <DimensionLabel name='Guide Errors' />
                                <DataLabel coordinateX='115' color='red'>
                                    <TcsData type='label' name='X' data={toFixedNum(floorData(statusData.IntensityOffsetXarcsec))} />
                                </DataLabel>
                                <DataLabel coordinateX='30' color='blue'>
                                    <TcsData type='label' name='Y' data={toFixedNum(floorData(statusData.IntensityOffsetYarcsec))} />
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
                
                <ChartContextProvider value={useChartScales('AutoguiderContrast')}>
                    <ChartContainer lgRowStart='1' lgRowEnd='2' lgColStart='2' xlRowStart='2' xlColStart='1' xlColEnd='3'>
                        <Chart>
                            <Line accessor='y1' color='#D32F2F' />
                            <Axis dimension='x'>
                                <DimensionLabel name='Guide Intensity' coordinateX='70' />
                                <DataLabel coordinateX='60' color='red'>
                                    <TcsData type='label' name='Intensity' data={toFixedNum(floorData(statusData.AutoguiderContrast))} />
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
                
                <ChartContextProvider value={useChartScales('Xfilter', 'Yfilter', 0.24)}>
                    <ChartContainer lgRowStart='2' lgRowEnd='3' lgColStart='1' xlRowStart='3' xlColStart='1' xlColEnd='3' center='center' stretch='stretch'>
                        <Chart>
                            <Line accessor='y1' color='#D32F2F' />
                            <AutoHorizontalLine stroke='#dadada' strokeWidth='1' />
                            <Line accessor='y2' color='#1976D2' />
                            <Axis dimension='x'>
                                <DimensionLabel name='Fiber Guider' />
                                <DataLabel coordinateX='115' color='red'>
                                    <TcsData type='label' name='X' data={toFixedNum(floorData(statusData.Xfilter * 0.24))} />
                                </DataLabel>
                                <DataLabel coordinateX='30' color='blue'>
                                    <TcsData type='label' name='Y' data={toFixedNum(floorData(statusData.Yfilter * 0.24))} />
                                </DataLabel>
                            </Axis>
                            <Axis dimension='y' scaleTicks='4' />
                        </Chart>
                        <ChartControlsContainer>
                            <ScaleListBox scale={scaleNames('x')} selected='scaleX' />
                            <ScaleListBox scale={scaleNames('y')} selected='scaleY' />
                            <ResetButton />
                        </ChartControlsContainer>
                    </ChartContainer>
                </ChartContextProvider>
                
                <ChartContextProvider value={useChartScales('GeneralParameter068', 'GeneralParameter069', null, 'ScatterPlot')}>
                    <ChartContainer lgRowStart='2' lgRowEnd='3' lgColStart='2' lgColSpan='3' xlRowStart='1' xlRowEnd='4' xlColStart='3' xlColEnd='5'>
                        <Chart>
                            <AutoHorizontalLine stroke='#dadada' strokeWidth='1' />
                            <AutoVerticalLine stroke='#dadada' strokeWidth='1' />
                            <Circles/>
                            <Axis dimension='x'>
                                <DimensionLabel name='Guide Star' />
                                <DataLabel coordinateX='100' color='red'>
                                    <TcsData type='label' name='X' data={toFixedNum(floorData(statusData.GeneralParameter068))} />
                                </DataLabel>
                                <DataLabel coordinateX='30' color='blue'>
                                    <TcsData type='label' name='Y' data={toFixedNum(floorData(statusData.GeneralParameter069))} />
                                </DataLabel>
                            </Axis>
                            <Axis dimension='y' />
                        </Chart>
                        <ChartControlsContainer>
                            <ScaleListBox scale={scaleNames('xy')} selected='scaleXY' />
                            <ResetButton />
                        </ChartControlsContainer>
                    </ChartContainer>
                </ChartContextProvider>

            <div className='lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-3 xl:row-start-1 xl:row-end-4 xl:col-start-7 xl:col-end-10 mb-20 sm:mb-20 md:mb-0 sm:mx-5 lg:m-3 xl:mx-0 xl:justify-self-center'>
                <div className='lg:grid lg:grid-cols-3 xl:grid-cols-1 xl:grid-flow-row xl:mt-7 xl:ml-6'>
                    <TcsDataContainer>
                        <TcsData name='RA' data={decTimeToHms(statusData.ActualRAhours)} />
                        <TcsData name='DEC' data={decdegToHms(statusData.ActualDECdeg)} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='AirMass' data={toFixedNum(statusData.AirMass)} />
                        <TcsData name='PointedTo' data={useWhenEmpty(statusData.ObjectPointedToObjectName, 'Zenith')} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='RotatorPosDeg' data={statusData.RotatorPosDeg} />
                        <TcsData name='FieldRotationDeg' data={statusData.FieldRotationDeg} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='Focus' data={`${statusData.FocusMainPos}-${statusData.FocusDeltaPos}`} />
                        {/* <TcsData name='FocusDeltaPos' data={} /> */}
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='GuideProbeX' data={statusData.GuideProbeX} />
                        <TcsData name='GuideProbeY' data={statusData.GuideProbeY} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='CtrXdist' data={statusData.CtrXdist} />
                        <TcsData name='CtrYdist' data={statusData.CtrYdist} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='CCDfiltName' data={statusData.CCDfiltName} />
                        <TcsData name='CCDfilterNumber' data={statusData.CCDfilterNumber} />
                        <TcsData name='CameraProbeInSplitPos' data={statusData.CameraProbeInSplitPos} />
                        <TcsData name='CameraProbeInCCDpos' data={statusData.CameraProbeInCCDpos} />
                    </TcsDataContainer>
                </div>
            </div>
        </div>
    )
}