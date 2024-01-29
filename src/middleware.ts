import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = async (req: NextRequest) => {
  const fullURL = new URL(req.url)

  const token = fullURL.searchParams.get('token')

  if (!token) {
    return NextResponse.redirect(new URL('/pagNotRecover', req.url))
  }

  const verify = await VerifyTokenPassword(token)

  console.log(verify)

  if (verify && verify.user === true) {
    return NextResponse.redirect(new URL(`/RecoverPasswordPage?token=${token}`, req.url))
  }

  return NextResponse.redirect(new URL(`/pagNotRecover`, req.url))
}

export const config = {
  matcher: '/recoverPassword/:path*'
}

const VerifyTokenPassword = async (token: string) => {
  const url = 'http://localhost:3333/user/recoverPasswordToken'

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        token_password: token
      })
    })

    const data = await response.json() // Extrai os dados JSON da resposta

    return data
  } catch (error) {
    // Lidar com erros aqui
    console.error('Ocorreu um erro na função VeryfyTokenPasswrod:', error)
  }
}
