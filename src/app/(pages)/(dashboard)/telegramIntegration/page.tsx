import {
  TelegramHeader,
  TelegramStatus,
  TelegramFilter,
  TelegramContent
} from '@/components/dashboard'

const TelegramIntegration = () => {
  return (
    <>
      <TelegramHeader />
      <TelegramStatus />
      <TelegramFilter />
      <TelegramContent />
    </>
  )
}

export default TelegramIntegration
