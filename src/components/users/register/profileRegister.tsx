import { Button, CheckBox, InputField } from '@/components'
import {
  handleAge,
  handleCpf,
  handleEmail,
  handleName,
  handlePassword,
  handleTelephone
} from '@/filters/filterRegister'
import { useCallback, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import ReCAPTCHA from 'react-google-recaptcha'
// import Link from 'next/link'

type TProfileRegisterProps = React.HTMLAttributes<HTMLSpanElement> & {
  onClick: (event: EventListener | undefined) => void
}

type FormType = {
  name: string | null
  password: string | null
  email: string | null
  birthDate: string | null
  telephone: string | null
  cpf: string | null
}

const registerAction = async (format: FormType, reCaptchaToken: string) => {
  try {
    const url = `http://localhost:3333/user/signup`

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: format.name,
        password: format.password,
        cpf: format.cpf,
        email: format.email,
        birthDate: format.birthDate,
        telephone: format.telephone,
        reCaptchaToken: reCaptchaToken
      })
    })

    if (response.ok) {
      const updatedData = await response.json()
      return updatedData
    } else {
      const errorData = await response.json() // Extrai o JSON de erro da resposta
      throw new Error(errorData.message) // Exibe a mensagem de erro
    }
  } catch (error: any) {
    throw new Error(error)
  }
}

