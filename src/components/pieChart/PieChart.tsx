'use client'

import { ResponsivePie } from '@nivo/pie'
import { TPieChartProps } from '.'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const PieChartPage = ({ data }: { data: TPieChartProps[] }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    startAngle={-180}
    innerRadius={0.5}
    activeOuterRadiusOffset={4}
    colors={['#009D66', '#00D78B', '#005B3B', '#002C11']}
    borderColor={{
      from: 'color',
      modifiers: [['darker', 0]]
    }}
    enableArcLinkLabels={false}
    // arcLinkLabelsSkipAngle={30}
    arcLinkLabelsTextColor="#0F172A"
    // arcLinkLabelsThickness={2}
    // arcLinkLabelsColor={{ from: 'color' }}
    arcLabel={e => e.value + ' (' + e.color + ')'}
    arcLabelsRadiusOffset={0.55}
    arcLabelsSkipAngle={16}
    arcLabelsTextColor="#0F172A"
  />
)

export default PieChartPage
