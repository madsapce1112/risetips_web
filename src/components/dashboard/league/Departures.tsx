'use client'
import { Heading04, Paragraph03, Section, Select, TTagProps, Tag } from '@/components'
import { Table } from '@/components'
import { tableData } from './tableData'
import { useState, useEffect } from 'react'

const tagData = [
  {
    label: 'Copa:',
    tags: [
      { text: '37.44%', colorType: 'Green', id: 'Green' },
      { text: '62.56%', textColorType: 'White', colorType: 'Red', id: 'Red' }
    ]
  },
  {
    label: 'Gols',
    tags: [{ text: '528', textColorType: 'White', colorType: 'Default', id: 'Default' }]
  },
  {
    label: 'Média gols hora',
    tags: [{ text: '44.00', textColorType: 'White', colorType: 'Default', id: 'Default' }]
  }
]

const optionData = ['Resultado FT']
const numberData = ['12', '13']

const Departures = () => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false)
  useEffect(() => {
    setInitialRenderComplete(true)
  }, [])
  if (!initialRenderComplete) {
    return null
  }
  return (
    <Section>
      <div className="flex flex-wrap items-center justify-between pb-500">
        <div className="flex flex-wrap items-center gap-500 ">
          <Heading04 fontWeight="semi">Partidas</Heading04>
          <div className="flex flex-wrap gap-500">
            {tagData.map((dataProps, index) => (
              <div key={index} className="flex gap-1 items-center">
                <Paragraph03 fontWeight="semi" className="text-neutral-600">
                  {dataProps.label}
                </Paragraph03>
                {dataProps.tags.map((tagProps: TTagProps, index: number) => (
                  <Tag key={index} {...tagProps} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Select optionData={optionData} id={''}></Select>
          <Select optionData={numberData} id={''}></Select>
        </div>
      </div>
      <Table key="table" {...tableData} />
    </Section>
  )
}

export default Departures
