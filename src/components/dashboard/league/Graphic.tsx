'use client'
import { useState } from 'react'
import { Heading04, Paragraph03, Section, Mark, TMarkProps, Chart } from '@/components'

const markData = [
  { label: 'Over 1.5', colorType: 'Red', id: 'red' },
  { label: 'Over 2.5', colorType: 'Yellow', id: 'yellow' },
  { label: 'Under 2.5', colorType: 'Green', id: 'green' },
  { label: 'Ambas marcam', colorType: 'Blue', id: 'blue' },
  { label: 'Ambas não marcam', colorType: 'Black', id: 'black' }
]

type TCheckMarkProps = {
  red: boolean
  yellow: boolean
  green: boolean
  blue: boolean
  black: boolean
}

const Graphic = () => {
  const [checkMark, setCheckMark] = useState<TCheckMarkProps>({
    red: true,
    yellow: true,
    green: true,
    blue: true,
    black: true
  })
  const handleChangeMark = (event: { [key: string]: any }) => {
    setCheckMark({
      ...checkMark,
      [event.target.id]: !checkMark[event.target.id as keyof TCheckMarkProps]
    })
  }
  return (
    <Section>
      <>
        <div className="flex flex-wrap gap-500 pb-500">
          <div>
            <Heading04 fontWeight="semi">Gráfico</Heading04>
            <Paragraph03>Análise gráfica (%)</Paragraph03>
          </div>
          <div className="flex flex-wrap gap-1">
            {markData.map((dataProps: TMarkProps) => (
              <Mark
                key={dataProps.label}
                {...dataProps}
                checkMark={checkMark}
                onChange={handleChangeMark}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-start w-full">
          <Chart disableLines={checkMark} />
        </div>
      </>
    </Section>
  )
}

export default Graphic
