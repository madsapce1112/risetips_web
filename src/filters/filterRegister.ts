import moment from 'moment'

const isValidCPF = (cpf: string): boolean => {
  if (typeof cpf !== 'string') return false

  cpf = cpf.replace(/[^\d]+/g, '')

  if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false

  const cpfArray = cpf.split('').map(el => +el)

  const rest = (count: number) =>
    ((cpfArray
      .slice(0, count - 12)
      .reduce((soma: number, el: number, index: number) => soma + el * (count - index), 0) *
      10) %
      11) %
    10

  return rest(10) === +cpfArray[9] && rest(11) === +cpfArray[10] // Convertendo para número com +
}

export const handleName = (fullName: string | null): string | null => {
  if (fullName) {
    const names = fullName.split(' ')

    if (names.length >= 2) {
      const firstName = names[0]
      const lastName = names[names.length - 1]

      if (firstName.length >= 3 && lastName.length >= 3) {
        return fullName
      } else {
        return null
      }
    } else {
      return null
    }
  } else {
    return null
  }
}

export const handleEmail = (email: string | null): string | null => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  if (email) {
    if (!emailRegex.test(email)) {
      return null
    }
    return email
  } else {
    return null
  }
}

export const handleAge = (date: string | null): string | null => {
  const parsedDate = moment(date, 'DD/MM/YYYY', true)
  if (parsedDate.isValid()) {
    const formattedDate = parsedDate.format('MM-DD-YYYY')
    return formattedDate
  }

  return null
}

export const handleTelephone = (phoneNumber: string | null): string | null => {
  const phoneRegex = /^\(\d{2}\) 9\d{4}-\d{4}$/

  if (phoneNumber) {
    if (phoneRegex.test(phoneNumber)) {
      return phoneNumber
    } else {
      return null
    }
  } else {
    return null
  }
}

export const handlePassword = (passWord: string | null): string | null => {
  const minLength = 7
  const specialChars = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/
  const uppercaseChars = /[A-Z]/

  if (passWord) {
    if (passWord.length < minLength) {
      return null
    }

    if (!specialChars.test(passWord)) {
      return null
    }

    if (!uppercaseChars.test(passWord)) {
      return null
    }

    if (passWord.includes(' ')) {
      return null // Senha contém espaço em branco
    }

    return passWord
  } else {
    return null
  }
}

export const handleCpf = (cpf: string | null): string | null => {
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

  if (cpf) {
    if (isValidCPF(cpf)) {
      return cpf
    } else {
      return null
    }
  } else {
    return null
  }
}
