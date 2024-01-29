'use client'
import { CustomTable } from '@/components'
import { useEffect, useState } from 'react'

const MyRobotsContent = () => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false)
  useEffect(() => {
    setInitialRenderComplete(true)
  }, [])
  if (!initialRenderComplete) {
    return null
  }

  const tableData = {
    headers: [
      {
        id: 'checkbox',
        type: 'checkbox',
        className: 'justify-center',
        width: 5
      },
      {
        id: 'name',
        title: 'Nome',
        sortable: true,
        className: 'justify-start',
        edit: true,
        width: 10
      },
      {
        id: 'mercado',
        title: 'Mercado',
        sortable: true,
        className: 'justify-center',
        edit: true,
        width: 10
      },
      {
        id: 'assertiveness',
        title: 'Assertividade (geral)',
        sortable: true,
        className: 'justify-center',
        edit: true,
        width: 30
      },
      {
        id: 'openningHours',
        title: 'Horário de funcionamento',
        sortable: true,
        className: 'justify-center',
        width: 15
      },
      {
        id: 'status',
        title: 'Status',
        type: 'status',
        sortable: true,
        className: 'justify-center',
        edit: true,
        width: 10
      },
      {
        id: 'partial',
        title: 'Parciais',
        type: 'switch',
        className: 'justify-center',
        edit: true,
        width: 10
      },
      {
        id: 'action',
        title: 'Status',
        type: 'action',
        className: 'justify-center',
        width: 10
      }
    ],

    data: [
      {
        name: 'Beetlejuice',
        mercado: '1988',
        assertiveness: 'assertiveness',
        openningHours: '1988/11/12',
        status: false
      },
      {
        name: 'Beetlejuice',
        mercado: '1988',
        assertiveness: 'assertiveness',
        openningHours: '1988/11/12',
        status: true,
        partial: true
      },
      {
        name: 'Beetlejuice',
        mercado: '1988',
        assertiveness: 'assertiveness',
        openningHours: '1988/11/12',
        status: true
      },
      {
        name: 'Beetlejuice',
        mercado: '1988',
        assertiveness: 'assertiveness',
        openningHours: '1988/11/12',
        status: false
      },
      {
        name: 'Beetlejuice',
        mercado: '1988',
        assertiveness: 'assertiveness',
        openningHours: '1988/11/12',
        status: true,
        partial: true
      },
      {
        name: 'Beetlejuice',
        mercado: '1988',
        assertiveness: 'assertiveness',
        openningHours: '1988/11/12',
        status: true
      }
    ],
    isFooter: true
  }

  return <CustomTable {...tableData} />
}

export default MyRobotsContent
