import { Heading04, Paragraph02 } from '@/components'

type TStatisticsProps = React.HTMLAttributes<HTMLElement> & {
  title: string
  contentData: string[]
}

const statisticsData: TStatisticsProps[] = [
  {
    title: 'Estatísticas (24h):',
    contentData: [
      'Euro Cup: 99/01 - 99%',
      'Premier: 99/01 - 99%',
      'Super: 100/00 - 100%',
      'Copa do Mundo: 100/00 - 100%'
    ]
  },
  {
    title: 'Estatísticas (48h):',
    contentData: [
      'Euro Cup: 99/01 - 99%',
      'Premier: 99/01 - 99%',
      'Super: 100/00 - 100%',
      'Copa do Mundo: 100/00 - 100%'
    ]
  },
  {
    title: 'Estatísticas (72h):',
    contentData: [
      'Euro Cup: 99/01 - 99%',
      'Premier: 99/01 - 99%',
      'Super: 100/00 - 100%',
      'Copa do Mundo: 100/00 - 100%'
    ]
  },
  {
    title: 'Estatísticas (240h):',
    contentData: [
      'Euro Cup: 99/01 - 99%',
      'Premier: 99/01 - 99%',
      'Super: 100/00 - 100%',
      'Copa do Mundo: 100/00 - 100%'
    ]
  }
]
const RobotsStatistics = () => {
  return (
    <div>
      <div>
        <Heading04 fontWeight="semi">Estatísticas:</Heading04>
      </div>
      <div className="flex gap-300 w-full">
        {statisticsData.map(({ title, contentData }: TStatisticsProps, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-3 gap-2 rounded-[4px] bg-shades-0 w-full"
          >
            <Paragraph02 fontWeight="semi">{title}</Paragraph02>
            <div className="flex flex-col gap-50">
              {contentData.map((text, index) => (
                <Paragraph02 key={index}>{text}</Paragraph02>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RobotsStatistics
