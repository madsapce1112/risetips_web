import classNames from 'classnames'
import { TTypographyProps } from './types'

const Heading01 = ({ children, className, fontWeight, ...props }: TTypographyProps) => {
  return (
    <h6
      {...props}
      className={classNames(
        'font-mont text-h6 text-black leading-[130%]',
        { 'font-bold': fontWeight === 'bold' },
        { 'font-semibold': fontWeight === 'semi' },
        { 'font-extrabold': fontWeight === 'extra' },
        className
      )}
    >
      {children}
    </h6>
  )
}

export default Heading01
