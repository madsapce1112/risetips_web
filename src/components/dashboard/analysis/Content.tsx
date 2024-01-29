'use client'
import { Chart, Heading04, Heading05, Mark, Paragraph01, Select, TMarkProps } from '@/components'
import Image from 'next/image'
import { TMatchProps } from './type'
import { useState } from 'react'
import { SpyCard } from '..'
import { TSpyCardProps } from '../spy/type'

const matchData: TMatchProps[] = [
  { title: 'México x Tunísia', time: '18:58' },
  { title: 'México x Tunísia', time: '18:58' },
  { title: 'México x Tunísia', time: '18:58' },
  { title: 'México x Tunísia', time: '18:58' },
  { title: 'México x Tunísia', time: '18:58' },
  { title: 'México x Tunísia', time: '18:58' },
  { title: 'México x Tunísia', time: '18:58', disabled: true },
  { title: 'México x Tunísia', time: '18:58', disabled: true },
  { title: 'México x Tunísia', time: '18:58', disabled: true },
  { title: 'México x Tunísia', time: '18:58', disabled: true }
]

type TCheckMarkProps = {
  red: boolean
  yellow: boolean
  green: boolean
  blue: boolean
  black: boolean
}

const markData = [
  { label: 'Over 1.5', colorType: 'Red', id: 'red' },
  { label: 'Over 2.5', colorType: 'Yellow', id: 'yellow' },
  { label: 'Under 2.5', colorType: 'Green', id: 'green' },
  { label: 'Ambas marcam', colorType: 'Blue', id: 'blue' },
  { label: 'Ambas não marcam', colorType: 'Black', id: 'black' }
]

const spyData: TSpyCardProps[] = [
  {
    name: 'Espião 01',
    subName: 'Ambas marcam',
    time: '49/53 (24h)',
    percent: '(92.5%)',
    times: ['19:40', '19:40', '19:40', '19:40']
  },
  {
    name: 'Espião 02',
    subName: 'Under 2.5',
    time: '49/53 (24h)',
    percent: '(92.5%)',
    times: ['19:40', '19:40', '19:40', '19:40']
  },
  {
    name: 'Espião 03',
    subName: 'Under 1.5',
    time: '49/53 (24h)',
    percent: '(92.5%)',
    times: ['19:40', '19:40', '19:40', '19:40']
  },
  {
    name: 'Espião 301',
    subName: 'Ambas marcam',
    time: '49/53 (24h)',
    percent: '(92.5%)',
    times: ['19:40', '19:40', '19:40', '19:40']
  }
]

// const chartData: TPieCellProps[] = [
//   { name: 'Tunísia', value: 40 },
//   { name: 'México', value: 65 },
//   { name: 'Empate', value: 52 }
// ]

const Content = () => {
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
    <div className="w-full flex items-start gap-6 self-stretch">
      <div className="flex flex-col w-[305px] items-start gap-6 self-stretch">
        {matchData.map(({ title, time, disabled = false }: TMatchProps, index: number) => (
          <div
            key={index}
            className={`flex flex-col p-6 justify-center items-center gap-2.5 self-stretch rounded ${
              disabled ? 'bg-neutral-300' : 'bg-shades-0'
            }`}
          >
            <Heading05 fontWeight="semi" className={`${disabled && 'text-neutral-400'}`}>
              {title}
            </Heading05>
            <div className="flex justify-center items-center gap-2.5">
              <Image src="/assets/icons/disabled_clock.svg" alt="logo" width={24} height={24} />
              <Paragraph01 className={`${disabled ? 'text-neutral-400' : 'text-neutral-900'}`}>
                {time}
              </Paragraph01>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-start gap-6 flex-1 w-full">
        <div className="flex p-6 flex-col items-start gap-6 self-stretch rounded bg-shades-0">
          <div className="flex w-full justify-between items-center gap-6 self-stretchs">
            <div className="flex items-center gap-2.5 flex-1">
              <Heading04 fontWeight="semi">18:58</Heading04>
              <Heading04 fontWeight="semi">México x Tunísia</Heading04>
            </div>
            <Select
              label="Selecione o comparativo"
              optionData={['Em casa']}
              className="w-[300px]"
            />
          </div>
          <div className="flex items-center gap-12 self-stretch">
            {/* <PieChart data={chartData} /> */}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-6 self-stretch">
          <div className="flex justify-center items-center gap-2">
            <Heading05 fontWeight="semi">Ranking</Heading05>
            <Image src="assets/icons/arrow.chevron.back.svg" width={32} height={32} alt="arrow" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch relative">
          <Heading05 fontWeight="semi" className="self-stretch text-center">
            Últimos 20 confrontos
          </Heading05>
          <div className="flex w-full justify-center items-center gap-4 self-stretch">
            {markData.map((dataProps: TMarkProps) => (
              <Mark
                key={dataProps.label}
                {...dataProps}
                checkMark={checkMark}
                onChange={handleChangeMark}
              />
            ))}
          </div>
          <div className="flex flex-col w-full p-6 justify-center items-start gap-1 bg-shades-0">
            <Chart disableLines={checkMark} type="monotone" />
          </div>
        </div>
        <div className="flex px-4 justify-between items-start self-stretch relative">
          <Heading05 fontWeight="semi">Estratégias para o jogo</Heading05>
          <div className="flex justify-center items-center gap-2 absolute right-0 bottom-[-2px]">
            <div className="flex py-0.5 px-1 items-start gap-2.5 rounded border border-neutral-300">
              <Image src="assets/icons/arrow.left.svg" alt="leftbutton" width={24} height={24} />
            </div>
            <div className="flex py-0.5 px-1 items-start gap-2.5 rounded border border-neutral-300">
              <Image src="assets/icons/arrow.right.svg" alt="leftbutton" width={24} height={24} />
            </div>
          </div>
        </div>
        <div className="flex items-start gap-6 self-stretch">
          {spyData.map((item: TSpyCardProps, index: number) => (
            <SpyCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content
