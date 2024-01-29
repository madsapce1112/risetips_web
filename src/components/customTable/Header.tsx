'use client'
import { TCustomTableProps, TCustomHeaderProps } from './type'
import { Caption, CheckBox } from '..'
import Image from 'next/image'

const HeaderCell = (props: TCustomHeaderProps) => {
  const { title, sortable, type, className, width, isBorder = true } = props
  return (
    <th
      className={`flex h-11 items-center gap-2 self-stretch ${
        isBorder && 'py-3 px-6 border-y border-neutral-200 bg-neutral-50'
      } first-letter ${className} ${!width && 'w-full'}`}
      style={{ width: width && `${width}%` }}
    >
      {type === 'checkbox' ? (
        <CheckBox />
      ) : type === 'action' || type === 'download' ? (
        ''
      ) : (
        <Caption>{title}</Caption>
      )}
      {sortable === true && (
        <Image
          src="/assets/icons/sort.svg"
          alt="sort"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </th>
  )
}

const Header = ({ headers }: TCustomTableProps) => {
  return (
    <thead>
      <tr className="flex w-full">
        {headers &&
          headers.map((item: TCustomHeaderProps, index: number) => (
            <HeaderCell key={index} {...item}></HeaderCell>
          ))}
      </tr>
    </thead>
  )
}

export default Header
