export type TStatisticDataProps = React.HTMLAttributes<HTMLInputElement> & {
  team1: string
  team2: string
  time: string
  result: string
  resultKick: string
  firstScoreTeam: string
  lastScoreTeam: string
  firstScorePlayer: string
  winCast: string
  scoreCast: string
}

export type TStatisticDetailProps = {
  title: string
  values: TProgressProps[]
}

export type TProgressProps = {
  label: string
  value: string
}
