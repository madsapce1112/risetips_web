import { TTableRowProps, TableRow } from '../tableRows'
import { TTableFooterProps } from './type'
const TableFooter = ({ data }: TTableFooterProps) => {
  return (
    <tfoot>
      {data &&
        data.map((props: TTableRowProps, index) => <TableRow {...props} key={index}></TableRow>)}
    </tfoot>
  )
}

export default TableFooter
