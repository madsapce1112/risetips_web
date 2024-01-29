'use client'
import { RadioFilterButton } from '../../radioFilterButton'
import { useState } from 'react'

const data: string[] = [
  'Over 2.5',
  'Ambas marcam',
  'Empate HT',
  'Under 1.5',
  'Under 2.5',
  'Casa Vence',
  'Empate FT',
  'Over 3.5',
  'Meus Padrões'
]

const SpyFilters = () => {
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({})
  const handleClick = (e: any) => {
    const name: string = e.target.name
    setChecked({ ...checked, [name]: !checked[name] })
  }
  return <RadioFilterButton data={data} onClick={handleClick} values={checked} />
}

export default SpyFilters
