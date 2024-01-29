import { CustomTable, Heading05 } from '@/components'

const ContentPaymentHistory = () => {
  const tableData = {
    headers: [
      {
        id: 'checkbox',
        type: 'checkbox',
        className: 'justify-center'
      },
      {
        id: 'name',
        title: 'Nome',
        sortable: true,
        className: 'justify-start',
        edit: true
      },
      {
        id: 'purchasedPlan',
        title: 'Plano adquirido',
        sortable: true,
        className: 'justify-center',
        edit: true
      },
      {
        id: 'amountPaid',
        title: 'Valor pago',
        sortable: true,
        className: 'justify-center',
        edit: true
      },
      {
        id: 'payDay',
        title: 'Data do pagamento',
        sortable: true,
        className: 'justify-center'
      },
      {
        id: 'download',
        title: 'Baixar NFe',
        type: 'button',
        className: 'justify-center'
        // selector: row => row.year,
      }
    ],

    data: [
      {
        name: 'Olivia Rhye',
        purchasedPlan: 'Básico',
        amountPaid: 'R$123,45',
        payDay: '1988/11/12',
        status: false
      },
      {
        name: 'Olivia Rhye',
        purchasedPlan: 'Básico',
        amountPaid: 'R$123,45',
        payDay: '1988/11/12',
        status: false
      },
      {
        name: 'Olivia Rhye',
        purchasedPlan: 'Básico',
        amountPaid: 'R$123,45',
        payDay: '1988/11/12',
        status: false
      },
      {
        name: 'Olivia Rhye',
        purchasedPlan: 'Básico',
        amountPaid: 'R$123,45',
        payDay: '1988/11/12',
        status: false
      },
      {
        name: 'Olivia Rhye',
        purchasedPlan: 'Básico',
        amountPaid: 'R$123,45',
        payDay: '1988/11/12',
        status: false
      },
      {
        name: 'Olivia Rhye',
        purchasedPlan: 'Básico',
        amountPaid: 'R$123,45',
        payDay: '1988/11/12',
        status: false
      },
      {
        name: 'Olivia Rhye',
        purchasedPlan: 'Básico',
        amountPaid: 'R$123,45',
        payDay: '1988/11/12',
        status: false
      },
      {
        name: 'Olivia Rhye',
        purchasedPlan: 'Básico',
        amountPaid: 'R$123,45',
        payDay: '1988/11/12',
        status: false
      }
    ]
  }

  return (
    <div className="flex p-6 flex-col items-start gap-6 flex-1 self-stretch rounded bg-shades-0">
      <Heading05 fontWeight="semi">Histórico de pagamentos</Heading05>
      <CustomTable {...tableData} />
    </div>
  )
}

export default ContentPaymentHistory
