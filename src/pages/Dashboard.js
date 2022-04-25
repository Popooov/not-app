import GuideErrorsChart from '../guide-charts/GuideErrorsChart'
import GuideIntensityChart from '../guide-charts/GuideIntensityChart'
import FiberGuiderChart from '../guide-charts/FiberGuiderChart'
// import * as d3 from 'd3'
// import { useState } from 'react'
// import { useChartDimensions } from '../hooks/useChartDimensions'
// import useLineData from '../hooks/useLineData'
// import { scaleTypes, scaleNames } from "../utils/utils"
import { TcsData } from '../components/TcsData'
import { TcsDataContainer, ChartContainer, ChartControlsContainer } from '../containers/exports'
import { decdegToHms, decTimeToHms, rounded } from '../utils/utils'
// import ChartC from '../guide-charts/ChartC'
// import Line from '../guide-charts/Line'
// import Axis from '../guide-charts/Axis'
// import { ScaleListBox, Button as ResetButton } from '../components/exports'

export const Dashboard = ({ statusData, enabled }) => {
    // const [ selectedScaleX, setSelectedScaleX ] = useState(scaleNames('x')[1])
    // const [ selectedScaleY, setSelectedScaleY ] = useState(scaleNames('y')[0])
    // const { fiberLines, intensityLine, errorsLines, resetLines } = useLineData(statusData, enabled, selectedScaleX)
    // const [ ref, dimensions ] = useChartDimensions()
    // const xAccessor = d => d.x
    // const y1Accessor = d => d.y1
    // const y2Accessor = d => d.y2
    // const yIntensityAccessor = d => d.y
    
    // const staticScaleX = d3.scaleLinear()
    // .domain([-fiberLines.length, 0])
    // .range([0, dimensions.boundedWidth])
    
    // const dynamicScaleX = d3.scaleLinear()
    // .domain(d3.extent(fiberLines, xAccessor))
    // .range([0, dimensions.boundedWidth])
    
    // const staticScaleY = d3.scaleLinear()
    // .domain(d3.extent(scaleTypes('y', selectedScaleY)))
    // .range([dimensions.boundedHeight, 0])
    
    // const dynamicScaleY = d3.scaleLinear()
    // .domain(d3.extent(
    //     [
    //         d3.min(fiberLines, y1Accessor), d3.max(fiberLines, y1Accessor),
    //         d3.min(fiberLines, y2Accessor), d3.max(fiberLines, y2Accessor),
    //     ]
    //     ))
    //     .range([dimensions.boundedHeight, 0])
    //     .nice()
        
    // const xScaled = d => dynamicScaleX(xAccessor(d))
    // const y1Scaled = d => selectedScaleY === 'Auto' ?  dynamicScaleY(y1Accessor(d)) : staticScaleY(y1Accessor(d))
    // const y2Scaled = d => selectedScaleY === 'Auto' ?  dynamicScaleY(y2Accessor(d)) : staticScaleY(y2Accessor(d))
    // const IntensityScaled = d => selectedScaleY === 'Auto' ?  dynamicScaleY(yIntensityAccessor(d)) : staticScaleY(yIntensityAccessor(d))
    
    return (
        <div className='xl:flex xl:justify-evenly'>
            <div className='xl:w-[60%] xl:flex-grow sm:ml-5 xl:ml-7'>
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
                {/* <ChartContainer>
                    <ChartC reference={ref} dimensions={dimensions}>
                        <Line
                            data={errorsLines}
                            xAccessor={xScaled}
                            yAccessor={y1Scaled}
                            color='#D32F2F' // red
                        />
                        <Line
                            data={errorsLines}
                            xAccessor={xScaled}
                            yAccessor={y2Scaled}
                            color='#1976D2' // blue
                        />
                        <Axis // Horizontal
                            selectedScale={selectedScaleX}
                            dimensions={dimensions}
                            dimension='x'
                            scale={staticScaleX}
                            xLabel='Guide Errors'
                            dataLabelOne='X'
                            dataLabelTwo='Y'
                            x={(statusData.IntensityOffsetXarcsec * 1).toFixed(2)}
                            y={(statusData.IntensityOffsetYarcsec * 1).toFixed(2)}
                        />
                        <Axis // Vertical
                            selectedScale={selectedScaleY}
                            dimensions={dimensions}
                            dimension='y'
                            scale={selectedScaleY === 'Auto' ? dynamicScaleY : staticScaleY}
                        />
                    </ChartC>
                    <ChartControlsContainer>
                        <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                        <ScaleListBox scale={scaleNames('y')} selected={selectedScaleY} setSelected={setSelectedScaleY} />
                        <ResetButton reset={resetLines} />
                    </ChartControlsContainer>
                </ChartContainer>

                <ChartContainer>
                    <ChartC reference={ref} dimensions={dimensions}>
                        <Line
                            data={intensityLine}
                            xAccessor={xScaled}
                            yAccessor={IntensityScaled}
                            color='#D32F2F' // red
                        />
                        <Axis // Horizontal
                            selectedScale={selectedScaleX}
                            dimensions={dimensions}
                            dimension='x'
                            scale={staticScaleX}
                            xLabel='Guide Intensity'
                            dataLabelOne='Contrast'
                            x={(statusData.AutoguiderContrast * 1).toFixed(2)}
                        />
                        <Axis // Vertical
                            selectedScale={selectedScaleY}
                            dimensions={dimensions}
                            dimension='y'
                            scale={selectedScaleY === 'Auto' ? dynamicScaleY : staticScaleY}
                        />
                    </ChartC>
                    <ChartControlsContainer>
                        <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                        <ResetButton reset={resetLines} />
                    </ChartControlsContainer>
                </ChartContainer>

                <ChartContainer>
                    <ChartC reference={ref} dimensions={dimensions}>
                        <Line
                            data={fiberLines}
                            xAccessor={xScaled}
                            yAccessor={y1Scaled}
                            color='#D32F2F' // red
                        />
                        <Line
                            data={fiberLines}
                            xAccessor={xScaled}
                            yAccessor={y2Scaled}
                            color='#1976D2' // blue
                        />
                        <Axis // Horizontal
                            selectedScale={selectedScaleX}
                            dimensions={dimensions}
                            dimension='x'
                            scale={staticScaleX}
                            xLabel='Fiber Guider'
                            dataLabelOne='X'
                            dataLabelTwo='Y'
                            x={(statusData.Xfilter * 1).toFixed(2)}
                            y={(statusData.Yfilter * 1).toFixed(2)}
                        />
                        <Axis // Vertical
                            selectedScale={selectedScaleY}
                            dimensions={dimensions}
                            dimension='y'
                            scale={selectedScaleY === 'Auto' ? dynamicScaleY : staticScaleY}
                        />
                    </ChartC>
                    <ChartControlsContainer>
                        <ScaleListBox scale={scaleNames('x')} selected={selectedScaleX} setSelected={setSelectedScaleX} />
                        <ScaleListBox scale={scaleNames('y')} selected={selectedScaleY} setSelected={setSelectedScaleY} />
                        <ResetButton reset={resetLines} />
                    </ChartControlsContainer>
                </ChartContainer> */}
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
                    <TcsData name='AirMass' data={rounded(statusData.AirMass)} />
                    <TcsData name='ObjectPointedToObjectName' data={!statusData.ObjectPointedToObjectName ? 'Zenith' : statusData.ObjectPointedToObjectName} />
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