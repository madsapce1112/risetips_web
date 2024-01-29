import { TTableCellProps } from '../tableCells/type'

export type TTableRowProps = React.HTMLAttributes<HTMLTableElement> & {
  contents?: Array<TTableCellProps>
}
