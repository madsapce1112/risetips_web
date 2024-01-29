'use client'

import { Button, InputField, Heading03 } from '@/components'
import Image from 'next/image'
import { handlePassword } from '@/filters/filterRegister'
import { useCallback, useState } from 'react'

const recoverPassword = async (password: string, token: string) => {
  try {
    const url = `http://localhost:3333/user/recoverPassword`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({ password: password })
    })

    if (response.ok) {
      const updatedData = await response.json()
      return updatedData
    } else {
      const errorData = await response.json()
      throw new Error(errorData.message)
    }
  } catch (error) {
    console.error('Erro na função recoverPassword:', error)
    throw error // Você ainda pode re-lançar o erro se desejar
  }
}

const RecoverPasswordPage = () => {
  const [password, setPassword] = useState<string | null>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string | null>('')

  const handlePassWordChange = useCallback((e: any) => {
    setPassword(e.target.value)
  }, [])

  const handlePassWordConfirmChange = useCallback((e: any) => {
    setPasswordConfirm(e.target.value)
  }, [])

  const handleRecoverPassword = async () => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const token = urlParams.get('token')

    try {
      if (!password) {
        throw new Error('A senha não pode estar em branco.')
      }
      if (!token) {
        throw new Error('Token inválido.')
      }

      if (handlePassword(passwordConfirm) !== handlePassword(password)) {
        throw new Error('As senhas não coincidem.')
      }

      const recoverPasswordcheck = await recoverPassword(password, token)

      if (recoverPasswordcheck.update === true) {
        window.location.href = '/login'
      } else {
        console.log('Senha não foi recuperada com sucesso.')
      }
    } catch (error: any) {
      console.error('Erro ao recuperar a senha:', error.message)
    }
  }

  return (
    <div className="flex flex-1 flex-col w-full p-0 justify-center items-center gap-8 bg-primary-900">
      <div className="flex flex-col w-[800px] p-8 justify-center items-center gap-8 rounded-xl bg-neutral-100">
        <Image src="/assets/logo.png" alt="logo" width={126.198} height={116.255}></Image>
        <div className="flex flex-col p-0 justify-center items-center gap-6">
          <Heading03 fontWeight="semi">Cadastrar nova senha</Heading03>
          <InputField
            type="password"
            label={'Senha'}
            className={`w-full ${!handlePassword(password) && 'border-b-4 border-red-400'}`}
            onChange={handlePassWordChange}
            value={password ?? undefined}
          />
          <InputField
            type="password"
            label={'Confirmar senha'}
            className={`w-full ${
              passwordConfirm !== handlePassword(password) ? 'border-b-4 border-red-400' : ''
            }`}
            onChange={handlePassWordConfirmChange}
            value={passwordConfirm ?? undefined}
          />
          <Button
            type="primary"
            size="large"
            text="Cadastrar nova senha"
            className="w-full"
            onClick={() => {
              handleRecoverPassword()
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default RecoverPasswordPage
