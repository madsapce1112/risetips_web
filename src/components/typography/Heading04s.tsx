import classNames from 'classnames'
import { TTypographyProps } from './types'

const Heading01 = ({ children, className, fontWeight, ...props }: TTypographyProps) => {
  return (
    <h4
      {...props}
      className={classNames(
        'font-mont text-h4s text-black leading-[130%]',
        { 'font-bold': fontWeight === 'bold' },
        { 'font-semibold': fontWeight === 'semi' },
        { 'font-extrabold': fontWeight === 'extra' },
        className
      )}
    >
      {children}
    </h4>
  )
}

export default Heading01
