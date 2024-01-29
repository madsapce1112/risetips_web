import { TTableRowProps, TableRow } from '../tableRows'
import { TTableBodyProps } from './type'
const TableBody = ({ data }: TTableBodyProps) => {
  return (
    <tbody>
      {data &&
        data.map((props: TTableRowProps, index) => <TableRow {...props} key={index}></TableRow>)}
    </tbody>
  )
}

export default TableBody
