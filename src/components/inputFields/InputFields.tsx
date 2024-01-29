'use client'
import { TInputFieldProps } from './type'
import { Paragraph03 } from '../typography'
import { useState } from 'react'

const InputField = ({
  id,
  label,
  placeholder = 'placeholder',
  type = 'default',
  value,
  className,
  ...rest
}: TInputFieldProps) => {
  const [show, setShow] = useState(false)
  const handleShow = () => setShow(!show)
  return (
    <div className={`${className}`}>
      <Paragraph03>{label}</Paragraph03>
      {type === 'textarea' ? (
        <textarea
          className="flex w-full h-[100px] py-[6px] px-4 items-center gap-2 self-stretch rounded border border-neutral-300 bg-neutral-50"
          placeholder={placeholder}
        />
      ) : (
        <div className="relative">
          {type === 'search' && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 19L15.71 15.71"
                  stroke="#475569"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          {type === 'card' && (
            <div className="absolute inset-y-3 left-3 flex w-5 h-5 py-[5.88px] px-[3.333px] justify-center items-center rounded border-[0.5px] border-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="9"
                viewBox="0 0 14 9"
                fill="none"
              >
                <g clipPath="url(#clip0_1569_7981)">
                  <path
                    d="M13.6668 4.82257C13.6668 7.1001 11.8242 8.94274 9.54663 8.94274C8.58526 8.94274 7.704 8.61084 7.00586 8.06148C7.96723 7.30612 8.57381 6.13873 8.57381 4.82257C8.57381 3.5064 7.95579 2.33902 7.00586 1.58365C7.704 1.0343 8.58526 0.702393 9.54663 0.702393C11.8242 0.702393 13.6668 2.55647 13.6668 4.82257Z"
                    fill="#F79E1B"
                  />
                  <path
                    d="M7.00568 1.58374C7.00568 1.58374 7.00568 1.58374 7.00568 1.58374C7.95561 2.33911 8.57363 3.50649 8.57363 4.82265C8.57363 6.13882 7.96705 7.3062 7.00568 8.06157L6.99419 8.06157C6.04428 7.31765 5.42627 6.13883 5.42627 4.82268C5.42627 3.50651 6.04429 2.33913 6.99422 1.58377C6.99421 1.58376 6.99423 1.58377 6.99422 1.58377L7.00568 1.58374Z"
                    fill="#FF5F00"
                  />
                  <path
                    d="M5.42649 4.82281C5.42649 3.50664 6.04451 2.33926 6.99444 1.5839C6.2963 1.03454 5.41504 0.702637 4.45367 0.702637C2.17613 0.702637 0.333496 2.54527 0.333496 4.82281C0.333496 7.10035 2.17613 8.94298 4.45367 8.94298C5.41504 8.94298 6.2963 8.61108 6.99444 8.06173C6.04451 7.31781 5.42649 6.13898 5.42649 4.82281Z"
                    fill="#EB001B"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1569_7981">
                    <rect
                      width="13.3333"
                      height="8.24035"
                      fill="white"
                      transform="translate(0.333496 0.702393)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          )}
          <input
            type={type === 'password' && !show ? 'password' : 'text'}
            value={value}
            name={id}
            className={`w-full flex py-2 px-4 items-center gap-2 self-stretch rounded border border-neutral-300 bg-shades-0 ${
              type == 'card' || (type == 'search' && 'pl-10 p-2.5')
            }`}
            placeholder={placeholder}
            {...rest}
          />
          {type === 'password' && !show && (
            <button
              className="absolute inset-y-0 right-0 z-100 flex items-center pl-3 pointer-events-auto pr-2"
              onClick={handleShow}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 5.1272C7.47941 5.1272 4.14759 8.52986 3.03959 11.8812C2.9868 12.0409 2.9868 12.2135 3.03959 12.3732C4.14759 15.7245 7.47941 19.1272 12 19.1272C16.5206 19.1272 19.8524 15.7245 20.9604 12.3732C21.0132 12.2135 21.0132 12.0409 20.9604 11.8812C19.8524 8.52986 16.5206 5.1272 12 5.1272ZM17 12.1272C17 14.8886 14.7614 17.1272 12 17.1272C9.23858 17.1272 7 14.8886 7 12.1272C7 9.36577 9.23858 7.1272 12 7.1272C14.7614 7.1272 17 9.36577 17 12.1272ZM12 15.1272C13.6569 15.1272 15 13.7841 15 12.1272C15 10.4703 13.6569 9.1272 12 9.1272C10.3431 9.1272 9 10.4703 9 12.1272C9 13.7841 10.3431 15.1272 12 15.1272Z"
                  fill="#64748B"
                />
              </svg>
            </button>
          )}
          {show && (
            <button
              className="absolute inset-y-0 right-0 z-100 flex items-center pl-3 pointer-events-auto pr-3"
              onClick={handleShow}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M1 1L13 13"
                  stroke="gray"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 13L13 1"
                  stroke="gray"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 1L13 13"
                  stroke="gray"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 13L13 1"
                  stroke="gray"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  )
}

export default InputField
