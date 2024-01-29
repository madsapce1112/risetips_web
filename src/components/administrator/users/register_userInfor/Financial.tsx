import { CustomTable, Heading05 } from '@/components'
import { TCustomTableProps } from '@/components/customTable/type'
import SignatureCard from '@/components/dashboard/myProfile/SignatureCard'
import { TSignatureProps } from '@/components/dashboard/myProfile/type'

const signatureData: TSignatureProps[] = [
  { image: 'plans', title: 'Básico', amount: '40,00', active: true },
  { image: 'plan1', title: 'Intermediário', amount: '60,00', active: false },
  { image: 'advanced', title: 'Avançado', amount: '80,00', active: false }
]

const tableData: TCustomTableProps = {
  headers: [
    {
      id: 'checkbox',
      title: 'checkbox',
      type: 'checkbox',
      className: 'justify-start',
      width: 5
    },
    {
      id: 'name',
      title: 'Nome',
      className: 'justify-start',
      width: 20
    },
    {
      id: 'purchasedPlan',
      title: 'Plano adquirido',
      className: 'justify-center',
      width: 15
    },
    { id: 'amountPaid', title: 'Valor pago', className: 'justify-center', width: 15 },
    {
      id: 'payDay',
      title: 'Data do pagamento',
      className: 'justify-center',
      width: 20
    },
    {
      id: 'button',
      title: 'Baixar NFe',
      type: 'button',
      className: 'justify-center',
      width: 10
    },
    {
      id: 'button',
      title: 'Enviar para e-mail',
      type: 'button',
      className: 'justify-content',
      width: 15
    }
  ],

  data: [
    {
      name: 'Olivia Rhye',
      purchasedPlan: 'Básico',
      amountPaid: 'R$123,45',
      payDay: '21/08/2023 22:21'
    },
    {
      name: 'Olivia Rhye',
      purchasedPlan: 'Básico',
      amountPaid: 'R$123,45',
      payDay: '21/08/2023 22:21'
    },
    {
      name: 'Olivia Rhye',
      purchasedPlan: 'Básico',
      amountPaid: 'R$123,45',
      payDay: '21/08/2023 22:21'
    },
    {
      name: 'Olivia Rhye',
      purchasedPlan: 'Básico',
      amountPaid: 'R$123,45',
      payDay: '21/08/2023 22:21'
    },
    {
      name: 'Olivia Rhye',
      purchasedPlan: 'Básico',
      amountPaid: 'R$123,45',
      payDay: '21/08/2023 22:21'
    }
  ],
  isFooter: true
}
const Financial = () => {
  return (
    <div className="flex flex-col p-6 items-start gap-6 flex-1 self-stretch bg-shades-0">
      <div className="flex flex-col items-start gap-6 flex-1 self-stretch rounded">
        <Heading05 fontWeight="semi">Plano atual</Heading05>
        <div className="flex items-start gap-6 self-stretch">
          {signatureData.map((item: TSignatureProps, index) => (
            <SignatureCard key={index} {...item} />
          ))}
        </div>
        <Heading05 fontWeight="semi">Histórico de pagamentos</Heading05>
        <CustomTable {...tableData} />
      </div>
    </div>
  )
}

export default Financial
