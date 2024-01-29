import {
  DashboardHeader,
  DashboardGraphics,
  DashboardCustomers,
  DashboardTickets
} from '@/components/administrator'

const dashboardPage = () => {
  return (
    <>
      <DashboardHeader />
      <DashboardGraphics />
      <DashboardCustomers />
      <DashboardTickets />
    </>
  )
}

export default dashboardPage
