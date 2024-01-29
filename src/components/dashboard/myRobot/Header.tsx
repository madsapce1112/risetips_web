import DashboardHeader from '../DashboardHeader'
import { InputField, Select, TSelectProps } from '@/components'

const optionData = ['seleione']

const selectData: TSelectProps[] = [
  { label: 'Tipo marcação', id: 'markingType', optionData },
  { label: 'Horário de funcionamento', id: 'openingHours', optionData },
  { label: 'Mensagem personalizada', id: 'customMessage', optionData }
]
const MyRobotHeader = () => {
  return (
    <DashboardHeader title="Criar novo robô">
      <div className="flex flex-grow bg-shades-0 rounded-lg space-x-6 px-500 py-100 justify-end items-center h-full">
        <InputField label="Defina aqui o nome do seu padrão" className="w-full" id="pattenName" />
        {selectData.map((dataProps: TSelectProps) => (
          <Select key={dataProps.label} {...dataProps} />
        ))}
      </div>
    </DashboardHeader>
  )
}

export default MyRobotHeader
