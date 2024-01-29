import classNames from 'classnames'
import { TTypographyProps } from './types'

const Heading01 = ({ children, className, fontWeight, ...props }: TTypographyProps) => {
  return (
    <h3
      {...props}
      className={classNames(
        'font-mont text-h3s text-black leading-[130%]',
        { 'font-bold': fontWeight === 'bold' },
        { 'font-semibold': fontWeight === 'semi' },
        { 'font-extrabold': fontWeight === 'extra' },
        className
      )}
    >
      {children}
    </h3>
  )
}

export default Heading01
