import Header from '../Header'

const header: { [key: string]: string } = { headerTitle: 'Dashboard administrativo' }
const DashBoardHeader = () => {
  return <Header {...header} />
}

export default DashBoardHeader
