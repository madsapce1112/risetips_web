'use client'

import { Button, CheckBox, Heading03, InputField, Paragraph02, Paragraph03 } from '@/components'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'

const loginAction = async (email: string, password: string, reCaptchaToken: string) => {
  try {
    const url = `http://localhost:3333/user/signin`

    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email, password: password, reCaptchaToken: reCaptchaToken })
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

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const [reCaptchaToken, setReCaptchaToken] = useState<string | null>(null)
  const [isCaptchaResolved, setIsCaptchaResolved] = useState(false)
  const [loginButtonPressed, setLoginButtonPressed] = useState(false)
  const [loginError, setLoginError] = useState(false)

  const router = useRouter()
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const handleUsernameOrEmailChange = (e: any) => {
    setUsernameOrEmail(e.target.value)
  }

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value)
  }

  const handleLogin = async () => {
    try {
      if (!isCaptchaResolved) {
        console.error('Por favor, resolva o ReCAPTCHA.')
        return
      }
      if (!reCaptchaToken) {
        console.error('O token do reCAPTCHA não está disponível.')
        return
      }

      const loginData = await loginAction(usernameOrEmail, password, reCaptchaToken)

      if (loginData.token) {
        localStorage.setItem('token', JSON.stringify(loginData))

        if (recaptchaRef.current) {
          recaptchaRef.current.reset() // Limpar o reCAPTCHA e redefinir o estado do checkbox após um login bem-sucedido
          setIsCaptchaResolved(false) // Redefinir o estado do checkbox
        }

        setLoginError(false) // Resetar o estado de erro
        router.push('/')
      } else {
        setLoginError(true) // Definir o estado de erro para true em caso de falha no login
        if (recaptchaRef.current) {
          recaptchaRef.current.reset()
          setIsCaptchaResolved(false)
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error)
    }
  }

  const onChange = () => {
    if (recaptchaRef.current) {
      const recaptchaValue = recaptchaRef.current.getValue()
      setReCaptchaToken(recaptchaValue)

      setIsCaptchaResolved(true)
    }
  }

  return (
    <div className="flex flex-1 flex-col w-full p-0 justify-center items-center gap-8 bg-primary-900">
      <div className="flex flex-col w-[800px] p-8 justify-center items-center gap-8 rounded-xl bg-neutral-100">
        <Image src="/assets/logo.png" alt="logo" width={126.198} height={116.255}></Image>
        <div className="flex flex-col p-0 justify-center items-center gap-6">
          <div className="flex flex-col p-0 justify-center items-center gap-4 self-stretch">
            <Heading03 fontWeight="semi">O seu sistema de apostas!</Heading03>
            <Paragraph02 fontWeight="semi" className="w-[435px] text-center text-neutral-600">
              Crie robôs de sinal, visualize estatísticas para melhor realizar suas apostas, acesso
              exclusivo de gráficos com filtro por campeonato!
            </Paragraph02>
          </div>
          <div className="flex flex-col p-0 justify-center items-center gap-4">
            <div className="flex flex-col justify-center items-start gap-4 w-full">
              <InputField
                label={'Nome de usuário ou e-mail'}
                className="w-full border "
                onChange={handleUsernameOrEmailChange}
                placeholder="Email"
              />
              <div className="flex flex-col gap-1 w-full">
                <InputField
                  label={'Senha'}
                  type="password"
                  className="w-full"
                  onChange={handlePasswordChange}
                  placeholder="Password"
                />
                <Link href="/resetPassword">
                  <Paragraph03 className="text-end">Esqueci minha senha</Paragraph03>
                </Link>
              </div>
              {loginError && (
                <div className="flex justify-center items-center w-full text-red-600">
                  <p>Email ou Senha errado</p>
                </div>
              )}
              <CheckBox label="Lembrar acesso" />
              <div className="flex px-4 flex-col justify-center items-center  ">
                <ReCAPTCHA
                  sitekey="6LcG8_UnAAAAAPrBNmXV8PbXyBi0UVuJmVlH9iR2"
                  ref={recaptchaRef}
                  onChange={onChange}
                />
                {loginButtonPressed && !isCaptchaResolved ? (
                  <div className="text-red-600 font-bold">
                    Por favor, confirme que não é um robô
                  </div>
                ) : null}
              </div>
            </div>

            <div className="flex flex-col justify-center items-center gap-2">
              <Button
                type="primary"
                size="large"
                text="Fazer login"
                className="w-full"
                onClick={() => {
                  setLoginButtonPressed(true)
                  handleLogin()
                }}
              />
              <Link href="/register">
                <Button
                  type="secondary"
                  size="large"
                  text="Não possui uma conta? Cadastre-se"
                  className="text-primary-700"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
