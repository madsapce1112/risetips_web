import { Caption } from '@/components'
import { TStatisticDetailProps } from './type'
import Progress from './Progress'

const DetailCard = ({ title, values }: TStatisticDetailProps) => {
  return (
    <div className="flex min-w-[214px] flex-col items-start rounded bg-neutral-200 overflow-hidden">
      <div className="flex py-75 px-300 justify-center items-center gap-2.5 self-stretch bg-primary-700">
        <Caption fontWeight="semi" className="text-shades-0 text-center">
          {title}
        </Caption>
      </div>
      <div className="flex flex-col p-3 items-start gap-2 self-stretch">
        {values.map((data, index) => (
          <Progress key={index} {...data} />
        ))}
      </div>
    </div>
  )
}

export default DetailCard
