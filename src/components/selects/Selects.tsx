import classNames from 'classnames'
import { TSelectProps } from './types'
import { Paragraph03 } from '../typography'

const Selects = ({ className, label, disabled = false, optionData, ...rest }: TSelectProps) => {
  return (
    <div className={className}>
      {label && <Paragraph03 className="text-neutral-900 whitespace-nowrap">{label}</Paragraph03>}
      <select
        className={classNames(
          'flex flex-col w-full font-normal justify-between pl-300 pr-700 py-75 items-center rounded bg-neutral-50 border border-neutral-300 text-neutral-600 text-p3 gap-1'
        )}
        disabled={disabled}
        {...rest}
      >
        {optionData &&
          optionData.map((option: string, index) => <option key={index}>{option}</option>)}
      </select>
    </div>
  )
}

export default Selects
