import { Heading04, Paragraph01 } from '@/components'
import Image from 'next/image'

const AreaToClientHeader = () => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <div>
        <Image src="/assets/logo.png" alt="logo" width={65} height={57} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <Heading04 fontWeight="semi">Área do cliente</Heading04>
        <Paragraph01>Visão geral</Paragraph01>
      </div>
    </div>
  )
}

export default AreaToClientHeader
