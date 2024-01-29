import { Button, Heading04, Heading06, Paragraph02 } from '@/components'
import { TRobotCardProps } from './type'
import { ModalWithButton } from '@/components/modal'

const RobotCard = ({ title, contentData }: TRobotCardProps) => {
  return (
    <div className="border rounded w-full">
      <div className="flex rounded-t-sm justify-center py-1.5 items-start gap-2.5 self-stretch bg-primary-700">
        <Heading06 className="text-center text-white">{title}</Heading06>
      </div>
      <div className="flex p-3 flex-col items-start gap-2 self-stretch bg-neutral-200">
        {contentData.map((text, index) => (
          <Paragraph02 key={index}>{text}</Paragraph02>
        ))}
        <div className="flex gap-2 w-full">
          <Button
            type="primary"
            size="small"
            text="Editar"
            className="flex-1 items-center py-1.5 px-300 gap-2"
          />
          <ModalWithButton
            buttonTitle="Remover"
            buttonType="destructive"
            buttonSize="small"
            buttonClassName="flex-1 items-center py-1.5 px-300 gap-2"
          >
            <div className="flex flex-col gap-600 justify-center items-center">
              <div className="flex flex-col gap-300 items-center text-center">
                <Heading04 fontWeight="semi">Deseja realmente excluir este jogo?</Heading04>
                <Paragraph02>Esta ação é irreversivel e não poderá ser desfeita</Paragraph02>
              </div>
              <div className="flex flex-col gap-300">
                <Button type="primary" size="large" text="Sim, excluir" />
                <Button type="secondary" size="large" text="Não, voltar para o painel" />
              </div>
            </div>
          </ModalWithButton>
        </div>
      </div>
    </div>
  )
}

export default RobotCard
