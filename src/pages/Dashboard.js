import { useContext } from 'react'
import EventSourceContext from '../contexts/EventSourceContext'
import { ChartContextProvider } from '../contexts/ChartContext'
import { CustomChartContextProvider } from '../contexts/CustomChartContext'
import useChartScales from '../hooks/useChartScales'
import useChartNameSelect from '../hooks/useChartNameSelect'
import useModes from '../hooks/useModes'
import { Axis, Line, Chart, Circles, ChartLabel, AutoHorizontalLine, AutoVerticalLine } from '../guide-charts/exports'
import { TcsDataContainer, ChartContainer, ChartControlsContainer } from '../containers/exports'
import { scaleNames, decdegToHms, decTimeToHms, toFixedNum, useWhenEmpty } from '../utils/utils'
import { ScaleListBox, Button as ResetButton, TcsData, ChartsList } from '../components/exports'

export const Dashboard = () => {
    const { statusData } = useContext(EventSourceContext)
    const { cameraProbe } = useModes(statusData)
    
    return (
        <div className='mb-20 mx-1 mt-14 sm:mt-16 sm:mx-5 md:mt-20 
            lg:mt-20 xl:mt-24 lg:grid lg:grid-cols-auto lg:auto-rows-auto lg:gap-x-4 lg:gap-y-0 
            xl:gap-x-0 xl:gap-y-0 xl:ml-4 xl:mr-6'
        >
            <ChartContextProvider value={useChartScales('GeneralParameter184', 'GeneralParameter185')}>
                <ChartContainer 
                    styles='lg:row-start-3 lg:row-end-4
                    lg:col-start-1 lg:col-end-2
                    xl:row-start-1 xl:row-end-3 
                    xl:col-start-1 xl:col-end-5
                    lg:mb-14 xl:mb-0'
                    >
                    <Chart>
                        <AutoHorizontalLine stroke='#dadada' strokeWidth='1' />
                        <Line accessor='y1' color='#D32F2F' />
                        <Line accessor='y2' color='#1976D2' />
                        <Axis dimension='x'>
                            <ChartLabel label='Guide-star position (GenPar184/185)' />
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

            <CustomChartContextProvider value={useChartNameSelect(1)}>
                <ChartContainer 
                    styles='lg:row-start-3 lg:row-end-4
                    lg:col-start-2 lg:col-end-3
                    xl:row-start-3 xl:row-end-5 
                    xl:col-start-1 xl:col-end-5'
                >
                    <ChartsList />
                </ChartContainer>
            </CustomChartContextProvider>
            
            <CustomChartContextProvider value={useChartNameSelect(0)}>
                <ChartContainer 
                    styles='lg:mt-8 xl:mt-0
                    lg:row-start-4 lg:row-end-5
                    lg:col-start-1 lg:col-end-2
                    xl:row-start-5 xl:row-end-7 
                    xl:col-start-1 xl:col-end-5'
                >
                    <ChartsList />
                </ChartContainer>
            </CustomChartContextProvider>
                
            <ChartContextProvider value={useChartScales('GeneralParameter184', 'GeneralParameter185', 'ScatterPlot')}>
                <ChartContainer   
                    chartType='ScatterPlot'
                    styles='lg:mt-8 xl:mt-0
                        lg:row-start-4 lg:row-end-5
                        lg:col-start-2 lg:col-end-3
                        xl:row-start-1 xl:row-end-4
                        xl:col-start-5 xl:col-end-7
                        xl:justify-self-center'
                    >
                    <Chart>
                        <AutoHorizontalLine stroke='#dadada' strokeWidth='1' />
                        <AutoVerticalLine stroke='#dadada' strokeWidth='1' />
                        <Circles/>
                        <Axis dimension='x'>
                            <ChartLabel label='Guide-star position (GenPar184/185)' />
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
                            mb-1 sm:mb-3 md:mb-3 xl:mx-0 xl:px-3 xl:mt-10 xl:w-64 3xl:w-72 4xl:w-80 sm:flex 
                            divide-y-4 sm:divide-y-0 sm:flex-wrap xl:block
                            xl:justify-self-center xl:divide-y-4 
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
                    <TcsData name='PointedTo' data={useWhenEmpty(statusData.ObjectPointedToObjectName, 'Zenith')} />
                    <TcsData name='EpochYears' data={statusData.ObjectPointedToEpochYears} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='Focus/Delta' data={
                        statusData.FocusDeltaPos < 0 
                            ? 
                        `${statusData.FocusMainPos}/${statusData.FocusDeltaPos}` 
                            : 
                        `${statusData.FocusMainPos}/+${statusData.FocusDeltaPos}`
                    }/>
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
                <TcsDataContainer>
                    <TcsData name='AirMass' data={toFixedNum(statusData.AirMass)} />
                    <TcsData name='Rain' data={statusData.Rain} />
                </TcsDataContainer>
                {/* <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'DummyData'} />
                    <TcsData name='dummyLabel' data={'DummyData'} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'DummyData'} />
                    <TcsData name='dummyLabel' data={'DummyData'} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'DummyData'} />
                    <TcsData name='dummyLabel' data={'DummyData'} />
                </TcsDataContainer> */}
            </div>
            {/* <div className='lg:row-start-2 lg:row-end-3
                            lg:col-start-1 lg:col-end-3
                            xl:row-start-4 xl:row-end-7
                            xl:col-start-5 xl:col-end-7
                            4xl:row-start-4 4xl:row-end-7
                            mb-1 sm:mb-3 md:mb-3 xl:mx-2 4xl:mx-2
                            xl:mt-14 2xl:mt-14 4xl:self-end 4xl:mt-0 sm:flex 
                            divide-y-4 sm:divide-y-0 
                            sm:flex-wrap
                            sm:gap-3 xl:gap-y-1 sm:mx-6 divide-white'>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'dummyData'} />
                    <TcsData name='dummyLabel' data={'dummyData'} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'dummyData'} />
                    <TcsData name='dummyLabel' data={'dummyData'} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'dummyData'} />
                    <TcsData name='dummyLabel' data={'dummyData'} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'dummyData'} />
                    <TcsData name='dummyLabel' data={'dummyData'} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'dummyData'} />
                    <TcsData name='dummyLabel' data={'dummyData'} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'dummyData'} />
                    <TcsData name='dummyLabel' data={'dummyData'} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'dummyData'} />
                    <TcsData name='dummyLabel' data={'dummyData'} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'dummyData'} />
                    <TcsData name='dummyLabel' data={'dummyData'} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'dummyData'} />
                    <TcsData name='dummyLabel' data={'dummyData'} />
                </TcsDataContainer>
                <TcsDataContainer>
                    <TcsData name='dummyLabel' data={'dummyData'} />
                    <TcsData name='dummyLabel' data={'dummyData'} />
                </TcsDataContainer>
            </div> */}
        </div>
    )
}