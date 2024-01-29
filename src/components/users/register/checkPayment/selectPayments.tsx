import { Button, Paragraph01, Paragraph03 } from '@/components'
import Image from 'next/image'

type TSelectPaymentsProps = React.HTMLAttributes<HTMLSpanElement> & {
  onClick: () => void
}

const SelectPayments = (props: TSelectPaymentsProps) => {
  return (
    <div className="flex flex-col w-[592px] py-12 px-8 justify-center items-center gap-6 rounded-xl bg-neutral-100 shadow-sm">
      <Paragraph01 fontWeight="semi">Selecione uma das opções para continuar</Paragraph01>
      <div className="flex flex-col justify-center items-center gap-4 self-stretch">
        <div className="flex p-2 items-center gap-6 self-stretch rounded-[4px] border border-neutral-300 bg-neutral-50">
          <Image src="/assets/payment_logos/pix.svg" alt="logo" width={48} height={48} />
          <Paragraph01 fontWeight="semi">Pagar com PIX</Paragraph01>
        </div>
        <div className="flex p-2 items-center gap-6 self-stretch rounded-[4px] border border-neutral-300 bg-neutral-50">
          <div className="px-1.5 py-[9px] w-12 y-12 justify-center items-center">
            <Image src="/assets/payment_logos/credit_card.svg" alt="logo" width={36} height={30} />
          </div>
          <Paragraph01 fontWeight="semi">Pagar com Cartão de Crédito</Paragraph01>
        </div>
      </div>
      <Paragraph03 fontWeight="semi">
        Possui cupom de desconto? Clique aqui para aplicar
      </Paragraph03>
      <Button
        type="primary"
        size="large"
        text="Ir para a finalização da compra"
        className="w-full"
        {...props}
      />
    </div>
  )
}

export default SelectPayments
