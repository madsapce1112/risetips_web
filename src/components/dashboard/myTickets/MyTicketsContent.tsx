import { CustomTable } from '@/components'
import { TCustomTableProps } from '@/components/customTable/type'

const tableData: TCustomTableProps = {
  headers: [
    {
      id: 'checkbox',
      type: 'checkbox',
      className: 'justify-center',
      width: 8
    },
    {
      id: 'id',
      title: 'ID',
      className: 'justify-content'
    },
    {
      id: 'assunto',
      title: 'Assunto',
      sortable: true,
      className: 'justify-start ',
      edit: true
    },
    {
      id: 'email',
      title: 'E-mail',
      sortable: true,
      className: 'justify-center',
      edit: true
    },
    {
      id: 'date',
      title: 'Data da solicitação',
      sortable: true,
      className: 'justify-center',
      edit: true
    },
    {
      id: 'status',
      title: 'Status',
      type: 'status1',
      sortable: true,
      className: 'justify-center',
      edit: true
    },
    {
      id: 'action',
      title: 'Status',
      type: 'action',
      className: 'justify-center'
      // selector: row => row.year,
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
      status: { text: 'Não respondido', colorType: 'Red' }
    },
    {
      id: '123',
      assunto: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      date: '21/08/2023 22:21',
      status: { text: 'Não respondido', colorType: 'Red' }
    },
    {
      id: '123',
      assunto: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      date: '21/08/2023 22:21',
      status: { text: 'Respondido', colorType: 'Blue' }
    },
    {
      id: '123',
      assunto: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      date: '21/08/2023 22:21',
      status: { text: 'Respondido', colorType: 'Blue' }
    },
    {
      id: '123',
      assunto: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      date: '21/08/2023 22:21',
      status: { text: 'Concluído', colorType: 'Green' }
    },
    {
      id: '123',
      assunto: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      date: '21/08/2023 22:21',
      status: { text: 'Concluído', colorType: 'Green' }
    }
  ]
}

const MyTicketsContent = () => {
  return <CustomTable {...tableData} />
}

export default MyTicketsContent
