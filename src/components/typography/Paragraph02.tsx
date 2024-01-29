import classNames from 'classnames'
import { TTypographyProps } from './types'

const Paragraph02 = ({ children, className, fontWeight, ...props }: TTypographyProps) => {
  return (
    <p
      {...props}
      className={classNames(
        'font-source text-p2 text-black leading-[150%]',
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

export default Paragraph02
