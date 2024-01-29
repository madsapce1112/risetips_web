import { CustomTable } from '@/components'

const tableData = {
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

const TelegramContent = () => {
  return <CustomTable {...tableData} />
}

export default TelegramContent
