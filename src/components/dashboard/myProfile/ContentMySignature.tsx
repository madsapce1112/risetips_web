import { Heading05 } from '@/components'
import SignatureCard from './SignatureCard'
import { TSignatureProps } from './type'

const signatureData: TSignatureProps[] = [
  { image: 'plans', title: 'Básico', amount: '40,00', active: true },
  { image: 'plan1', title: 'Intermediário', amount: '60,00', active: false },
  { image: 'advanced', title: 'Avançado', amount: '80,00', active: false }
]

const ContentMySignature = () => {
  return (
    <div className="flex flex-col p-6 items-start gap-6 flex-1 self-stretch rounded-50 bg-shades-0">
      <Heading05 fontWeight="semi">Minha assinatura</Heading05>
      <div className="flex w-[880px] items-start content-start gap-6 flex-wrap ">
        {signatureData.map((item: TSignatureProps, index) => (
          <SignatureCard key={index} {...item} />
        ))}
      </div>
    </div>
  )
}

export default ContentMySignature
