import { CustomTable } from '@/components'
import { TCustomTableProps } from '@/components/customTable/type'

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
      id: 'id',
      title: 'ID',
      className: 'justify-content',
      width: 5
    },
    {
      id: 'avatar',
      title: 'Foto',
      type: 'avatar',
      className: 'justify-content',
      width: 10
    },

    {
      id: 'user',
      title: 'Usuário',
      className: 'justify-start',
      width: 15
    },
    {
      id: 'email',
      title: 'E-mail',
      className: 'justify-start',
      width: 15
    },
    {
      id: 'plan',
      title: 'Plano adquirido',
      className: 'justify-center',
      width: 25
    },
    {
      id: 'next_payment',
      title: 'Próximo pagamento',
      className: 'justify-center',
      width: 15
    },
    {
      id: 'action',
      title: 'action',
      type: 'action',
      className: 'justify-content',
      width: 10
    }
  ],

  data: [
    {
      id: '123',
      avatar: '/assets/user.svg',
      user: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      plan: 'Básico',
      next_payment: '21/08/2024'
    },
    {
      id: '123',
      avatar: '/assets/user.svg',
      user: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      plan: 'Básico',
      next_payment: '21/08/2024'
    },
    {
      id: '123',
      avatar: '/assets/user.svg',
      user: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      plan: 'Básico',
      next_payment: '21/08/2024'
    },
    {
      id: '123',
      avatar: '/assets/user.svg',
      user: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      plan: 'Básico',
      next_payment: '21/08/2024'
    },
    {
      id: '123',
      avatar: '/assets/user.svg',
      user: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      plan: 'Básico',
      next_payment: '21/08/2024'
    },
    {
      id: '123',
      avatar: '/assets/user.svg',
      user: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      plan: 'Básico',
      next_payment: '21/08/2024'
    },
    {
      id: '123',
      avatar: '/assets/user.svg',
      user: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      plan: 'Básico',
      next_payment: '21/08/2024'
    },
    {
      id: '123',
      avatar: '/assets/user.svg',
      user: 'Olivia Rhye',
      email: 'olivia@untitledui.com',
      plan: 'Básico',
      next_payment: '21/08/2024'
    }
  ],
  isFooter: true
}
const Content = () => {
  return <CustomTable {...tableData} />
}

export default Content
