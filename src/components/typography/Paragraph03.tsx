import classNames from 'classnames'
import { TTypographyProps } from './types'

const Paragraph03 = ({
  children,
  className,
  fontWeight = 'normal',
  ...props
}: TTypographyProps) => {
  return (
    <p
      {...props}
      className={classNames(
        'font-roboto text-p3 text-black leading-[150%]',
        { 'font-normal': fontWeight === 'normal' },
        { 'font-semibold': fontWeight === 'semi' },
        { 'font-bold': fontWeight === 'bold' },
        { 'font-extra': fontWeight === 'extra' },
        className
      )}
    >
      {children}
    </p>
  )
}

export default Paragraph03
