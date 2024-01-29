import { Button, Caption, Heading05, Heading06, Paragraph02, Paragraph03 } from '@/components'
import Image from 'next/image'

const ContentMyProfile = () => {
  return (
    <div className="flex p-6 flex-col items-start gap-6 flex-1 rounded bg-shades-0">
      <Heading05 fontWeight="semi">Meu perfil</Heading05>
      <div className="flex p-4 justify-between items-center self-stretch rounded-md border border-neutral-200 bg-neutral-100">
        <div className="flex items-center gap-2">
          <div className="w-20 h-20 rounded-full border-4 border-shades-0 shadow-sm">
            <Image
              src="/assets/user.jpg"
              alt="logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-start gap-1">
            <Heading05 fontWeight="semi">Catara</Heading05>
            <Caption fontWeight="semi" className="text-neutral-600">
              Lorem ipsum dolor sit amet consectetur.
            </Caption>
            <Caption className="text-neutral-600 text-xs">
              Lorem ipsum dolor sit amet consectetur.
            </Caption>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-4 items-start gap-4 self-stretch rounded-md border border-neutral-200 bg-neutral-100">
        <Heading06 fontWeight="semi">Informações da conta</Heading06>
        <div className="flex items-start gap-16">
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-1">
              <Paragraph03 className="text-neutral-600">Nome completo</Paragraph03>
              <Paragraph02 fontWeight="semi" className="text-neutral-600">
                Catarina Simões Corrêa
              </Paragraph02>
            </div>
            <div className="flex flex-col items-start gap-1">
              <Paragraph03 className="text-neutral-600">Endereço de e-mail</Paragraph03>
              <Paragraph02 fontWeight="semi" className="text-neutral-600">
                catarina@mc360.com.br
              </Paragraph02>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-start gap-1">
              <Paragraph03 className="text-neutral-600">Telefone</Paragraph03>
              <Paragraph02 fontWeight="semi" className="text-neutral-600">
                11 9 9999-9999
              </Paragraph02>
            </div>
            <div className="flex flex-col items-start gap-1">
              <Paragraph03 className="text-neutral-600">Bio</Paragraph03>
              <Paragraph02 fontWeight="semi" className="text-neutral-600">
                Lorem ipsum dolor sit amet consectetur.
              </Paragraph02>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6"></div>
        </div>
      </div>
      <Button
        type="secondary"
        size="small"
        text="Editar informações"
        className="rounded-lg border border-neutral-300 text-primary-900 font-semibold"
      />
    </div>
  )
}

export default ContentMyProfile
