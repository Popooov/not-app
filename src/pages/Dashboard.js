import { useContext, useState } from 'react'
import EventSourceContext from '../contexts/EventSourceContext'
import { ChartContextProvider } from '../contexts/ChartContext'
import useChartScales from '../hooks/useChartScales'
// import useChartNames from '../hooks/useChartNames'
import useModes from '../hooks/useModes'
import { Axis, Line, Chart, Circles, DimensionLabel, DataLabel, AutoHorizontalLine, AutoVerticalLine } from '../guide-charts/exports'
import { TcsDataContainer, ChartContainer, ChartControlsContainer } from '../containers/exports'
import { scaleNames, decdegToHms, decTimeToHms, toFixedNum, useWhenEmpty } from '../utils/utils'
import { ScaleListBox, ChartListBox, Button as ResetButton, TcsData } from '../components/exports'

export const Dashboard = () => {
    const { statusData } = useContext(EventSourceContext)
    const { cameraProbe } = useModes(statusData)
    
    return (
        <div className='lg:grid lg:grid-cols-auto lg:auto-rows-auto lg:gap-x-4 lg:gap-y-14 xl:gap-x-0 xl:gap-y-0 mt-20 sm:mt-20 sm:mx-5 lg:mt-20 xl:ml-6 xl:mr-10'>
                <ChartContextProvider value={useChartScales('GeneralParameter184', 'GeneralParameter185')}>
                    <ChartContainer 
                        styles='lg:row-start-2 lg:row-end-3
                                lg:col-start-1 lg:col-end-2
                                xl:row-start-1 xl:row-end-3 
                                xl:col-start-1 xl:col-end-5'
                    >
                        <Chart>
                            <AutoHorizontalLine stroke='#dadada' strokeWidth='1' />
                            <Line accessor='y1' color='#D32F2F' />
                            <Line accessor='y2' color='#1976D2' />
                            <Axis dimension='x'>
                                <DimensionLabel name= 'Guide-star position (GenPar184/185)' />
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
                    <ChartContainer 
                        styles='lg:row-start-2 lg:row-end-3 
                                lg:col-start-2 lg:col-end-3
                                xl:row-start-3 xl:row-end-5 
                                xl:col-start-1 xl:col-end-5'
                    >
                        <Chart>
                            <Line accessor='y1' color='#D32F2F' />
                            <Axis dimension='x'>
                                <DimensionLabel name='Guide-star contrast' />
                            </Axis>
                            <Axis dimension='y' />
                        </Chart>
                        <ChartControlsContainer>
                            <ScaleListBox scale={scaleNames('x')} selected='scaleX' />
                            <ResetButton />
                        </ChartControlsContainer>
                    </ChartContainer>
                </ChartContextProvider>
                
                <ChartContextProvider value={useChartScales()}>
                    <ChartContainer 
                        styles='lg:mt-8 xl:mt-0
                                lg:row-start-3 lg:row-end-4
                                lg:col-start-1 lg:col-end-2
                                xl:row-start-5 xl:row-end-7 
                                xl:col-start-1 xl:col-end-5'
                    >
                        <Chart>
                            <Line accessor='y1' color='#D32F2F' />
                            <AutoHorizontalLine stroke='#dadada' strokeWidth='1' />
                            <Line accessor='y2' color='#1976D2' />
                            <Axis dimension='x'>
                                <DimensionLabel />
                            </Axis>
                            <Axis dimension='y' scaleTicks='6' />
                        </Chart>
                        <ChartControlsContainer>
                            <ScaleListBox scale={scaleNames('x')} selected='scaleX' />
                            <ScaleListBox scale={scaleNames('y')} selected='scaleY' />
                            <ChartListBox chartNames={scaleNames('chartNames')} />
                            <ResetButton />
                        </ChartControlsContainer>
                    </ChartContainer>
                </ChartContextProvider>
                
                <ChartContextProvider value={useChartScales('GeneralParameter184', 'GeneralParameter185', 'ScatterPlot')}>
                    <ChartContainer   
                        styles='lg:mt-8 xl:mt-0
                                lg:row-start-3 lg:row-end-4
                                lg:col-start-2 lg:col-end-3
                                xl:row-start-1 xl:row-end-4
                                3xl:row-end-5
                                xl:col-start-5 xl:col-end-7
                                xl:place-self-center
                                xl:self-start'
                    >
                        <Chart>
                            <AutoHorizontalLine stroke='#dadada' strokeWidth='1' />
                            <AutoVerticalLine stroke='#dadada' strokeWidth='1' />
                            <Circles/>
                            <Axis dimension='x'>
                                <DimensionLabel name='Guide-star position (GenPar184/185)' />
                            </Axis>
                            <Axis dimension='y' />
                        </Chart>
                        <ChartControlsContainer>
                            <ScaleListBox scale={scaleNames('xy')} selected='scaleXY' />
                            <ResetButton />
                        </ChartControlsContainer>
                    </ChartContainer>
                </ChartContextProvider>

            <div className='lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-3
                            xl:row-start-1 xl:row-end-7 xl:col-start-7 xl:col-end-8
                            mb-24 sm:mb-20 md:mb-0 xl:mx-0 xl:mt-10 sm:flex 
                            divide-y-4 sm:divide-y-0 sm:flex-wrap xl:block xl:w-[15rem] 2xl:w-[17rem] 3xl:w-[19rem] 
                            xl:place-self-center xl:self-start xl:divide-y-4 
                            sm:gap-3 sm:mx-6 divide-white'>
                    <TcsDataContainer>
                        <TcsData name='RA' data={decTimeToHms(statusData.ActualRAhours)} />
                        <TcsData name='DEC' data={decdegToHms(statusData.ActualDECdeg)} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='Altitude' data={decdegToHms(statusData.AltitudePosDeg)} />
                        <TcsData name='Azimuth' data={decdegToHms(statusData.AzimuthPosDeg)} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='AirMass' data={toFixedNum(statusData.AirMass)} />
                        <TcsData name='PointedTo' data={useWhenEmpty(statusData.ObjectPointedToObjectName, 'Zenith')} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='Focus/Delta' data={statusData.FocusDeltaPos < 0 ? `${statusData.FocusMainPos}/${statusData.FocusDeltaPos}` : `${statusData.FocusMainPos}/+${statusData.FocusDeltaPos}`} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='filterName' data={statusData.CCDfiltName} />
                        <TcsData name='filterNumber' data={statusData.CCDfilterNumber} />
                        <TcsData name='CameraProbe' data={cameraProbe} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='GuideProbeX' data={statusData.GuideProbeX} />
                        <TcsData name='GuideProbeY' data={statusData.GuideProbeY} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='RotatorPosDeg' data={toFixedNum(statusData.RotatorPosDeg)} />
                        <TcsData name='FieldRotationDeg' data={statusData.FieldRotationDeg} />
                    </TcsDataContainer>
                    <TcsDataContainer>
                        <TcsData name='CtrXdist' data={statusData.CtrXdist} />
                        <TcsData name='CtrYdist' data={statusData.CtrYdist} />
                    </TcsDataContainer>
            </div>
        </div>
    )
}