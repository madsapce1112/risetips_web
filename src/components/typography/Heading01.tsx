import classNames from 'classnames'
import { TTypographyProps } from './types'

const Heading01 = ({ children, className, fontWeight, ...props }: TTypographyProps) => {
  return (
    <h1
      {...props}
      className={classNames(
        'font-mont text-h1 text-black',
        { 'font-bold leading-[130%]': fontWeight === 'bold' },
        { 'font-semibold leading-[110%]': fontWeight === 'semi' },
        { 'font-extrabold leading-[130%]': fontWeight === 'extra' },
        className
      )}
    >
      {children}
    </h1>
  )
}

export default Heading01
