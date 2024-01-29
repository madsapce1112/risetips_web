'use client'
import { Paragraph02 } from '@/components'
import { useState } from 'react'

const Content = () => {
  const data = [
    { title: 'Padrão A - Ambas Marcam', time: 'H - 13 M: 20-23-26' },
    { title: 'Padrão B - Over 2.5', time: 'H - 13 M: 23-26-29' },
    { title: 'Padrão C - Casa vence', time: 'H - 13 M: 35-38-41' },
    { title: 'Padrão D - Over 2.5', time: 'H - 13 M: 41-44-47' },
    { title: 'Padrão E - Ambas', time: 'H - 13 M: 41-44-47' },
    { title: 'Padrão E - Ambas', time: 'H - 13 M: 41-44-47' },
    { title: 'Padrão E - Ambas', time: 'H - 13 M: 41-44-47' },
    { title: 'Padrão E - Ambas', time: 'H - 13 M: 41-44-47' },
    { title: 'Padrão E - Ambas', time: 'H - 13 M: 41-44-47' },
    { title: 'Padrão E - Ambas', time: 'H - 13 M: 41-44-47' }
  ]

  const tagData: string[] = ['Meus padrões', 'Espião']

  const [show, setShow] = useState(0)

  const handleShow = (showNumber: number) => {
    setShow(showNumber)
  }

  return (
    <div className="flex flex-col items-start self-stretch rounded overflow-hidden">
      <div className="flex items-start content-start flex-wrap bg-neutral-100">
        {tagData.map((tagName: string, index: number) => (
          <div
            key={index}
            className={`flex w-[288px] p-2 justify-center items-center border-b bg-shades-0 cursor-pointer ${
              show === index && 'border-primary-900'
            }`}
            onClick={() => handleShow(index)}
          >
            <Paragraph02 className={show === index ? 'text-neutral-900' : 'text-neutral-600'}>
              {tagName}
            </Paragraph02>
          </div>
        ))}
      </div>
      <div className="flex w-[1294px] p-4 items-start content-start gap-4 flex-wrap bg-shades-0">
        {data.map(({ title, time }, index) => (
          <div
            key={index}
            className="flex flex-col items-start px-2 gap-1 border-r border-neutral-300"
          >
            <Paragraph02 fontWeight="semi" className="text-neutral-600">
              {title}
            </Paragraph02>
            <Paragraph02 className="text-neutral-600">{time}</Paragraph02>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Content
