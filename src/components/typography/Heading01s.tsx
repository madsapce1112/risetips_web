import classNames from 'classnames'
import { TTypographyProps } from './types'

const Heading01s = ({ children, className, fontWeight, ...props }: TTypographyProps) => {
  return (
    <h1
      {...props}
      className={classNames(
        'font-mont text-h1s text-black leading-[130%]',
        { 'font-bold': fontWeight === 'bold' },
        { 'font-semibold': fontWeight === 'semi' },
        { 'font-extrabold': fontWeight === 'extra' },
        className
      )}
    >
      {children}
    </h1>
  )
}

export default Heading01s
