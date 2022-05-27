import { useContext } from 'react'
import { ChartContextProvider } from '../contexts/ChartContext'
import CustomChartContext from '../contexts/CustomChartContext'
import useChartScales from "../hooks/useChartScales"
import { ChartContainer, ChartControlsContainer } from "../containers/exports"
import { ChartListBox, ScaleListBox, Button as ResetButton } from '../components/exports'
import { scaleNames } from "../utils/utils"
import { Chart, Line, Axis, AutoHorizontalLine, ChartLabel } from "../guide-charts/exports"


export const ChartsList = () => {

    const { customChartParamY1, customChartParamY2, customChartMultiplier, chartLabel } = useContext(CustomChartContext)
    
    return(
        <ChartContextProvider value={useChartScales(customChartParamY1, customChartParamY2, null, customChartMultiplier)}>
            <Chart>
                <AutoHorizontalLine stroke='#dadada' strokeWidth='1' />
                <Line accessor='y1' color='#D32F2F' />
                {customChartParamY2 ? <Line accessor='y2' color='#1976D2' /> : null}
                <Axis dimension='x'>
                    <ChartLabel label={chartLabel} />
                </Axis>
                <Axis dimension='y' />
            </Chart>
            <ChartControlsContainer>
                <ChartListBox chartNames={scaleNames('chartNames')} />
                <ScaleListBox scale={scaleNames('x')} selected='scaleX' />
                <ScaleListBox scale={scaleNames('y')} selected='scaleY' />
                <ResetButton />
            </ChartControlsContainer>
        </ChartContextProvider>
    )
}
