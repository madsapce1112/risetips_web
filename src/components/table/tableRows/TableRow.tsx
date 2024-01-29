import { TTableRowProps } from './type'
import { TableCell, TTableCellProps } from '../tableCells'

const TableRow = ({ contents }: TTableRowProps) => {
  return (
    <tr>
      {contents &&
        contents.map((item: TTableCellProps, index) => <TableCell {...item} key={index} />)}
    </tr>
  )
}

export default TableRow
