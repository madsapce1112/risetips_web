import { Button, Heading04, InputField, Select } from '@/components'

const MyTicketsAdd = () => {
  return (
    <div className="flex flex-col items-start flex-1 self-stretch gap-6">
      <div className="flex justify-between items-center self-stretch">
        <Heading04 fontWeight="semi">Criar novo ticket</Heading04>
        <Button type="primary" size="large" text="Voltar para o painel" />
      </div>
      <InputField label="Titulo da mensagem" placeholder="Placeholder" className="w-[342px]" />
      <Select label="Assunto" optionData={['Selecione']} className="w-[342px]" />
      <InputField type="textarea" label="Assunto" placeholder="Text Input" className="w-[342px]" />
      <Button type="primary" size="large" text="Enviar ticket" className="w-[342px]" />
    </div>
  )
}

export default MyTicketsAdd
