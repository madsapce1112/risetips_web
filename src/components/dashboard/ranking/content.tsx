import { Heading04, Paragraph02, Select, Panals, TTableRowColorProps } from '@/components'
import { TPanalsProp, TTabProps } from '@/components/panals/types'

const tableData: TTableRowColorProps = {
  header: [{ text: 'Ranking' }, { text: 'Time' }, { text: 'Saldo' }, { text: 'Média' }],
  body: [
    ['1°/24°', 'Bélgica', '46', '92%'],
    ['1°/24°', 'Bélgica', '46', '92%'],
    ['1°/24°', 'Bélgica', '46', '92%'],
    ['1°/24°', 'Bélgica', '46', '92%'],
    ['1°/24°', 'Bélgica', '46', '92%'],
    ['1°/24°', 'Bélgica', '46', '92%'],
    ['1°/24°', 'Bélgica', '46', '92%'],
    ['1°/24°', 'Bélgica', '46', '92%']
  ]
}

const tabs: TTabProps[] = [
  { title: 'Casa/Fora', tableData },
  { title: 'Casa/Fora', tableData },
  { title: 'Casa/Fora', tableData }
]

const panalData: TPanalsProp = {
  data: [
    {
      title: 'Over 0.5 FT | Saldo: 428/480 (90%)',
      tabs
    },
    {
      title: 'Over 0.5 FT | Saldo: 428/480 (90%)',
      tabs
    },
    {
      title: 'Over 0.5 FT | Saldo: 428/480 (90%)',
      tabs
    }
  ]
}

const optionData = ['Selecione o time']
const RankingContent = () => {
  return (
    <div className="flex flex-col p-6 items-start gap-6 self-stretch rounded-lg bg-shades-0">
      <div className="flex justify-between items-center self-stretch">
        <div className="flex flex-col items-start gap-2">
          <Heading04 fontWeight="semi">Ranking dos mercados individuais</Heading04>
          <Paragraph02 className="text-neutral-600">
            Time jogando | Casa/fora | Casa | Visitante
          </Paragraph02>
        </div>
        <Select label="Time" id="time" optionData={optionData} />
      </div>
      <Panals {...panalData} />
    </div>
  )
}

export default RankingContent
