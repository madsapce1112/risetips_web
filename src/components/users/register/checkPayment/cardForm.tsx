import { Button, InputField } from '@/components'

type TCardFormProps = React.HTMLAttributes<HTMLSpanElement> & {
  onClick: () => void
}
const CardForm = (props: TCardFormProps) => {
  return (
    <div className="flex flex-col w-[592px] py-12 px-8 justify-center items-center gap-6 rounded-xl bg-neutral-100 shadow-sm">
      <InputField label="Nome do titular do cartão" className="w-full" />
      <InputField label="Número do cartão" className="w-full" />
      <div className="flex justify-center items-center gap-6 self-stretch w-full">
        <InputField label="Data de vencimento" className="w-full" />
        <InputField label="CVV Code" className="w-2/5" />
      </div>
      <Button
        type="primary"
        size="large"
        text="Confirmar pagamento:0/mês"
        className="w-full"
        {...props}
      />
    </div>
  )
}

export default CardForm
