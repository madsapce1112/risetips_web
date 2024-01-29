import Header from './Header'
import Body from './Body'
import Footer from './Footer'
import { TCustomTableProps } from './type'

function CustomTable({ headers, data, isFooter }: TCustomTableProps) {
  return (
    <table className="w-full">
      <Header headers={headers} />
      <Body headers={headers} data={data} />
      {isFooter && <Footer />}
    </table>
  )
}

export default CustomTable
