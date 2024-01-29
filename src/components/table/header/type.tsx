import { TTableRowProps } from '../tableRows'

export type TTableHeaderProps = React.HTMLAttributes<HTMLTableElement> & {
  data?: Array<TTableRowProps>
}
