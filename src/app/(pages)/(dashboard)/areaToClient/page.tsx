import {
  AreaToClientHeader,
  MatchResultCard,
  AreaToClientGraphic,
  AreaToClientFooter
} from '@/components/dashboard'

const AreaToClientPage = () => {
  return (
    <>
      <AreaToClientHeader />
      <MatchResultCard />
      <AreaToClientGraphic />
      <AreaToClientFooter />
    </>
  )
}

export default AreaToClientPage
