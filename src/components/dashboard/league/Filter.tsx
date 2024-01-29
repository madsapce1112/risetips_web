'use client'
import { Section, Mark, TMarkProps, Select, TSelectProps, Switch, TSwitchProps } from '@/components'
import { useState } from 'react'

const optionData = ['seleione']

const selectData = [
  { label: 'Gols Par / Impar', id: 'evenOrOddGoals', optionData },
  { label: 'Over gols', id: 'overGoals', optionData },
  { label: 'Under gols', id: 'underGoals', optionData },
  { label: 'Gols', id: 'goals', optionData },
  { label: 'Ambos marcam', id: 'bothScore', optionData },
  { label: 'Casa marca', id: 'homeBrand', optionData },
  { label: 'Visitante marca', id: 'visitorTag', optionData },
  { label: 'Resultado FT', id: 'ftResult', optionData }
]
const switchData = [
  { label: 'Prox. Odds', id: 'nextOdds' },
  { label: 'Análise avançada', id: 'advancedAnalysis' },
  { label: '% Linha', id: 'line' }
]
const markData = [
  { label: 'Green', colorType: 'Green', id: 'green' },
  { label: 'Red', colorType: 'Red', id: 'red' }
]

type TFilterValues = {
  nextOdds: boolean
  advancedAnalysis: boolean
  line: boolean
}
type TFilterSwitchers = keyof TFilterValues
const Filter = () => {
  const [values, setValues] = useState<TFilterValues>({
    nextOdds: false,
    advancedAnalysis: false,
    line: false
  })
  const handleChangeSwitch = (e: any) => {
    const id = e.target.id as TFilterSwitchers
    setValues({
      ...values,
      [id]: !values[id]
    })
  }
  return (
    <Section>
      <div className="flex flex-wrap gap-x-6">
        {selectData.map((dataProps: TSelectProps) => {
          return <Select key={dataProps.label} {...dataProps} className="pb-300" />
        })}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="flex gap-1">
          {markData.map((dataProps: TMarkProps) => {
            return <Mark key={dataProps.label} {...dataProps} />
          })}
        </div>
        {switchData.map(({ label, id }: TSwitchProps) => {
          return (
            <Switch
              key={id}
              id={id}
              label={label}
              checked={values[id as TFilterSwitchers]}
              onChange={handleChangeSwitch}
            />
          )
        })}
      </div>
    </Section>
  )
}

export default Filter
