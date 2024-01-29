import Header from './Header'
import Body from './Body'
import { TTableRowColorProps } from './type'

const TableRowColor = ({ header, body }: TTableRowColorProps) => {
  return (
    <table className="flex flex-col w-full">
      <Header header={header} />
      <Body body={body} />
    </table>
  )
}

export default TableRowColor
