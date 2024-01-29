import { Paragraph03 } from '@/components'

const TelegramStatus = () => {
  return (
    <div className="flex items-start gap-2">
      <Paragraph03 className="text-neutral-900">Status da conexão:</Paragraph03>
      <div className="flex px-4 justify-center items-center gap-2.5 rounded-3xl bg-primary-700">
        <Paragraph03 className="text-shades-0">Ativa</Paragraph03>
      </div>
    </div>
  )
}

export default TelegramStatus
