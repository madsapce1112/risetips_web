import {
  Button,
  Heading02,
  Heading04,
  InputField,
  Paragraph02,
  Paragraph03,
  Select
} from '@/components'
import { ModalWithButton } from '@/components/modal'

const TelegramFilter = () => {
  return (
    <div className="flex justify-between items-end self-stretch">
      <div className="flex items-center gap-6">
        <InputField type="search" label="Pesquisar usuário" placeholder="Pesquisar.." />
        <Select label="Filtrar por data" optionData={['Selecione']} />
        <Select label="Filtrar por plano" optionData={['Selecione']} />
      </div>
      <ModalWithButton
        buttonType="primary"
        buttonSize="large"
        buttonTitle="Tenho interesse!"
        buttonClassName="font-semibold"
        className="w-[600px] h-[452px]"
      >
        <div className="flex p-8 justify-center items-center gap-2 rounded-lg bg-shades-0">
          <div className="flex flex-col items-center gap-8 flex-1">
            <Heading04 fontWeight="semi" className="text-center">
              Insira este pin para o chatbot do telegram
            </Heading04>
            <div className="flex flex-col items-center gap-4">
              <Paragraph02 className="text-neutral-900">Seu código é:</Paragraph02>
              <Heading02 fontWeight="semi">1 2 3 4 5 6</Heading02>
            </div>
            <ModalWithButton
              buttonType="primary"
              buttonSize="large"
              buttonTitle="Conectar ao Chatbot do Telegram"
              className="w-[600px] h-[452px]"
            >
              <div className="flex w-full flex-col items-center gap-6 rounded-lg">
                <Heading04 fontWeight="semi">Criar mensagem</Heading04>
                <Select label="Tipo" optionData={['Selecione']} className="w-full" />
                <div className="flex flex-col items-start gap-1 self-stretch">
                  <Paragraph03 className="text-neutral-900">Descrição da mensagem</Paragraph03>
                  <div className="flex py-1.5 px-4 items-start gap-2 self-stretch rounded border border-neutral-300 bg-neutral-50">
                    titulo
                  </div>

                  <div className="flex justify-center items-start gap-4 self-stretch">
                    <Button type="primary" size="small" text="Total entradas" className="w-full" />
                    <Button type="secondary" size="small" text="Greens" className="w-full" />
                    <Button type="secondary" size="small" text="Reds" className="w-full" />
                    <Button type="secondary" size="small" text="Assertividade" className="w-full" />
                  </div>
                </div>
              </div>
            </ModalWithButton>
          </div>
        </div>
      </ModalWithButton>
    </div>
  )
}

export default TelegramFilter
