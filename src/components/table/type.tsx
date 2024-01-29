import { TTableRowProps } from './tableRows'

export type TTableProps = React.HTMLAttributes<HTMLTableElement> & {
  header?: Array<TTableRowProps>
  body?: Array<TTableRowProps>
  footer?: Array<TTableRowProps>
}
