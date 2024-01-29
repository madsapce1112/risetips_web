import DetailCard from './DetailCard'
import StatisticCard from './StatisticCard'
import { TStatisticDataProps, TStatisticDetailProps } from './type'

const statisticData: TStatisticDataProps[] = [
  {
    team1: 'Bélgica',
    team2: 'Portugal',
    time: '1:20',
    result: '0 x 1',
    resultKick: '(0 x 0)',
    firstScoreTeam: 'Bélgica',
    lastScoreTeam: 'Portugal',
    firstScorePlayer: 'Denis (Bélgica – Esquerda)',
    winCast: 'Denis (Bélgica - Esquerda) - Portugal',
    scoreCast: 'Bélgica - Portugal 2-1'
  },
  {
    team1: 'Bélgica',
    team2: 'Portugal',
    time: '1:20',
    result: '0 x 1',
    resultKick: '(0 x 0)',
    firstScoreTeam: 'Bélgica',
    lastScoreTeam: 'Portugal',
    firstScorePlayer: 'Denis (Bélgica – Esquerda)',
    winCast: 'Denis (Bélgica - Esquerda) - Portugal',
    scoreCast: 'Bélgica - Portugal 2-1'
  },
  {
    team1: 'Bélgica',
    team2: 'Portugal',
    time: '1:20',
    result: '0 x 1',
    resultKick: '(0 x 0)',
    firstScoreTeam: 'Bélgica',
    lastScoreTeam: 'Portugal',
    firstScorePlayer: 'Denis (Bélgica – Esquerda)',
    winCast: 'Denis (Bélgica - Esquerda) - Portugal',
    scoreCast: 'Bélgica - Portugal 2-1'
  }
]

const details: TStatisticDetailProps[] = [
  {
    title: 'Gols impar em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Time marca primeiro em sequência',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Under HT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Under HT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Under HT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Under HT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Under HT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Under HT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Casa marca em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Under HT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Under HT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Under HT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Over FT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Over FT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Under FT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' }
    ]
  },
  {
    title: 'Under FT em sequencia',
    values: [
      { label: 'Sim', value: '2/10/10' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' },
      { label: 'Não', value: '0/8/8' }
    ]
  }
]
const LastGamesContent = () => {
  return (
    <div className="flex flex-start gap-6 flex-1 self-stretch">
      <div className="flex flex-col items-start gap-2">
        {statisticData.map((item: TStatisticDataProps, index: number) => (
          <StatisticCard key={index} {...item} />
        ))}
      </div>
      <div className="flex justify-between items-start content-start gap-y-[9px] flex-1 self-stretch flex-wrap">
        {details.map((data, index) => (
          <DetailCard key={index} {...data} />
        ))}
      </div>
    </div>
  )
}

export default LastGamesContent
