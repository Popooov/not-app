import { useContext } from 'react'
import EventSourceContext from '../contexts/EventSourceContext'
import { ChartContextProvider } from '../contexts/ChartContext'
import useChartScales from '../hooks/useChartScales'
import { Axis, Line, Chart, Circles, DimensionLabel, DataLabel, AutoHorizontalLine } from '../guide-charts/exports'
import { TcsDataContainer, ChartContainer, ChartControlsContainer } from '../containers/exports'
import { scaleNames, decdegToHms, decTimeToHms, toFixedNum, floorData, useWhenEmpty } from '../utils/utils'
import { ScaleListBox, Button as ResetButton, TcsData } from '../components/exports'

export const Dashboard = () => {
    const { statusData } = useContext(EventSourceContext)
    
    // xl:flex xl:justify-evenly mt-16 sm:mt-20 lg:mt-24
    return (
        <div className='xl:grid xl:grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] xl:grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr] mt-16 sm:mt-20 lg:mt-24 xl:mx-auto max-w-[1900px]'>
            <div className='xl:row-start-1 xl:row-end-3 xl:col-span-4'>
                <ChartContextProvider value={useChartScales('IntensityOffsetXarcsec', 'IntensityOffsetYarcsec')}>
                    <ChartContainer>
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
            </div>
            <div className='xl:row-start-3 xl:row-end-5 xl:col-span-4'>
                <ChartContextProvider value={useChartScales('AutoguiderContrast')}>
                    <ChartContainer>
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
            </div>
            <div className='xl:row-start-5 xl:row-end-7 xl:col-span-4'>
                <ChartContextProvider value={useChartScales('Xfilter', 'Yfilter', 0.24)}>
                    <ChartContainer>
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
            </div>
            <div className='xl:row-start-1 xl:row-end-5 xl:col-span-3 xl:max-w-2xl'>
                <ChartContextProvider value={useChartScales('GeneralParameter068', 'GeneralParameter069', null, 'ScatterPlot')}>
                    <ChartContainer>
                        <Chart>
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
                            <svg className='mr-auto ml-6 h-20 w-64'>
                                <defs>
                                    <linearGradient id='linearGradient'>
                                        <stop offset="0" stopColor="#440154"></stop>
                                        <stop offset="0.25" stopColor="#3b528b"></stop>
                                        <stop offset="0.5" stopColor="#21918c"></stop>
                                        <stop offset="0.75" stopColor="#5ec962"></stop>
                                        <stop offset="1" stopColor="#fde725"></stop>
                                    </linearGradient>
                                </defs>
                                <rect rx='7.5' width='250' height='40' fill='url(#linearGradient)'></rect>
                                <text x='105' y='55' stroke='black' style={{'fontSize': 10}}>TIME (s)</text>
                            </svg>
                            <ScaleListBox scale={scaleNames('xy')} selected='scaleXY' />
                            <ResetButton />
                        </ChartControlsContainer>
                    </ChartContainer>
                </ChartContextProvider>
            </div>

            <div className='xl:row-start-7 xl:row-end-8 xl:col-start-1 xl:col-end-8 mb-16 sm:mb-20 md:mb-0 sm:mx-5 lg:m-3 xl:mx-0 xl:justify-self-center'>
                <div className='xl:grid xl:grid-flow-col xl:grid-rows-1 xl:place-items-center'>
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