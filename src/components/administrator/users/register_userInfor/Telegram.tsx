import { CustomTable, Heading05, Paragraph02, Paragraph03 } from '@/components'
import { TCustomTableProps } from '@/components/customTable/type'

const tableData: TCustomTableProps = {
  headers: [
    {
      id: 'checkbox',
      type: 'checkbox',
      className: 'justify-center',
      width: 5
    },
    {
      id: 'id',
      title: 'ID',
      className: 'justify-content',
      width: 5
    },
    {
      id: 'name',
      title: 'Nome',
      sortable: true,
      className: 'justify-start',
      edit: true,
      width: 10
    },
    {
      id: 'tipo',
      title: 'Tipo',
      sortable: true,
      className: 'justify-center',
      edit: true,
      width: 5
    },
    {
      id: 'message',
      title: 'Mensagem',
      sortable: true,
      className: 'justify-center',
      edit: true,
      width: 30
    },
    {
      id: 'usedRobots',
      title: 'Robôs utilizados',
      sortable: true,
      className: 'justify-center',
      width: 20
    },
    {
      id: 'status',
      title: 'Status',
      type: 'switch',
      sortable: true,
      className: 'justify-center',
      edit: true,
      width: 15
    },
    {
      id: 'action',
      title: 'Status',
      type: 'action',
      className: 'justify-center',
      width: 10
    }
  ],

  data: [
    {
      id: '123',
      name: 'Olivia Rhye',
      tipo: 'TIP',
      message: 'Lorem ipsum dolor sit amet consectetur.',
      usedRobots: '10,12,3,45,78,12',
      status: false
    },
    {
      id: '123',
      name: 'Olivia Rhye',
      tipo: 'TIP',
      message: 'Lorem ipsum dolor sit amet consectetur.',
      usedRobots: '10,12,3,45,78,12',
      status: false
    },
    {
      id: '123',
      name: 'Olivia Rhye',
      tipo: 'TIP',
      message: 'Lorem ipsum dolor sit amet consectetur.',
      usedRobots: '10,12,3,45,78,12',
      status: false
    },
    {
      id: '123',
      name: 'Olivia Rhye',
      tipo: 'TIP',
      message: 'Lorem ipsum dolor sit amet consectetur.',
      usedRobots: '10,12,3,45,78,12',
      status: false
    },
    {
      id: '123',
      name: 'Olivia Rhye',
      tipo: 'TIP',
      message: 'Lorem ipsum dolor sit amet consectetur.',
      usedRobots: '10,12,3,45,78,12',
      status: false
    },
    {
      id: '123',
      name: 'Olivia Rhye',
      tipo: 'TIP',
      message: 'Lorem ipsum dolor sit amet consectetur.',
      usedRobots: '10,12,3,45,78,12',
      status: false
    },
    {
      id: '123',
      name: 'Olivia Rhye',
      tipo: 'TIP',
      message: 'Lorem ipsum dolor sit amet consectetur.',
      usedRobots: '10,12,3,45,78,12',
      status: false
    },
    {
      id: '123',
      name: 'Olivia Rhye',
      tipo: 'TIP',
      message: 'Lorem ipsum dolor sit amet consectetur.',
      usedRobots: '10,12,3,45,78,12',
      status: false
    }
  ],
  isFooter: true
}
const Telegram = () => {
  return (
    <div className="flex flex-col p-6 items-start gap-6 self-stretch bg-shades-0">
      <div className="flex justify-between item-center self-stretch">
        <Heading05 fontWeight="semi">Telegram</Heading05>
        <div className="flex items-start gap-2">
          <Paragraph02>Status da conexão:</Paragraph02>
          <div className="flex justify-center px-300 items-center gap-2.5 rounded-3xl bg-primary-700">
            <Paragraph03 className="text-shades-0">Ativa</Paragraph03>
          </div>
        </div>
      </div>
      <CustomTable {...tableData} />
    </div>
  )
}

export default Telegram
