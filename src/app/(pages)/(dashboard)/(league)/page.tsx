import { LeagueFilter, LeagueGraphic, LeagueHeader, LeagueDepartures } from '@/components/dashboard'

const DashboardPage = () => {
  return (
    <>
      <LeagueHeader />
      <LeagueFilter />
      <LeagueGraphic />
      <LeagueDepartures />
    </>
  )
}

export default DashboardPage
