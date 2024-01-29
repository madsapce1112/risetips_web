'use client'
import { Heading03, Paragraph01, Paragraph02, Step, TStepProps } from '@/components'
import Image from 'next/image'
import PlanPage from './planPage'
import ProfileRegister from './profileRegister'
import ConfirmInformation from './confirmInformation'
import { useState } from 'react'
import CheckPayment from './checkPayment'

const stepProps: {
  [key: number]: TStepProps
} = {
  0: { stepNumber: 1, stepName: 'Escolha seu plano', status: 'active' },
  1: { stepNumber: 2, stepName: 'Realize seu cadastro', status: 'unActive' },
  2: { stepNumber: 3, stepName: 'Pagamento', status: 'unActive' },
  3: { stepNumber: 4, stepName: 'Confirmação de compra', status: 'unActive' }
}

const Register = () => {
  const [stepData, setStepData] = useState(stepProps)
  const handleSetStepData = (step: number) => {
    setStepData({
      ...stepData,
      [step - 1]: { ...stepProps[step - 1], status: 'completed' },
      [step]: { ...stepProps[step], status: 'active' }
    })
  }
  return (
    <div className="flex flex-1 flex-col py-8 items-center gap-0 self-stretch bg-neutral-200">
      <div className="flex flex-col justify-center items-center gap-8 w-[1216px] ">
        <Image src="/assets/logo.png" alt="logo" width={126.198} height={116.255} />
        <div className="flex flex-col justify-center items-center gap-4">
          <Heading03 fontWeight="semi">Conheça nossos planos</Heading03>
          <Paragraph02 className="text-center">
            Escolha um dos planos abaixo para prosseguir
          </Paragraph02>
        </div>
        <Step {...stepData} />
        {stepData[0].status === 'active' && <PlanPage onClick={() => handleSetStepData(1)} />}
        {stepData[1].status === 'active' && (
          <ProfileRegister onClick={() => handleSetStepData(2)} />
        )}
        {stepData[2].status === 'active' && <CheckPayment onClick={() => handleSetStepData(3)} />}
        {stepData[3].status === 'active' && <ConfirmInformation />}
        <Paragraph01 fontWeight="semi">2023 - RAISE TIPS</Paragraph01>
      </div>
    </div>
  )
}

export default Register
