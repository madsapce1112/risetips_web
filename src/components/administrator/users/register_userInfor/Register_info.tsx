import { Button, InputField, Select } from '@/components'
import Image from 'next/image'

const Register_info = () => {
  return (
    <div className="flex flex-col p-6 items-start gap-6 self-stretch bg-shades-0">
      <div className="flex flex-col gap-6">
        <Image
          src="/assets/user.svg"
          alt="avatar"
          width={80}
          height={80}
          className="rounded-full"
        />
        <InputField label="Nome" value="Olivia Rhye" onChange={() => {}} />
        <InputField label="E-mail" value="olivia@untitledui.com" onChange={() => {}} />
        <Select label="Plano de assinatura" optionData={['Plano básico']} />
        <div className="flex w-[303px] justify-center items-center gap-4">
          <Button type="destructive-outline" text="Fechar" />
          <Button type="primary" text="Salvar alterações" className="w-full" />
        </div>
      </div>
    </div>
  )
}

export default Register_info
