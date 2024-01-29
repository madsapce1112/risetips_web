import { Caption, Paragraph01, Paragraph02, Paragraph03, Tag } from '@/components'
import Image from 'next/image'
import { TStatisticDataProps } from './type'

type TkeydataProps = React.HTMLAttributes<HTMLInputElement> & {
  key: keyof TStatisticDataProps
  keyTitle: string
}

const keydata: TkeydataProps[] = [
  { key: 'firstScoreTeam', keyTitle: 'Primeiro time a marcar' },
  { key: 'lastScoreTeam', keyTitle: 'Último time a marcar' },
  { key: 'firstScorePlayer', keyTitle: 'Primeiro jogador a marcar' },
  { key: 'winCast', keyTitle: 'Wincast' },
  { key: 'scoreCast', keyTitle: 'Scorecast' }
]
const StatisticCard = (props: TStatisticDataProps) => {
  const { team1, team2, time, result, resultKick } = props
  return (
    <div className="flex w-[320px] py-4 px-2 flex-col items-center gap-3 rounded bg-shades-0 text-center">
      <div className="flex w-full content-center justify-center items-center gap-[26px] self-stretch">
        <div className="flex h-[81px] flex-col items-center gap-1">
          <Image
            src="/assets/country_icons/hungary.svg"
            alt="Rectangle"
            width={71}
            height={53}
            className="rounded-lg shadow-neutral-500/50"
          />
          <Paragraph02 className="text-center text-neutral-900">{team1}</Paragraph02>
        </div>
        <div className="flex flex-col items-center gap-0.5">
          <Tag text={time} />
          <Paragraph01 fontWeight="semi" className="text-neutral-900 text-center">
            {result}
          </Paragraph01>
          <Paragraph03 className="text-neutral-900 text-center">{resultKick}</Paragraph03>
        </div>
        <div className="flex h-[81px] flex-col items-center gap-1">
          <Image
            src="/assets/country_icons/hungary.svg"
            alt="logo"
            width={71}
            height={53}
            className="rounded-lg shadow-neutral-500/50"
          />
          <Paragraph02 className="text-center text-neutral-900">{team2}</Paragraph02>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 self-stretch">
        {keydata.map(({ key, keyTitle }: TkeydataProps, index: number) => (
          <Caption key={index} className="text-neutral-600 leading-[150%] text-xs">
            {keyTitle}: {props[key]}
          </Caption>
        ))}
      </div>
    </div>
  )
}

export default StatisticCard
