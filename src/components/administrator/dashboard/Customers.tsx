import { Button, Caption, CustomTable, Heading05, Paragraph03 } from '@/components'
import { TCustomTableProps } from '@/components/customTable/type'

const tableData: TCustomTableProps = {
  headers: [
    {
      id: 'date',
      title: 'Date',
      className: 'justify-start',
      isBorder: false,
      width: 15
    },
    {
      id: 'id',
      title: 'ID',
      className: 'justify-content',
      isBorder: false,
      width: 10
    },
    {
      id: 'name',
      title: 'Nome',
      className: 'justify-start ',
      isBorder: false,
      width: 20
    },
    {
      id: 'order_number',
      title: 'Nº pedido',
      className: 'justify-center',
      isBorder: false,
      width: 20
    },
    {
      id: 'form_payment',
      title: 'Forma de pagamento',
      className: 'justify-start',
      isBorder: false,
      width: 20
    },
    {
      id: 'status_payment',
      title: 'Status de pagamento',
      className: 'justify-content',
      isBorder: false,
      width: 15
    }
  ],

  data: [
    {
      date: '28/01/2023',
      id: '05',
      name: 'Andrey Simões Corrêa',
      order_number: '12345',
      form_payment: 'MP - Boleto',
      status_payment: 'Aguardando pagamento'
    },
    {
      date: '28/01/2023',
      id: '05',
      name: 'Andrey Simões Corrêa',
      order_number: '12345',
      form_payment: 'MP - Boleto',
      status_payment: 'Aguardando pagamento'
    },
    {
      date: '28/01/2023',
      id: '05',
      name: 'Andrey Simões Corrêa',
      order_number: '12345',
      form_payment: 'MP - Boleto',
      status_payment: 'Aguardando pagamento'
    }
  ],
  isFooter: false
}

const Customers = () => {
  return (
    <div className="flex items-start gap-6 self-stretch">
      <div className="flex w-[350px] p-6 flex-col items-start gap-4 rounded bg-shades-0">
        <div className="flex justify-between items-center self-stretch">
          <div className="flex flex-col items-start gap-1">
            <Heading05 fontWeight="semi">Clientes inativos</Heading05>
            <Caption className="text-neutral-600">01/01/2023 a 28/01/2023</Caption>
          </div>
          <Button type="primary" size="small" text="Ver todos" />
        </div>
        <div className="flex flex-col items-start gap-2 self-stretch">
          <div className="flex justify-between items-center self-stretch">
            <Paragraph03 fontWeight="semi">Jacob Jones Courtney</Paragraph03>
            <Button
              type="secondary"
              size="small"
              text="Entrar em contato"
              className="text-primary-900 font-semibold"
            />
          </div>
          <div className="flex justify-between items-center self-stretch">
            <Paragraph03 fontWeight="semi">Henry Dianne Russell</Paragraph03>
            <Button
              type="secondary"
              size="small"
              text="Entrar em contato"
              className="text-primary-900 font-semibold"
            />
          </div>
          <div className="flex justify-between items-center self-stretch">
            <Paragraph03 fontWeight="semi">Brooklyn Simmons</Paragraph03>
            <Button
              type="secondary"
              size="small"
              text="Entrar em contato"
              className="text-primary-900 font-semibold"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6 items-start gap-4 flex-1 rounded bg-shades-0">
        <div className="flex justify-between items-center self-stretch">
          <div className="flex flex-col items-start gap-1">
            <Heading05 fontWeight="semi">Clientes inativos</Heading05>
            <Caption className="text-neutral-600">01/01/2023 a 28/01/2023</Caption>
          </div>
          <Button type="primary" size="small" text="Ver todos" />
        </div>
        <CustomTable {...tableData} />
      </div>
    </div>
  )
}

export default Customers
