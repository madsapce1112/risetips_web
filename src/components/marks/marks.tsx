import classNames from 'classnames'
import { TMarkProps } from './types'
import { Paragraph03 } from '../typography'

const Marks = ({ id, label, colorType = 'Green', checkMark, onChange, ...rest }: TMarkProps) => {
  return (
    <div className={classNames('flex items-center gap-1')}>
      <input
        type="button"
        id={id}
        className={classNames(
          { 'bg-success-primary': colorType === 'Green' },
          { 'bg-error-primary': colorType === 'Red' },
          { 'bg-warning-primary': colorType === 'Yellow' },
          { 'bg-info-primary': colorType === 'Blue' },
          { 'bg-neutral-900': colorType === 'Black' },
          'h-2 w-6 rounded'
        )}
        onClick={onChange}
        {...rest}
      />
      <Paragraph03 className="text-neutral-600">
        {checkMark ? checkMark[id] ? label : <del>{label}</del> : label}
      </Paragraph03>
    </div>
  )
}

export default Marks
