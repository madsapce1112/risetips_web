import DashboardHeader from '../DashboardHeader'
import { Button, TButtonProps } from '@/components'

const headerButtons: TButtonProps[] = [
  { type: 'secondary', size: 'small', text: '12 meses' },
  { type: 'secondary', size: 'small', text: '30 dias' },
  { type: 'secondary', size: 'small', text: '7 dias' },
  { type: 'secondary', size: 'small', text: '24 horas' },
  { type: 'primary', size: 'small', text: 'Todos' }
]
const MyRobotsHeader = () => {
  return (
    <DashboardHeader title="Meus robôs">
      <div className="flex flex-grow bg-shades-0 rounded-lg gap-2 px-500 py-100 justify-end items-center h-full">
        {headerButtons.map((buttonProps: TButtonProps) => (
          <Button key={buttonProps.text} {...buttonProps} />
        ))}
      </div>
    </DashboardHeader>
  )
}

export default MyRobotsHeader
