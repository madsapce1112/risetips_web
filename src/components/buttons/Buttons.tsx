import classNames from 'classnames'
import { TButtonProps } from './types'

const Buttons = ({
  className,
  type = 'primary',
  size = 'small',
  text,
  onClick,
  ...rest
}: TButtonProps) => {
  const largeClass = 'px-6 py-3 text-bl rounded-lg'
  const mediumClass = 'px-500 py-100 text-bm rounded-lg'
  const smallClass = 'px-200 py-75 text-bs rounded-md'
  const primaryClass = 'bg-primary-900 border-0 text-shades-0'
  const secondaryClass = 'bg-transparent border border-neutral-300 text-neutral-600'
  const destructiveClass = 'bg-error-medium text-shades-0'
  const destructiveOutlineClass = 'bg-transparent border border-neutral-300 text-error-medium'
  const disabledClass = 'bg-neutral-300 text-neutral-500'
  return (
    <button
      className={classNames(
        'inline-flex justify-center items-center gap-2',
        { [largeClass]: size === 'large' },
        { [mediumClass]: size === 'medium' },
        { [smallClass]: size === 'small' },
        { [primaryClass]: type === 'primary' },
        { [secondaryClass]: type === 'secondary' },
        { [destructiveClass]: type === 'destructive' },
        { [destructiveOutlineClass]: type === 'destructive-outline' },
        { [disabledClass]: type === 'disabled' },
        className
      )}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  )
}

export default Buttons
