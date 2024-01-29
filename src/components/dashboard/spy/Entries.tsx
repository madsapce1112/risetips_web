'use client'
import { RadioFilterButton } from '../../radioFilterButton'
import { useState } from 'react'

const data: string[] = ['Quantidade de Entradas', 'Entradas mais próximas', ' Assertividade (%)']

const SpyEntries = () => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({})
  const handleClick = (e: any) => {
    const name: string = e.target.name
    setChecked({ ...checked, [name]: !checked[name] })
  }
  return <RadioFilterButton data={data} onClick={handleClick} values={checked} />
}

export default SpyEntries
