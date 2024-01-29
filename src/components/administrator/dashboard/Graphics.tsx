import { Caption, Heading03, Heading05, Paragraph02 } from '@/components'
import { PieChart, TPieChartProps } from '@/components/pieChart'

const chartData = [
  { first: 160, second: 80, third: 10 },
  { first: 140, second: 50, third: 30 },
  { first: 170, second: 70, third: 10 },
  { first: 180, second: 90, third: 70 },
  { first: 130, second: 50, third: 20 },
  { first: 150, second: 80, third: 50 },
  { first: 120, second: 70, third: 40 },
  { first: 190, second: 80, third: 30 },
  { first: 140, second: 90, third: 60 },
  { first: 170, second: 60, third: 40 },
  { first: 120, second: 80, third: 50 },
  { first: 140, second: 80, third: 50 },
  { first: 170, second: 50, third: 40 },
  { first: 140, second: 70, third: 20 },
  { first: 150, second: 60, third: 30 }
]

const pieChartData: TPieChartProps[] = [
  {
    id: 'basic',
    label: 'Básico',
    value: 65,
    color: '41%'
  },
  {
    id: 'advance',
    label: 'Avançado',
    value: 40,
    color: '25%'
  },
  {
    id: 'average',
    label: 'Médio',
    value: 52,
    color: '33%'
  }
]

const DoubleChart = () => {
  return (
    <div className="flex flex-col w-full items-center gap-2 self-stretch">
      <div className="flex justify-between items-center self-stretch">
        {['5 dias', '15 dias', '30 dias', '6 meses', '1 ano'].map((text, index) => (
          <Paragraph02 key={index} fontWeight={`${index === 2 ? 'semi' : 'bold'}`}>
            {text}
          </Paragraph02>
        ))}
      </div>
      <div className="flex justify-between items-end self-stretch">
        {chartData.map(
          (
            { first, second, third }: { first: number; second: number; third: number },
            index: number
          ) => {
            const firstClass = `flex flex-col w-4 h-[${first}px] justify-end rounded-t bg-primary-500`
            return (
              <div key={index} className={firstClass}>
                <div
                  className={`flex flex-col justify-end h-[${second}px] w-full h-16 rounded-t bg-primary-700`}
                >
                  <div className={`w-full h-[${third}px] h-12 rounded-t bg-primary-900`} />
                </div>
              </div>
            )
          }
        )}
      </div>
    </div>
  )
}

const Graphics = () => {
  return (
    <div className="flex items-start gap-6 self-stretch">
      <div className="flex p-6 flex-col items-start gap-6 flex-1 self-stretch rounded bg-shades-0">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <Heading05 fontWeight="semi">Últimas vendas</Heading05>
            <Caption className="text-neutral-600">01/01/2023 a 28/01/2023</Caption>
          </div>
          <Heading03 fontWeight="semi">R$ 1500,00</Heading03>
        </div>
        <DoubleChart />
      </div>
      <div className="flex p-6 flex-col items-start gap-6 flex-1 self-stretch rounded bg-shades-0">
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-1">
            <Heading05 fontWeight="semi">Taxa de crescimento (%)</Heading05>
            <Caption className="text-neutral-600">01/01/2023 a 28/01/2023</Caption>
          </div>
          <div className="flex items-center gap-2">
            <Heading03 fontWeight="semi">6,05 %</Heading03>
            <Caption className="text-neutral-600">(84)</Caption>
          </div>
        </div>
        <DoubleChart />
      </div>
      <div className="flex p-6 flex-col items-start gap-6 flex-1 self-stretch rounded bg-shades-0">
        <div className="flex flex-col items-start gap-1">
          <Heading05 fontWeight="semi">Venda por produto (%)</Heading05>
          <Caption className="text-neutral-600">01/01/2023 a 28/01/2023</Caption>
        </div>
        <PieChart data={pieChartData} />
      </div>
    </div>
  )
}

export default Graphics
