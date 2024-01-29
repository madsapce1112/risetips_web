import Image from 'next/image'
import DashboardHeader from '../DashboardHeader'
import { Caption, Paragraph02 } from '@/components'

const TelegramHeader = () => {
  return (
    <DashboardHeader title="Integração telegram">
      <div className="flex items-center gap-2">
        <Image src="/assets/user.jpg" alt="user" width={48} height={48} className="rounded-full" />
        <div className="flex flex-col items-start gap-1">
          <Paragraph02 fontWeight="semi" className="text-neutral-900">
            Bem vindo, Samuel Rizzo
          </Paragraph02>
          <Caption className="text-neutral-600">Editar perfil</Caption>
        </div>
      </div>
    </DashboardHeader>
  )
}
export default TelegramHeader
