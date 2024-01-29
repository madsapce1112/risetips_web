import { Button, Select } from '@/components'

const MyTicketsFilter = () => {
  return (
    <div className="flex justify-between items-end self-stretch">
      <div className="flex items-center gap-6">
        <Select label="Filtrar por data" optionData={['Selecione']} />
        <Select label="Filtrar por status" optionData={['Selecione']} />
      </div>
      <Button type="primary" size="large" text="Criar novo ticket" className="font-semibold" />
    </div>
  )
}

export default MyTicketsFilter
