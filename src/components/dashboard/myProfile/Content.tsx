'use client'
import { Paragraph02 } from '@/components'
import { useState } from 'react'
import ContentMyProfile from './ContentMyProfile'
import ContentMySignature from './ContentMySignature'
import ContentMyCards from './ContentMyCards'
import ContentPaymentHistory from './ContentPaymentHistory'

const MyProfileContent = () => {
  const [show, setShow] = useState(0)
  const handleClick = (showNumber: number) => {
    setShow(showNumber)
  }

  const navTitle: string[] = [
    'Meu perfil',
    'Minha assinatura',
    'Detalhes do cartão',
    'Histórico de pagamentos'
  ]

  return (
    <div className="flex items-start gap-6 self-stretch">
      <div className="flex flex-col w-[342px] h-[500px] p-6 justify-between items-start rounded bg-shades-0">
        <div className="flex flex-col items-start gap-2 self-stretch">
          {navTitle.map((title, index) => (
            <div
              key={index}
              className={`flex py-3 px-4 items-start gap-2.5 self-stretch rounded-md cursor-pointer ${
                show === index ? 'bg-primary-700' : 'bg-neutral-100'
              }`}
              onClick={() => handleClick(index)}
            >
              <Paragraph02
                fontWeight="semi"
                className={show === index ? 'text-shades-0' : 'text-neutral-900'}
              >
                {title}
              </Paragraph02>
            </div>
          ))}
        </div>
        <div className="flex py-3 px-4 items-start gap-2.5 self-stretch rounded-md bg-neutral-50 cursor-pointer">
          <Paragraph02 fontWeight="semi" className="text-error-primary">
            Excluir minha conta
          </Paragraph02>
        </div>
      </div>
      {show === 0 && <ContentMyProfile />}
      {show === 1 && <ContentMySignature />}
      {show === 2 && <ContentMyCards />}
      {show === 3 && <ContentPaymentHistory />}
    </div>
  )
}

export default MyProfileContent
