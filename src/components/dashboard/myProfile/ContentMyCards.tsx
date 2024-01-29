import { Button, Heading05, InputField, Paragraph02, Paragraph03 } from '@/components'
import Image from 'next/image'

const ContentMyCards = () => {
  return (
    <div className="flex p-6 flex-col items-start gap-8 flex-1 self-stretch rounded bg-shades-0">
      <Heading05 fontWeight="semi">Meus cartões</Heading05>
      <div className="flex items-start gap-6">
        <div className="flex flex-col p-6 items-start gap-4 rounded-md bg-neutral-100 w-[329px] relative">
          <div className="flex justify-center items-center gap-2.5 absolute px-2 left-6 top-[-10px] rounded-3xl bg-primary-700">
            <Paragraph03 className="text-shades-0">Salvo como principal</Paragraph03>
          </div>
          <div className="flex items-start gap-2">
            <Paragraph02 fontWeight="semi">Cartão 1: Cadastrado em 20/08/2023</Paragraph02>
            <Image
              src="/assets/icons/trash.svg"
              alt="logo"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-start gap-1 self-stretch">
            <InputField
              type="card"
              label="Número do cartão"
              value="1234 **** **** 1234"
              onChange={() => {}}
            />
            <div className="flex items-start gap-4 self-stretch">
              <InputField label="Data de vencimento" value="06/2025" onChange={() => {}} />
              <InputField label="CVV" value="***" className="w-20" onChange={() => {}} />
            </div>
          </div>
          <Button type="disabled" text="Definir como principal" />
        </div>
        <div className="flex flex-col p-6 items-start gap-4 rounded-md bg-neutral-100 w-[329px] relative">
          <div className="flex items-start gap-2">
            <Paragraph02 fontWeight="semi">Cartão 2: Cadastrado em 20/08/2023</Paragraph02>
            <Image
              src="/assets/icons/trash.svg"
              alt="logo"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </div>
          <div className="flex flex-col items-start gap-1 self-stretch">
            <InputField
              type="card"
              label="Número do cartão"
              value="1234 **** **** 1234"
              onChange={() => {}}
            />
            <div className="flex items-start gap-4 self-stretch">
              <InputField label="Data de vencimento" value="06/2025" onChange={() => {}} />
              <InputField label="CVV" value="***" className="w-20" onChange={() => {}} />
            </div>
          </div>
          <Button type="primary" text="Definir como principal" />
        </div>
      </div>
    </div>
  )
}

export default ContentMyCards
