import { Button, CustomTable, Heading05 } from '@/components'
import { TCustomTableProps } from '@/components/customTable/type'

const tableData: TCustomTableProps = {
  headers: [
    {
      id: 'id',
      title: 'ID',
      className: 'justify-content',
      width: 10
    },
    {
      id: 'assunto',
      title: 'Assunto',
      className: 'justify-start',
      edit: true,
      width: 20
    },
    {
      id: 'email',
      title: 'E-mail',
      className: 'justify-center',
      edit: true,
      width: 25
    },
    {
      id: 'date',
      title: 'Data da solicitação',
      className: 'justify-center',
      edit: true,
      width: 25
    },
    {
      id: 'status',
      title: 'Status',
      type: 'status1',
      className: 'justify-center',
      edit: true,
      width: 20
    }
  ],

  data: [
    {
      id: '123',
      assunto: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      date: '21/08/2023 22:21',
      status: { text: 'Em andamento', colorType: 'Yellow' }
    },
    {
      id: '123',
      assunto: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      date: '21/08/2023 22:21',
      status: { text: 'Em andamento', colorType: 'Yellow' }
    },
    {
      id: '123',
      assunto: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      date: '21/08/2023 22:21',
      status: { text: 'Em andamento', colorType: 'Yellow' }
    }
  ],
  isFooter: false
}
const Tickets = () => {
  return (
    <div className="flex flex-col p-6 items-start gap-4 self-stretch rounded-[4px] bg-shades-0">
      <div className="flex justify-between items-start self-stretch">
        <Heading05 fontWeight="semi">Últimos tickets</Heading05>
        <Button type="primary" size="small" text="Entrar em contato" className="font-semibold" />
      </div>
      <CustomTable {...tableData} />
    </div>
  )
}

export default Tickets
