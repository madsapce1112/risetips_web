import { InputField, Select } from '@/components'

const Filter = () => {
  return (
    <div className="flex items-start gap-6">
      <InputField label="Pesquisar usuário" type="search" placeholder="Pesquisar.." />
      <Select label="Filtrar por data" optionData={['Selecione']} />
      <Select label="Filtrar por plano" optionData={['Selecione']} />
    </div>
  )
}

export default Filter
