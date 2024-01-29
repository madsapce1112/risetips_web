import classNames from 'classnames'
import { TTagProps } from './types'
import { Paragraph03 } from '../typography'

const Tags = ({ id, text, colorType = 'Default', className, ...rest }: TTagProps) => {
  return (
    <div
      id={id}
      className={classNames(
        { 'bg-success-primary': colorType === 'Green' },
        { 'bg-error-primary': colorType === 'Red' },
        { 'bg-warning-primary': colorType === 'Yellow' },
        { 'bg-info-primary': colorType === 'Blue' },
        { 'bg-neutral-900': colorType === 'Black' },
        { 'bg-neutral-400': colorType === 'Default' },
        className,
        'rounded py-1 px-2 items-center gap-2 text-center w-full'
      )}
      {...rest}
    >
      <Paragraph03 className={classNames({ 'text-shades-0': colorType === 'Red' })}>
        {text}
      </Paragraph03>
    </div>
  )
}

export default Tags
