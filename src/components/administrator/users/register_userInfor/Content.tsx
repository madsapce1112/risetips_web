'use client'
import { useState } from 'react'
import Register_info from './Register_info'
import Financial from './Financial'
import MyRobots from './MyRobots'
import Telegram from './Telegram'

const Content = () => {
  const [show, setShow] = useState(0)

  const handleSetShow = (showNumber: number) => {
    setShow(showNumber)
  }

  const tabData = ['Informações de cadastro', 'Financeiro', 'Meus robôs', 'Telegram']
  return (
    <div className="flex flex-col flex-1 self-stretch rounded">
      <div className="flex items-start self-stretch">
        {tabData.map((title, index) => (
          <div
            key={index}
            className={`flex p-2 justify-center items-center flex-1 bg-shades-0 cursor-pointer ${
              show === index && 'border-b border-primary-900'
            }`}
            onClick={() => handleSetShow(index)}
          >
            {title}
          </div>
        ))}
      </div>
      {show === 0 && <Register_info />}
      {show === 1 && <Financial />}
      {show === 2 && <MyRobots />}
      {show === 3 && <Telegram />}
    </div>
  )
}

export default Content
