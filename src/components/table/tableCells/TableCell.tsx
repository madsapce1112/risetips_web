'use client'
import { Caption } from '@/components'
import { TTableCellProps } from './type'
import classNames from 'classnames'
import { useState } from 'react'

const TableCell = ({
  id,
  title,
  content,
  colorType,
  isCheckBox,
  isBorder = true,
  rowSpanNumber
}: TTableCellProps) => {
  const [checked, setChecked] = useState(false)
  const handleChange = () => {
    setChecked(!checked)
  }

  return (
    <td
      id={id}
      className={classNames(
        { 'bg-red-500': colorType === 'Red' },
        { 'bg-green-500': colorType === 'Green' },
        { 'bg-blue-500': colorType === 'Blue' },
        { 'bg-neutral-300': !(title || content) },
        { 'border border-neutral-400': isBorder },
        `relative py-1 px-2 gap-0.5`
      )}
      rowSpan={rowSpanNumber}
    >
      <div className="flex flex-col justify-center items-center">
        {title && <Caption className="text-xs">{title}</Caption>}
        <div className="flex items-center">
          {isCheckBox && (
            <button
              className={classNames(
                { 'bg-primary-700': checked },
                { 'bg-shades-0': !checked },
                'rounded w-3 h-3 flex-shrink-0 border border-neutral-900 mr-1'
              )}
              onClick={handleChange}
            />
          )}
          {content && (
            <Caption
              className={classNames(
                { 'text-xs': title },
                { 'text-sm': !title },
                { 'text-white': colorType === 'Red' },
                { 'text-white': colorType === 'Blue' }
              )}
            >
              {content}
            </Caption>
          )}
          {colorType === 'Blue' && (
            <div className="absolute right-[6px] bg-red-600 w-2 h-2 rounded-full"></div>
          )}
        </div>
      </div>
    </td>
  )
}

export default TableCell
