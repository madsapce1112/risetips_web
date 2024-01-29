import Image from 'next/image'
import React from 'react'
import { Heading04 } from '../typography'

type DashboardHeaderProps = {
  title: string
  children?: React.ReactNode
}

const DashboardHeader = ({ title, children }: DashboardHeaderProps) => {
  return (
    <header className="sticky flex justify-between items-center space-x-500">
      <div className="flex w-[342px] space-x-2 flex-nowrap items-center">
        <Image src="/assets/logo.png" alt="logo" width={65} height={57} />
        <Heading04 className="whitespace-nowrap" fontWeight="semi">
          {title}
        </Heading04>
      </div>
      {children}
    </header>
  )
}

export default DashboardHeader
