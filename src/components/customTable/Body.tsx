'use client'
import Image from 'next/image'
import { Paragraph03, CheckBox, Switch, Tag, Heading06, InputField } from '..'
import {
  TCustomBodyProps,
  TCustomHeaderProps,
  TCustomTableProps,
  TCustomBodyCellProps
} from './type'
import { ModalWithButton } from '../modal'
import { Button, TButtonProps } from '@/components'
import { useState } from 'react'

const headerButtons: TButtonProps[] = [
  { type: 'secondary', size: 'small', text: 'Copa do mundo' },
  { type: 'secondary', size: 'small', text: 'Eurocup' },
  { type: 'secondary', size: 'small', text: 'Premiership' },
  { type: 'secondary', size: 'small', text: 'Copa Sul-americana' },
  { type: 'primary', size: 'small', text: 'Todas' }
]

const Body = ({ headers, data }: TCustomTableProps) => {
  const BodyCell = (props: TCustomBodyCellProps) => {
    const { header, item } = props
    const { id, title, type, className, width, isBorder = true } = header
    const [values, setValues] = useState(item)

    const handleChange = (e: any) => {
      const name = e.target.name
      const value = e.target.value
      const checked = e.target.checked
      setValues({ ...values, [name]: value === 'on' ? checked : value })
    }
    let component = <Paragraph03>{values[id]}</Paragraph03>
    if (type === 'checkbox') {
      component = <CheckBox />
    } else if (type === 'switch') {
      component = <Switch id={id} checked={values[id]} onChange={handleChange} />
    } else if (type === 'status') {
      component = (
        <Tag
          text={values[id] ? 'ON' : 'OFF'}
          colorType={values[id] ? 'Green' : 'Red'}
          className="w-900"
        />
      )
    } else if (type === 'status1') {
      component = <Tag text={values[id].text} colorType={values[id].colorType} className="w-900" />
    } else if (type === 'action') {
      component = (
        <div className="flex gap-500">
          <ModalWithButton type="edit" className="w-[600px] gap-6 flex-col">
            <Heading06 fontWeight="semi" className="text-black">
              Detalhes do robô
            </Heading06>
            <div className="flex flex-col justify-center gap-4">
              {headers?.map(
                ({ id, type, title, edit = false }: TCustomHeaderProps, index: number) => {
                  if (edit)
                    if (type === 'status' || type === 'switch') {
                      return (
                        <Switch
                          id={id}
                          key={index}
                          label={title}
                          checked={values[id]}
                          onChange={handleChange}
                        />
                      )
                    } else {
                      return (
                        <InputField
                          id={id}
                          key={index}
                          label={title}
                          value={values[id]}
                          className="w-full"
                          onChange={handleChange}
                        />
                      )
                    }
                }
              )}
              <div className="flex w-[340px] justify-center items-start content-start gap-2 flex-wrap">
                {headerButtons.map((buttonProps: TButtonProps) => (
                  <Button key={buttonProps.text} {...buttonProps} />
                ))}
              </div>
              <div className="flex flex-col justify-center items-center gap-4 w-full">
                <Button text="Salvar" type="primary" size="medium" className="w-full" />
                <Button text="Excluir" type="destructive" size="medium" className="w-full" />
              </div>
            </div>
          </ModalWithButton>
          <Image
            src="/assets/icons/trash.svg"
            alt="sort"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </div>
      )
    } else if (type === 'button') {
      component = (
        <Button
          type="secondary"
          size="small"
          className="text-primary-900 font-semibold w-full"
          text={title}
        />
      )
    } else if (type === 'avatar') {
      component = (
        <Image
          src={values[id]}
          alt="avatar"
          width={40}
          height={40}
          className="flex flex-col justify-center items-center rounded-full"
        />
      )
    }
    return (
      <td
        className={`flex items-center gap-3 self-stretch ${
          isBorder ? 'border-b border-neutral-200 px-6 py-4' : 'mt-2'
        } bg-shades-0 ${className} ${!width && 'w-full'}`}
        style={{ width: width && `${width}%` }}
      >
        {component}
      </td>
    )
  }

  return (
    <tbody>
      {data?.map((item: TCustomBodyProps, index) => (
        <tr key={index} className="flex w-full">
          {headers?.map((header: TCustomHeaderProps, index: number) => (
            <BodyCell key={index} header={header} item={item} />
          ))}
        </tr>
      ))}
    </tbody>
  )
}

export default Body
