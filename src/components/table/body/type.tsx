import { TTableRowProps } from '../tableRows'

export type TTableBodyProps = React.HTMLAttributes<HTMLTableElement> & {
  data?: Array<TTableRowProps>
}
