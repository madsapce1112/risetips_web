'use client'
import { useState } from 'react'
import Buttons from '../buttons/Buttons'
import { TModalProps } from './type'
import Image from 'next/image'
const Modal = ({
  type,
  buttonTitle,
  buttonType,
  buttonSize,
  buttonClassName,
  children,
  className
}: TModalProps) => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => {
    setOpen(false)
  }
  return (
    <div>
      {type === 'edit' ? (
        <Image
          src="/assets/icons/edit.svg"
          alt="sort"
          width={24}
          height={24}
          className="cursor-pointer"
          onClick={handleOpen}
        />
      ) : (
        <Buttons
          text={buttonTitle}
          type={buttonType}
          size={buttonSize}
          className={buttonClassName}
          onClick={handleOpen}
        />
      )}
      <dialog open={open}>
        <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={handleClose} />
        <div className="pointer-events-none ease-in-out justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div
            className={`flex relative pointer-events-auto bg-shades-0 p-8 rounded shadow-2xl justify-center items-center ${className}`}
          >
            <Image
              src="/assets/icons/close.svg"
              alt="sort"
              width={24}
              height={24}
              className="absolute cursor-pointer w-6 h-6 p-1.5 justify-center items-center top-6 right-6"
              onClick={handleClose}
            />
            {children}
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Modal
