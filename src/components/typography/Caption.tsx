import classNames from 'classnames'
import { TTypographyProps } from './types'

const Caption = ({
  component = 'p',
  children,
  className,
  fontWeight,
  ...props
}: TTypographyProps) => {
  const Component = component
  return (
    <Component
      {...props}
      className={classNames(
        'font-source text-black leading-[14px]',
        { 'font-bold text-caption1': fontWeight === 'bold' },
        { 'font-semibold text-caption1': fontWeight === 'semi' },
        { 'font-medium uppercase text-caption2': fontWeight === 'extra' },
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Caption
