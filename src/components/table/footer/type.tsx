import { TTableRowProps } from '../tableRows'

export type TTableFooterProps = React.HTMLAttributes<HTMLTableElement> & {
  data?: Array<TTableRowProps>
}
