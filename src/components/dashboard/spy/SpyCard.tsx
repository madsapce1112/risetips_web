import { Button, Heading06, Paragraph02, Paragraph03 } from '@/components'
import Image from 'next/image'
import { TSpyCardProps } from './type'

const SpyCard = ({ name, subName, time, percent, times }: TSpyCardProps) => {
  return (
    <div
      className={`flex flex-col ${
        subName ? 'w-[223.25px]' : 'w-[195px]'
      } p-6 items-center gap-4 rounded bg-shades-0`}
    >
      <div className="flex flex-col items-center gap-2">
        <Heading06 fontWeight="semi">{name}</Heading06>
        {subName && (
          <Paragraph02 fontWeight="semi" className="text-neutral-600">
            {subName}
          </Paragraph02>
        )}

        <div className="flex flex-col items-center gap-1">
          <Paragraph03 fontWeight="semi" className="text-neutral-600">
            {time}
          </Paragraph03>
          <Paragraph03 className="text-neutral-600">{percent}</Paragraph03>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex flex-col items-center gap-0.5">
          <Image src="/assets/icons/clock.svg" alt="clock" width={24} height={24} />
          <Paragraph03 fontWeight="semi" className="text-neutral-900">
            Próximos horários
          </Paragraph03>
        </div>
        <div className="flex items-start gap-1.5">
          {times?.map((time: string, index: number) => (
            <Paragraph03 key={index} className="text-neutral-600">
              {time}
            </Paragraph03>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 self-stretch">
        <Button type="primary" size="small" text="Histórico" className="w-full" />
        <Button
          type="secondary"
          size="small"
          text="Copiar padrão"
          className="text-primary-900 w-full"
        />
      </div>
    </div>
  )
}

export default SpyCard
