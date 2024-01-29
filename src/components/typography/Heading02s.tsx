import classNames from 'classnames'
import { TTypographyProps } from './types'

const Heading01 = ({ children, className, fontWeight, ...props }: TTypographyProps) => {
  return (
    <h2
      {...props}
      className={classNames(
        'font-mont text-h2s text-black leading-[130%]',
        { 'font-bold': fontWeight === 'bold' },
        { 'font-semibold': fontWeight === 'semi' },
        { 'font-extrabold': fontWeight === 'extra' },
        className
      )}
    >
      {children}
    </h2>
  )
}

export default Heading01
