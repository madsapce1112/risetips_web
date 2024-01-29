'use client'
import { LineChart, Line, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts'
import { TChartProps } from './types'

const data = [
  {
    name: 'Page A',
    red: 75,
    yellow: 90,
    green: 80,
    blue: 52,
    black: 65,
    amt: 2400
  },
  {
    name: 'Page B',
    red: 37,
    yellow: 45,
    green: 67,
    blue: 45,
    black: 75,
    amt: 2210
  },
  {
    name: 'Page C',
    red: 24,
    yellow: 67,
    green: 60,
    blue: 23,
    black: 12,
    amt: 2290
  },
  {
    name: 'Page D',
    red: 25,
    yellow: 35,
    green: 85,
    blue: 32,
    black: 35,
    amt: 2000
  },
  {
    name: 'Page E',
    red: 24,
    yellow: 45,
    green: 89,
    blue: 62,
    black: 45,
    amt: 2181
  },
  {
    name: 'Page F',
    red: 65,
    yellow: 45,
    green: 43,
    blue: 72,
    black: 55,
    amt: 2500
  },
  {
    name: 'Page G',
    red: 34,
    yellow: 54,
    green: 80,
    blue: 52,
    black: 65,
    amt: 2100
  },
  {
    name: 'Page H',
    red: 34,
    yellow: 54,
    green: 80,
    blue: 52,
    black: 65,
    amt: 2100
  },
  {
    name: 'Page I',
    red: 31,
    yellow: 63,
    green: 34,
    blue: 55,
    black: 62,
    amt: 2100
  },
  {
    name: 'Page J',
    red: 65,
    yellow: 14,
    green: 48,
    blue: 64,
    black: 23,
    amt: 2100
  }
]

const Chart = ({ disableLines, type }: TChartProps) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid vertical={false} />
        <YAxis
          scale="sequential"
          interval="preserveStartEnd"
          tickCount={10}
          tickSize={10}
          ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
          axisLine={false}
          tickLine={false}
        />
        {type === 'monotone' ? (
          <>
            <Line
              dataKey={disableLines['yellow'] && 'yellow'}
              strokeWidth={2}
              stroke="#FDE300"
              dot={false}
              type="monotone"
            />
            <Line
              dataKey={disableLines['green'] && 'green'}
              strokeWidth={2}
              dot={false}
              stroke="#41B871"
              type="monotone"
            />
            <Line
              dataKey={disableLines['blue'] && 'blue'}
              strokeWidth={2}
              dot={false}
              stroke="#3B82F6"
              type="monotone"
            />
            <Line
              dataKey={disableLines['black'] && 'black'}
              strokeWidth={2}
              dot={false}
              stroke="#0F172A"
              type="monotone"
            />
            <Line
              dataKey={disableLines['red'] && 'red'}
              strokeWidth={2}
              dot={false}
              stroke="#FF5353"
              type="monotone"
            />
          </>
        ) : (
          <>
            <Line
              dataKey={disableLines['yellow'] && 'yellow'}
              strokeWidth={2}
              stroke="#FDE300"
              dot={{ fill: '#FDE300' }}
            />
            <Line
              dataKey={disableLines['green'] && 'green'}
              strokeWidth={2}
              stroke="#41B871"
              dot={{ fill: '#41B871' }}
            />
            <Line
              dataKey={disableLines['blue'] && 'blue'}
              strokeWidth={2}
              stroke="#3B82F6"
              dot={{ fill: '#3B82F6' }}
            />
            <Line
              dataKey={disableLines['black'] && 'black'}
              strokeWidth={2}
              stroke="#0F172A"
              dot={{ fill: '#0F172A' }}
            />
            <Line
              dataKey={disableLines['red'] && 'red'}
              strokeWidth={2}
              stroke="#FF5353"
              dot={{ fill: '#FF5353' }}
            />
          </>
        )}{' '}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default Chart
