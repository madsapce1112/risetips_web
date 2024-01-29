'use client'
import { Button, Heading03, InputField, Paragraph02 } from '@/components'
import Image from 'next/image'
import { SetStateAction, useState } from 'react'

const recoverPassword = async (email: string) => {
  try {
    const url = `http://localhost:3333/user/recoverPassword?email=${email}`

    const response = await fetch(url, {
      method: 'get'
    })

    if (response.ok) {
      const updatedData = await response.json()
      return updatedData
    } else {
      console.error('Erro na req', response.statusText)
      return []
    }
  } catch (error) {
    console.error('Erro na req:', error)
    return []
  }
}

const ResetPassword = () => {
  const [step, setStep] = useState(1)
  const [email, SetEmail] = useState('')

  const handleEmailChange = (e: any) => {
    SetEmail(e.target.value)
  }

  const handleSetStep = async (step: SetStateAction<number>) => {
    if (!email) return console.log('email na preenchido')

    await recoverPassword(email)

    setStep(step)
  }

  const handleloginp = () => {
    window.location.href = '/login'
  }
  return (
    <div className="flex flex-1 flex-col w-full p-0 justify-center items-center gap-8 bg-primary-900">
      <div className="flex flex-col w-[800px] p-8 justify-center items-center gap-8 rounded-xl bg-neutral-100">
        <Image src="/assets/logo.png" alt="logo" width={126.198} height={116.255}></Image>
        {step === (1 || null) && (
          <div className="flex flex-col p-0 justify-center items-center gap-6">
            <Heading03 fontWeight="semi">Esqueci minha senha</Heading03>
            <InputField
              label={'Nome de usuário ou e-mail'}
              className="w-full"
              onChange={handleEmailChange}
            />
            <div className="flex flex-col justify-center items-center gap-2 w-full">
              <Button
                type="primary"
                size="large"
                text="Enviar redefinição de senha"
                className="w-full"
                onClick={() => handleSetStep(2)}
              />
              <Button
                type="secondary"
                size="large"
                text="Voltar para o login"
                className="text-primary-700 w-full"
                onClick={handleloginp}
              />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="flex flex-col p-0 justify-center items-center gap-6">
            <div className="flex flex-col p-0 justify-center items-center gap-4 self-stretch">
              <Heading03 fontWeight="semi" className="self-stretch">
                Redefinição de senha enviada com sucesso!
              </Heading03>
              <Paragraph02 fontWeight="semi" className="text-center text-neutral-600">
                Verifique seu e-mail cadastrado para alterar sua senha.
              </Paragraph02>
            </div>
            <Button
              type="secondary"
              size="large"
              text="Reenviar e-mail"
              className="text-primary-700"
              onClick={() => handleSetStep(3)}
            />
          </div>
        )}
        {step === 3 && (
          <div className="flex flex-col p-0 justify-center items-center gap-6">
            <Heading03 fontWeight="semi">Cadastrar nova senha</Heading03>
            <InputField type="password" label={'Senha'} className="w-full" />
            <InputField type="password" label={'Confirmar senha'} className="w-full" />
            <Button type="primary" size="large" text="Cadastrar nova senha" className="w-full" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ResetPassword
