import { MatchResultCard, TMatchResultCardProps } from '@/components'

const matchResultData: TMatchResultCardProps[] = [
  {
    title: 'Copa do mundo (Mundial)',
    subTitle: 'Montpellier x PSG (01/02/2023)',
    contents: { paris1: 3, paris2: 2 }
  },
  {
    title: 'Copa do mundo (Mundial)',
    subTitle: 'Montpellier x PSG (01/02/2023)',
    contents: { paris1: 3, paris3: 3 }
  },
  {
    title: 'Copa do mundo (Mundial)',
    subTitle: 'Montpellier x PSG (01/02/2023)',
    contents: { paris4: 0, paris5: 2 }
  },
  {
    title: 'Copa do mundo (Mundial)',
    subTitle: 'Montpellier x PSG (01/02/2023)',
    contents: { paris6: 8, paris7: 8 }
  }
]
const MatchResultContent = () => {
  return (
    <div className="flex gap-6 w-full">
      {matchResultData.map((dataProps: TMatchResultCardProps, index) => (
        <MatchResultCard key={index} {...dataProps} />
      ))}
    </div>
  )
}

export default MatchResultContent
