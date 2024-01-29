'use client'
import Image from 'next/image'
import { Paragraph02, TableRowColor } from '..'
import { useState } from 'react'
import { TPanalsProp, TPanalProp, TTabProps } from './types'

const Panals = ({ data }: TPanalsProp) => {
  const [showPanal, setShowPana] = useState(0)
  const [showTab, setShowTab] = useState(0)
  const handleShow = (showNumber: number) => {
    setShowPana(showNumber)
    setShowTab(0)
  }
  const handleShowTab = (tabNumber: number) => setShowTab(tabNumber)
  return (
    <div className="flex flex-col items-start gap-2 w-full">
      {data.map(({ title, tabs }: TPanalProp, index: number) => (
        <div key={index} className="flex flex-col w-full items-start gap-4 bg-shades-0">
          <div className="flex py-2 px-4 justify-between items-center self-stretch rounded-[4px] bg-neutral-200">
            <Paragraph02 fontWeight="semi">{title}</Paragraph02>
            <Image
              src={`/assets/icons/${index === showPanal ? 'minus.svg' : 'plus.svg'}`}
              alt="logo"
              width={24}
              height={24}
              onClick={() => handleShow(index)}
              className="cursor-pointer"
            />
          </div>
          {showPanal === index && (
            <>
              <div className="flex px-6 justify-center items-center self-stretch">
                {tabs.map(({ title }: TTabProps, tab_index: number) => (
                  <div
                    key={tab_index}
                    className={`flex p-2 justify-center items-center flex-1 border-b cursor-pointer ${
                      showTab === tab_index && 'border-primary-900 bg-shades-0'
                    }`}
                    onClick={() => handleShowTab(tab_index)}
                  >
                    <Paragraph02
                      className={showTab === tab_index ? 'text-neutral-900' : 'text-neutral-600'}
                    >
                      {title}
                    </Paragraph02>
                  </div>
                ))}
              </div>
              {tabs.map(
                ({ tableData }: TTabProps, tab_index: number) =>
                  showTab === tab_index && (
                    <div
                      key={tab_index}
                      className="flex flex-col w-full px-5 items-start self-stretch"
                    >
                      <TableRowColor {...tableData} />
                    </div>
                  )
              )}
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default Panals
