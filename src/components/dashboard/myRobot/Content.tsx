'use client'
import { Button, Section, Table } from '@/components'
import { TSelectGroupProps } from './selectGroupArea/type'
import SelectGroupArea from './selectGroupArea/SelectGroupArea'
import { tableData } from './tableData'
import { RobotCard, TRobotCardProps } from './robotCard'

const optionData = ['seleione']

const selectGroupData: TSelectGroupProps[] = [
  {
    title: 'Jogo atual',
    selects: [
      { label: 'Tipo de configurações', id: 'typeOfSettings', optionData },
      { label: 'Configuração', id: 'settings', optionData },
      { label: 'Valores', id: 'values', optionData }
    ]
  },
  {
    title: 'Regras de stop - Stop Win',
    selects: [
      { label: 'Total Greens', id: 'totalGreens', optionData },
      { label: 'Minutos', id: 'minutes', optionData },
      { label: 'Mensagem', id: 'message', optionData }
    ]
  },
  {
    title: 'Regras de stop - Stop Loss',
    selects: [
      { label: 'Total Greens', id: 'totalGreens', optionData },
      { label: 'Minutos', id: 'minutes', optionData },
      { label: 'Mensagem', id: 'message', optionData }
    ]
  }
]
const selectGroupData1: TSelectGroupProps = {
  title: 'Regras de Envio',
  selects: [
    { label: 'Greens antes', id: 'greensBefore', optionData },
    { label: 'Assertividade inferior à', id: 'assertivenessLowerThan', optionData },
    { label: 'Tendência inferior à', id: 'trendLowerThan', optionData },
    { label: 'Tendência superior à', id: 'trendHigherThan', optionData },
    { label: 'Jogos sem bater', id: 'gamesWithoutCrashing', optionData },
    { label: 'Gols na linha superior à', id: 'goalsOnTheTopLine', optionData },
    { label: 'Under 1.5', id: 'under', optionData }
  ]
}
const robotData: TRobotCardProps[] = [
  {
    title: 'Jogo 01',
    contentData: [
      'Odd over 1.5 = 136',
      'Odd over 2.5 = 2.2',
      'Resultado FT = 1x1',
      'Resultado HT = 1x1'
    ]
  },
  {
    title: 'Jogo 01',
    contentData: [
      'Odd over 1.5 = 136',
      'Odd over 2.5 = 2.2',
      'Resultado FT = 1x1',
      'Resultado HT = 1x1'
    ]
  },
  {
    title: 'Jogo 01',
    contentData: [
      'Odd over 1.5 = 136',
      'Odd over 2.5 = 2.2',
      'Resultado FT = 1x1',
      'Resultado HT = 1x1'
    ]
  },
  {
    title: 'Jogo 01',
    contentData: [
      'Odd over 1.5 = 136',
      'Odd over 2.5 = 2.2',
      'Resultado FT = 1x1',
      'Resultado HT = 1x1'
    ]
  }
]

const MyRobotContent = () => {
  return (
    <Section>
      <div className="flex flex-wrap gap-x-3 gap-y-6 justify-center items-center">
        {selectGroupData.map((dataProps: TSelectGroupProps, index) => (
          <SelectGroupArea key={index} {...dataProps} />
        ))}
        <SelectGroupArea {...selectGroupData1} />
        <Table {...tableData} />
        <Button type="primary" size="large" text="Criar padrão" />
        <div className="flex gap-300 w-full">
          {robotData.map((dataProps: TRobotCardProps, index) => (
            <RobotCard key={index} {...dataProps} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default MyRobotContent
