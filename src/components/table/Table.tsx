import { TableBody } from './body'
import { TableFooter } from './footer'
import { TableHeader } from './header'
import { TTableProps } from './type'

const Table = ({ header, body, footer }: TTableProps) => {
  return (
    <table className="w-full">
      <TableHeader data={header} />
      <TableBody data={body} />
      <TableFooter data={footer} />
    </table>
  )
}

export default Table