const ProfileRegister = (props: TProfileRegisterProps) => {
  const [name, setName] = useState<string | null>('')
  const [email, setEmail] = useState<string | null>('')
  const [age, setAge] = useState<string | null>('')
  const [telephone, setTelephone] = useState<string | null>('')
  const [passWord, setPassword] = useState<string | null>('')
  const [passwordConfirm, setPasswordConfirm] = useState<string | null>('')
  const [cpf, setCpf] = useState<string | null>('')

  const [checkTerms, setCheckTerms] = useState<boolean>(false)

  const [reCaptchaToken, setReCaptchaToken] = useState<string | null>(null)
  const [isCaptchaResolved, setIsCaptchaResolved] = useState(false)
  const [registerButtonPressed, setRegisterButtonPressed] = useState(false)

  const [cpfExist, setCpfExit] = useState(true)
  const [telephoneExist, setTelephoneExit] = useState(true)
  const [emailExist, setEmailExit] = useState(true)

  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const router = useRouter()

  const handleNameChange = useCallback((e: any) => {
    setName(e.target.value)
  }, [])

  const handleEmailChange = useCallback((e: any) => {
    setEmail(e.target.value)
    setEmailExit(true)
  }, [])

  const handleAgeChange = useCallback((e: any) => {
    e.currentTarget.maxLength = 10

    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, '$1/$2')
    value = value.replace(/(\d{2})(\d)/, '$1/$2')
    e.currentTarget.value = value
    setAge(e.currentTarget.value)
  }, [])

  const handleTelephoneChange = useCallback((e: any) => {
    e.currentTarget.maxLength = 15
    // value = value.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3')
    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, '($1) $2')
    value = value.replace(/(\d{5})(\d)/, '$1-$2')

    e.currentTarget.value = value
    setTelephone(e.currentTarget.value)
    setTelephoneExit(true)
  }, [])

  const handlePassWordChange = useCallback((e: any) => {
    setPassword(e.target.value)
  }, [])

  const handlePassWordConfirmChange = useCallback((e: any) => {
    setPasswordConfirm(e.target.value)
  }, [])

  const handleCpfChange = useCallback((e: any) => {
    e.currentTarget.maxLength = 14

    let value = e.currentTarget.value
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1.$2')
    value = value.replace(/(\d{3})(\d)/, '$1-$2')

    e.currentTarget.value = value
    setCpf(e.currentTarget.value)
    setCpfExit(true)
  }, [])

  const handleCheckTermsChange = useCallback((e: any) => {
    const newValue = e.target.checked ?? !e.target.checked
    setCheckTerms(newValue)
    console.log(newValue)
  }, [])

  const handleRegister = async () => {
    try {
      const former: FormType = {
        name: '',
        password: '',
        email: '',
        birthDate: '',
        telephone: '',
        cpf: ''
      }

      if (!checkTerms) {
        console.error('Confirme os Acordos')
        return
      }

      if (!isCaptchaResolved) {
        console.error('Por favor, resolva o ReCAPTCHA.')
        return
      }
      if (!reCaptchaToken) {
        console.error('O token do reCAPTCHA não está disponível.')
        return
      }

      if (handleName(name) !== null) {
        former.name = name
      }

      if (handleEmail(email) !== null) {
        former.email = email
      }

      if (handleAge(age) !== null) {
        former.birthDate = age
      }

      if (handleTelephone(telephone) !== null) {
        former.telephone = telephone
      }

      if (
        handlePassword(passWord) !== null &&
        handlePassword(passwordConfirm) === handlePassword(passWord)
      ) {
        former.password = passWord
      }
      if (handleCpf(cpf) !== null) {
        former.cpf = cpf
      }

      if (
        former.name !== '' &&
        former.email !== '' &&
        former.birthDate !== '' &&
        former.telephone !== '' &&
        former.password !== '' &&
        former.cpf !== ''
      ) {
        const register = await registerAction(former, reCaptchaToken)

        if (register.token) {
          localStorage.setItem('token', JSON.stringify(register))

          if (recaptchaRef.current) {
            recaptchaRef.current.reset() // Limpar o reCAPTCHA e redefinir o estado do checkbox após um login bem-sucedido
            setIsCaptchaResolved(false) // Redefinir o estado do checkbox
          }

          router.push('/') // setLoginError(false) // Resetar o estado de erro
        } else {
          if (recaptchaRef.current) {
            recaptchaRef.current.reset()
            setIsCaptchaResolved(false)
          }
        }
      }
    } catch (error: any) {
      console.error('Erro na req: 1', error.message)

      if (recaptchaRef.current) {
        recaptchaRef.current.reset()
        setIsCaptchaResolved(false)
      }

      if (error.message) {
        const errorMessage = error.message
        const existingFieldsMatch = errorMessage.match(/Fields already exist: (.*)/)

        if (errorMessage.includes('Fields already exist')) {
          const existingFields = existingFieldsMatch[1].split(', ')

          if (existingFields.includes('email')) {
            setEmail('')
            setEmailExit(false)
          }
          if (existingFields.includes('cpf')) {
            setCpf('')
            setCpfExit(false)
          }
          if (existingFields.includes('telephone')) {
            setTelephone('')
            setTelephoneExit(false)
          }
        }
      } else {
        console.error('Erro desconhecido:', error)
      }
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
    <div className="flex flex-col p-8 justify-center items-center gap-6 rounded-xl bg-neutral-100 shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <InputField
            label={'Nome completo'}
            className={`flex flex-col items-start gap-1 border-b-2 ${
              !handleName(name) && `border-red-400`
            } `}
            placeholder="Nome Sobrenome"
            onChange={handleNameChange}
          />
        </div>
        <div>
          <InputField
            label={'E-mail'}
            className={`flex flex-col items-start gap-1 border-b-2 ${
              !handleEmail(email) && `border-red-400`
            }`}
            placeholder="exemplo@exemplo.com"
            onChange={handleEmailChange}
            value={email ?? undefined}
          />
          {!emailExist && <p className="text-error-medium">Email já utilizado</p>}
        </div>
        <div>
          <InputField
            label={'Data de nascimento'}
            className={`flex flex-col items-start gap-1 border-b-2 ${
              !handleAge(age) && 'border-red-400'
            }`}
            placeholder="01/01/2001"
            onChange={handleAgeChange}
          />
        </div>
        <div>
          <InputField
            label={'Número de telefone'}
            className={`flex flex-col items-start gap-1 border-b-2 ${
              !handleTelephone(telephone) && 'border-red-400'
            }`}
            placeholder="(77) 97777-7777"
            onChange={handleTelephoneChange}
            value={telephone ?? undefined}
          />
          {!telephoneExist && <p className="text-error-medium">Telefone já utilizado</p>}
        </div>
        <div>
          <InputField
            label={'Senha'}
            className={`flex flex-col items-start gap-1 border-b-2 ${
              !handlePassword(passWord) && 'border-red-400'
            }`}
            type="password"
            placeholder="Password"
            onChange={handlePassWordChange}
          />
        </div>
        <div>
          <InputField
            label={'CPF'}
            className={`flex flex-col items-start gap-1 border-b-2 ${
              !handleCpf(cpf) && 'border-red-400'
            }`}
            placeholder="000.000.000-00"
            onChange={handleCpfChange}
            value={cpf ?? undefined}
          />
          {!cpfExist && <p className="text-error-medium">Cpf já utilizado</p>}
        </div>
        <div>
          <InputField
            label={'Confirma senha'}
            className={`flex flex-col items-start gap-1 border-b-2 ${
              handlePassword(passwordConfirm) === handlePassword(passWord) ? '' : 'border-red-400'
            }`}
            type="password"
            placeholder="Password"
            onChange={handlePassWordConfirmChange}
          />
        </div>
        <div>
          <ReCAPTCHA
            sitekey="6LcG8_UnAAAAAPrBNmXV8PbXyBi0UVuJmVlH9iR2"
            ref={recaptchaRef}
            onChange={onChange}
          />
          {registerButtonPressed && !isCaptchaResolved ? (
            <div className="text-red-600 font-bold">Por favor, confirme que não é um robô</div>
          ) : null}
        </div>
      </div>
      <CheckBox
        label="Li e concordo com os termos de uso da plataforma"
        onChange={handleCheckTermsChange}
        className={`border-4 p-1 ${!checkTerms && ' border-b-red-500'}`}
      />
      <div className="flex flex-col w-[350px] justify-center items-center gap-2">
        <Button
          type="primary"
          size="large"
          text="Realizar cadastro"
          className="w-full"
          {...props}
          onClick={() => {
            handleRegister()
            setRegisterButtonPressed(true)
          }}
        />
        <Button
          type="secondary"
          size="large"
          text="Já possui uma conta? Faça login"
          className="w-full text-primary-900"
        />
      </div>
    </div>
  )
}

export default ProfileRegister
