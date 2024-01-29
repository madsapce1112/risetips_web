import { Paragraph02 } from '@/components'
import Image from 'next/image'
import { TSignatureProps } from './type'

const SignatureCard = ({ image, title, amount, active }: TSignatureProps) => {
  return (
    <div className="flex flex-col items-start rounded-lg border overflow-hidden">
      <div
        className={`flex w-[367px] py-2 px-4 justify-between items-center ${
          active ? 'bg-primary-300' : 'bg-neutral-200'
        }`}
      >
        <div className="flex items-center gap-4">
          <div
            className={`flex p-1 justify-center items-center gap-2.5 rounded-full ${
              active ? 'border-primary-50 bg-primary-50' : 'border-neutral-100 bg-neutral-50'
            }`}
          >
            <Image
              src={`/assets/icons/${image}.svg`}
              alt="basic"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <Paragraph02 fontWeight="semi">{title}</Paragraph02>
        </div>
        <Image
          src={`/assets/icons/${active ? 'checkmark' : 'uncheckmark'}.svg`}
          alt="checkmark"
          width={24}
          height={24}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col h-[100px] p-4 items-start gap-1 self-stretch">
        <div className="flex items-end gap-[2.993px] self-stretch">
          <p className="text-neutral-900 font-Inter text-[22.449px] text-normal font-semibold leading-[126.667%]">
            R$ {amount}
          </p>
          <p className="text-neutral-600 font-Inter text-[10.476px] text-normal font-bold leading-[142.857%]">
            por mês
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignatureCard
