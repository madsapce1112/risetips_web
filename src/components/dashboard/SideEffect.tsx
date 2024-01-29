'use client'
import Image from 'next/image'
import { InputField, Paragraph02 } from '..'
import Link from 'next/link'
import { useState } from 'react'

export type TNavigationProps = {
  text: string
  icon: string
  url: string
}

const SideEffect = ({ data }: { data: TNavigationProps[] }) => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(0)
  const [viewMethod, setViewMethod] = useState('light')

  const handleActive = (activeNumber: number) => {
    setActive(activeNumber)
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  const handleViewMethod = (method: string) => {
    setViewMethod(method)
  }

  return (
    <aside
      className={`flex flex-col items-center gap-8 flex-shrink-0 h-full py-10 px-4 bg-primary-900 ${
        open ? 'w-[220px]' : 'w-[98px]'
      }`}
    >
      <Image
        src="/assets/icons/burger.svg"
        alt="burger"
        width={24}
        height={24}
        className="cursor-pointer"
        onClick={() => handleOpen()}
      />
      {!open ? (
        <div className="flex items-start p-1.5 rounded border bg-neutral-50">
          <Image src="/assets/icons/search.svg" alt="search" width={24} height={24} />
        </div>
      ) : (
        <InputField type="search" placeholder="Pesquisar.." />
      )}
      <div className={`flex flex-col gap-4 ${open && 'w-full'}`}>
        {data.map(({ text, icon, url }: TNavigationProps, index: number) => (
          <Link key={index} href={url} className={`${open && 'w-full'}`}>
            <div
              className={`flex p-2 ${
                open ? 'items-start' : 'items-center justify-center'
              } gap-2 self-stretch rounded-md cursor-pointer hover:bg-primary-700 ${
                active === index && 'bg-primary-700'
              }`}
              data-tip="hello"
              onClick={() => handleActive(index)}
            >
              <Image src={`/assets/icons/${icon}.svg`} alt={icon} width={24} height={24} />
              {open && (
                <Paragraph02 fontWeight="semi" className="text-shades-0">
                  {text}
                </Paragraph02>
              )}
            </div>
          </Link>
        ))}
      </div>
      <div className="w-full h-[1px] bg-primary-700" />
      <div className="flex flex-col justify-end items-center gap-4 flex-1 self-stretch">
        <Link href={'/'} className={`${open && 'w-full'}`}>
          <div
            className={`flex p-2 ${
              open ? 'items-start' : 'items-center justify-center'
            } gap-2 self-stretch rounded-md cursor-pointer hover:bg-primary-700 ${
              active === 100 && 'bg-primary-700'
            }`}
            onClick={() => handleActive(100)}
          >
            <Image src={`/assets/icons/support.svg`} alt={'icon'} width={24} height={24} />
            {open && (
              <Paragraph02 fontWeight="semi" className="text-shades-0">
                Suporte
              </Paragraph02>
            )}
          </div>
        </Link>
        <Link href={'/'} className={`${open && 'w-full'}`}>
          <div
            className={`flex p-2 ${
              open ? 'items-start' : 'items-center justify-center'
            } gap-2 self-stretch rounded-md cursor-pointer hover:bg-primary-700 ${
              active === 101 && 'bg-primary-700'
            }`}
            onClick={() => handleActive(101)}
          >
            <Image src={`/assets/icons/setting.svg`} alt={'icon'} width={24} height={24} />
            {open && (
              <Paragraph02 fontWeight="semi" className="text-shades-0">
                Configurações
              </Paragraph02>
            )}
          </div>
        </Link>
        <div
          className={`flex p-1 ${
            open ? 'w-full' : 'flex-col'
          } justify-center items-center gap-2 rounded-lg bg-primary-700`}
        >
          <div
            className={`flex w-full p-1 justify-center items-center gap-1 rounded-md cursor-pointer ${
              viewMethod === 'light' && 'bg-primary-900'
            }`}
            onClick={() => handleViewMethod('light')}
          >
            <Image
              src={`/assets/icons/${viewMethod === 'light' ? 'light' : 'disabledLight'}.svg`}
              alt="icon"
              width={24}
              height={24}
            />
            {open && (
              <Paragraph02
                fontWeight="semi"
                className={`${viewMethod === 'light' ? 'text-shades-0' : 'text-primary-900'} `}
              >
                light
              </Paragraph02>
            )}
          </div>
          <div
            className={`flex w-full p-1 justify-center items-center gap-1 rounded-md cursor-pointer ${
              viewMethod === 'dark' && 'bg-primary-900'
            }`}
            onClick={() => handleViewMethod('dark')}
          >
            <Image
              src={`/assets/icons/${viewMethod === 'dark' ? 'dark' : 'disabledDark'}.svg`}
              alt="icon"
              width={24}
              height={24}
            />
            {open && (
              <Paragraph02
                fontWeight="semi"
                className={`${viewMethod === 'dark' ? 'text-shades-0' : 'text-primary-900'} `}
              >
                dark
              </Paragraph02>
            )}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default SideEffect
