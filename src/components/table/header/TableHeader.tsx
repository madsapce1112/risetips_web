import { TTableRowProps, TableRow } from '../tableRows'
import { TTableHeaderProps } from './type'
const TableHeader = ({ data }: TTableHeaderProps) => {
  return (
    <thead>
      {data && data.map((props: TTableRowProps, index) => <TableRow {...props} key={index} />)}
    </thead>
  )
}

export default TableHeader
