import DashboardHeader from '../DashboardHeader'
import { Button, TButtonProps } from '@/components'

const headerButtons: TButtonProps[] = [
  { type: 'secondary', size: 'small', text: 'Copa do mundo' },
  { type: 'secondary', size: 'small', text: 'Eurocup' },
  { type: 'secondary', size: 'small', text: 'Premiership' },
  { type: 'secondary', size: 'small', text: 'Copa Sul-americana' },
  { type: 'primary', size: 'small', text: 'Todas' }
]
const LastGamesHeader = () => {
  return (
    <DashboardHeader title="Últimos jogos">
      <div className="flex flex-grow bg-shades-0 rounded-lg space-x-2 px-500 py-100 justify-end items-center h-full">
        {headerButtons.map((buttonProps: TButtonProps) => (
          <Button key={buttonProps.text} {...buttonProps} />
        ))}
      </div>
    </DashboardHeader>
  )
}

export default LastGamesHeader
